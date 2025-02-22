import * as crypto from 'crypto'
import { promisify } from 'util'

import type { KeyLike } from '../../types.d'
import type { VerifyFunction } from '../interfaces.d'
import nodeDigest from './dsa_digest.js'
import nodeKey from './node_key.js'
import sign from './sign.js'
import { isCryptoKey, getKeyObject } from './webcrypto.js'

let oneShotVerify = crypto.verify
if (oneShotVerify.length > 4) {
  // @ts-expect-error
  oneShotVerify = promisify(oneShotVerify)
}

const verify: VerifyFunction = async (alg, key: KeyLike, signature, data) => {
  if (alg.startsWith('HS')) {
    const expected = await sign(alg, key, data)
    const actual = signature
    try {
      return crypto.timingSafeEqual(actual, expected)
    } catch {
      // handle incorrect signature lengths
      return false
    }
  }

  const algorithm = nodeDigest(alg)

  if (isCryptoKey(key)) {
    // eslint-disable-next-line no-param-reassign
    key = getKeyObject(key)
  } else if (!(key instanceof crypto.KeyObject)) {
    throw new TypeError('invalid key object type provided')
  }

  const keyInput = nodeKey(alg, key)
  try {
    return oneShotVerify(algorithm, data, keyInput, signature)
  } catch {
    return false
  }
}

export default verify

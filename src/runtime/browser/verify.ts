import type { VerifyFunction } from '../interfaces.d'
import subtleAlgorithm from './subtle_dsa.js'
import crypto from './webcrypto.js'
import checkKeyLength from './check_key_length.js'

const verify: VerifyFunction = async (alg, key: CryptoKey | Uint8Array, signature, data) => {
  let cryptoKey: CryptoKey
  if (key instanceof Uint8Array) {
    if (!alg.startsWith('HS')) {
      throw new TypeError('symmetric keys are only applicable for HMAC-based algorithms')
    }
    cryptoKey = await crypto.subtle.importKey(
      'raw',
      key,
      { hash: { name: `SHA-${alg.substr(-3)}` }, name: 'HMAC' },
      false,
      ['verify'],
    )
  } else {
    cryptoKey = key
  }

  checkKeyLength(alg, cryptoKey)

  const algorithm = subtleAlgorithm(alg)
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data)
  } catch {
    return false
  }
}

export default verify

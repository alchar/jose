/* eslint-disable no-underscore-dangle */

import FlattenedSign from '../flattened/sign.js'
import type { JWSHeaderParameters, KeyLike, SignOptions } from '../../types.d'

/**
 * The CompactSign class is a utility for creating Compact JWS strings.
 *
 * @example
 * ```js
 * // ESM import
 * import { CompactSign } from 'jose/jws/compact/sign'
 * ```
 *
 * @example
 * ```js
 * // CJS import
 * const { CompactSign } = require('jose/jws/compact/sign')
 * ```
 *
 * @example
 * ```js
 * // usage
 * import { parseJwk } from 'jose/jwk/parse'
 *
 * const encoder = new TextEncoder()
 * const privateKey = await parseJwk({
 *   alg: 'ES256',
 *   crv: 'P-256',
 *   kty: 'EC',
 *   d: 'VhsfgSRKcvHCGpLyygMbO_YpXc7bVKwi12KQTE4yOR4',
 *   x: 'ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw',
 *   y: '_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo'
 * })
 *
 * const jws = await new CompactSign(encoder.encode('It’s a dangerous business, Frodo, going out your door.'))
 *   .setProtectedHeader({ alg: 'ES256' })
 *   .sign(privateKey)
 *
 * console.log(jws)
 * ```
 */
class CompactSign {
  private _flattened: FlattenedSign

  /**
   * @param payload Binary representation of the payload to sign.
   */
  constructor(payload: Uint8Array) {
    this._flattened = new FlattenedSign(payload)
  }

  /**
   * Sets the JWS Protected Header on the Sign object.
   *
   * @param protectedHeader JWS Protected Header.
   */
  setProtectedHeader(protectedHeader: JWSHeaderParameters) {
    this._flattened.setProtectedHeader(protectedHeader)
    return this
  }

  /**
   * Signs and resolves the value of the Compact JWS string.
   *
   * @param key Private Key or Secret to sign the JWS with.
   * @param options JWS Sign options.
   */
  async sign(key: KeyLike, options?: SignOptions): Promise<string> {
    const jws = await this._flattened.sign(key, options)

    if (jws.payload === undefined) {
      throw new TypeError('use the flattened module for creating JWS with b64: false')
    }

    return `${jws.protected}.${jws.payload}.${jws.signature}`
  }
}

export { CompactSign }
export default CompactSign
export type { JWSHeaderParameters, KeyLike }

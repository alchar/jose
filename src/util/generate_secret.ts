import { generateSecret as generate } from '../runtime/generate.js'
import type { KeyLike } from '../types.d'

/**
 * Generates a symmetric secret key for a given JWA algorithm identifier.
 *
 * @example
 * ```js
 * // ESM import
 * import { generateSecret } from 'jose/util/generate_secret'
 * ```
 *
 * @example
 * ```js
 * // CJS import
 * const { generateSecret } = require('jose/util/generate_secret')
 * ```
 *
 * @example
 * ```js
 * // usage
 * const secret = await generateSecret('HS256')
 * console.log(secret)
 * ```
 *
 * @param alg JWA Algorithm Identifier to be used with the generated secret.
 */
async function generateSecret(alg: string): Promise<KeyLike> {
  return generate(alg)
}

export { generateSecret }
export default generateSecret

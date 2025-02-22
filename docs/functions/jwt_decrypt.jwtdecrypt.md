# Function: jwtDecrypt

[jwt/decrypt](../modules/jwt_decrypt.md).jwtDecrypt

▸ **jwtDecrypt**(`jwt`: *string* \| Uint8Array, `key`: [*KeyLike*](../types/types.keylike.md) \| [*JWTDecryptGetKey*](../interfaces/jwt_decrypt.jwtdecryptgetkey.md), `options?`: [*JWTDecryptOptions*](../interfaces/jwt_decrypt.jwtdecryptoptions.md)): *Promise*<[*JWTDecryptResult*](../interfaces/types.jwtdecryptresult.md)\>

Verifies the JWT format (to be a JWE Compact format), decrypts the ciphertext, validates the JWT Claims Set.

**`example`** 
```js
// ESM import
import { jwtDecrypt } from 'jose/jwt/decrypt'
```

**`example`** 
```js
// CJS import
const { jwtDecrypt } = require('jose/jwt/decrypt')
```

**`example`** 
```js
// usage
const jwt = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..KVcNLqK-3-8ZkYIC.xSwF4VxO0kUMUD2W-cifsNUxnr-swyBq-nADBptyt6y9n79-iNc5b0AALJpRwc0wwDkJw8hNOMjApNUTMsK9b-asToZ3DXFMvwfJ6n1aWefvd7RsoZ2LInWFfVAuttJDzoGB.uuexQoWHwrLMEYRElT8pBQ'
const secretKey = Uint8Array.from([
  206, 203, 53, 165, 235, 214, 153, 188,
  248, 225,  1, 132, 105, 204,  75,  42,
  186, 185, 24, 223, 136,  66, 116,  59,
  183, 155, 52,  52, 101, 167, 201,  85
])

const { payload, protectedHeader } = await jwtDecrypt(jwt, secretKey, {
  issuer: 'urn:example:issuer',
  audience: 'urn:example:audience'
})

console.log(protectedHeader)
console.log(payload)
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`jwt` | *string* \| Uint8Array | JSON Web Token value (encoded as JWE).   |
`key` | [*KeyLike*](../types/types.keylike.md) \| [*JWTDecryptGetKey*](../interfaces/jwt_decrypt.jwtdecryptgetkey.md) | Private Key or Secret, or a function resolving one, to decrypt and verify the JWT with.   |
`options?` | [*JWTDecryptOptions*](../interfaces/jwt_decrypt.jwtdecryptoptions.md) | JWT Decryption and JWT Claims Set validation options.    |

**Returns:** *Promise*<[*JWTDecryptResult*](../interfaces/types.jwtdecryptresult.md)\>

Defined in: [jwt/decrypt.ts:65](https://github.com/panva/jose/blob/v3.10.0/src/jwt/decrypt.ts#L65)

# Interface: GeneralJWE

[types](../modules/types.md).GeneralJWE

## Hierarchy

* *Omit*<[*FlattenedJWE*](types.flattenedjwe.md), *encrypted_key* \| *header*\>

  ↳ **GeneralJWE**

## Table of contents

### Properties

- [aad](types.generaljwe.md#aad)
- [ciphertext](types.generaljwe.md#ciphertext)
- [iv](types.generaljwe.md#iv)
- [protected](types.generaljwe.md#protected)
- [recipients](types.generaljwe.md#recipients)
- [tag](types.generaljwe.md#tag)
- [unprotected](types.generaljwe.md#unprotected)

## Properties

### aad

• `Optional` **aad**: *string*

The "aad" member MUST be present and contain the value
BASE64URL(JWE AAD)) when the JWE AAD value is non-empty;
otherwise, it MUST be absent.  A JWE AAD value can be included to
supply a base64url-encoded value to be integrity protected but not
encrypted.

Inherited from: void

Defined in: [types.d.ts:262](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L262)

___

### ciphertext

• **ciphertext**: *string*

The "ciphertext" member MUST be present and contain the value
BASE64URL(JWE Ciphertext).

Inherited from: void

Defined in: [types.d.ts:268](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L268)

___

### iv

• **iv**: *string*

The "iv" member MUST be present and contain the value
BASE64URL(JWE Initialization Vector) when the JWE Initialization
Vector value is non-empty; otherwise, it MUST be absent.

Inherited from: void

Defined in: [types.d.ts:292](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L292)

___

### protected

• `Optional` **protected**: *string*

The "protected" member MUST be present and contain the value
BASE64URL(UTF8(JWE Protected Header)) when the JWE Protected
Header value is non-empty; otherwise, it MUST be absent.  These
Header Parameter values are integrity protected.

Inherited from: void

Defined in: [types.d.ts:300](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L300)

___

### recipients

• **recipients**: *Pick*<[*FlattenedJWE*](types.flattenedjwe.md), *header* \| *encrypted_key*\>[]

Defined in: [types.d.ts:320](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L320)

___

### tag

• **tag**: *string*

The "tag" member MUST be present and contain the value
BASE64URL(JWE Authentication Tag) when the JWE Authentication Tag
value is non-empty; otherwise, it MUST be absent.

Inherited from: void

Defined in: [types.d.ts:307](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L307)

___

### unprotected

• `Optional` **unprotected**: [*JWEHeaderParameters*](types.jweheaderparameters.md)

The "unprotected" member MUST be present and contain the value JWE
Shared Unprotected Header when the JWE Shared Unprotected Header
value is non-empty; otherwise, it MUST be absent.  This value is
represented as an unencoded JSON object, rather than as a string.
These Header Parameter values are not integrity protected.

Inherited from: void

Defined in: [types.d.ts:316](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L316)

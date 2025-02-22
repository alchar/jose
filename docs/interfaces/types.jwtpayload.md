# Interface: JWTPayload

[types](../modules/types.md).JWTPayload

Recognized JWT Claims Set members, any other members
may also be present.

## Indexable

▪ [propName: *string*]: *any*

Any other JWT Claim Set member.

## Table of contents

### Properties

- [aud](types.jwtpayload.md#aud)
- [exp](types.jwtpayload.md#exp)
- [iat](types.jwtpayload.md#iat)
- [iss](types.jwtpayload.md#iss)
- [jti](types.jwtpayload.md#jti)
- [nbf](types.jwtpayload.md#nbf)
- [sub](types.jwtpayload.md#sub)

## Properties

### aud

• `Optional` **aud**: *string* \| *string*[]

JWT Audience [RFC7519#section-4.1.3](https://tools.ietf.org/html/rfc7519#section-4.1.3).

Defined in: [types.d.ts:492](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L492)

___

### exp

• `Optional` **exp**: *number*

JWT Expiration Time - [RFC7519#section-4.1.4](https://tools.ietf.org/html/rfc7519#section-4.1.4).

Defined in: [types.d.ts:507](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L507)

___

### iat

• `Optional` **iat**: *number*

JWT Issued At - [RFC7519#section-4.1.6](https://tools.ietf.org/html/rfc7519#section-4.1.6).

Defined in: [types.d.ts:512](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L512)

___

### iss

• `Optional` **iss**: *string*

JWT Issuer - [RFC7519#section-4.1.1](https://tools.ietf.org/html/rfc7519#section-4.1.1).

Defined in: [types.d.ts:482](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L482)

___

### jti

• `Optional` **jti**: *string*

JWT ID - [RFC7519#section-4.1.7](https://tools.ietf.org/html/rfc7519#section-4.1.7).

Defined in: [types.d.ts:497](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L497)

___

### nbf

• `Optional` **nbf**: *number*

JWT Not Before - [RFC7519#section-4.1.5](https://tools.ietf.org/html/rfc7519#section-4.1.5).

Defined in: [types.d.ts:502](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L502)

___

### sub

• `Optional` **sub**: *string*

JWT Subject - [RFC7519#section-4.1.2](https://tools.ietf.org/html/rfc7519#section-4.1.2).

Defined in: [types.d.ts:487](https://github.com/panva/jose/blob/v3.10.0/src/types.d.ts#L487)

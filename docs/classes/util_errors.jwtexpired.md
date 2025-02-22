# Class: JWTExpired

[util/errors](../modules/util_errors.md).JWTExpired

An error subclass thrown when a JWT is expired.

## Hierarchy

* [*JWTClaimValidationFailed*](util_errors.jwtclaimvalidationfailed.md)

  ↳ **JWTExpired**

## Table of contents

### Constructors

- [constructor](util_errors.jwtexpired.md#constructor)

### Properties

- [claim](util_errors.jwtexpired.md#claim)
- [code](util_errors.jwtexpired.md#code)
- [reason](util_errors.jwtexpired.md#reason)

## Constructors

### constructor

\+ **new JWTExpired**(`message`: *string*, `claim?`: *string*, `reason?`: *string*): [*JWTExpired*](util_errors.jwtexpired.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`message` | *string* | - |
`claim` | *string* | 'unspecified' |
`reason` | *string* | 'unspecified' |

**Returns:** [*JWTExpired*](util_errors.jwtexpired.md)

Inherited from: [JWTClaimValidationFailed](util_errors.jwtclaimvalidationfailed.md)

Defined in: [util/errors.ts:36](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L36)

## Properties

### claim

• **claim**: *string*

The Claim for which the validation failed.

Inherited from: [JWTClaimValidationFailed](util_errors.jwtclaimvalidationfailed.md).[claim](util_errors.jwtclaimvalidationfailed.md#claim)

Defined in: [util/errors.ts:31](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L31)

___

### code

• **code**: *string*= 'ERR\_JWT\_EXPIRED'

A unique error code for the particular error subclass.

Overrides: [JWTClaimValidationFailed](util_errors.jwtclaimvalidationfailed.md).[code](util_errors.jwtclaimvalidationfailed.md#code)

Defined in: [util/errors.ts:135](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L135)

___

### reason

• **reason**: *string*

Reason code for the validation failure.

Inherited from: [JWTClaimValidationFailed](util_errors.jwtclaimvalidationfailed.md).[reason](util_errors.jwtclaimvalidationfailed.md#reason)

Defined in: [util/errors.ts:36](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L36)

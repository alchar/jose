# Class: JWKSInvalid

[util/errors](../modules/util_errors.md).JWKSInvalid

An error subclass thrown when a JWKS is invalid.

## Hierarchy

* [*JOSEError*](util_errors.joseerror.md)

  ↳ **JWKSInvalid**

## Table of contents

### Constructors

- [constructor](util_errors.jwksinvalid.md#constructor)

### Properties

- [code](util_errors.jwksinvalid.md#code)

## Constructors

### constructor

\+ **new JWKSInvalid**(`message?`: *string*): [*JWKSInvalid*](util_errors.jwksinvalid.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** [*JWKSInvalid*](util_errors.jwksinvalid.md)

Inherited from: [JOSEError](util_errors.joseerror.md)

Defined in: [util/errors.ts:11](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L11)

## Properties

### code

• **code**: *string*= 'ERR\_JWKS\_INVALID'

A unique error code for the particular error subclass.

Overrides: [JOSEError](util_errors.joseerror.md).[code](util_errors.joseerror.md#code)

Defined in: [util/errors.ts:101](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L101)

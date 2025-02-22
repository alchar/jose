# Class: JOSEAlgNotAllowed

[util/errors](../modules/util_errors.md).JOSEAlgNotAllowed

An error subclass thrown when a JOSE Algorithm is not allowed per developer preference.

## Hierarchy

* [*JOSEError*](util_errors.joseerror.md)

  ↳ **JOSEAlgNotAllowed**

## Table of contents

### Constructors

- [constructor](util_errors.josealgnotallowed.md#constructor)

### Properties

- [code](util_errors.josealgnotallowed.md#code)

## Constructors

### constructor

\+ **new JOSEAlgNotAllowed**(`message?`: *string*): [*JOSEAlgNotAllowed*](util_errors.josealgnotallowed.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** [*JOSEAlgNotAllowed*](util_errors.josealgnotallowed.md)

Inherited from: [JOSEError](util_errors.joseerror.md)

Defined in: [util/errors.ts:11](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L11)

## Properties

### code

• **code**: *string*= 'ERR\_JOSE\_ALG\_NOT\_ALLOWED'

A unique error code for the particular error subclass.

Overrides: [JOSEError](util_errors.joseerror.md).[code](util_errors.joseerror.md#code)

Defined in: [util/errors.ts:49](https://github.com/panva/jose/blob/v3.10.0/src/util/errors.ts#L49)

# Function: generalDecrypt

[jwe/general/decrypt](../modules/jwe_general_decrypt.md).generalDecrypt

▸ **generalDecrypt**(`jwe`: [*GeneralJWE*](../interfaces/types.generaljwe.md), `key`: [*KeyLike*](../types/types.keylike.md) \| [*GeneralDecryptGetKey*](../interfaces/jwe_general_decrypt.generaldecryptgetkey.md), `options?`: [*DecryptOptions*](../interfaces/types.decryptoptions.md)): *Promise*<[*GeneralDecryptResult*](../interfaces/types.generaldecryptresult.md)\>

Decrypts a General JWE.

**`example`** 
```js
// ESM import
import { generalDecrypt } from 'jose/jwe/general/decrypt'
```

**`example`** 
```js
// CJS import
const { generalDecrypt } = require('jose/jwe/general/decrypt')
```

**`example`** 
```js
// usage
import { parseJwk } from 'jose/jwk/parse'

const decoder = new TextDecoder()
const jwe = {
  ciphertext: '9EzjFISUyoG-ifC2mSihfP0DPC80yeyrxhTzKt1C_VJBkxeBG0MI4Te61Pk45RAGubUvBpU9jm4',
  iv: '8Fy7A_IuoX5VXG9s',
  tag: 'W76IYV6arGRuDSaSyWrQNg',
  aad: 'VGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmc',
  protected: 'eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIn0',
  recipients: [
    {
      encrypted_key: 'Z6eD4UK_yFb5ZoKvKkGAdqywEG_m0e4IYo0x8Vf30LAMJcsc-_zSgIeiF82teZyYi2YYduHKoqImk7MRnoPZOlEs0Q5BNK1OgBmSOhCE8DFyqh9Zh48TCTP6lmBQ52naqoUJFMtHzu-0LwZH26hxos0GP3Dt19O379MJB837TdKKa87skq0zHaVLAquRHOBF77GI54Bc7O49d8aOrSu1VEFGMThlW2caspPRiTSePDMDPq7_WGk50izRhB3Asl9wmP9wEeaTrkJKRnQj5ips1SAZ1hDBsqEQKKukxP1HtdcopHV5_qgwU8Hjm5EwSLMluMQuiE6hwlkXGOujZLVizA'
    }
  ]
}
const privateKey = await parseJwk({
  e: 'AQAB',
  n: 'qpzYkTGRKSUcd12hZaJnYEKVLfdEsqu6HBAxZgRSvzLFj_zTSAEXjbf3fX47MPEHRw8NDcEXPjVOz84t4FTXYF2w2_LGWfp_myjV8pR6oUUncJjS7DhnUmTG5bpuK2HFXRMRJYz_iNR48xRJPMoY84jrnhdIFx8Tqv6w4ZHVyEvcvloPgwG3UjLidP6jmqbTiJtidVLnpQJRuFNFQJiluQXBZ1nOLC7raQshu7L9y0IatVU7vf0BPnmuSkcNNvmQkSta6ODQBPaL5-o5SW8H37vQjPDkrlJpreViNa3jqP5DB5HYUO-DMh4FegRv9gZWLDEvXpSd9A13YXCa9Q8K_w',
  d: 'YAfYfiEAK8CPvUAeUC6RMUVI4o6DRG4UWydiJqHYUXYqbVlJMwYqU8Jws1oRxwJjrkNyfYNpqcInkh_jApm-gKc7nRGRQ6QTnynlAp1ASPW7tUzPq9YzkdTXfwboa9KkXDcXN6OdUU8GpQuODYFTegBfXqSMFzeOwniI5u5G_m2I6YU1zU4x7dxaKhPSK2mJ1v-tJu88j855DYIY0AiX5uf_oa0CgaqyOOY3LaxGjV0FxrkAzYluHfQef7ux-1ocXD1aUrdj3owk48ZVEb2o-V1bMLtk415ngS-u89bABHuJ50-gIwpO-y7ofe6ik4fAd9NfD8PVKHHsrNYbC5FdAQ',
  p: '4WlvPw4Vf-mHzoqem_2VUf7hMiLEM5sl_th-CZyA0dowhEnNBJPtaqCz2k_6_ECKZ5C-KoT-EmQOBILQFJtR9SOs6fI9yZGL1OpbjGNKpWzym8iQrFcKAhFvQ_hG7Fkwz6_yRV5fKnOWSD78Rk6wuOTaXqwJS7uljvrn7SmRFpE',
  q: 'wcO_PHrkHazbqDgBVvTDaMXJ7W5l0RTxhrOsU6qGCLp367Zc2F9BwPAlMy9KKMhf9RLxgv32lGqWxVh3WQ1GSJqswSIKhfAOzmuTDjlYxqrte_TMcaVDxtRuO8Bxp5A8Y7i3VxQ_Rjfa04QLxJfiRdap4UamYWco25WKH4rkcI8',
  dp: 'rWynEIZPeEg-GmSAP1fMqHdG34HsHiBCDV6XKeHlIo-SQFVfjSQax6y4c0CRw74MPj4YcTI9H_0m48WZPiF53vcBtESR0SFPyhI9OTezWK8HwV-AH3gf1ROA3XSJbJH6ge_GoCRJZ6nid9ct1RH52WcJs0j9Je1LJURZaBhQ7mE',
  dq: 'tYrMc0ME1dTuHQcUIj_Dkje2gLGtzZ6cyMMw01byq9zhnMRI6yUcu0OE5xcImXtbhIfSJhQCYn4XcyD2-UWZs07QS0e0qlcH2Fkr9-i9B66AQWJT5qqb_P9tpKgjFIbsPdaEWJ8MxaJxcTnHuNNBWoPMuNfz7VC1FD9goTsF23s',
  qi: 'qAZmEWhWcDgW_pQZA5e7r185-sOnNPAW53y16QKh5wNThGjpUl7OvePZWY59ekd6PYwvkloNIRki6mLskP9NZ73CsAdZknSAPaAmBuNGYDabtObcigQDPFQ5DeqyAdRUrim66eN7whE5mf_XgOwVAx3-9PtfHvvmTTNezHfoZdo',
  kty: 'RSA'
}, 'RSA-OAEP-256')

const {
  plaintext,
  protectedHeader,
  additionalAuthenticatedData
} = await generalDecrypt(jwe, privateKey)

console.log(protectedHeader)
console.log(decoder.decode(plaintext))
console.log(decoder.decode(additionalAuthenticatedData))
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`jwe` | [*GeneralJWE*](../interfaces/types.generaljwe.md) | General JWE.   |
`key` | [*KeyLike*](../types/types.keylike.md) \| [*GeneralDecryptGetKey*](../interfaces/jwe_general_decrypt.generaldecryptgetkey.md) | Private Key or Secret, or a function resolving one, to decrypt the JWE with.   |
`options?` | [*DecryptOptions*](../interfaces/types.decryptoptions.md) | JWE Decryption options.    |

**Returns:** *Promise*<[*GeneralDecryptResult*](../interfaces/types.generaldecryptresult.md)\>

Defined in: [jwe/general/decrypt.ts:80](https://github.com/panva/jose/blob/v3.10.0/src/jwe/general/decrypt.ts#L80)

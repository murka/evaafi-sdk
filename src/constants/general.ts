import { Address, Cell, toNano } from '@ton/core';
import { sha256Hash } from '../utils/sha256BigInt';
import { OracleNFT } from '../types/Master';

export const MASTER_CONSTANTS = {
    FACTOR_SCALE: BigInt(1e12),
    ASSET_COEFFICIENT_SCALE: 10000n,
    ASSET_PRICE_SCALE: BigInt(1e9),
    ASSET_RESERVE_FACTOR_SCALE: 10000n,
    ASSET_LIQUIDATION_RESERVE_FACTOR_SCALE: 10000n,
    ASSET_ORIGINATION_FEE_SCALE: BigInt(1e9),
    ASSET_LIQUIDATION_THRESHOLD_SCALE: 10_000n,
    ASSET_LIQUIDATION_BONUS_SCALE: 10_000n,
};

export const NULL_ADDRESS = Address.parse('UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ');


export const EVAA_MASTER_MAINNET = Address.parse('EQC8rUZqR_pWV1BylWUlPNBzyiTYVoBEmQkMIQDZXICfnuRr');
export const MAINNET_VERSION = 5;
export const EVAA_MASTER_TESTNET = Address.parse('EQDLsg3w-iBj26Gww7neYoJAxiT2t77Zo8ro56b0yuHsPp3C');
export const TESTNET_VERSION = 6;
export const EVAA_LP_MAINNET = Address.parse('EQBIlZX2URWkXCSg3QF2MJZU-wC5XkBoLww-hdWk2G37Jc6N');
export const EVAA_LP_MAINNET_VERSION = 2;

export const ORACLES_MAINNET: OracleNFT[] = [
    {id: 0, address: '0xd3a8c0b9fd44fd25a49289c631e3ac45689281f2f8cf0744400b4c65bed38e5d'}, 
    {id: 1, address: '0x2c21cabdaa89739de16bde7bc44e86401fac334a3c7e55305fe5e7563043e191'},
    {id: 2, address: '0x2eb258ce7b5d02466ab8a178ad8b0ba6ffa7b58ef21de3dc3b6dd359a1e16af0'},
    {id: 3, address: '0xf9a0769954b4430bca95149fb3d876deb7799d8f74852e0ad4ccc5778ce68b52'},
];

export const ORACLES_TESTNET: OracleNFT[] = [
    {id: 0, address: '0x3bb147a37b7a7f874c39320440f352bddd2c9337e31a778731910f0266391650'}, 
    {id: 1, address: '0x676767e93b05a21aec9023a65f73cffe1c725709c3c964a7c3f0fd4229089bfe'},
    {id: 2, address: '0x9c9e65951b0c5920c286bdb3410babcaf21f85bc9c90c13172988630f1244e0f'},
    {id: 3, address: '0x9dcf880229bfb68d7344fd294624b64f1e0b43b9d858f0fdb1bc6434616c08f5'},
    {id: 4, address: '0x4d1afcf7c0426ca61c405c8cfaef0053a0f0d143740ffed04c8716beb99cd614'},
    {id: 5, address: '0x11c6baa608ed10733051fd74134441d384e471722fbc496b43ea4e3c6652485f'},
    {id: 6, address: '0x2b685672f38dc2fce59013bb740bf24c6037049a1c267bb3b5f6f55d5b195f5f'},
];

export const ORACLES_LP: OracleNFT[] = [
    {id: 0, address: '0xd3a8c0b9fd44fd25a49289c631e3ac45689281f2f8cf0744400b4c65bed38e5d'}, 
    {id: 1, address: '0x2c21cabdaa89739de16bde7bc44e86401fac334a3c7e55305fe5e7563043e191'},
    {id: 2, address: '0x2eb258ce7b5d02466ab8a178ad8b0ba6ffa7b58ef21de3dc3b6dd359a1e16af0'},
    {id: 3, address: '0xf9a0769954b4430bca95149fb3d876deb7799d8f74852e0ad4ccc5778ce68b52'},
];

export const LENDING_CODE = Cell.fromBoc(
    Buffer.from(
        'b5ee9c72c1010e0100fd000d12182a555a6065717691969efd0114ff00f4a413f4bcf2c80b010202c8050202039f740403001ff2f8276a2687d2018fd201800f883b840051d38642c678b64e4400780e58fc10802faf07f80e59fa801e78b096664c02078067c07c100627a7978402014807060007a0ddb0c60201c709080013a0fd007a026900aa90400201200b0a0031b8e1002191960aa00b9e2ca007f4042796d225e8019203f6010201200d0c000bf7c147d2218400b9d10e86981fd201840b07f8138d809797976a2687d2029116382f970fd9178089910374daf81b619fd20182c7883b8701981684100627910eba56001797a6a6ba610fd8200e8768f76a9f6aa00cc2a32a8292878809bef2f1889f883bbcdeb86f01',
        'hex',
    ),
)[0];

export const JETTON_WALLET_STANDART_CODE = Cell.fromBase64(
    'te6cckECEwEAA4UAART/APSkE/S88sgLAQIBYgIDAgLLBAUAG6D2BdqJofQB9IH0gamjAgHOBgcCAVgKCwL3CDHAJJfBOAB0NMDAXGwlRNfA/Ad4PpA+kAx+gAxcdch+gAx+gAwc6m0AALTHwHbPFsyNDQ0JIIQD4p+pbqaMGwiNl4xECPwGuAkghAXjUUZupswbCJeMhAkQwDwG+A3WzaCEFlfB7y6nwJxsPLSwFAjuvLixgHwHOBfBYAgJABE+kQwwADy4U2AAXIBP+DMgbpUwgLH4M94gbvLSmtDTBzHT/9P/9ATTB9Qw0PoA+gD6APoA+gD6ADAACIQP8vACAVgMDQIBSBESAfcBdM/AQH6APpAIfAB7UTQ+gD6QPpA1NFRNqFSLMcF8uLBKsL/8uLCVDRCcFQgE1QUA8hQBPoCWM8WAc8WzMkiyMsBEvQA9ADLAMkgcAH5AHTIywISygfL/8nQBPpA9AQx+gAg10nCAPLixMiAGAHLBVAHzxZw+gJ3ActrgDgLzO1E0PoA+kD6QNTRCtM/AQH6AFFRoAX6QPpAU13HBVRzb3BUIBNUFAPIUAT6AljPFgHPFszJIsjLARL0APQAywDJcAH5AHTIywISygfL/8nQUA/HBR6x8uLDDPoAUcqhKbYIGaFQB6AYoSaSbFXjDSXXCwHDACHCALCAPEACqE8zIghAXjUUZWAoCyx/LP1AH+gIizxZQBs8WJfoCUAPPFslQBcwjkXKRceJQB6gToAiqAFAEoBegFLzy4sUByYBA+wBDAMhQBPoCWM8WAc8WzMntVAByUmmgGKHIghBzYtCcKQLLH8s/UAf6AlAEzxZQB88WyciAEAHLBSfPFlAE+gJxActqE8zJcfsAUEITAHSOI8iAEAHLBVAGzxZQBfoCcAHLaoIQ1TJ221gFAssfyz/JcvsAklsz4kADyFAE+gJYzxYBzxbMye1UAOs7UTQ+gD6QPpA1NEF0z8BAfoAIcIA8uLC+kD0BAHQ05/RAdFRYqFSWMcF8uLBJsL/8uLCyIIQe92X3lgEAssfyz8B+gIjzxYBzxYTy5/JyIAYAcsFI88WcPoCcQHLaszJgED7AEATyFAE+gJYzxYBzxbMye1UgAIcgCDXIe1E0PoA+kD6QNTRBNMfAYQPIYIQF41FGboCghB73ZfeuhKx8vTTPwEw+gAwE6BQI8hQBPoCWM8WAc8WzMntVINjFu1o=');

export const JETTON_WALLET_STANDART_CODE_TESTNET = Cell.fromBase64(
    'te6cckECEQEAAyMAART/APSkE/S88sgLAQIBYgIDAgLMBAUAG6D2BdqJofQB9IH0gahhAgHUBgcCASAICQDDCDHAJJfBOAB0NMDAXGwlRNfA/AM4PpA+kAx+gAxcdch+gAx+gAwc6m0AALTH4IQD4p+pVIgupUxNFnwCeCCEBeNRRlSILqWMUREA/AK4DWCEFlfB7y6k1nwC+BfBIQP8vCAAET6RDBwuvLhTYAIBIAoLAIPUAQa5D2omh9AH0gfSBqGAJpj8EIC8aijKkQXUEIPe7L7wndCVj5cWLpn5j9ABgJ0CgR5CgCfQEsZ4sA54tmZPaqQB8VA9M/+gD6QCHwAe1E0PoA+kD6QNQwUTahUirHBfLiwSjC//LiwlQ0QnBUIBNUFAPIUAT6AljPFgHPFszJIsjLARL0APQAywDJIPkAcHTIywLKB8v/ydAE+kD0BDH6ACDXScIA8uLEd4AYyMsFUAjPFnD6AhfLaxPMgMAgEgDQ4AnoIQF41FGcjLHxnLP1AH+gIizxZQBs8WJfoCUAPPFslQBcwjkXKRceJQCKgToIIJycOAoBS88uLFBMmAQPsAECPIUAT6AljPFgHPFszJ7VQC9ztRND6APpA+kDUMAjTP/oAUVGgBfpA+kBTW8cFVHNtcFQgE1QUA8hQBPoCWM8WAc8WzMkiyMsBEvQA9ADLAMn5AHB0yMsCygfL/8nQUA3HBRyx8uLDCvoAUaihggiYloBmtgihggiYloCgGKEnlxBJEDg3XwTjDSXXCwGAPEADXO1E0PoA+kD6QNQwB9M/+gD6QDBRUaFSSccF8uLBJ8L/8uLCBYIJMS0AoBa88uLDghB73ZfeyMsfFcs/UAP6AiLPFgHPFslxgBjIywUkzxZw+gLLaszJgED7AEATyFAE+gJYzxYBzxbMye1UgAHBSeaAYoYIQc2LQnMjLH1Iwyz9Y+gJQB88WUAfPFslxgBDIywUkzxZQBvoCFctqFMzJcfsAECQQIwB8wwAjwgCwjiGCENUydttwgBDIywVQCM8WUAT6AhbLahLLHxLLP8ly+wCTNWwh4gPIUAT6AljPFgHPFszJ7VSV6u3X');

export const OPCODES = {
    SUPPLY: 0x1,
    WITHDRAW: 0x2,
    LIQUIDATE: 0x3,
    JETTON_TRANSFER: 0xf8a7ea5,
    ONCHAIN_GETTER: 0x9998,
};

export const FEES = {
    SUPPLY: toNano('0.3'),
    WITHDRAW: toNano('0.35'),
    SUPPLY_JETTON: toNano('0.35'),
    SUPPLY_JETTON_FWD: toNano('0.3'),
    LIQUIDATION: toNano('0.8'),
    LIQUIDATION_JETTON: toNano('1'),
    LIQUIDATION_JETTON_FWD: toNano('0.8'),
};

import { Address, Cell, toNano } from '@ton/core';
import { OracleNFT } from '../types/Master';

const ASSET_PRICE_SCALE = BigInt(1e9);

export const MASTER_CONSTANTS = {
    FACTOR_SCALE: BigInt(1e12),
    ASSET_COEFFICIENT_SCALE: 10000n,
    ASSET_PRICE_SCALE,
    ASSET_RESERVE_FACTOR_SCALE: 10000n,
    ASSET_LIQUIDATION_RESERVE_FACTOR_SCALE: 10000n,
    ASSET_ORIGINATION_FEE_SCALE: BigInt(1e9),
    ASSET_LIQUIDATION_THRESHOLD_SCALE: 10_000n,
    ASSET_LIQUIDATION_BONUS_SCALE: 10_000n,
    ASSET_SRATE_SCALE: BigInt(1e12),
    ASSET_BRATE_SCALE: BigInt(1e12),
    COLLATERAL_WORTH_THRESHOLD: 100n * ASSET_PRICE_SCALE, // literally 100$
};

export const NULL_ADDRESS = Address.parse('UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ');

export const EVAA_MASTER_MAINNET = Address.parse('EQC8rUZqR_pWV1BylWUlPNBzyiTYVoBEmQkMIQDZXICfnuRr');
export const MAINNET_VERSION = 6;
export const EVAA_MASTER_TESTNET = Address.parse('kQBae_Pt-NcxX0yhNnsYyK-Kh6ZBnIUQhxheKTvNLTgZf7AV');
export const TESTNET_VERSION = 0;
export const EVAA_LP_MAINNET = Address.parse('EQBIlZX2URWkXCSg3QF2MJZU-wC5XkBoLww-hdWk2G37Jc6N');
export const EVAA_LP_MAINNET_VERSION = 3;
export const EVAA_ALTS_MAINNET = Address.parse('EQANURVS3fhBO9bivig34iyJQi97FhMbpivo1aUEAS2GYSu-');
export const EVAA_ALTS_MAINNET_VERSION = 0;

export const EVAA_REWARDS_MASTER_TESTNET = Address.parse('EQCnp0iRGcfDJAvnKhAEN9sB-nPYSPuc83Ff4y75s8AtoSW1');
export const EVAA_USDT_REWARDS_MASTER_MAINNET = Address.parse('EQD22Fhylp1tX-xoVX81aMTSJNPV8j9klwApTLgjGmofISVD');
export const EVAA_TON_REWARDS_MASTER_MAINNET = Address.parse('EQDM_gdrntBg4fy5Rg9DgDF0AUu3FYoqxHEOsHNIC4_DTDuC');

export const ORACLES_MAINNET: OracleNFT[] = [
    {id: 0, address: '0xd3a8c0b9fd44fd25a49289c631e3ac45689281f2f8cf0744400b4c65bed38e5d', pubkey: Buffer.from('b404f4a2ebb62f2623b370c89189748a0276c071965b1646b996407f10d72eb9', 'hex') }, 
    {id: 1, address: '0x2c21cabdaa89739de16bde7bc44e86401fac334a3c7e55305fe5e7563043e191', pubkey: Buffer.from('9ad115087520d91b6b45d6a8521eb4616ee6914af07fabdc2e9d1826dbb17078', 'hex') },
    {id: 2, address: '0x2eb258ce7b5d02466ab8a178ad8b0ba6ffa7b58ef21de3dc3b6dd359a1e16af0', pubkey: Buffer.from('e503e02e8a9226b34e7c9deb463cbf7f19bce589362eb448a69a8ee7b2fca631', 'hex') },
    {id: 3, address: '0xf9a0769954b4430bca95149fb3d876deb7799d8f74852e0ad4ccc5778ce68b52', pubkey: Buffer.from('9cbf8374cf1f2cf17110134871d580198416e101683f4a61f54cf2a3e4e32070', 'hex') },
];

export const ORACLES_TESTNET: OracleNFT[] = ORACLES_MAINNET;

export const ORACLES_LP: OracleNFT[] = ORACLES_MAINNET;
export const ORACLES_ALTS: OracleNFT[] = ORACLES_MAINNET;

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

export const EVAA_REWARDS_MASTER_CODE_TESTNET = Cell.fromBoc(
    Buffer.from(
        'b5ee9c7241020e01000386000114ff00f4a413f4bcf2c80b01020162020b046ad03322c700925f03e0d0d3030171b0925f03e0fa403002d31fd33f715230bae302725230bae30282107362d09c5230bae3027413ba0304070800c46c21ed44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd11034102307fa40308103e8820afaf0801abe19f2f48103ea5196c70519f2f48103ee8b0212c705f2f41036453304c85004cf16cbff12cbffc9c85005cf165003fa0258cf16ccccc9ed5402fe6c22ed44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd11034102307fa40fa003021ed44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd11034102335355bc8f828cf1613cbffcbffc9c85003cf1670fa0212ccc97020c8cb0113f400f400cb00c9f9007074c8cb02ca07cbffc9d08103ea51c1c7051cf2f45306bce302050600466c810173c8cb1fcb3f01fa02c9718018c8cb055003cf1670fa0212cb6accc98040fb0001d23a8b3544f4e8f9025220ba8e16385288708018c8cb0558cf1658fa02cb6ac98040fb008e3b22544a030a702082100f8a7ea5c8cb1f13cb3f5004fa0222cf1658cf16cb0021fa02cb1fc9718018c8cb055003cf1670fa0212cb6accc98040fb00e25037a110365e40010a00ec6c21ed44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd1103410238103e8820afaf08052a0bef2f48b3544f4e8f9025220ba993738068209c9c380a18e11388103ea5192c70519f2f405fa00301056e213a010364515503304c85004cf16cbff12cbffc9c85005cf165003fa0258cf16ccccc9ed5402ea8f6ced44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd11034102308fa40fa00308103e8821005f5e1001cbe1bf2f48103ea51b7c7051bf2f48103ed5395bbf2f48b3544f4e8f9025210ba8e16365279708018c8cb0558cf1658fa02cb6ac98040fb00e30e5026a14615503304e05f04840ff2f0090a00745468281b702082100f8a7ea5c8cb1f13cb3f5004fa0222cf1658cf16cb0021fa02cb1fc9718018c8cb055003cf1670fa0212cb6accc98040fb000038c85004cf16cbff12cbffc9c85005cf165003fa0258cf16ccccc9ed540201580c0d0039bbc24ed44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd1103410238009fb87b6ed44d0fa40fa00fa40d4d401d001d1fa40d3ffd3ffd11034102335355bc8f828cf1613cbffcbffc9c85003cf1670fa0212ccc97020c8cb0113f400f400cb00c9f9007074c8cb02ca07cbffc9d0872ac1c8c',
        'hex',
    ),
)[0];
export const EVAA_REWARDS_MASTER_CODE_MAINNET = EVAA_REWARDS_MASTER_CODE_TESTNET;

export const EVAA_REWARDS_USER_CODE_TESTNET = Cell.fromBoc(
    Buffer.from(
        'b5ee9c724102060100014e000114ff00f4a413f4bcf2c80b01020162020502f8d03322c700925f03e0d0d3030171b0925f03e0fa403002d31fd33f725230ba8ed63233ed44d0fa40fa00d401d001d1fa40d3ffd3ffd1058308d718d430d08103e8821005f5e10019be18f2f48103e927f901541027f910f2f405fa40fa00308103eaf82813c70512f2f48103ec5313bcf2f45203a15006e0313273ba030400b8ed44d0fa40fa00d401d001d1fa40d3ffd3ffd110235f0372c8cb1f13cb3f01cf1658fa02c9718018c8cb055003cf1670fa0212cb6accc9820a625a0070fb02810080fb005521c85003cf16cbffcbffc9c85003cf1601fa02ccc9ed5400888e3ced44d0fa40fa00d401d001d1fa40d3ffd3ffd105fa00308103ea5173c70517f2f45025a14143c85003cf16cbffcbffc9c85003cf1601fa02ccc9ed54e05b840ff2f0002ba17849da89a1f481f401a803a003a3f481a7ffa7ffa333f41908',
        'hex',
    ),
)[0];
export const EVAA_REWARDS_USER_CODE_MAINNET = EVAA_REWARDS_USER_CODE_TESTNET;

export const OPCODES = {
    SUPPLY: 0x1,
    WITHDRAW: 0x2,
    LIQUIDATE: 0x3,
    JETTON_TRANSFER: 0xf8a7ea5,
    ONCHAIN_GETTER: 0x9998,
    REWARD_CLAIM: 0x2,
    REWARD_TON_TOP_UP: 0x7362d09c,
    REWARD_JETTON_MINT: 0x178d4519,
    REWARD_JETTON_TRANSFER: 0x0f8a7ea5,
};

export const FEES = {
    SUPPLY: toNano('0.3'),
    WITHDRAW: toNano('0.35'),
    SUPPLY_JETTON: toNano('0.35'),
    SUPPLY_JETTON_FWD: toNano('0.3'),
    LIQUIDATION: toNano('0.8'),
    LIQUIDATION_JETTON: toNano('1'),
    LIQUIDATION_JETTON_FWD: toNano('0.8'),
    REWARD_MASTER_TON_TOP_UP: toNano('0.03'),
    REWARD_MASTER_DEPLOY: toNano('0.05'),
    REWARD_MASTER_WITHDRAW: toNano('0.1'),
    REWARD_USER_DEPLOY: toNano('0.05'),
    REWARD_USER_CLAIM: toNano('0.1'),
};

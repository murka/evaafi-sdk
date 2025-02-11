import { Address, Cell } from "@ton/core"
import { PoolAssetConfig } from "../types/Master"
import { sha256Hash } from "../utils/sha256BigInt"
import { JETTON_WALLET_STANDART_CODE, JETTON_WALLET_STANDART_CODE_TESTNET, NULL_ADDRESS } from "./general"

export const ASSET_ID = {
    TON:            sha256Hash('TON'),
    USDT:           sha256Hash('USDT'),
    jUSDT:          sha256Hash('jUSDT'),
    jUSDC:          sha256Hash('jUSDC'),
    stTON:          sha256Hash('stTON'),
    tsTON:          sha256Hash('tsTON'),
    uTON:           sha256Hash('uTON'),
    tgBTC:          sha256Hash('tgBTC'),

    // LP
    TONUSDT_DEDUST: sha256Hash('TONUSDT_DEDUST'),
    TONUSDT_STONFI: sha256Hash('TONUSDT_STONFI'),
    TON_STORM:      sha256Hash('TON_STORM'),
    USDT_STORM:     sha256Hash('USDT_STORM'),

    // ALTS
    NOT:            sha256Hash('NOT'),
    DOGS:           sha256Hash('DOGS'),
    CATI:           sha256Hash('CATI'),
};

export const UNDEFINED_ASSET: PoolAssetConfig = { 
    name: 'undefined_asset',
    assetId: -1n,
    jettonMasterAddress: NULL_ADDRESS,  // fake
    jettonWalletCode: Cell.EMPTY 
}

export const TON_MAINNET: PoolAssetConfig = { 
    name: 'TON',
    assetId: ASSET_ID.TON,
    jettonMasterAddress: NULL_ADDRESS,  // fake
    jettonWalletCode: Cell.EMPTY 
}
export const TON_TESTNET = TON_MAINNET;

export const JUSDT_MAINNET: PoolAssetConfig = { 
    name: 'jUSDT',
    assetId: ASSET_ID.jUSDT,
    jettonMasterAddress: Address.parse('EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA'),
    jettonWalletCode: JETTON_WALLET_STANDART_CODE
}

export const JUSDC_MAINNET: PoolAssetConfig = { 
    name: 'jUSDC',
    assetId: ASSET_ID.jUSDC,
    jettonMasterAddress: Address.parse('EQB-MPwrd1G6WKNkLz_VnV6WqBDd142KMQv-g1O-8QUA3728'),
    jettonWalletCode: JETTON_WALLET_STANDART_CODE
}

export const STTON_MAINNET: PoolAssetConfig = { 
    name: 'stTON',
    assetId: ASSET_ID.stTON,
    jettonMasterAddress: Address.parse('EQDNhy-nxYFgUqzfUzImBEP67JqsyMIcyk2S5_RwNNEYku0k'),
    jettonWalletCode: Cell.fromBase64(
        'te6cckECEgEAA2IAART/APSkE/S88sgLAQIBYgIDAgLMBAUAG6D2BdqJofQB9IH0gahhAgHUBgcCASAJCgHPCDHAJJfBOAB0NMDAXGwlRNfA/AN4PpA+kAx+gAxcdch+gAx+gAwc6m0AALTHyGCEA+KfqW6lTE0WfAK4CGCEBeNRRm6ljFERAPwC+AhghBZXwe8upUxNFnwDOAUXwTABOMCMIQP8vCAIABE+kQwwADy4U2AAfO1E0PoA+kD6QNQwECNfAwGCCJiWgKFtgBByIm6zIJFxkXDiA8jLBVAGzxZQBPoCy2oDk1jMAZEw4gHJAfsAAgFYCwwCAUgQEQHxAPTP/oA+kAh8AHtRND6APpA+kDUMFE2oVIqxwXy4sEowv/y4sJUNEJwVCATVBQDyFAE+gJYzxYBzxbMySLIywES9AD0AMsAySD5AHB0yMsCygfL/8nQBPpA9AQx+gAg10nCAPLixHeAGMjLBVAIzxZw+gIXy2sTzIA0C9ztRND6APpA+kDUMAjTP/oAUVGgBfpA+kBTW8cFVHNtcFQgE1QUA8hQBPoCWM8WAc8WzMkiyMsBEvQA9ADLAMn5AHB0yMsCygfL/8nQUA3HBRyx8uLDCvoAUaihggiYloBmtgihggjk4cCgGKEnlxBJEDg3XwTjDSXXCwGAODwCeghAXjUUZyMsfGcs/UAf6AiLPFlAGzxYl+gJQA88WyVAFzCORcpFx4lAIqBOgggpiWgCgFLzy4sUEyYBA+wAQI8hQBPoCWM8WAc8WzMntVABwUnmgGKGCEHNi0JzIyx9SMMs/WPoCUAfPFlAHzxbJcYAQyMsFJM8WUAb6AhXLahTMyXH7ABAkECMAfMMAI8IAsI4hghDVMnbbcIAQyMsFUAjPFlAE+gIWy2oSyx8Syz/JcvsAkzVsIeIDyFAE+gJYzxYBzxbMye1UAMkMO1E0PoA+kD6QNQwBtM/+gAwUUShUjfHBfLiwSXC//LiwgSCC5OHAL7y4sWCEHvdl97Iyx8Uyz9Y+gIhzxbJcYAYyMsFJM8WcPoCy2rMyYBA+wBAE8hQBPoCWM8WAc8WzMntVIACBIAg1yHtRND6APpA+kDUMATTHyGCEBeNRRm6AoIQe92X3roSsfLgyNM/MfoAMBOgUCPIUAT6AljPFgHPFszJ7VSBpMmqD'
    )
}

export const TSTON_MAINNET: PoolAssetConfig = { 
    name: 'tsTON',
    assetId: ASSET_ID.tsTON,
    jettonMasterAddress: Address.parse('EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav'),
    jettonWalletCode: Cell.fromBase64(
        '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'
    )
}

export const USDT_MAINNET: PoolAssetConfig = { 
    name: 'USDT',
    assetId: ASSET_ID.USDT,
    jettonMasterAddress: Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
          'b5ee9c7241020f010003d1000114ff00f4a413f4bcf2c80b01020162050202012004030021bc508f6a2686981fd007d207d2068af81c0027bfd8176a2686981fd007d207d206899fc152098402f8d001d0d3030171b08e48135f038020d721ed44d0d303fa00fa40fa40d104d31f01840f218210178d4519ba0282107bdd97deba12b1f2f48040d721fa003012a0401303c8cb0358fa0201cf1601cf16c9ed54e0fa40fa4031fa0031f401fa0031fa00013170f83a02d31f012082100f8a7ea5ba8e85303459db3ce0330c0602d0228210178d4519ba8e84325adb3ce034218210595f07bcba8e843101db3ce032208210eed236d3ba8e2f30018040d721d303d1ed44d0d303fa00fa40fa40d1335142c705f2e04a403303c8cb0358fa0201cf1601cf16c9ed54e06c218210d372158cbadc840ff2f0080701f2ed44d0d303fa00fa40fa40d106d33f0101fa00fa40f401d15141a15288c705f2e04926c2fff2afc882107bdd97de01cb1f5801cb3f01fa0221cf1658cf16c9c8801801cb0526cf1670fa02017158cb6accc903f839206e943081169fde718102f270f8380170f836a0811a7770f836a0bcf2b0028050fb00030903f4ed44d0d303fa00fa40fa40d12372b0c002f26d07d33f0101fa005141a004fa40fa4053bac705f82a5464e070546004131503c8cb0358fa0201cf1601cf16c921c8cb0113f40012f400cb00c9f9007074c8cb02ca07cbffc9d0500cc7051bb1f2e04a09fa0021925f04e30d26d70b01c000b393306c33e30d55020b0a09002003c8cb0358fa0201cf1601cf16c9ed54007a5054a1f82fa07381040982100966018070f837b60972fb02c8801001cb055005cf1670fa027001cb6a8210d53276db01cb1f5801cb3fc9810082fb00590060c882107362d09c01cb1f2501cb3f5004fa0258cf1658cf16c9c8801001cb0524cf1658fa02017158cb6accc98011fb0001f203d33f0101fa00fa4021fa4430c000f2e14ded44d0d303fa00fa40fa40d15309c7052471b0c00021b1f2ad522bc705500ab1f2e0495115a120c2fff2aff82a54259070546004131503c8cb0358fa0201cf1601cf16c921c8cb0113f40012f400cb00c920f9007074c8cb02ca07cbffc9d004fa40f401fa00200d019820d70b009ad74bc00101c001b0f2b19130e2c88210178d451901cb1f500a01cb3f5008fa0223cf1601cf1626fa025007cf16c9c8801801cb055004cf1670fa024063775003cb6bccccc945370e00b42191729171e2f839206e938124279120e2216e94318128739101e25023a813a0738103a370f83ca00270f83612a00170f836a07381040982100966018070f837a0bcf2b0048050fb005803c8cb0358fa0201cf1601cf16c9ed5401f9319e',
          'hex'
        )
    )[0],
}

export const JUSDT_TESTNET: PoolAssetConfig = { 
    name: 'jUSDT',
    assetId: ASSET_ID.jUSDT,
    jettonMasterAddress: Address.parse('kQBe4gtSQMxM5RpMYLr4ydNY72F8JkY-icZXG1NJcsju8XM7'),
    jettonWalletCode: JETTON_WALLET_STANDART_CODE_TESTNET
}

export const JUSDC_TESTNET: PoolAssetConfig = { 
    name: 'jUSDC',
    assetId: ASSET_ID.jUSDC,
    jettonMasterAddress: Address.parse('kQDaY5yUatYnHei73HBqRX_Ox9LK2XnR7XuCY9MFC2INbfYI'),
    jettonWalletCode: JETTON_WALLET_STANDART_CODE_TESTNET
}

export const STTON_TESTNET: PoolAssetConfig = { 
    name: 'stTON',
    assetId: ASSET_ID.stTON,
    jettonMasterAddress: Address.parse('kQC3Duw3dg8k98xf5S7Bm7YOWVJ5QW8hm3iLqFfJfa_g9h07'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7201021201000362000114ff00f4a413f4bcf2c80b0102016202030202cc0405001ba0f605da89a1f401f481f481a8610201d40607020120090a01cf0831c02497c138007434c0c05c6c2544d7c0fc03383e903e900c7e800c5c75c87e800c7e800c1cea6d0000b4c7c8608403e29fa96ea54c4d167c027808608405e351466ea58c511100fc02b80860841657c1ef2ea54c4d167c02f80517c1300138c08c2103fcbc200800113e910c30003cb85360007ced44d0fa00fa40fa40d43010235f03018208989680a16d801072226eb32091719170e203c8cb055006cf165004fa02cb6a039358cc019130e201c901fb000201200b0c0081d40106b90f6a2687d007d207d206a1802698f90c1080bc6a28cdd0141083deecbef5d0958f97064699f98fd001809d02811e428027d012c678b00e78b6664f6aa401f1503d33ffa00fa4021f001ed44d0fa00fa40fa40d4305136a1522ac705f2e2c128c2fff2e2c254344270542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c920f9007074c8cb02ca07cbffc9d004fa40f40431fa0020d749c200f2e2c4778018c8cb055008cf1670fa0217cb6b13cc80d0201200e0f009e8210178d4519c8cb1f19cb3f5007fa0222cf165006cf1625fa025003cf16c95005cc2391729171e25008a813a0820a625a00a014bcf2e2c504c98040fb001023c85004fa0258cf1601cf16ccc9ed5402f73b51343e803e903e90350c0234cffe80145468017e903e9014d6f1c1551cdb5c150804d50500f214013e809633c58073c5b33248b232c044bd003d0032c0327e401c1d3232c0b281f2fff274140371c1472c7cb8b0c2be80146a2860822625a019ad8228608239387028062849e5c412440e0dd7c138c34975c2c060101100c90c3b51343e803e903e90350c01b4cffe800c145128548df1c17cb8b04970bffcb8b0812082e4e1c02fbcb8b160841ef765f7b232c7c532cfd63e808873c5b25c60063232c14933c59c3e80b2dab33260103ec01004f214013e809633c58073c5b3327b552000705279a018a182107362d09cc8cb1f5230cb3f58fa025007cf165007cf16c9718010c8cb0524cf165006fa0215cb6a14ccc971fb0010241023007cc30023c200b08e218210d53276db708010c8cb055008cf165004fa0216cb6a12cb1f12cb3fc972fb0093356c21e203c85004fa0258cf1601cf16ccc9ed54',
            'hex',
        ),
    )[0],
}

export const TGBTC_TESTNET: PoolAssetConfig = {
    name: 'tgBTC',
    assetId: ASSET_ID.tgBTC,
    jettonMasterAddress: Address.parse('kQDoy1cUAbGq253vwfoPcqSloODVAWkDBniR12PJFUHnK6Yf'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c72010210010003ac000114ff00f4a413f4bcf2c80b01020162020302f8d001d0d3030171b08e48135f038020d721ed44d0d303fa00fa40fa40d104d31f01840f218210178d4519ba0282107bdd97deba12b1f2f48040d721fa003012a0401303c8cb0358fa0201cf1601cf16c9ed54e0fa40fa4031fa0031f401fa0031fa00013170f83a02d31f012082100f8a7ea5ba8e85303459db3ce03304050201200e0f01f603d33f0101fa00fa4021fa4430c000f2e14ded44d0d303fa00fa40fa40d1521ac705f2e0495115a120c2fff2aff82a54259070546004131503c8cb0358fa0201cf1601cf16c921c8cb0113f40012f400cb00c920f9007074c8cb02ca07cbffc9d004fa40f401fa002020d70b009ad74bc00101c001b0f2b19130e206025c228210178d4519ba8e84325adb3ce034218210595f07bcba8e843101db3ce0135f038210d372158cbadc840ff2f008090174c88210178d451901cb1f500a01cb3f5008fa0223cf1601cf1626fa025007cf16c9c8801801cb055004cf1670fa024063775003cb6bccccc945370700bc2191729171e2f839206e938123289120e2216e94318127109101e2f82f5005a05023a812a0738103a370f83ca00170f836a00170f836a07381040982100966018070f837a0bcf2b0048050fb005803c8cb0358fa0201cf1601cf16c9ed5403e6ed44d0d303fa00fa40fa40d107d33f0101fa005141a004fa40fa4053bac705f82a5464e070546004131503c8cb0358fa0201cf1601cf16c921c8cb0113f40012f400cb00c9f9007074c8cb02ca07cbffc9d0500cc7051bb1f2e04a09fa0021925f04e30d26d70b01c000b393306c33e30d55020a0b0c01d2ed44d0d303fa00fa40fa40d106d33f0101fa00fa40f404d120206ef271d0d74bc000018100f8beb0f2b15152a15249c705f2e04927c2fff2afc882107bdd97de01cb1f500301cb3f01fa0222cf1601cf1612f400c9c8801801cb0526cf1670fa02017158cb6accc9030d0060c882107362d09c01cb1f2501cb3f5004fa0258cf1658cf16c9c8801001cb0524cf1658fa02017158cb6accc98011fb00007a5054a1f82fa07381040982100966018070f837b60972fb02c8801001cb055005cf1670fa027001cb6a8210d53276db01cb1f5801cb3fc9810082fb0059002003c8cb0358fa0201cf1601cf16c9ed54006cf839206e9430811770de728106f170f8380170f836a0811b5870f836a0bcf2b0028050fb000303c8cb0358fa0201cf1601cf16c9ed540027bfd8176a2686981fd007d207d206899fc15209840021bc508f6a2686981fd007d207d2068af81c',
            'hex',
        ),
    )[0],
};

export const TONUSDT_DEDUST_MAINNET: PoolAssetConfig = {
    name: 'TONUSDT_DEDUST',
    assetId: ASSET_ID.TONUSDT_DEDUST,
    jettonMasterAddress: Address.parse('EQA-X_yo3fzzbDbJ_0bzFWKqtRuZFIRa1sJsveZJ1YpViO3r'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7241021201000334000114ff00f4a413f4bcf2c80b0102016202110202cc03060201d4040500c30831c02497c138007434c0c05c6c2544d7c0fc02f83e903e900c7e800c5c75c87e800c7e800c1cea6d0000b4c7e08403e29fa954882ea54c4d167c0238208405e3514654882ea58c511100fc02780d60841657c1ef2ea4d67c02b817c12103fcbc2000113e910c1c2ebcb85360020148070e020120080a01f100f4cffe803e90087c007b51343e803e903e90350c144da8548ab1c17cb8b04a30bffcb8b0950d109c150804d50500f214013e809633c58073c5b33248b232c044bd003d0032c032483e401c1d3232c0b281f2fff274013e903d010c7e800835d270803cb8b11de0063232c1540233c59c3e8085f2dac4f3200900ae8210178d4519c8cb1f19cb3f5007fa0222cf165006cf1625fa025003cf16c95005cc2391729171e25008a813a08208e4e1c0aa008208989680a0a014bcf2e2c504c98040fb001023c85004fa0258cf1601cf16ccc9ed5403f73b51343e803e903e90350c0234cffe80145468017e903e9014d6f1c1551cdb5c150804d50500f214013e809633c58073c5b33248b232c044bd003d0032c0327e401c1d3232c0b281f2fff274140371c1472c7cb8b0c2be80146a2860822625a020822625a004ad8228608239387028062849f8c3c975c2c070c008e00b0c0d00705279a018a182107362d09cc8cb1f5230cb3f58fa025007cf165007cf16c9718010c8cb0524cf165006fa0215cb6a14ccc971fb0010241023000e10491038375f040076c200b08e218210d53276db708010c8cb055008cf165004fa0216cb6a12cb1f12cb3fc972fb0093356c21e203c85004fa0258cf1601cf16ccc9ed540201200f1000db3b51343e803e903e90350c01f4cffe803e900c145468549271c17cb8b049f0bffcb8b0a0823938702a8005a805af3cb8b0e0841ef765f7b232c7c572cfd400fe8088b3c58073c5b25c60063232c14933c59c3e80b2dab33260103ec01004f214013e809633c58073c5b3327b55200083200835c87b51343e803e903e90350c0134c7e08405e3514654882ea0841ef765f784ee84ac7cb8b174cfcc7e800c04e81408f214013e809633c58073c5b3327b5520001ba0f605da89a1f401f481f481a861f0a7d84b',
            'hex',
        ),
    )[0],
}

export const TON_STORM_MAINNET: PoolAssetConfig = { 
    name: 'TON_STORM',
    assetId: ASSET_ID.TON_STORM,
    jettonMasterAddress: Address.parse('EQCNY2AQ3ZDYwJAqx_nzl9i9Xhd_Ex7izKJM6JTxXRnO6n1F'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7241021301000380000114ff00f4a413f4bcf2c80b0102016202100202cd030f04add106380792000e8698180b8d8474289af81ed9e707d207d2018fd0018b8eb90fd0018fd001839d4da0001698f90c10807c53f52dd4742989a2ced9e7010c1080bc6a28cdd474318a22201ed9e701a9041082caf83de5d40405080c00888020d721ed44d0fa00fa40fa40d74c04d31f8200fff0228210178d4519ba0382107bdd97deba13b112f2f4d33f31fa003013a05023c85004fa0258cf1601cf16ccc9ed5401f603d33ffa00fa4021f007ed44d0fa00fa40fa40d74c5136a1522ac705f2e2c128c2fff2e2c2545255705202541304c85004fa0258cf1601cf16ccc921c8cb0113f40012f400cb00c97021f90074c8cb0212cb07cbffc9d004fa40f40431fa0020d749c200f2e2c48210178d4519c8cb1f1acb3f5008fa0223cf1601060176cf1626fa025007cf162591729171e2500aa815a0820a43d580a016bcf2e2c57007c9103741408040db3c4300c85004fa0258cf1601cf16ccc9ed5407002e778018c8cb055005cf165005fa0213cb6bccccc901fb0002f6ed44d0fa00fa40fa40d74c08d33ffa005151a005fa40fa40547c25705202541304c85004fa0258cf1601cf16ccc921c8cb0113f40012f400cb00c97021f90074c8cb0212cb07cbffc9d031536cc7050dc7051cb1f2e2c30afa0051a8a12195104a395f04e30d048208989680b60972fb0225d70b01c30003c20013090a014c521aa018a182107362d09cc8cb1f5240cb3f5003fa0201cf165008cf16c954253071db3c10350e0158b08e948210d53276dbc8cb1f14cb3f704055810082db3c923333e25003c85004fa0258cf1601cf16ccc9ed540b0030708018c8cb055004cf165004fa0212cb6a01cf17c901fb0002a08e843059db3ce06c22ed44d0fa00fa40fa40d74c10235f030182106d8e5e3cba8ea75202c705f2e2c1820898968070fb0201d70b3f8210d53276dbc8cb1fcb3f7001c912810082db3ce05f03840ff2f00d0e01bc30ed44d0fa00fa40fa40d74c06d33ffa00fa40305151a15248c705f2e2c126c2fff2e2c20582100ee6b280b9f2d2c782107bdd97dec8cb1fcb3f5004fa0221cf1658cf167001c952308040db3c4013c85004fa0258cf1601cf16ccc9ed540e002c718018c8cb055004cf165004fa0212cb6accc901fb000011f7d22186000797163402016611120021b5fe7da89a1f401f481f481ae9826be070001bb7605da89a1f401f481f481ae990c6f31b9d',
            'hex',
        ),
    )[0],

}

export const USDT_STORM_MAINNET: PoolAssetConfig = { 
    name: 'USDT_STORM',
    assetId: ASSET_ID.USDT_STORM,
    jettonMasterAddress: Address.parse('EQCup4xxCulCcNwmOocM9HtDYPU8xe0449tQLp6a-5BLEegW'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7241021301000380000114ff00f4a413f4bcf2c80b0102016202100202cd030f04add106380792000e8698180b8d8474289af81ed9e707d207d2018fd0018b8eb90fd0018fd001839d4da0001698f90c10807c53f52dd4742989a2ced9e7010c1080bc6a28cdd474318a22201ed9e701a9041082caf83de5d40405080c00888020d721ed44d0fa00fa40fa40d74c04d31f8200fff0228210178d4519ba0382107bdd97deba13b112f2f4d33f31fa003013a05023c85004fa0258cf1601cf16ccc9ed5401f603d33ffa00fa4021f007ed44d0fa00fa40fa40d74c5136a1522ac705f2e2c128c2fff2e2c2545255705202541304c85004fa0258cf1601cf16ccc921c8cb0113f40012f400cb00c97021f90074c8cb0212cb07cbffc9d004fa40f40431fa0020d749c200f2e2c48210178d4519c8cb1f1acb3f5008fa0223cf1601060176cf1626fa025007cf162591729171e2500aa815a0820a43d580a016bcf2e2c57007c9103741408040db3c4300c85004fa0258cf1601cf16ccc9ed5407002e778018c8cb055005cf165005fa0213cb6bccccc901fb0002f6ed44d0fa00fa40fa40d74c08d33ffa005151a005fa40fa40547c25705202541304c85004fa0258cf1601cf16ccc921c8cb0113f40012f400cb00c97021f90074c8cb0212cb07cbffc9d031536cc7050dc7051cb1f2e2c30afa0051a8a12195104a395f04e30d048208989680b60972fb0225d70b01c30003c20013090a014c521aa018a182107362d09cc8cb1f5240cb3f5003fa0201cf165008cf16c954253071db3c10350e0158b08e948210d53276dbc8cb1f14cb3f704055810082db3c923333e25003c85004fa0258cf1601cf16ccc9ed540b0030708018c8cb055004cf165004fa0212cb6a01cf17c901fb0002a08e843059db3ce06c22ed44d0fa00fa40fa40d74c10235f030182106d8e5e3cba8ea75202c705f2e2c1820898968070fb0201d70b3f8210d53276dbc8cb1fcb3f7001c912810082db3ce05f03840ff2f00d0e01bc30ed44d0fa00fa40fa40d74c06d33ffa00fa40305151a15248c705f2e2c126c2fff2e2c20582100ee6b280b9f2d2c782107bdd97dec8cb1fcb3f5004fa0221cf1658cf167001c952308040db3c4013c85004fa0258cf1601cf16ccc9ed540e002c718018c8cb055004cf165004fa0212cb6accc901fb000011f7d22186000797163402016611120021b5fe7da89a1f401f481f481ae9826be070001bb7605da89a1f401f481f481ae990c6f31b9d',
            'hex',
        ),
    )[0],
}

export const CATI_MAINNET: PoolAssetConfig = { 
    name: 'CATI',
    assetId: ASSET_ID.CATI,
    jettonMasterAddress: Address.parse('EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7241021101000323000114ff00f4a413f4bcf2c80b0102016202030202cc0405001ba0f605da89a1f401f481f481a8610201d40607020120080900c30831c02497c138007434c0c05c6c2544d7c0fc03383e903e900c7e800c5c75c87e800c7e800c1cea6d0000b4c7e08403e29fa954882ea54c4d167c0278208405e3514654882ea58c511100fc02b80d60841657c1ef2ea4d67c02f817c12103fcbc2000113e910c1c2ebcb853600201200a0b0083d40106b90f6a2687d007d207d206a1802698fc1080bc6a28ca9105d41083deecbef09dd0958f97162e99f98fd001809d02811e428027d012c678b00e78b6664f6aa401f1503d33ffa00fa4021f001ed44d0fa00fa40fa40d4305136a1522ac705f2e2c128c2fff2e2c254344270542013541403c85004fa0258cf1601cf16ccc922c8cb0112f400f400cb00c920f9007074c8cb02ca07cbffc9d004fa40f40431fa0020d749c200f2e2c4778018c8cb055008cf1670fa0217cb6b13cc80c0201200d0e009e8210178d4519c8cb1f19cb3f5007fa0222cf165006cf1625fa025003cf16c95005cc2391729171e25008a813a08209c9c380a014bcf2e2c504c98040fb001023c85004fa0258cf1601cf16ccc9ed5402f73b51343e803e903e90350c0234cffe80145468017e903e9014d6f1c1551cdb5c150804d50500f214013e809633c58073c5b33248b232c044bd003d0032c0327e401c1d3232c0b281f2fff274140371c1472c7cb8b0c2be80146a2860822625a019ad822860822625a028062849e5c412440e0dd7c138c34975c2c0600f1000d73b51343e803e903e90350c01f4cffe803e900c145468549271c17cb8b049f0bffcb8b08160824c4b402805af3cb8b0e0841ef765f7b232c7c572cfd400fe8088b3c58073c5b25c60063232c14933c59c3e80b2dab33260103ec01004f214013e809633c58073c5b3327b552000705279a018a182107362d09cc8cb1f5230cb3f58fa025007cf165007cf16c9718010c8cb0524cf165006fa0215cb6a14ccc971fb0010241023007cc30023c200b08e218210d53276db708010c8cb055008cf165004fa0216cb6a12cb1f12cb3fc972fb0093356c21e203c85004fa0258cf1601cf16ccc9ed5495eaedd7',
            'hex',
        ),
    )[0],
}

export const DOGS_MAINNET: PoolAssetConfig = { 
    name: 'DOGS',
    assetId: ASSET_ID.DOGS,
    jettonMasterAddress: Address.parse('EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7241010101002300084202ba2918c8947e9b25af9ac1b883357754173e5812f807a3d6e642a14709595395237ae3c3',
            'hex',
        ),
    )[0],
}

export const NOT_MAINNET: PoolAssetConfig = { 
    name: 'NOT',
    assetId: ASSET_ID.NOT,
    jettonMasterAddress: Address.parse('EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7201010101002300084202ba2918c8947e9b25af9ac1b883357754173e5812f807a3d6e642a14709595395',
            'hex',
        ),
    )[0],
}

export const UTON_MAINNET: PoolAssetConfig = { 
    name: 'uTON',
    assetId: ASSET_ID.uTON,
    jettonMasterAddress: Address.parse('EQAfF5j3JMIpZlLmACv7Ub7RH7WmiVMuV4ivcgNYHvNnqHTz'),
    jettonWalletCode: Cell.fromBoc(
        Buffer.from(
            'b5ee9c7201021301000439000114ff00f4a413f4bcf2c80b0102016202030202cc0405020120111200bbd906380492f827000e8698180b8d84a89af81f807707d207d2018fd0018b8eb90fd0018fd001801698f90c10807c53f52dd4a989a2cf805f010c1080bc6a28cdd4b18a22201f8067000c1082caf83de5d4aa22201f806f02f82c207f9784020120060701f7f01e99ffd007d20381140816000fd23182c5d797a76a2687d00699ffd207d206a18027c30817c317c31fc327c32fc2091d0fc30fc21a8036382f97160fc20e17ff971617c227c22b82a300209aa0a82e42802fd0109e59f80e78b00e78b666490e4658089fa00097a00658064907c80383a6465816503e5ffe4e802c080201200a0b01fefa40f40431fa0020d749c200f2e2c4778018c8cb055009cf1670fa0218cb6b13cc8210178d4519c8cb1f15cb3f5003fa02f843cf1658cf1621fa025004cf16c901cc2291729171e25004a812a08208989680a08208989680a08208989680a0bcf2e2c5f841f842f843f844f845c85005fa0213cb3f01cf1601cf16ccc9ed5409000ac98040fb000201200c0d00b948020d721ed44d0fa00d33ffa40fa40d43004f86102f862f863f864f865d31f218210178d4519ba0282107bdd97deba12b1f2e2c5d33f31fa0030f84101a0f861f841f842f843f844f845c85005fa0213cb3f01cf1601cf16ccc9ed54801f53b51343e8034cffe903e90350c013e1840be18be18fe193e194134cffe803e1048a83e187e903e903e113e1149165c15180104d505417214017e8084f2cfc073c58073c5b332487232c044fd0004bd0032c0327e401c1d3232c0b281f2fff2740a31c17e11140271c1462c7cb8b0c1be80145a2860822625a019a00e01f73b51343e8034cffe903e90350c013e1840be18be18fe193e194134cffe803e903d010c1c0060083d03dbe87cb8b13434c7fe80204c0048b0803cbd350c3e10be10a93e18be1049a87e187e10d402b1c17cb8b07e1070bffcb8b0945e6860822625a019ad82284820822625a0281401e820822625a028086814a42f201001f2b608a18208989680a018a1278e355275a014a182107362d09cc8cb1f5230cb3f58fa025003cf165003cf16c9718018c8cb05f843cf165006fa0215cb6a14ccc971fb0094375b6c21e221d70b01c30023c200b08e208210d53276db708010c8cb055004cf165004fa0212cb6a12cb1fcb3fc972fb00925f03e20f0038f841f842f843f844f845c85005fa0213cb3f01cf1601cf16ccc9ed5400c0f2e2c5058208989680a018a1f841f842f843f844f845c85005fa0213cb3f01cf1601cf16ccc9ed5482107bdd97dec8cb1f14cb3ff843cf1616cb3f01fa0215cb1f5003cf1658fa02ccc9718018c8cb05f844cf165003fa0212cb6accc970fb000047bfd8176a2687d00699ffd207d206a18027c30817c317c31fc327c32fc20fc21fc227c22c004bbdd79f6a2687d00699ffd207d206a18027c30817c317c31fc327c32fc20fc217c21fc227c22c',
            'hex',
        ),
    )[0],
}


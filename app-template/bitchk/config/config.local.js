var DEFAULT_CONFIG = {
    networkName: 'livenet',
    coin: 'btc',
    bwsurl: 'http://localhost:3232/bws/api',
    showMoney: false,
    networks: [
        'livenet',
        'litecoin',
        'qcity',
        'quasar',
        'searchcoin',
        'paxcoin',
        'yangcoin'
    ]
}
var COIN_CONFIG = {
    btc: {
        bwsurl: 'http://localhost:3232/bws/api',
        insight: 'http://insight-btc.bitchk.com',
        network: 'litvenet',
        coin: 'btc',
        displayName: "BTC",
        enable: true,
        coinName: "Bitcoin"
    },
    ltc: {
        bwsurl: 'http://bws.bitchk.com/bws/api',
        insight: 'http://insight-ltc.bitchk.com/insight',
        network: 'litecoin',
        coin: 'ltc',
        displayName: "LTC",
        enable: true,
        coinName: "Litecoin"
    },
    qct: {
        bwsurl: 'http://localhost:3232/bws/api',
        insight: 'https://insight-qct.bitchk.com',
        coin: 'qct',
        displayName: "QCT",
        coinName: "QCity",
        enable: true,
    },
    qac: {
        bwsurl: 'http://localhost:3232/bws/api',
        insight: 'https://insight-qac.bitchk.com',
        coin: 'qac',
        displayName: "QAC",
        coinName: "Quasar",
        enable: true,
    },
    pax: {
        bwsurl: 'http://localhost:3232/bws/api',
        insight: 'https://insight-pax.bitchk.com',
        coin: 'pax',
        displayName: "PAX",
        coinName: "Paxcoin",
        enable: true,
    },
    ssc: {
        bwsurl: 'http://localhost:3232/bws/api',
        insight: 'https://insight-ssc.bitchk.com',
        coin: 'ssc',
        displayName: "SSC",
        coinName: "SearchCoin",
        enable: true,
    },
    yng: {
        bwsurl: 'http://localhost:3232/bws/api',
        insight: 'https://insight-yng.bitchk.com',
        coin: 'yng',
        displayName: "YNG",
        coinName: "YangCoin",
        enable: true,
    }
}
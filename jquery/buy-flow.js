$(document).ready(function() {
    let selectedCountry = '';
    let selectedMethod = '';
    
    // Country and platform data
    const buyingPlatforms = {
        'US': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Swan Bitcoin',
                    description: 'buy_platform_swan_description',
                    link: 'https://swanbitcoin.com',
                    recommended: false,
                    features: ['buy_platform_feature_dca', 'buy_platform_feature_education', 'buy_platform_feature_withdrawal']
                },
                {
                    name: 'River',
                    description: 'buy_platform_river_description',
                    link: 'https://river.com',
                    recommended: false,
                    features: ['buy_platform_feature_mining', 'buy_platform_feature_custody', 'buy_platform_feature_education']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'CA': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Coinsquare',
                    description: 'buy_platform_coinsquare_description',
                    link: 'https://coinsquare.com',
                    recommended: false,
                    features: ['buy_platform_feature_canadian', 'buy_platform_feature_regulated', 'buy_platform_feature_support']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'GB': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        // European countries with Relai support
        'AT': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'BE': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'CZ': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'DK': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'EE': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'FI': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'FR': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'DE': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'GR': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'HU': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'IS': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'IE': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'IT': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'LV': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'LT': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'LU': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'MT': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'NL': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'NO': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'PL': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'PT': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'RO': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'SK': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'SI': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'ES': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'SE': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        'CH': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        },
        // Default for other countries
        'DEFAULT': {
            'bank': [
                {
                    name: 'Strike',
                    description: 'buy_platform_strike_description',
                    link: 'https://strike.me',
                    recommended: true,
                    features: ['buy_platform_feature_instant', 'buy_platform_feature_low_fees', 'buy_platform_feature_lightning']
                },
                {
                    name: 'Relai',
                    description: 'buy_platform_relai_description',
                    link: 'https://relai.app',
                    recommended: false,
                    features: ['buy_platform_feature_bitcoin_only', 'buy_platform_feature_self_custody', 'buy_platform_feature_auto_invest', 'buy_platform_feature_european']
                },
                {
                    name: 'Kraken',
                    description: 'buy_platform_kraken_description',
                    link: 'https://kraken.com',
                    recommended: false,
                    features: ['buy_platform_feature_established', 'buy_platform_feature_security', 'buy_platform_feature_advanced']
                }
            ],
            'cash': [
                {
                    name: 'Bitcoin ATM',
                    description: 'buy_platform_atm_description',
                    link: 'https://coinatmradar.com',
                    recommended: true,
                    features: ['buy_platform_feature_cash', 'buy_platform_feature_instant', 'buy_platform_feature_anonymous']
                },
                {
                    name: 'Bisq',
                    description: 'buy_platform_bisq_description',
                    link: 'https://bisq.network',
                    recommended: false,
                    features: ['buy_platform_feature_p2p', 'buy_platform_feature_private', 'buy_platform_feature_decentralized']
                }
            ]
        }
    };

    // Country search functionality
    $('#country-search').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('.buy-country-button').each(function() {
            const countryText = $(this).text().toLowerCase();
            if (countryText.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Country selection
    $('.buy-country-button').click(function() {
        selectedCountry = $(this).data('country');
        
        // Visual feedback
        $('.buy-country-button').removeClass('selected');
        $(this).addClass('selected');
        
        // Show payment method selection
        $('#payment-method-selection').slideDown();
        
        // Scroll to payment method section
        $('html, body').animate({
            scrollTop: $('#payment-method-selection').offset().top - 50
        }, 500);
    });

    // Payment method selection
    $('.payment-method-button').click(function() {
        selectedMethod = $(this).data('method');
        
        // Visual feedback
        $('.payment-method-button').removeClass('selected');
        $(this).addClass('selected');
        
        // Show buying options
        showBuyingOptions();
        
        // Show storage guidance
        $('#storage-guidance').slideDown();
        
        // Scroll to buying options
        $('html, body').animate({
            scrollTop: $('#buying-options').offset().top - 50
        }, 500);
    });

    function showBuyingOptions() {
        const platforms = buyingPlatforms[selectedCountry] || buyingPlatforms['DEFAULT'];
        const methodPlatforms = platforms[selectedMethod] || [];
        
        let platformsHtml = '';
        
        methodPlatforms.forEach(function(platform, index) {
            const isRecommended = platform.recommended;
            const recommendedClass = isRecommended ? 'platform-recommended' : '';
            const recommendedBadge = isRecommended ? '<div class="recommended-badge" data-i18n="buy_platform_recommended"></div>' : '';
            
            let featuresHtml = '';
            platform.features.forEach(function(feature) {
                featuresHtml += `<div data-i18n="${feature}"></div>`;
            });
            
            platformsHtml += `
                <div class="buy-platform-box ${recommendedClass}">
                    ${recommendedBadge}
                    <div class="container-inner">
                        <center><h6>${platform.name}</h6></center>
                        <p data-i18n="${platform.description}"></p>
                        <div class="platform-features">
                            ${featuresHtml}
                        </div>
                        <a href="${platform.link}" target="_blank">
                            <div class="platform-learn-button" data-i18n="common_learn_more"></div>
                        </a>
                    </div>
                </div>
            `;
        });
        
        $('#buying-platforms-container').html(platformsHtml);
        $('#buying-options').slideDown();
        
        // Re-apply translations to new content
        if (typeof $.i18n === 'function') {
            $('#buying-platforms-container').i18n();
        }
    }
});

import { TRANSACTION_STATUSES } from '../shared/constants/transaction';

const state = {
  "invalidCustomNetwork": {
    "state": "CLOSED",
    "networkName": ""
  },
  "unconnectedAccount": {
    "state": "CLOSED"
  },
  "activeTab": {
    "id": 113,
    "title": "E2E Test Dapp",
    "origin": "https://metamask.github.io",
    "protocol": "https:",
    "url": "https://metamask.github.io/test-dapp/"
  },
  "metamask": {
    "networkDetails": {
      "EIPS": {
        "1559": true
      },
    },
    "isInitialized": true,
    "isUnlocked": true,
    "isAccountMenuOpen": false,
    "rpcUrl": "https://rawtestrpc.metamask.io/",
    "identities": {
      "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": {
        "name": "This is a Really Long Account Name",
        "address": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4"
      },
      "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e": {
        "name": "Account 2",
        "address": "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e"
      },
      "0x9d0ba4ddac06032527b140912ec808ab9451b788": {
        "name": "Account 3",
        "address": "0x9d0ba4ddac06032527b140912ec808ab9451b788"
      }
    },
    "unapprovedTxs": {
      "3111025347726181": {
        "id": 3111025347726181,
        "time": 1620710815484,
        "status": "unapproved",
        "metamaskNetworkId": "3",
        "msgParams": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
        "chainId": "0x3",
        "loadingDefaults": false,
        "txParams": {
          "from": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
          "to": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
          "value": "0x0",
          "data": "0xa9059cbb000000000000000000000000b19ac54efa18cc3a14a5b821bfec73d284bf0c5e0000000000000000000000000000000000000000000000003782dace9d900000",
          "gas": "0xcb28",
          "gasPrice": "0x77359400"
        },
        "type": "standard",
        "origin": "metamask",
        "transactionCategory": "transfer",
        "history": [
          {
            "id": 7786962153682822,
            "time": 1620710815484,
            "status": "unapproved",
            "metamaskNetworkId": "3",
            "chainId": "0x3",
            "loadingDefaults": true,
            "txParams": {
              "from": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
              "to": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
              "value": "0x0",
              "data": "0xa9059cbb000000000000000000000000b19ac54efa18cc3a14a5b821bfec73d284bf0c5e0000000000000000000000000000000000000000000000003782dace9d900000",
              "gas": "0xcb28",
              "gasPrice": "0x77359400"
            },
            "type": "standard",
            "origin": "metamask",
            "transactionCategory": "transfer"
          },
          [
            {
              "op": "replace",
              "path": "/loadingDefaults",
              "value": false,
              "note": "Added new unapproved transaction.",
              "timestamp": 1620710815497
            }
          ]
        ]
      }
    },
    "frequentRpcList": [],
    "addressBook": {
      "undefined": {
        "0": {
          "address": "0x39a4e4Af7cCB654dB9500F258c64781c8FbD39F0",
          "name": "",
          "isEns": false
        }
      }
    },
    "contractExchangeRates": {
      "0xaD6D458402F60fD3Bd25163575031ACDce07538D": 0
    },
    "tokens": [
      {
        "address": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
        "symbol": "DAI",
        "decimals": 18
      }
    ],
    "pendingTokens": {},
    "customNonceValue": "",
    "send": {
      "gasLimit": "0xcb28",
      "gasPrice": null,
      "gasTotal": null,
      "tokenBalance": "8.7a73149c048545a3fe58",
      "from": "",
      "to": "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e",
      "amount": "3782dace9d900000",
      "memo": "",
      "errors": {},
      "maxModeOn": false,
      "editingTransactionId": null,
      "toNickname": "Account 2",
      "ensResolution": null,
      "ensResolutionError": "",
      "token": {
        "address": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
        "symbol": "DAI",
        "decimals": 18
      }
    },
    "useBlockie": false,
    "featureFlags": {},
    "welcomeScreenSeen": false,
    "currentLocale": "en",
    "preferences": {
      "useNativeCurrencyAsPrimaryCurrency": true
    },
    "firstTimeFlowType": "create",
    "completedOnboarding": true,
    "knownMethodData": {
      "0x60806040": {
        "name": "Approve Tokens"
      },
      "0x095ea7b3": {
        "name": "Approve Tokens"
      }
    },
    "participateInMetaMetrics": true,
    "nextNonce": 71,
    "connectedStatusPopoverHasBeenShown": true,
    "swapsWelcomeMessageHasBeenShown": true,
    "defaultHomeActiveTabName": "Assets",
    "provider": {
      "type": "ropsten",
      "ticker": "ETH",
      "nickname": "",
      "rpcUrl": "",
      "chainId": "0x3"
    },
    "previousProviderStore": {
      "type": "ropsten",
      "ticker": "ETH",
      "nickname": "",
      "rpcUrl": "",
      "chainId": "0x3"
    },
    "network": "3",
    "accounts": {
      "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": {
        "address": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
        "balance": "0x176e5b6f173ebe66"
      },
      "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e": {
        "address": "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e",
        "balance": "0x2d3142f5000"
      },
      "0x9d0ba4ddac06032527b140912ec808ab9451b788": {
        "address": "0x9d0ba4ddac06032527b140912ec808ab9451b788",
        "balance": "0x15f6f0b9d4f8d000"
      }
    },
    "currentBlockGasLimit": "0x793af4",
    "currentNetworkTxList": [
      {
        "chainId": "0x38",
        "dappSuggestedGasFees": null,
        "firstRetryBlockNumber": "0x9c2686",
        "hash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
        "history": [
          {
            "chainId": "0x38",
            "dappSuggestedGasFees": null,
            "id": 2360388496987298,
            "loadingDefaults": true,
            "metamaskNetworkId": "56",
            "origin": "metamask",
            "status": "unapproved",
            "time": 1629582710520,
            "txParams": {
              "data": "0xa9059cbb0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c2900000000000000000000000000000000000000000000000029a2241af62c0000",
              "from": "0x17f62b1b2407c41c43e14da0699d6b4b0a521548",
              "gas": "0x2eb27",
              "gasPrice": "0x12a05f200",
              "to": "0x2e8c05582176fa93b4590382e8290c73deb82176",
              "type": "0x0",
              "value": "0x0"
            },
            "type": "transfer"
          },
          [
            {
              "note": "Added new unapproved transaction.",
              "op": "replace",
              "path": "/loadingDefaults",
              "timestamp": 1629582710530,
              "value": false
            }
          ],
          [
            {
              "note": "txStateManager: setting status to approved",
              "op": "replace",
              "path": "/status",
              "timestamp": 1629582711218,
              "value": "approved"
            }
          ],
          [
            {
              "note": "transactions#approveTransaction",
              "op": "add",
              "path": "/txParams/nonce",
              "timestamp": 1629582711220,
              "value": "0x15b"
            },
            {
              "op": "add",
              "path": "/nonceDetails",
              "value": {
                "local": {
                  "details": {
                    "highest": 347,
                    "startPoint": 347
                  },
                  "name": "local",
                  "nonce": 347
                },
                "network": {
                  "details": {
                    "baseCount": 347,
                    "blockNumber": "0x9c2682"
                  },
                  "name": "network",
                  "nonce": 347
                },
                "params": {
                  "highestLocallyConfirmed": 327,
                  "highestSuggested": 347,
                  "nextNetworkNonce": 347
                }
              }
            }
          ],
          [
            {
              "note": "transactions#signTransaction: add r, s, v values",
              "op": "add",
              "path": "/r",
              "timestamp": 1629582711236,
              "value": "0x90a4dfb0646eef9815454d0ab543b5844acb8772101084565155c93ecce8ed69"
            },
            {
              "op": "add",
              "path": "/s",
              "value": "0x7fd317c727025490f282c7990b8518a7dab7521b1ada1cb639f887966bc078df"
            },
            {
              "op": "add",
              "path": "/v",
              "value": "0x93"
            }
          ],
          [
            {
              "note": "txStateManager: setting status to signed",
              "op": "replace",
              "path": "/status",
              "timestamp": 1629582711236,
              "value": "signed"
            }
          ],
          [
            {
              "note": "transactions#publishTransaction",
              "op": "add",
              "path": "/rawTx",
              "timestamp": 1629582711237,
              "value": "0xf8ad82015b85012a05f2008302eb27942e8c05582176fa93b4590382e8290c73deb8217680b844a9059cbb0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c2900000000000000000000000000000000000000000000000029a2241af62c00008193a090a4dfb0646eef9815454d0ab543b5844acb8772101084565155c93ecce8ed69a07fd317c727025490f282c7990b8518a7dab7521b1ada1cb639f887966bc078df"
            }
          ],
          [
            {
              "note": "transactions#setTxHash",
              "op": "add",
              "path": "/hash",
              "timestamp": 1629582711336,
              "value": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6"
            }
          ],
          [
            {
              "note": "txStateManager - add submitted time stamp",
              "op": "add",
              "path": "/submittedTime",
              "timestamp": 1629582711337,
              "value": 1629582711337
            }
          ],
          [
            {
              "note": "txStateManager: setting status to submitted",
              "op": "replace",
              "path": "/status",
              "timestamp": 1629582711338,
              "value": "submitted"
            }
          ],
          [
            {
              "note": "transactions/pending-tx-tracker#event: tx:block-update",
              "op": "add",
              "path": "/firstRetryBlockNumber",
              "timestamp": 1629582711878,
              "value": "0x9c2686"
            }
          ],
          [
            {
              "note": "txStateManager: setting status to confirmed",
              "op": "replace",
              "path": "/status",
              "timestamp": 1629582721178,
              "value": "confirmed"
            },
            {
              "op": "add",
              "path": "/txReceipt",
              "value": {
                "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
                "blockNumber": "9c2688",
                "contractAddress": null,
                "cumulativeGasUsed": "19a4942",
                "from": "0x17f62b1b2407c41c43e14da0699d6b4b0a521548",
                "gasUsed": "1f21a",
                "logs": [
                  {
                    "address": "0x2e8c05582176fa93b4590382e8290c73deb82176",
                    "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
                    "blockNumber": "9c2688",
                    "data": "0x00000000000000000000000000000000000000000000000028426c213d688000",
                    "logIndex": "245",
                    "removed": false,
                    "topics": [
                      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                      "0x00000000000000000000000017f62b1b2407c41c43e14da0699d6b4b0a521548",
                      "0x0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c29"
                    ],
                    "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
                    "transactionIndex": "ae"
                  },
                  {
                    "address": "0x2e8c05582176fa93b4590382e8290c73deb82176",
                    "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
                    "blockNumber": "9c2688",
                    "data": "0x000000000000000000000000000000000000000000000000006a94d74f430000",
                    "logIndex": "246",
                    "removed": false,
                    "topics": [
                      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                      "0x00000000000000000000000017f62b1b2407c41c43e14da0699d6b4b0a521548",
                      "0x000000000000000000000000c825413863f677a2012bb8db3a5e4a18bbf29e56"
                    ],
                    "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
                    "transactionIndex": "ae"
                  },
                  {
                    "address": "0x2e8c05582176fa93b4590382e8290c73deb82176",
                    "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
                    "blockNumber": "9c2688",
                    "data": "0x000000000000000000000000000000000000000000000000001ff973cafa8000",
                    "logIndex": "247",
                    "removed": false,
                    "topics": [
                      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                      "0x00000000000000000000000017f62b1b2407c41c43e14da0699d6b4b0a521548",
                      "0x0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c29"
                    ],
                    "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
                    "transactionIndex": "ae"
                  }
                ],
                "logsBloom": "0x20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000100000000000020000000000000000000000000000000008000000000080000000000000000000000000000000000000000040000000000000000000000040000000000200000010000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000200000000000000000000800000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000",
                "status": "0x1",
                "to": "0x2e8c05582176fa93b4590382e8290c73deb82176",
                "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
                "transactionIndex": "ae",
                "type": "0x0"
              }
            }
          ],
          [
            {
              "note": "transactions#confirmTransaction - add txReceipt",
              "op": "replace",
              "path": "/txReceipt/transactionIndex",
              "timestamp": 1629582721183,
              "value": "ae"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/2/logIndex",
              "value": "247"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/2/transactionIndex",
              "value": "ae"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/2/blockNumber",
              "value": "9c2688"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/1/logIndex",
              "value": "246"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/1/transactionIndex",
              "value": "ae"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/1/blockNumber",
              "value": "9c2688"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/0/logIndex",
              "value": "245"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/0/transactionIndex",
              "value": "ae"
            },
            {
              "op": "replace",
              "path": "/txReceipt/logs/0/blockNumber",
              "value": "9c2688"
            },
            {
              "op": "replace",
              "path": "/txReceipt/cumulativeGasUsed",
              "value": "19a4942"
            },
            {
              "op": "replace",
              "path": "/txReceipt/blockNumber",
              "value": "9c2688"
            }
          ]
        ],
        "id": 7900715443136469,
        "loadingDefaults": false,
        "metamaskNetworkId": "56",
        "nonceDetails": {
          "local": {
            "details": {
              "highest": 347,
              "startPoint": 347
            },
            "name": "local",
            "nonce": 347
          },
          "network": {
            "details": {
              "baseCount": 347,
              "blockNumber": "0x9c2682"
            },
            "name": "network",
            "nonce": 347
          },
          "params": {
            "highestLocallyConfirmed": 327,
            "highestSuggested": 347,
            "nextNetworkNonce": 347
          }
        },
        "origin": "metamask",
        "r": "0x90a4dfb0646eef9815454d0ab543b5844acb8772101084565155c93ecce8ed69",
        "rawTx": "0xf8ad82015b85012a05f2008302eb27942e8c05582176fa93b4590382e8290c73deb8217680b844a9059cbb0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c2900000000000000000000000000000000000000000000000029a2241af62c00008193a090a4dfb0646eef9815454d0ab543b5844acb8772101084565155c93ecce8ed69a07fd317c727025490f282c7990b8518a7dab7521b1ada1cb639f887966bc078df",
        "s": "0x7fd317c727025490f282c7990b8518a7dab7521b1ada1cb639f887966bc078df",
        "status": "confirmed",
        "submittedTime": 1629582711337,
        "time": 1629582710520,
        "txParams": {
          "data": "0xa9059cbb0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c2900000000000000000000000000000000000000000000000029a2241af62c0000",
          "from": "0x17f62b1b2407c41c43e14da0699d6b4b0a521548",
          "gas": "0x2eb27",
          "gasPrice": "0x12a05f200",
          "nonce": "0x15b",
          "to": "0x2e8c05582176fa93b4590382e8290c73deb82176",
          "type": "0x0",
          "value": "0x0"
        },
        "txReceipt": {
          "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
          "blockNumber": {
            "length": 1,
            "negative": 0,
            "red": null,
            "words": [
              10233480,
              null
            ]
          },
          "contractAddress": null,
          "cumulativeGasUsed": {
            "length": 1,
            "negative": 0,
            "red": null,
            "words": [
              26888514,
              null
            ]
          },
          "from": "0x17f62b1b2407c41c43e14da0699d6b4b0a521548",
          "gasUsed": "1f21a",
          "logs": [
            {
              "address": "0x2e8c05582176fa93b4590382e8290c73deb82176",
              "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
              "blockNumber": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  10233480,
                  null
                ]
              },
              "data": "0x00000000000000000000000000000000000000000000000028426c213d688000",
              "logIndex": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  581,
                  null
                ]
              },
              "removed": false,
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000017f62b1b2407c41c43e14da0699d6b4b0a521548",
                "0x0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c29"
              ],
              "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
              "transactionIndex": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  174,
                  null
                ]
              }
            },
            {
              "address": "0x2e8c05582176fa93b4590382e8290c73deb82176",
              "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
              "blockNumber": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  10233480,
                  null
                ]
              },
              "data": "0x000000000000000000000000000000000000000000000000006a94d74f430000",
              "logIndex": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  582,
                  null
                ]
              },
              "removed": false,
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000017f62b1b2407c41c43e14da0699d6b4b0a521548",
                "0x000000000000000000000000c825413863f677a2012bb8db3a5e4a18bbf29e56"
              ],
              "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
              "transactionIndex": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  174,
                  null
                ]
              }
            },
            {
              "address": "0x2e8c05582176fa93b4590382e8290c73deb82176",
              "blockHash": "0x30bf5dfa12e460a5d121267c00ba3047a14ba286e0c4fe75fa979010f527cba0",
              "blockNumber": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  10233480,
                  null
                ]
              },
              "data": "0x000000000000000000000000000000000000000000000000001ff973cafa8000",
              "logIndex": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  583,
                  null
                ]
              },
              "removed": false,
              "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x00000000000000000000000017f62b1b2407c41c43e14da0699d6b4b0a521548",
                "0x0000000000000000000000004ef2d5a1d056e7c9e8bcdbf2bd9ac0df749a1c29"
              ],
              "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
              "transactionIndex": {
                "length": 1,
                "negative": 0,
                "red": null,
                "words": [
                  174,
                  null
                ]
              }
            }
          ],
          "logsBloom": "0x20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000100000000000020000000000000000000000000000000008000000000080000000000000000000000000000000000000000040000000000000000000000040000000000200000010000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000200000000000000000000800000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000",
          "status": "0x1",
          "to": "0x2e8c05582176fa93b4590382e8290c73deb82176",
          "transactionHash": "0xf45e7a751adfc0fbadccc972816baf33eb34543e52ace51f0f8d0d7f357afdc6",
          "transactionIndex": {
            "length": 1,
            "negative": 0,
            "red": null,
            "words": [
              174,
              null
            ]
          },
          "type": "0x0"
        },
        "type": "transfer",
        "v": "0x93"
      }
    ],
    "cachedBalances": {
      "1": {
        "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": "0x0",
        "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e": "0xcaf5317161f400",
        "0x9d0ba4ddac06032527b140912ec808ab9451b788": "0x0"
      },
      "3": {
        "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": "0x18d289d450bace66",
        "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e": "0x2d3142f5000",
        "0x9d0ba4ddac06032527b140912ec808ab9451b788": "0x15f6f0b9d4f8d000"
      },
      "0x3": {
        "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": "0x176e5b6f173ebe66",
        "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e": "0x2d3142f5000",
        "0x9d0ba4ddac06032527b140912ec808ab9451b788": "0x15f6f0b9d4f8d000"
      }
    },
    "unapprovedMsgs": {},
    "unapprovedMsgCount": 0,
    "unapprovedPersonalMsgs": {},
    "unapprovedPersonalMsgCount": 0,
    "unapprovedDecryptMsgs": {},
    "unapprovedDecryptMsgCount": 0,
    "unapprovedEncryptionPublicKeyMsgs": {
      "7786962153682822": {
        "id": 7786962153682822,
        "msgParams": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
        "time": 1622687544054,
        "status": "unapproved",
        "type": "eth_getEncryptionPublicKey",
        "origin": "https://metamask.github.io"
      }
    },
    "unapprovedEncryptionPublicKeyMsgCount": 0,
    "unapprovedTypedMessages": {},
    "unapprovedTypedMessagesCount": 0,
    "keyringTypes": [
      "Simple Key Pair",
      "HD Key Tree",
      "Trezor Hardware",
      "Ledger Hardware"
    ],
    "keyrings": [
      {
        "type": "HD Key Tree",
        "accounts": [
          "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
          "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e",
          "0x9d0ba4ddac06032527b140912ec808ab9451b788"
        ]
      }
    ],
    "frequentRpcListDetail": [
      {
        "rpcUrl": "http://localhost:8545",
        "chainId": "0x539",
        "ticker": "ETH",
        "nickname": "Localhost 8545",
        "rpcPrefs": {}
      }
    ],
    "accountTokens": {
      "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": {
        "0x1": [
          {
            "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "symbol": "DAI",
            "decimals": 18
          },
          {
            "address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
            "symbol": "BAT",
            "decimals": 18
          }
        ],
        "0x3": [
          {
            "address": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
            "symbol": "DAI",
            "decimals": 18
          }
        ]
      },
      "0xb19ac54efa18cc3a14a5b821bfec73d284bf0c5e": {},
      "0x9d0ba4ddac06032527b140912ec808ab9451b788": {}
    },
    "accountHiddenTokens": {
      "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": {
        "0x3": []
      }
    },
    "assetImages": {
      "0xaD6D458402F60fD3Bd25163575031ACDce07538D": "./sai.svg"
    },
    "hiddenTokens": [],
    "suggestedTokens": {},
    "useNonceField": false,
    "usePhishDetect": true,
    "lostIdentities": {},
    "forgottenPassword": false,
    "ipfsGateway": "dweb.link",
    "infuraBlocked": false,
    "migratedPrivacyMode": false,
    "selectedAddress": "0x9d0ba4ddac06032527b140912ec808ab9451b788",
    "metaMetricsId": "0xc2377d11fec1c3b7dd88c4854240ee5e3ed0d9f63b00456d98d80320337b827f",
    "conversionDate": 1620710825.03,
    "conversionRate": 3910.28,
    "currentCurrency": "usd",
    "nativeCurrency": "ETH",
    "usdConversionRate": 3910.28,
    "ticker": "ETH",
    "alertEnabledness": {
      "unconnectedAccount": true,
      "web3ShimUsage": true
    },
    "unconnectedAccountAlertShownOrigins": {},
    "web3ShimUsageOrigins": {},
    "seedPhraseBackedUp": null,
    "onboardingTabs": {},
    "incomingTransactions": {
      "0x2de9256a7c604586f7ecfd87ae9509851e217f588f9f85feed793c54ed2ce0aa": {
        "blockNumber": "8888976",
        "id": 4678200543090532,
        "metamaskNetworkId": "1",
        "status": "confirmed",
        "time": 1573114896000,
        "txParams": {
          "from": "0x3f1b52850109023775d238c7ed5d5e7161041fd1",
          "gas": "0x5208",
          "gasPrice": "0x124101100",
          "nonce": "0x35",
          "to": "0x045c619e4d29bba3b92769508831b681b83d6a96",
          "value": "0xbca9bce4d98ca3"
        },
        "hash": "0x2de9256a7c604586f7ecfd87ae9509851e217f588f9f85feed793c54ed2ce0aa",
        "transactionCategory": "incoming"
      },
      "0x320a1fd769373578f78570e5d8f56e89bc7bce9657bb5f4c12d8fe790d471bfd": {
        "blockNumber": "9453174",
        "id": 4678200543090535,
        "metamaskNetworkId": "1",
        "status": "confirmed",
        "time": 1581312411000,
        "txParams": {
          "from": "0xa17bd07d6d38cb9e37b29f7659a4b1047701e969",
          "gas": "0xc350",
          "gasPrice": "0x1a13b8600",
          "nonce": "0x0",
          "to": "0x045c619e4d29bba3b92769508831b681b83d6a96",
          "value": "0xcdb08ab4254000"
        },
        "hash": "0x320a1fd769373578f78570e5d8f56e89bc7bce9657bb5f4c12d8fe790d471bfd",
        "transactionCategory": "incoming"
      },
      "0x8add6c1ea089a8de9b15fa2056b1875360f17916755c88ace9e5092b7a4b1239": {
        "blockNumber": "10892417",
        "id": 4678200543090542,
        "metamaskNetworkId": "1",
        "status": "confirmed",
        "time": 1600515224000,
        "txParams": {
          "from": "0x0681d8db095565fe8a346fa0277bffde9c0edbbf",
          "gas": "0x5208",
          "gasPrice": "0x1d1a94a200",
          "nonce": "0x2bb8a5",
          "to": "0x045c619e4d29bba3b92769508831b681b83d6a96",
          "value": "0xe6ed27d6668000"
        },
        "hash": "0x8add6c1ea089a8de9b15fa2056b1875360f17916755c88ace9e5092b7a4b1239",
        "transactionCategory": "incoming"
      },
      "0x50be62ab1cabd03ff104c602c11fdef7a50f3d73c55006d5583ba97950ab1144": {
        "blockNumber": "10902987",
        "id": 4678200543090545,
        "metamaskNetworkId": "1",
        "status": "confirmed",
        "time": 1600654021000,
        "txParams": {
          "from": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
          "gas": "0x5208",
          "gasPrice": "0x147d357000",
          "nonce": "0xf",
          "to": "0x045c619e4d29bba3b92769508831b681b83d6a96",
          "value": "0x63eb89da4ed00000"
        },
        "hash": "0x50be62ab1cabd03ff104c602c11fdef7a50f3d73c55006d5583ba97950ab1144",
        "transactionCategory": "incoming"
      }
    },
    "incomingTxLastFetchedBlocksByNetwork": {
      "ropsten": 8872820,
      "rinkeby": null,
      "kovan": null,
      "goerli": null,
      "mainnet": 10902989
    },
    "permissionsRequests": [],
    "permissionsDescriptions": {},
    "domains": {
      "https://app.uniswap.org": {
        "permissions": [
          {
            "@context": [
              "https://github.com/MetaMask/rpc-cap"
            ],
            "invoker": "https://app.uniswap.org",
            "parentCapability": "eth_accounts",
            "id": "a7342e4b-beae-4525-a36c-c0635fd03359",
            "date": 1620710693178,
            "caveats": [
              {
                "type": "limitResponseLength",
                "value": 1,
                "name": "primaryAccountOnly"
              },
              {
                "type": "filterResponse",
                "value": [
                  "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4"
                ],
                "name": "exposedAccounts"
              }
            ]
          }
        ]
      }
    },
    "permissionsLog": [
      {
        "id": 522690215,
        "method": "eth_accounts",
        "methodType": "restricted",
        "origin": "https://metamask.io",
        "request": {
          "method": "eth_accounts",
          "params": [],
          "jsonrpc": "2.0",
          "id": 522690215,
          "origin": "https://metamask.io",
          "tabId": 5
        },
        "requestTime": 1602643170686,
        "response": {
          "id": 522690215,
          "jsonrpc": "2.0",
          "result": []
        },
        "responseTime": 1602643170688,
        "success": true
      },
      {
        "id": 1620464600,
        "method": "eth_accounts",
        "methodType": "restricted",
        "origin": "https://widget.getacute.io",
        "request": {
          "method": "eth_accounts",
          "params": [],
          "jsonrpc": "2.0",
          "id": 1620464600,
          "origin": "https://widget.getacute.io",
          "tabId": 5
        },
        "requestTime": 1602643172935,
        "response": {
          "id": 1620464600,
          "jsonrpc": "2.0",
          "result": []
        },
        "responseTime": 1602643172935,
        "success": true
      },
      {
        "id": 4279100021,
        "method": "eth_accounts",
        "methodType": "restricted",
        "origin": "https://app.uniswap.org",
        "request": {
          "method": "eth_accounts",
          "jsonrpc": "2.0",
          "id": 4279100021,
          "origin": "https://app.uniswap.org",
          "tabId": 5
        },
        "requestTime": 1620710669962,
        "response": {
          "id": 4279100021,
          "jsonrpc": "2.0",
          "result": []
        },
        "responseTime": 1620710669963,
        "success": true
      },
      {
        "id": 4279100022,
        "method": "eth_requestAccounts",
        "methodType": "restricted",
        "origin": "https://app.uniswap.org",
        "request": {
          "method": "eth_requestAccounts",
          "jsonrpc": "2.0",
          "id": 4279100022,
          "origin": "https://app.uniswap.org",
          "tabId": 5
        },
        "requestTime": 1620710686872,
        "response": {
          "id": 4279100022,
          "jsonrpc": "2.0",
          "result": [
            "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4"
          ]
        },
        "responseTime": 1620710693187,
        "success": true
      },
      {
        "id": 4279100023,
        "method": "eth_requestAccounts",
        "methodType": "restricted",
        "origin": "https://app.uniswap.org",
        "request": {
          "method": "eth_requestAccounts",
          "jsonrpc": "2.0",
          "id": 4279100023,
          "origin": "https://app.uniswap.org",
          "tabId": 5
        },
        "requestTime": 1620710693204,
        "response": {
          "id": 4279100023,
          "jsonrpc": "2.0",
          "result": [
            "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4"
          ]
        },
        "responseTime": 1620710693213,
        "success": true
      },
      {
        "id": 4279100034,
        "method": "eth_accounts",
        "methodType": "restricted",
        "origin": "https://app.uniswap.org",
        "request": {
          "method": "eth_accounts",
          "params": [],
          "jsonrpc": "2.0",
          "id": 4279100034,
          "origin": "https://app.uniswap.org",
          "tabId": 5
        },
        "requestTime": 1620710712072,
        "response": {
          "id": 4279100034,
          "jsonrpc": "2.0",
          "result": [
            "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4"
          ]
        },
        "responseTime": 1620710712075,
        "success": true
      }
    ],
    "permissionsHistory": {
      "https://metamask.github.io": {
        "eth_accounts": {
          "lastApproved": 1620710693213,
          "accounts": {
            "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4": 1620710693213
          }
        }
      }
    },
    "domainMetadata": {
      "https://metamask.github.io": {
        "name": "E2E Test Dapp",
        "icon": "https://metamask.github.io/test-dapp/metamask-fox.svg",
        "lastUpdated": 1620723443380,
        "host": "metamask.github.io"
      },
      "https://app.uniswap.org": {
        "name": "Uniswap",
        "icon": "./UNI.png",
        "lastUpdated": 1620723443380,
        "host": "app.uniswap.org"
      }
    },
    "threeBoxSyncingAllowed": false,
    "showRestorePrompt": true,
    "threeBoxLastUpdated": 0,
    "threeBoxAddress": null,
    "threeBoxSynced": false,
    "threeBoxDisabled": false,
    "swapsState": {
      "quotes": {},
      "fetchParams": null,
      "tokens": null,
      "tradeTxId": null,
      "approveTxId": null,
      "quotesLastFetched": null,
      "customMaxGas": "",
      "customGasPrice": null,
      "selectedAggId": null,
      "customApproveTxData": "",
      "errorKey": "",
      "topAggId": null,
      "routeState": "",
      "swapsFeatureIsLive": false,
      "swapsQuoteRefreshTime": 60000
    },
    "ensResolutionsByAddress": {},
    "pendingApprovals": {},
    "pendingApprovalCount": 0
  },
  "appState": {
    "shouldClose": false,
    "menuOpen": false,
    "modal": {
      "open": false,
      "modalState": {
        "name": null,
        "props": {}
      },
      "previousModalState": {
        "name": null
      }
    },
    "sidebar": {
      "isOpen": false,
      "transitionName": "",
      "type": "",
      "props": {}
    },
    "alertOpen": false,
    "alertMessage": null,
    "qrCodeData": null,
    "networkDropdownOpen": false,
    "accountDetail": {
      "subview": "transactions"
    },
    "isLoading": false,
    "warning": null,
    "buyView": {},
    "isMouseUser": true,
    "gasIsLoading": false,
    "defaultHdPaths": {
      "trezor": "m/44'/60'/0'/0",
      "ledger": "m/44'/60'/0'/0/0"
    },
    "networksTabSelectedRpcUrl": "",
    "networksTabIsInAddMode": false,
    "loadingMethodData": false,
    "show3BoxModalAfterImport": false,
    "threeBoxLastUpdated": null,
    "requestAccountTabs": {},
    "openMetaMaskTabs": {},
    "currentWindowTab": {}
  },
  "history": {
    "mostRecentOverviewPage": "/"
  },
  "send": {
    "toDropdownOpen": false,
    "gasButtonGroupShown": true,
    "errors": {},
    "asset": {
      "type": "NATIVE",
      "balance": "0x0",
      "details": null
    },
  },
  "confirmTransaction": {
    "txData": {
      "id": 3111025347726181,
      "time": 1620723786838,
      "status": "unapproved",
      "metamaskNetworkId": "3",
      "chainId": "0x3",
      "loadingDefaults": false,
      "txParams": {
        "from": "0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",
        "to": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
        "value": "0x0",
        "data": "0x095ea7b30000000000000000000000009bc5baf874d2da8d216ae9f137804184ee5afef40000000000000000000000000000000000000000000000000000000000011170",
        "gas": "0xea60",
        "gasPrice": "0x4a817c800"
      },
      "type": "transfer",
      "origin": "https://metamask.github.io",
      "transactionCategory": "approve",
      "history": [
        {
          "id": 3111025347726181,
          "time": 1620723786838,
          "status": "unapproved",
          "metamaskNetworkId": "3",
          "chainId": "0x3",
          "loadingDefaults": true,
          "txParams": {
            "from": "0x983211ce699ea5ab57cc528086154b6db1ad8e55",
            "to": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
            "value": "0x0",
            "data": "0x095ea7b30000000000000000000000009bc5baf874d2da8d216ae9f137804184ee5afef40000000000000000000000000000000000000000000000000000000000011170",
            "gas": "0xea60",
            "gasPrice": "0x4a817c800"
          },
          "type": "standard",
          "origin": "https://metamask.github.io",
          "transactionCategory": "approve"
        },
        [
          {
            "op": "replace",
            "path": "/loadingDefaults",
            "value": false,
            "note": "Added new unapproved transaction.",
            "timestamp": 1620723786844
          }
        ]
      ]
    },
    "tokenData": {
      "args": [
        "0x9bc5baF874d2DA8D216aE9f137804184EE5AfEF4",
        {
          "type": "BigNumber",
          "hex": "0x011170"
        }
      ],
      "functionFragment": {
        "type": "function",
        "name": "approve",
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address",
            "indexed": null,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null,
            "baseType": "address",
            "_isParamType": true
          },
          {
            "name": "_value",
            "type": "uint256",
            "indexed": null,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null,
            "baseType": "uint256",
            "_isParamType": true
          }
        ],
        "outputs": [
          {
            "name": "success",
            "type": "bool",
            "indexed": null,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null,
            "baseType": "bool",
            "_isParamType": true
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "gas": null,
        "_isFragment": true
      },
      "name": "approve",
      "signature": "approve(address,uint256)",
      "sighash": "0x095ea7b3",
      "value": {
        "type": "BigNumber",
        "hex": "0x00"
      }
    },
    "fiatTransactionAmount": "0",
    "fiatTransactionFee": "4.72",
    "fiatTransactionTotal": "4.72",
    "ethTransactionAmount": "0",
    "ethTransactionFee": "0.0012",
    "ethTransactionTotal": "0.0012",
    "hexTransactionAmount": "0x0",
    "hexTransactionFee": "0x44364c5bb0000",
    "hexTransactionTotal": "0x44364c5bb0000",
    "nonce": ""
  },
  "swaps": {
    "aggregatorMetadata": null,
    "approveTxId": null,
    "balanceError": false,
    "fetchingQuotes": false,
    "fromToken": null,
    "quotesFetchStartTime": null,
    "topAssets": {},
    "toToken": null,
    "customGas": {
      "price": null,
      "limit": null,
      "loading": "INITIAL",
      "priceEstimates": {},
      "fallBackPrice": null
    }
  },
  "gas": {
    "customData": {
      "price": null,
      "limit": "0xcb28"
    },
    "basicEstimates": {
      "average": 2
    },
    "basicEstimateIsLoading": false
  }
}

export default state;

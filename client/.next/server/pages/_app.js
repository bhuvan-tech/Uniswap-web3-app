/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": () => (/* binding */ TransactionContext),\n/* harmony export */   \"TransactionProvider\": () => (/* binding */ TransactionProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/sanityClient */ \"./lib/sanityClient.js\");\n\n\n\n\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createContext();\nlet eth;\nif (false) {}\nconst getEthtereumContract = ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(eth);\n    const signer = provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(_lib_constants__WEBPACK_IMPORTED_MODULE_4__.contractAddress, _lib_constants__WEBPACK_IMPORTED_MODULE_4__.contractABI, signer);\n    return transactionContract;\n};\nconst TransactionProvider = ({ children  })=>{\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        addressTo: '',\n        amount: ''\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //create a user profile in sanity\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!currentAccount) return;\n        (async ()=>{\n            const userDoc = {\n                _type: 'users',\n                _id: currentAccount,\n                userName: 'Unnamed',\n                address: currentAccount\n            };\n            await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_5__.client.createIfNotExists(userDoc);\n        })();\n    }, [\n        currentAccount\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    const connectWallet = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.error(error);\n            throw new Error('No ethereum object');\n        }\n    };\n    const checkIfWalletIsConnected = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_accounts'\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n                console.log('wallet is connected');\n            }\n        } catch (error) {\n            console.error(error);\n            throw new Error('No ethtereum object.');\n        }\n    };\n    const sendTransaction = async (metamask = eth, connectedAccount = currentAccount)=>{\n        try {\n            if (!metamask) return alert('please install metamask');\n            const { addressTo , amount  } = formData;\n            const transactionContract = getEthtereumContract();\n            const parseAmount = ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.parseEther(amount);\n            await metamask.request({\n                method: 'eth_sendTransaction',\n                params: [\n                    {\n                        from: connectedAccount,\n                        to: addressTo,\n                        gas: '0x7ef40',\n                        value: parseAmount._hex\n                    }\n                ]\n            });\n            const transactionHash = await transactionContract.publishTransaction(addressTo, parseAmount, `Transferring ETH ${parseAmount} to ${addressTo}`, 'TRANSFER');\n            setIsLoading(true);\n            await transactionHash.wait();\n            //DB\n            await saveTransaction(transactionHash.hash, amount, connectedAccount, addressTo);\n            setIsLoading(false);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleChange = (e, name)=>{\n        setFormData((prevState)=>({\n                ...prevState,\n                [name]: e.target.value\n            })\n        );\n    };\n    const saveTransaction = async (txHash, amount, fromAddress = currentAccount, toAddress)=>{\n        const txDoc = {\n            _type: 'transactions',\n            _id: txHash,\n            fromAddress: fromAddress,\n            toAddress: toAddress,\n            timestamp: new Date(Date.now()).toISOString(),\n            txHash: txHash,\n            amount: parseFloat(amount)\n        };\n        await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_5__.client.createIfNotExists(txDoc);\n        await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_5__.client.patch(currentAccount).setIfMissing({\n            transactions: []\n        }).insert('after', 'transactions[-1]', [\n            {\n                _key: txHash,\n                _ref: txHash,\n                _type: 'reference'\n            }, \n        ]).commit();\n        return;\n    };\n    //loading modal\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isLoading) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/?loading=${currentAccount}`);\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');\n        }\n    }, [\n        isLoading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount,\n            connectWallet,\n            sendTransaction,\n            handleChange,\n            formData,\n            isLoading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/bhuvan/Desktop/uniswap/client/context/TransactionContext.js\",\n        lineNumber: 177,\n        columnNumber: 9\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUFDLENBQUMsRUFDakNDLE1BQU0sQ0FBQyxDQUFPLFFBQUUsQ0FBa0IsbUJBQUUsQ0FBQztZQUNwQyxDQUFDO2dCQUNDQyxJQUFJLEVBQUViLE1BQU07Z0JBQ1pjLElBQUksRUFBRWQsTUFBTTtnQkFDWnRDLEtBQUssRUFBRSxDQUFXO1lBQ3BCLENBQUM7UUFDSCxDQUFDLEVBQ0FxRCxNQUFNO1FBRVQsTUFBTTtJQUNSLENBQUM7SUFFRCxFQUFlO0lBQ2ZuRixnREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEVBQUNzQixTQUFTLEVBQUMsQ0FBQztZQUNWekIsdURBQVcsRUFBRSxVQUFVLEVBQUV1QixjQUFjO1FBQzNDLENBQUMsTUFDRyxDQUFDO1lBQ0R2Qix1REFBVyxDQUFDLENBQUc7UUFDbkIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDeUI7UUFBQUEsU0FBUztJQUFBLENBQUM7SUFFaEIsTUFBTSw2RUFDRGpCLGtCQUFrQixDQUFDZ0YsUUFBUTtRQUN4QjdCLEtBQUssRUFBRyxDQUFDO1lBQ0xwQyxjQUFjO1lBQ2RnQixhQUFhO1lBQ2JXLGVBQWU7WUFDZmdCLFlBQVk7WUFDWnZDLFFBQVE7WUFDUkYsU0FBUztRQUNiLENBQUM7a0JBQ0hILFFBQVE7Ozs7OztBQUdsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanM/Njk5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JyBcbmltcG9ydCB7Y29udHJhY3RBZGRyZXNzLGNvbnRyYWN0QUJJfSBmcm9tICcuLi9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHtjbGllbnR9IGZyb20gJy4uL2xpYi9zYW5pdHlDbGllbnQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5sZXQgZXRoXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgZXRoPSB3aW5kb3cuZXRoZXJldW1cbn1cblxuY29uc3QgZ2V0RXRodGVyZXVtQ29udHJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoKVxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgY29udHJhY3RBQkksXG4gICAgICAgIHNpZ25lclxuICAgIClcbiAgICByZXR1cm4gdHJhbnNhY3Rpb25Db250cmFjdFxufVxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT57XG4gICAgY29uc3QgWyBjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtpc0xvYWRpbmcsc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBhZGRyZXNzVG86ICcnLFxuICAgICAgICBhbW91bnQ6JycsXG4gICAgfSlcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICAvL2NyZWF0ZSBhIHVzZXIgcHJvZmlsZSBpbiBzYW5pdHlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighY3VycmVudEFjY291bnQpIHJldHVyblxuXG4gICAgICAgIC8vZnVudGlvbiB0byBjYWxsIGltbWVkaWF0bHlcbiAgICAgICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRG9jID0ge1xuICAgICAgICAgICAgICAgIF90eXBlOiAndXNlcnMnLFxuICAgICAgICAgICAgICAgIF9pZDogY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6ICdVbm5hbWVkJyxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBjdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZUlmTm90RXhpc3RzKHVzZXJEb2MpXG4gICAgICAgIH0pKClcbiAgICB9LFtjdXJyZW50QWNjb3VudF0pXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcbiAgICB9LFtdKVxuXG4gICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT57XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgncGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV0aGVyZXVtIG9iamVjdCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpPT57XG4gICAgICAgIFxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBpZighbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfYWNjb3VudHMnfSlcbiAgICAgICAgICAgIGlmKGFjY291bnRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3YWxsZXQgaXMgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldGh0ZXJldW0gb2JqZWN0LicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyhcbiAgICAgICAgbWV0YW1hc2sgPSBldGgsXG4gICAgICAgIGNvbm5lY3RlZEFjY291bnQgPSBjdXJyZW50QWNjb3VudFxuICAgICAgICApID0+IHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBpZighbWV0YW1hc2spIHJldHVybiBhbGVydCgncGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQgfSA9IGZvcm1EYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgID0gZ2V0RXRodGVyZXVtQ29udHJhY3QoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlQW1vdW50ID0gZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoYW1vdW50KVxuXG4gICAgICAgICAgICAgICAgYXdhaXQgbWV0YW1hc2sucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6W1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGNvbm5lY3RlZEFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IGFkZHJlc3NUbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXM6ICcweDdlZjQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpwYXJzZUFtb3VudC5faGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSGFzaCA9IGF3YWl0IHRyYW5zYWN0aW9uQ29udHJhY3QucHVibGlzaFRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVG8sXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBgVHJhbnNmZXJyaW5nIEVUSCAke3BhcnNlQW1vdW50fSB0byAke2FkZHJlc3NUb31gLFxuICAgICAgICAgICAgICAgICAgICAnVFJBTlNGRVInXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAgICAgICAgICAgYXdhaXQgdHJhbnNhY3Rpb25IYXNoLndhaXQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL0RCXG4gICAgICAgICAgICAgICAgYXdhaXQgc2F2ZVRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkhhc2guaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRBY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVG9cbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSxuYW1lKSA9PntcbiAgICAgICAgc2V0Rm9ybURhdGEoKHByZXZTdGF0ZSkgPT4gKHsuLi5wcmV2U3RhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KSlcbiAgICB9XG5cbiAgICBjb25zdCBzYXZlVHJhbnNhY3Rpb24gPSBhc3luYyAoXG4gICAgICAgIHR4SGFzaCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBmcm9tQWRkcmVzcyA9IGN1cnJlbnRBY2NvdW50LFxuICAgICAgICB0b0FkZHJlc3MsXG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgdHhEb2MgPSB7XG4gICAgICAgICAgX3R5cGU6ICd0cmFuc2FjdGlvbnMnLFxuICAgICAgICAgIF9pZDogdHhIYXNoLFxuICAgICAgICAgIGZyb21BZGRyZXNzOiBmcm9tQWRkcmVzcyxcbiAgICAgICAgICB0b0FkZHJlc3M6IHRvQWRkcmVzcyxcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdHhIYXNoOiB0eEhhc2gsXG4gICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFtb3VudCksXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYXdhaXQgY2xpZW50LmNyZWF0ZUlmTm90RXhpc3RzKHR4RG9jKVxuICAgIFxuICAgICAgICBhd2FpdCBjbGllbnRcbiAgICAgICAgICAucGF0Y2goY3VycmVudEFjY291bnQpXG4gICAgICAgICAgLnNldElmTWlzc2luZyh7IHRyYW5zYWN0aW9uczogW10gfSlcbiAgICAgICAgICAuaW5zZXJ0KCdhZnRlcicsICd0cmFuc2FjdGlvbnNbLTFdJywgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfa2V5OiB0eEhhc2gsXG4gICAgICAgICAgICAgIF9yZWY6IHR4SGFzaCxcbiAgICAgICAgICAgICAgX3R5cGU6ICdyZWZlcmVuY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIC5jb21taXQoKVxuICAgIFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy9sb2FkaW5nIG1vZGFsXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihpc0xvYWRpbmcpe1xuICAgICAgICAgICAgUm91dGVyLnB1c2goYC8/bG9hZGluZz0ke2N1cnJlbnRBY2NvdW50fWApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgfSwgW2lzTG9hZGluZ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZSA9e3tcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICBjb25uZWN0V2FsbGV0LFxuICAgICAgICAgICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPntjaGlsZHJlbn1cbiAgICAgICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIlJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsImNsaWVudCIsInVzZVJvdXRlciIsIlRyYW5zYWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJldGgiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldEV0aHRlcmV1bUNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImFkZHJlc3NUbyIsImFtb3VudCIsInJvdXRlciIsInVzZXJEb2MiLCJfdHlwZSIsIl9pZCIsInVzZXJOYW1lIiwiYWRkcmVzcyIsImNyZWF0ZUlmTm90RXhpc3RzIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwiY29ubmVjdFdhbGxldCIsIm1ldGFtYXNrIiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImxlbmd0aCIsImxvZyIsInNlbmRUcmFuc2FjdGlvbiIsImNvbm5lY3RlZEFjY291bnQiLCJwYXJzZUFtb3VudCIsInV0aWxzIiwicGFyc2VFdGhlciIsInBhcmFtcyIsImZyb20iLCJ0byIsImdhcyIsInZhbHVlIiwiX2hleCIsInRyYW5zYWN0aW9uSGFzaCIsInB1Ymxpc2hUcmFuc2FjdGlvbiIsIndhaXQiLCJzYXZlVHJhbnNhY3Rpb24iLCJoYXNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJ0eEhhc2giLCJmcm9tQWRkcmVzcyIsInRvQWRkcmVzcyIsInR4RG9jIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInRvSVNPU3RyaW5nIiwicGFyc2VGbG9hdCIsInBhdGNoIiwic2V0SWZNaXNzaW5nIiwidHJhbnNhY3Rpb25zIiwiaW5zZXJ0IiwiX2tleSIsIl9yZWYiLCJjb21taXQiLCJwdXNoIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contractABI\": () => (/* binding */ contractABI),\n/* harmony export */   \"contractAddress\": () => (/* binding */ contractAddress)\n/* harmony export */ });\n/* harmony import */ var _Transactions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transactions.json */ \"./lib/Transactions.json\");\n\nconst contractABI = _Transactions_json__WEBPACK_IMPORTED_MODULE_0__.abi;\nconst contractAddress = '0x999E49e7E6B49ee228B4E2c267c6927A5F68a322';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUU5QixLQUFLLENBQUNDLFdBQVcsR0FBR0QsbURBQU87QUFDM0IsS0FBSyxDQUFDRSxlQUFlLEdBQUcsQ0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzLmpzPzI5ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFiaSBmcm9tICcuL1RyYW5zYWN0aW9ucy5qc29uJ1xuXG5leHBvcnQgY29uc3QgY29udHJhY3RBQkkgPSBhYmkuYWJpXG5leHBvcnQgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4OTk5RTQ5ZTdFNkI0OWVlMjI4QjRFMmMyNjdjNjkyN0E1RjY4YTMyMiciXSwibmFtZXMiOlsiYWJpIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/constants.js\n");

/***/ }),

/***/ "./lib/sanityClient.js":
/*!*****************************!*\
  !*** ./lib/sanityClient.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// uniswap token - skIgiE1XsgC0e0pwH7TSWFMU42z7pWOszUBKm9YgktLxHCeQ7Qso8ItRAkmSvHCZ180ZGsuq0sZhgX1jXYWniD37SLct2ddivES20qKjEAVAHJ8yFZem3cYN6xZwBZdnOm385AqUTcUgmkTiZsJs9S27tYyTzv9hqdL4eWv2PSeCa8rhrBOe\n// projectId - te7gnvfj\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: 'te7gnvfj',\n    dataset: 'production',\n    apiVersion: 'v1',\n    token: 'skIgiE1XsgC0e0pwH7TSWFMU42z7pWOszUBKm9YgktLxHCeQ7Qso8ItRAkmSvHCZ180ZGsuq0sZhgX1jXYWniD37SLct2ddivES20qKjEAVAHJ8yFZem3cYN6xZwBZdnOm385AqUTcUgmkTiZsJs9S27tYyTzv9hqdL4eWv2PSeCa8rhrBOe',\n    useCdn: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5Q2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQXVNO0FBQ3ZNLEVBQXVCO0FBRWtCO0FBRWxDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHRCxxREFBWSxDQUFDLENBQUM7SUFDaENFLFNBQVMsRUFBRSxDQUFVO0lBQ3JCQyxPQUFPLEVBQUUsQ0FBWTtJQUNyQkMsVUFBVSxFQUFFLENBQUk7SUFDaEJDLEtBQUssRUFBRSxDQUFzTDtJQUM3TEMsTUFBTSxFQUFFLEtBQUs7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9zYW5pdHlDbGllbnQuanM/MTA0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1bmlzd2FwIHRva2VuIC0gc2tJZ2lFMVhzZ0MwZTBwd0g3VFNXRk1VNDJ6N3BXT3N6VUJLbTlZZ2t0THhIQ2VRN1FzbzhJdFJBa21TdkhDWjE4MFpHc3VxMHNaaGdYMWpYWVduaUQzN1NMY3QyZGRpdkVTMjBxS2pFQVZBSEo4eUZaZW0zY1lONnhad0JaZG5PbTM4NUFxVVRjVWdta1RpWnNKczlTMjd0WXlUenY5aHFkTDRlV3YyUFNlQ2E4cmhyQk9lXG4vLyBwcm9qZWN0SWQgLSB0ZTdnbnZmalxuXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcbiAgICBwcm9qZWN0SWQ6ICd0ZTdnbnZmaicsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgdG9rZW46ICdza0lnaUUxWHNnQzBlMHB3SDdUU1dGTVU0Mno3cFdPc3pVQkttOVlna3RMeEhDZVE3UXNvOEl0UkFrbVN2SENaMTgwWkdzdXEwc1poZ1gxalhZV25pRDM3U0xjdDJkZGl2RVMyMHFLakVBVkFISjh5RlplbTNjWU42eFp3Qlpkbk9tMzg1QXFVVGNVZ21rVGlac0pzOVMyN3RZeVR6djlocWRMNGVXdjJQU2VDYThyaHJCT2UnLFxuICAgIHVzZUNkbjogZmFsc2UsXG59KSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInRva2VuIiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sanityClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/bhuvan/Desktop/uniswap/client/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bhuvan/Desktop/uniswap/client/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDbUM7U0FFeERDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0xILDRFQUFtQjs4RkFDakJFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge1RyYW5zYWN0aW9uUHJvdmlkZXJ9IGZyb20gJy4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgPFRyYW5zYWN0aW9uUHJvdmlkZXI+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L1RyYW5zYWN0aW9uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./lib/Transactions.json":
/*!*******************************!*\
  !*** ./lib/Transactions.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Transactions","sourceName":"contracts/Transactions.sol","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"keyword","type":"string"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address payable","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"messsage","type":"string"},{"internalType":"string","name":"keyword","type":"string"}],"name":"publishTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5061049a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637d0ee35714610030575b600080fd5b61004a60048036038101906100459190610125565b61004c565b005b7f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa3385858542866040516100859695949392919061021e565b60405180910390a150505050565b60006100a66100a1846102b2565b61028d565b9050828152602081018484840111156100be57600080fd5b6100c9848285610383565b509392505050565b6000813590506100e081610436565b92915050565b600082601f8301126100f757600080fd5b8135610107848260208601610093565b91505092915050565b60008135905061011f8161044d565b92915050565b6000806000806080858703121561013b57600080fd5b6000610149878288016100d1565b945050602061015a87828801610110565b935050604085013567ffffffffffffffff81111561017757600080fd5b610183878288016100e6565b925050606085013567ffffffffffffffff8111156101a057600080fd5b6101ac878288016100e6565b91505092959194509250565b6101c18161034d565b82525050565b6101d0816102ff565b82525050565b60006101e1826102e3565b6101eb81856102ee565b93506101fb818560208601610392565b61020481610425565b840191505092915050565b61021881610343565b82525050565b600060c08201905061023360008301896101c7565b61024060208301886101b8565b61024d604083018761020f565b818103606083015261025f81866101d6565b905061026e608083018561020f565b81810360a083015261028081846101d6565b9050979650505050505050565b60006102976102a8565b90506102a382826103c5565b919050565b6000604051905090565b600067ffffffffffffffff8211156102cd576102cc6103f6565b5b6102d682610425565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061030a82610323565b9050919050565b600061031c82610323565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103588261035f565b9050919050565b600061036a82610371565b9050919050565b600061037c82610323565b9050919050565b82818337600083830152505050565b60005b838110156103b0578082015181840152602081019050610395565b838111156103bf576000848401525b50505050565b6103ce82610425565b810181811067ffffffffffffffff821117156103ed576103ec6103f6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61043f81610311565b811461044a57600080fd5b50565b61045681610343565b811461046157600080fd5b5056fea2646970667358221220a16c572bc733e532b1f3b1954d9beaf5f591c08e43a13695149a09ddedad6cc164736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061002b5760003560e01c80637d0ee35714610030575b600080fd5b61004a60048036038101906100459190610125565b61004c565b005b7f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa3385858542866040516100859695949392919061021e565b60405180910390a150505050565b60006100a66100a1846102b2565b61028d565b9050828152602081018484840111156100be57600080fd5b6100c9848285610383565b509392505050565b6000813590506100e081610436565b92915050565b600082601f8301126100f757600080fd5b8135610107848260208601610093565b91505092915050565b60008135905061011f8161044d565b92915050565b6000806000806080858703121561013b57600080fd5b6000610149878288016100d1565b945050602061015a87828801610110565b935050604085013567ffffffffffffffff81111561017757600080fd5b610183878288016100e6565b925050606085013567ffffffffffffffff8111156101a057600080fd5b6101ac878288016100e6565b91505092959194509250565b6101c18161034d565b82525050565b6101d0816102ff565b82525050565b60006101e1826102e3565b6101eb81856102ee565b93506101fb818560208601610392565b61020481610425565b840191505092915050565b61021881610343565b82525050565b600060c08201905061023360008301896101c7565b61024060208301886101b8565b61024d604083018761020f565b818103606083015261025f81866101d6565b905061026e608083018561020f565b81810360a083015261028081846101d6565b9050979650505050505050565b60006102976102a8565b90506102a382826103c5565b919050565b6000604051905090565b600067ffffffffffffffff8211156102cd576102cc6103f6565b5b6102d682610425565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061030a82610323565b9050919050565b600061031c82610323565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103588261035f565b9050919050565b600061036a82610371565b9050919050565b600061037c82610323565b9050919050565b82818337600083830152505050565b60005b838110156103b0578082015181840152602081019050610395565b838111156103bf576000848401525b50505050565b6103ce82610425565b810181811067ffffffffffffffff821117156103ed576103ec6103f6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61043f81610311565b811461044a57600080fd5b50565b61045681610343565b811461046157600080fd5b5056fea2646970667358221220a16c572bc733e532b1f3b1954d9beaf5f591c08e43a13695149a09ddedad6cc164736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
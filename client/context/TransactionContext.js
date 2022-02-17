import React, {useState, useEffect } from 'react' 

export const TransactionContext = React.createContext()

let eth
if(typeof window !== 'undefined'){
    eth= window.ethereum
}

export const TransactionProvider = ({children}) =>{
    const [ currentAccount, setCurrentAccount] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        addressTo: '',
        amount:'',
    })
    
    useEffect(() => {
        checkIfWalletIsConnected()
    },[])

    const connectWallet = async (metamask = eth) =>{
        try{
            if (!metamask) return alert('please install metamask')
            const accounts = await metamask.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch(error){
            console.error(error)
            throw new Error('No ethereum object')
        }
    }

    const checkIfWalletIsConnected = async (metamask = eth)=>{
        
        try{
            if(!metamask) return alert('Please install metamask')
            const accounts = await metamask.request({method: 'eth_accounts'})
            if(accounts.length){
                setCurrentAccount(accounts[0]);
                console.log('wallet is connected');
            }
        }catch(error){
            console.error(error)
            throw new Error('No ethtereum object.')
        }
    }

    const sendTransaction = async(
        metamask = eth,
        connectedAccount = currentAccount
        ) => {
            try{
                if(!metamask) return alert('please install metamask')
                const { addressTo, amount } = formData;
                const transactionContract  = getEthtereumContract()
                const parseAmount = ethers.utils.parseEther(amount)

                await metamask.request({
                    method: 'eth_sendTransaction',
                    params:[
                        {
                            from: connectedAccount,
                            to: addressTo,
                            gas: '0x7ef40',
                            value:parseAmount._hex,
                        }
                    ],
                     
                })

                const transactionHash = await transactionContract.publishTransaction(
                    addressTo,
                    parseAmount,
                    `Transferring ETH ${parseAmount} to ${addressTo}`,
                    'TRANSFER'
                )

                setIsLoading(true)
                await transactionHash.wait();
                //DB
                // await saveTransaction{
                //     transactionHash.hash,
                //     amount,
                //     connectedAccount,
                //     addressTo
                // }
                setIsLoading(false)
            } catch(error){
                console.log(error);
            }
        }
    

    return (
        <TransactionContext.Provider
            value ={{
                currentAccount,
                connectWallet,
                sendTransaction,
                
            }}
        >{children}
        </TransactionContext.Provider>
    )
}

import { ethers } from 'ethers'
import Router from 'next/router'
import React, {useState, useEffect } from 'react' 
import {contractAddress,contractABI} from '../lib/constants'
import {client} from '../lib/sanityClient'
import { useRouter } from 'next/router'

export const TransactionContext = React.createContext()

let eth
if(typeof window !== 'undefined'){
    eth= window.ethereum
}

const getEthtereumContract = () => {
    const provider = new ethers.providers.Web3Provider(eth)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    )
    return transactionContract
}
export const TransactionProvider = ({children}) =>{
    const [ currentAccount, setCurrentAccount] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        addressTo: '',
        amount:'',
    })

    const router = useRouter()

    //create a user profile in sanity
    useEffect(() => {
        if(!currentAccount) return

        //funtion to call immediatly
        ;(async () => {
            const userDoc = {
                _type: 'users',
                _id: currentAccount,
                userName: 'Unnamed',
                address: currentAccount,
            }

            await client.createIfNotExists(userDoc)
        })()
    },[currentAccount])
    
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
                await saveTransaction(
                    transactionHash.hash,
                    amount,
                    connectedAccount,
                    addressTo
                )

                setIsLoading(false);

            } catch(error){
                console.log(error);
            }
        }
    const handleChange = (e,name) =>{
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    }

    const saveTransaction = async (
        txHash,
        amount,
        fromAddress = currentAccount,
        toAddress,
      ) => {
        const txDoc = {
          _type: 'transactions',
          _id: txHash,
          fromAddress: fromAddress,
          toAddress: toAddress,
          timestamp: new Date(Date.now()).toISOString(),
          txHash: txHash,
          amount: parseFloat(amount),
        }
    
        await client.createIfNotExists(txDoc)
    
        await client
          .patch(currentAccount)
          .setIfMissing({ transactions: [] })
          .insert('after', 'transactions[-1]', [
            {
              _key: txHash,
              _ref: txHash,
              _type: 'reference',
            },
          ])
          .commit()
    
        return
      }

      //loading modal
      useEffect(() => {
        if(isLoading){
            Router.push(`/?loading=${currentAccount}`)
        }
        else{
            Router.push('/')
        }
      }, [isLoading])

    return (
        <TransactionContext.Provider
            value ={{
                currentAccount,
                connectWallet,
                sendTransaction,
                handleChange,
                formData,
                isLoading,
            }}
        >{children}
        </TransactionContext.Provider>
    )
}

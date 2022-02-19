const main = async() =>{
    const transactionFactory = await hre.ethers.getContractFactory('Transactions')
    const transactionContract = await transactionFactory.deploy();

    await transactionContract.deployed()

    console.log('Transaction deployed to ',transactionContract.address)
}
;(async ()=>{
    try{
        await main()
        process.exit(0)
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
})()

// contract deployed at 0x999E49e7E6B49ee228B4E2c267c6927A5F68a322
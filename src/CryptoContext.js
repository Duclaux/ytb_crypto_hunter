import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

const Crypto =  createContext()

const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("INR")
    const [symbole, setSymbole] = useState("र")


    useEffect(() => {
        if(currency === "INR") setSymbole("₹")
        else if(currency === "USD") setSymbole("$")
        else if(currency === "FRA") setSymbole("€")
    }, [currency])
    

  return (
    <Crypto.Provider value={{currency, symbole, setCurrency}}>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto)
}
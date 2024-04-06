"use client";
import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [account, setAccount] = React.useState(null);
    const [amount, setAmount] = React.useState(null);
    return(
        <UserContext.Provider value={{account, setAccount,amount, setAmount}}>
            {children}
        </UserContext.Provider>
    )
}   

export default UserContextProvider;

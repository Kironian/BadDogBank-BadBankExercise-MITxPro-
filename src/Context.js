import React, { useState, createContext, useContext } from 'react';

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser:null,
        users: [
            {
                name: "TiredKiran",
                email: "tiredkiranisgivingup@gmail.com",
                password: "send help",
                balance: 0.99,
            }
        ]
    });

    const [loggedUser, setLoggedUser] = useState('')

    const setActiveUser = (e) => {
        const user = bank.users.find(user => user.name === e);
        setLoggedUser(user);
    }

    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username,
        });
    }

    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user]
        });
    }

    return (
        <BankContext.Provider value={{
            bank,
            addUser,
            setLoggedInUser,
            loggedUser,
            setActiveUser,
        }}>
            {children}
        </BankContext.Provider>
    );
}
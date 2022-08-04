import React,{useState,createContext,useContext} from "react";

const myContext = createContext();

export const Context =({children})=>{
    const [haveAcc,setHaveAcc] = useState(false);
    const [user,setUser] = useState('');

    console.log(user)
    const addUser = (userData)=>{
        setUser(userData)

        if(user !== [] || user.length <= 0){
            setHaveAcc(true)
        }
    }

    return <myContext.Provider value={{haveAcc,addUser,user,setHaveAcc}}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext)
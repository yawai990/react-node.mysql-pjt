import React,{useState,createContext,useContext} from "react";

const myContext = createContext();

export const Context =({children})=>{

    //check the acc is if exit in the database 
    const [haveAcc,setHaveAcc] = useState(true);

    //get the current user data
    const [user,setUser] = useState('');

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
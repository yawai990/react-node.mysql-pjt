import React,{useState,createContext,useContext} from "react";

const myContext = createContext();

export const Context =({children})=>{
    const [haveAcc,setHaveAcc] = useState(false);

    return <myContext.Provider value={{haveAcc}}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext)
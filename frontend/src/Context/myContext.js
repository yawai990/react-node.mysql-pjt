import React,{useState,useEffect,createContext,useContext} from "react";
import { getEmployees } from "../api";

const myContext = createContext();

export const Context =({children})=>{

    //check the acc is if exit in the database 
    const [haveAcc,setHaveAcc] = useState(true);
    const [dataShow,setDataShow] = useState('income');
    //get the id for a staff
    const [staffId,setStaffId] = useState(null);

    const [form,setForm] = useState(false);
    const [employeeData,setEmpolyeeData] = useState(undefined);


    //get the current user data
    const [user,setUser] = useState([{role:'admin'}]);

    const addUser = (userData)=>{
        setUser(userData)

        if(user !== [] || user.length <= 0){
            setHaveAcc(true)
        }
    }

    const getAllStaff= async()=>{
        const data= await getEmployees();
        setEmpolyeeData(data.data)
     }
    useEffect(()=>{
        getAllStaff()
    },[]);

    return <myContext.Provider value={{
        haveAcc,addUser
        ,user,setHaveAcc,
        dataShow,setDataShow,
        staffId,setStaffId,
        form,setForm,employeeData,setEmpolyeeData,getAllStaff
        }}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext)
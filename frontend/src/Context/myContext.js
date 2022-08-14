import React,{useState,useEffect,createContext,useContext} from "react";
import { getEmployees,getEmployee } from "../api";

const myContext = createContext();

export const Context =({children})=>{

    //check the acc is if exit in the database 
    const [haveAcc,setHaveAcc] = useState(true);
    const [dataShow,setDataShow] = useState('income');

    //get all the employee
    const [employeeData,setEmpolyeeData] = useState(undefined);
    const [getOneEmployees,setOneEmployee] = useState('');
    const [updateOneEmployee,setUpdateOneEmployee] = useState('')

    //for the popups box
    const [respText,setRespText] = useState('');

    //product Model
    const [productModel,setProductModel] = useState(false)

    setTimeout(() => {
        setRespText('')
    }, 2000);

    //get the id for a staff
    const [staffId,setStaffId] = useState(null);
    const [form,setForm] = useState(false);
    const [addForm,setAddForm] = useState(false);


    //get the current user data
    const [user,setUser] = useState([{role:'admin'}]);

    const addUser = (userData)=>{
        setUser(userData)

        if(user !== [] || user.length <= 0){
            setHaveAcc(true)
        }
    }

    const getAllStaff= async()=>{
        const {data}= await getEmployees();
        setEmpolyeeData(data)
     }
    useEffect(()=>{
        getAllStaff()
    },[]);
    useEffect(()=>{
        getAllStaff()
    },[staffId]);

    const getOneStaff=async(id)=>{
        const {data} = await getEmployee(id);

        setOneEmployee(data)
        setUpdateOneEmployee(data)
        setStaffId(id)
    }

    return <myContext.Provider value={{
        haveAcc,addUser
        ,user,setHaveAcc,
        dataShow,setDataShow,
        staffId,setStaffId,
        addForm,setAddForm,
        respText,setRespText,
        productModel,setProductModel,
        getOneEmployees,setOneEmployee,getOneStaff,
        form,setForm,employeeData,setEmpolyeeData,getAllStaff,updateOneEmployee
        }}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext)
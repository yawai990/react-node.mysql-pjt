import React,{useState,useEffect,createContext,useContext} from "react";
import { getEmployees,getEmployee,getProducts,getProduct,getAllUsers, deleteUser } from "../api";

const myContext = createContext();

export const Context =({children})=>{

    //check the acc is if exit in the database 
    const [haveAcc,setHaveAcc] = useState('');
    const [getUsers,setGetUsers] = useState(null);
    const [dataShow,setDataShow] = useState('income');

    //FOR EMPLOYEES DATA
    const [employeeData,setEmpolyeeData] = useState(undefined);
    const [getOneEmployees,setOneEmployee] = useState('');
    const [updateOneEmployee,setUpdateOneEmployee] = useState('')

    //PRODUCTS
    const [productData,setProductData] = useState([]);
    const [getOneProduct,setOneProduct] = useState('');
    const [addProductForm,setAddProductForm] = useState(false);
    const [updateProductForm,setUpdateProductForm] = useState(false)
    //product Model
    const [productModel,setProductModel] = useState(false)

    //for the popups box
    const [respText,setRespText] = useState('');
    const [signUpPopUp,setSignUpPopUp] = useState(false);


    setTimeout(() => {
        setRespText('')
    }, 2000);

    //get the id for a staff
    const [staffId,setStaffId] = useState(null);
    const [form,setForm] = useState(false);
    const [addForm,setAddForm] = useState(false);


    //get the current user data
    const [user,setUser] = useState('');

    const addUser = (userData)=>{
        setUser(userData)

        if(user !== [] || user.length <= 0){
            setHaveAcc(true)
        }
    }

    const getallusers=async()=>{
        const {data} = await getAllUsers();
        setGetUsers(data)
    };

    const deleteuser=async(id)=>{
        console.log(id)
        await deleteUser(id)
        .then(resp=>{
            getallusers()
            setRespText(resp.data.message)
        })
    }

    const getAllStaff= async()=>{
        const {data}= await getEmployees();
        setEmpolyeeData(data)
     };

        const getAllProducts=async()=>{
            const {data} = await getProducts();

            setProductData(data)
     }
    useEffect(()=>{
        getAllStaff()
        getAllProducts()
        getallusers()
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

    const OneProduct=async(id)=>{
        const {data} = await getProduct(id);

        setOneProduct(data)

        setProductModel(true)
    }

    return <myContext.Provider value={{
        haveAcc,addUser
        ,user,setHaveAcc,
        dataShow,setDataShow,
        staffId,setStaffId,
        addForm,setAddForm,
        respText,setRespText,
        signUpPopUp,setSignUpPopUp,
        productModel,setProductModel,
        getOneEmployees,setOneEmployee,getOneStaff,
        form,setForm,
        employeeData,setEmpolyeeData,
        getAllStaff,updateOneEmployee,
        productData,setProductData,getAllProducts,
        OneProduct,getOneProduct,
        addProductForm,setAddProductForm,
        updateProductForm,setUpdateProductForm,
        getUsers,deleteuser
        }}>
        {children}
    </myContext.Provider>
};

export const useGlobalContext =()=>useContext(myContext)
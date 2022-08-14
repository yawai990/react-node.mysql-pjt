import axios from 'axios';

const URL = 'http://localhost:5000/api'

export const login =accData=>axios.post(URL + '/login',accData);
export const signup =newData=>axios.post(URL + '/create-user',newData);

export const getEmployees=()=>axios.get(URL + '/staffs');
export const getEmployee=(id)=>axios.get(URL + `/staffs/${id}`);
export const addNewEmpoyee =(employeeData)=>axios.post(URL + `/staffs/add_staff`,employeeData);
export const updateEmployee=(id,data)=>axios.patch(URL + `/staffs/${id}`,data)
export const deleteEmployees=async (id)=>axios.delete(URL +`/staffs/${id}`);

export const getProducts=()=>axios.get(URL + '/products');
export const getProduct=(id)=>axios.get(URL + `/products/${id}`);
export const createProduct =(employeeData)=>axios.post(URL + `/products/add_product`,employeeData);
export const updateProduct=(id,data)=>axios.patch(URL + `/products/${id}`,data)
export const deleteProduct=async (id)=>axios.delete(URL +`/products/${id}`);
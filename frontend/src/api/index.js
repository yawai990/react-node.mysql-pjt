import axios from 'axios';

const URL = 'http://localhost:5000/api'

export const login =accData=>axios.post(URL + '/login',accData);
export const signup =newData=>axios.post(URL + '/create-user',newData);
export const getEmployees=()=>axios.get(URL + '/staffs');
export const getEmployee=(id)=>axios.get(URL + `/staffs/${id}`);
export const addNewEmpoyee =(employeeData)=>axios.post(URL + `/staffs/add_staff`,employeeData);
export const updateEmployee=(id,data)=>axios.patch(URL + `/staffs/${id}`,data)
export const deleteEmployees=async (id)=>axios.delete(URL +`/staffs/${id}`);
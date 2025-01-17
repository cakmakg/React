import React from 'react'
import { useDispath } from "react-redux"
import { fetchFail, fetchStart } from '../../../inclass-stock-app/src/features/authSlice'
import { registerSucces } from '../features/authSlice';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const useAuthCall = () => {
    const dispatch = useDispath()
    const navigate=useNavigate()

    const register = async (userInfo) => {
        

        dispatch(fetchStart())

        try {
            const { data } = await axios.post("https://10101.fullstack.clarusway.com/users",userInfo
            );
            dispatch(registerSucces(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    const login = async (userInfo) => {
        

        dispatch(fetchStart())

        try {
            const { data } = await axios.post("https://10101.fullstack.clarusway.com/users",userInfo
            );
            dispatch(loginSucces(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
        }
    }
     return 
    {register,login}
     
};
export default useAuthCall;

import React from "react";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import useAxios from "./useAxios";

const useStockCall = () => {
    const dispatch=useDispatch()
    const {token}=useSelector((state)=>state.auth)
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const {axiosWithToken}=useAxios()

const getStockData= async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({data,url}))
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getDeleteData= async (url,id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postStockData= async (url,info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`${url}`,info)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const putStockData= async (url,info) => {
    dispatch(fetchStart());
    try {
      console.log(info)
      const { data } = await axiosWithToken.put(`${url}/${info._id}`,info)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail());
    }
  };



  return { getStockData, getDeleteData,postStockData,putStockData};
};

export default useStockCall;


import { createSlice } from "@reduxjs/toolkit";


// 2 değişkene email, password getImageListItemBarUtilityClass, bir tane de kullanıcı oluşturan fonksiyona(submit)

const yetkiSlice=createSlice({
    name:"yetkiSlice",
    initialState:{
        email:"",
        password:""
    },
    reducers:{
        olusturKullanici:(state, {payload})=>{

        }
    }
})
export const {olusturKullanici}= yetkiSlice.actions

export default yetkiSlice.reducer
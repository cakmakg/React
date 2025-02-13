 //https://fkhadra.github.io/react-toastify/introduction

 import {toast} from "react-toastify"


 export const successToast=(msg)=>{
   toast.success(msg, {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
  
   });
 }

 export const warnToast=(msg)=>{
 toast.warn(msg, {
   position: "top-right",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
 });


 }

 export const errorToast=(msg)=>{
   toast.error(msg, {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });  
 }
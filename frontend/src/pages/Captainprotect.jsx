import axios from 'axios';
import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router';
import { CaptainDatacontext } from '../context/Captaincontext';
import 'remixicon/fonts/remixicon.css'

const Captainprotect = ({children}) => {
   const token = localStorage.getItem('token');
const {captain, setCaptain} = useContext(CaptainDatacontext);


    const navigate = useNavigate();

   if (!token) {
       useEffect(() => {
           navigate('/captain-login');
         
       }, [token]);
         return null;
   }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/getcaptain`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
       if(response.status ===201){
        setCaptain(response.data.captain);

       }
    })
    .catch(error => {
      
      navigate('/captain-login');
      console.log(error)
    });

  return (
    <div>
{children}
    </div>
  )
}

export default Captainprotect
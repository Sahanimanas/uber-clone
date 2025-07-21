import React from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
const Captainlogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  axios.post(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status == 200) {
      navigate('/captain-login');
      localStorage.removeItem('token')
    }
  })

  return (
    <div>Captainlogout</div>
  )
}

export default Captainlogout
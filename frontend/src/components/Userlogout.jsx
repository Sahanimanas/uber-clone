import axios from 'axios'
import {useNavigate} from  'react-router'
const Userlogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.post('/users/logout',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response == 200){
            navigate('/user-login');
            localStorage.removeItem('token')
        }
    })


    return (
    <div>Userlogout</div>
  )
}

export default Userlogout
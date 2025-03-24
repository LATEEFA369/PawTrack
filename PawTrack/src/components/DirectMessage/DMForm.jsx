import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

const DM = (props)=>{
    const {userid} = useParams()
    const [msg,setMsg] = useState({ text: '' });
    const [Newmsg,setNewmsg] = useState({text: ''});

    
};

export default DM;
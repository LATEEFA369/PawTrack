import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import * as DMservices from '../../services/messagesService';

const DM = (props)=>{
    const {receiverUserid} = useParams()
   console.log('Receiver User ID:', receiverUserid);
    const [messages,setMessages] = useState([]);
    const [reciveMsg,setreciveMsg] = useState({text: ''});
    const user = useContext(AuthedUserContext);
    const { senderid } = props;
   // const [formData, setFormData] = useState({ text: '' });

    useEffect(()=>{
    
      if (receiverUserid) {
    const fetchMessages = async () => {
    console.log(`Receiver User ID: ${receiverUserid}`);
     
     try{
        const fetchMsg = await DMservices.showMessage(receiverUserid)
        console.log(`Fetched messages:, ${fetchMsg}`);
        setMessages(fetchMsg)
     }

     catch(error){
        console.log(error)
     }

       
      // const interval = setInterval(fetchMessages, 5000);
      // return () => clearInterval(interval);

    };
    fetchMessages(); 
  }
   
   },[receiverUserid])


   const handleChange = (evt) => {
      setreciveMsg({ ...reciveMsg, [evt.target.name]: evt.target.value });
    };

    const handleMassage = async (evt) => {
      evt.preventDefault();
      try{
         const newMessage = await DMservices.createMessage(receiverUserid, { message: reciveMsg.text });
         setMessages((reciveMsg) =>[...reciveMsg,newMessage]);

         setreciveMsg({text: ' '})
       
        
      } catch(error){
         console.log(error)
      }
    
    

    return(
      <div>
      <p>Messages with User ID: {receiverUserid}</p>
      {/* Render messages or other content */}
    </div>
      
  );
   };
}

export default DM;
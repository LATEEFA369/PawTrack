const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/messages`;

const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

 const createMessage = async (receiverUserid,message) => {

    try {
      const res = await fetch(`${BASE_URL}/${receiverUserid}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };


  const showMessage = async (receiverUserid) => {
    
  
    try {
      console.log(`URL being requested: ${BASE_URL}/${receiverUserid}`);
      const res = await fetch(`${BASE_URL}/${receiverUserid}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!res.ok) {
        const errorText = await res.text(); // Log error response
        throw new Error(`Error: ${res.status} - ${errorText}`);
    }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

 




  export {
     index,
     showMessage,
     createMessage
  };
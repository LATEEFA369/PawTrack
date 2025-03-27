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

 const createMessage = async (receiverUserId,postId,formDm) => { 


    try {
      if (!formDm || !formDm.text) {
        console.error('Message data is undefined or missing "text"');
        return;
      }

      console.log('BASE_URL:', BASE_URL); // Check if BASE_URL is correct
      console.log('receiverUserid:', receiverUserId); // Check if receiverUserid is valid
       console.log('Message Data:', formDm); 

      const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found in localStorage');
      return;
    }

    console.log(`Sending message to: ${BASE_URL}/${receiverUserId}/${postId}`);
    console.log('Message:', formDm.text);
      const res = await fetch(`${BASE_URL}/${receiverUserId}/${postId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message:formDm.text }),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };


  const showMessage = async (receiverUserId,postId) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token not found in localStorage');
            return [];
        }

        const res = await fetch(`${BASE_URL}/${receiverUserId}/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Failed to fetch messages: ${res.status} - ${errorText}`);
            return [];
        }

        const messages = await res.json();
        return messages || []; 
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
};




  export {
     index,
     showMessage,
     createMessage
  };
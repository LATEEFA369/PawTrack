// import { Link } from 'react-router-dom';
// import { AuthedUserContext } from '../../App';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useState, useEffect, useContext} from 'react';
// import * as DMservices from '../../services/messagesService';


import { useState, useEffect} from 'react';
import * as DMservices from '../../services/messagesService'; // assuming your message services are in this folder
import { useNavigate ,useParams } from 'react-router-dom';

const DM = () => {
  const {receiverUserId, postId} = useParams();
  const [messages, setMessages] = useState([]);
  const [formDm, setFormDm] = useState({ text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

   // Assuming you get these from the URL params

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await DMservices.showMessage(receiverUserId, postId);
        setMessages(fetchedMessages);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load messages.');
      }
    };

    if (receiverUserId && postId) {
      fetchMessages();
    }
  }, [receiverUserId, postId]);

  // Handle adding a message (similar to handleAddPost)
  const handleAddMessage = async (formData) => {
    setIsLoading(true);
    setError(null);

    console.log(" receiverUserid:", receiverUserId);
    console.log(" postid:", postId);
    console.log(" formData:", formData);

    try {
      if (receiverUserid && postid) {
        const newMessage = await DMservices.createMessage(receiverUserId, postId, formData);
        setMessages((prevMessages) => [newMessage, ...prevMessages]); // Prepend the new message
        setFormDm({ text: '' });
        navigate(`/messages/${receiverUserId}/${postId}`);
      } else {
        setError('Invalid message data');
      }
    } catch (err) {
      setError('Failed to submit the message!');
    } finally {
      setIsLoading(false);
    }
  };

  
  // const handleDeleteMessage = async (messageId) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     await DMservices.deleteMessage(messageId); 
  //     setMessages(messages.filter((msg) => msg._id !== messageId)); 
  //   } catch (err) {
  //     setError('Failed to delete the message!');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


  // const handleUpdateMessage = async (messageId, updatedText) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const updatedMessage = await DMservices.updateMessage(messageId, updatedText); 
  //     setMessages(messages.map((msg) => (msg._id === messageId ? updatedMessage : msg)));
  //   } catch (err) {
  //     setError('Failed to update the message!');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleAddMessage(formDm); }}>
        <textarea
          required
          name="text"
          value={formDm.text}
          onChange={(e) => setFormDm({ text: e.target.value })}
        />
        <button type="submit" disabled={isLoading}>Send Message</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      <div className="messages-list">
        <h2>Messages</h2>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id}>
              <p>{msg.sender.username}: {msg.text}</p>
              {/* <button onClick={() => handleDeleteMessage(msg._id)}>Delete</button>
              <button onClick={() => handleUpdateMessage(msg._id, 'Updated message text')}>Update</button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DM;
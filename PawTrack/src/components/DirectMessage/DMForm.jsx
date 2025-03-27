


import { useState, useEffect} from 'react';
import * as DMservices from '../../services/messagesService'; 
import { useNavigate ,useParams } from 'react-router-dom';

const DM = () => {
  const {receiverUserId, postId} = useParams();
  const [messages, setMessages] = useState([]);
  const [formDm, setFormDm] = useState({ text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  

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

 
  const handleAddMessage = async (formData) => {
    setIsLoading(true);
    setError(null);

    console.log(" receiverUserid:", receiverUserId);
    console.log(" postid:", postId);
    console.log(" formData:", formData);

    try {
      if (receiverUserid && postid) {
        const newMessage = await DMservices.createMessage(receiverUserId, postId, formData);
        setMessages((prevMessages) => [newMessage, ...prevMessages]); 
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DM;
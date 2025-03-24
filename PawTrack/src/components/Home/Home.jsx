import { AuthedUserContext } from '../../App';
 import { useContext } from 'react';
 
 const Home = ({}) => {
   const user = useContext(AuthedUserContext);
   return (
     <main>
       <h1>Welcome, {user.username}</h1>
       <p>
         This is the Home page.
       </p>
     </main>
   );
 };
 
 export default Home;
import React from 'react';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

const App = () => {
  return (
    <div style={{  backgroundColor: '#f5f5dc',  padding: '20px'}}>
      <h1 style={{ fontWeight:'bold' , fontStyle:'italic' , color:'blue' , textAlign:'center', textShadow:'2px 2px 4px #000000'}}>Mon Profil</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;


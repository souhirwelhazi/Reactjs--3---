import React from 'react';
import image1 from './im1.jpg'
function ProfilePhoto() {
  return (
    <div>
        
      <img src={image1} alt="Photo de profil" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '350px',    height: '350px'}} />
    </div>
  );
}

export default ProfilePhoto;




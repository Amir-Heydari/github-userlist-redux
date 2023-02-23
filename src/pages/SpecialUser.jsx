import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Specialuser({ borderColor,textColor }) {

  const { specialuser } = useParams();
  const [specialUser, setSpecialUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${specialuser}`)
      .then(result => result.json())
      .then(result => {
        setSpecialUser(result);
      })
  }, [])


  return (
    <div style={{ color:`${textColor}`, border: `solid ${borderColor} 5px `, padding: '20px' }}>
      <img src={specialUser.avatar_url} alt={specialUser.login} />
      <h2> Name:{specialUser.name}</h2>
      <h2>Locatin:{specialUser.location}</h2>
      <h2>is admin:{specialUser.site_admin ? 'Yes' : 'No'}</h2>
    </div>
  )
}

export default Specialuser

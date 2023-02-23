import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';


export default function UserList({borderColor,textColor}) {


    const [users, setUsers] = useState([]);
    const [numperpg, setNumperpg] = useState(20);
    const [since, setSince] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users?per_page=${numperpg}&since=${since}`)
            .then(result => result.json())
            .then(result => {
                setUsers(result);
            })
    }, [numperpg, since])


    const showUser = users.map((user) => {
        return (
            <a href={`/users/${user.login}`} style={{color:`${textColor}`, border: `solid ${borderColor} 5px `, margin: ' 5px 5px', padding:'5px' }}>
                <img
                    style={{ width: '80px', height: '80px' }}
                    src={user.avatar_url}
                    alt='user'
                />
                {user.login}
            </a>
        )
    })

    
   
    return (
        <>


            <button style={{fontSize:'25px'}} onClick={() => setSince(-1)}>1</button>
            <button style={{fontSize:'25px',marginLeft:'5px'}} onClick={() => setSince(numperpg)}>2</button>
            <button style={{fontSize:'25px',marginLeft:'5px'}} onClick={() => setSince((numperpg * 2))}>3</button>
            <button style={{fontSize:'25px',marginLeft:'5px'}} onClick={() => setSince((numperpg * 3))}>4</button>

            <select defaultValue={numperpg} onChange={e => setNumperpg(e.target.value)} style={{ width: '80px', height: '50px', fontSize: '20px', marginLeft:'85%' }} >
                <option>20</option>
                <option>35</option>
                <option>50</option>
            </select>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {showUser}
            </div>
        </>
    )
}

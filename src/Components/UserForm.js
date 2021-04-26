import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function UserForm() {
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        age: '',
        gender: '', 
        city: []
    });

    const history = useHistory();

    const getCity = (event) => {
        if(userDetails.city.includes(event.target.value)) {
            let index = userDetails.city.indexOf(event.target.value)
            userDetails.city.splice(index, 1);
        } else {
            userDetails.city.push(event.target.value);
        }
    }

    const addUser = () => {
        let data = [];
        data.push(userDetails);
        localStorage.setItem('userData', JSON.stringify(data));
        history.push('/user-list');
    }

    return (
        <div>
            <h2 style={{textDecoration: 'underline'}}>Add user</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{fontSize: '17px'}}>Full name</label>
                <input type="text" placeholder="Enter name" value={userDetails.fullName} onChange={e => setUserDetails({...userDetails, fullName: e.target.value})} style={{width: '20%', height: '20px', fontSize: '16px'}}></input>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '50px'}}>
                <label style={{fontSize: '17px'}}>Age</label>
                <select value={userDetails.age} onChange={e => setUserDetails({...userDetails, age: e.target.value})} style={{width: '20%', height: '25px', fontSize: '16px'}}>
                    <option>Select age group</option>
                    <option>18+</option>
                    <option>19 to 25</option>
                    <option>26 to 35</option>
                    <option>35+</option>
                </select>
            </div>
            <div style={{marginTop: '50px'}}>
                <label style={{marginLeft: '-250px'}}>Gender</label>
                <label htmlFor="male" style={{fontSize: '17px', marginLeft: '500px'}}>Male</label>
                <input type="radio" id="male" value="Male" name="gender" checked={userDetails.gender === 'Male'} onChange={e => setUserDetails({...userDetails, gender: e.target.value})}></input>
                <label htmlFor="female" style={{fontSize: '17px', marginLeft: '15px'}}>Female</label>
                <input type="radio" id="female" value="Female" name="gender" checked={userDetails.gender === 'Female'} onChange={e => setUserDetails({...userDetails, gender: e.target.value})}></input>
            </div>
            <div style={{marginTop: '50px'}}>
                <label>Select city</label>
                <input type="checkbox" id="chd" value="Chandigarh" style={{marginLeft: '500px'}} onChange={getCity}></input>
                <label htmlFor="chd">Chandigarh</label>
                <input type="checkbox" id="mohali" value="Mohali" style={{marginLeft: '50px'}} onChange={getCity}></input>
                <label htmlFor="mohali">Mohali</label>
                <input type="checkbox" id="pck" value="Panchkula" style={{marginLeft: '50px'}} onChange={getCity}></input>
                <label htmlFor="pck">Panchkula</label>
            </div>
            <div style={{marginTop: '5%'}}>
                <button style={{padding: '5px', width: '100px', fontSize: '16px'}} onClick={addUser}>Submit</button>
            </div>
        </div>
    )
}

export default UserForm

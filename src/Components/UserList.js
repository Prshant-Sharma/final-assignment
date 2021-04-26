import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

function UserList() {
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        getDataFromLocal();
    }, [localData]);

    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const editIcon = <FontAwesomeIcon icon={faPen} />

    const getDataFromLocal = () => {
        setLocalData(JSON.parse(localStorage.getItem('userData')));
        // setLocalData(data);
    }

    return (
        <div>
            {localData.map((data, index) => {
                return(
                    <div key={index}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>City</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {localData.map((data, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{data.fullName}</td>
                                            <td>{data.age}</td>
                                            <td>{data.gender}</td>
                                            <td>{data.city.join(', ')}</td>
                                            <td>
                                                <button>{editIcon}</button>
                                                <button>{deleteIcon}</button>
                                            </td>
                                        </tr>
                                        
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList

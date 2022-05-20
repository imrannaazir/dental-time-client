import React from 'react';
import toast from 'react-hot-toast';

const User = ({ i, refetch, user: { email, role } }) => {

    const handleRole = email => {
        console.log(email);
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role === 'admin' ?
                        <button class="btn btn-xs">Admin</button>
                        :
                        <button
                            onClick={() => handleRole(email)}
                            class="btn btn-xs">Make Admin</button>}

            </td>
            <td>Blue</td>
        </tr>
    );
};

export default User;
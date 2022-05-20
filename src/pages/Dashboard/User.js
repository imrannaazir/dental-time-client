import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const User = ({ i, refetch, user: { email, role } }) => {
    const handleRole = () => {
        (async function () {
            const { data } = await axios.put(`http://localhost:5000/users/admin/${email}`)
            console.log(data);
            refetch();
            toast.success("New admin created successfully.")
        })()
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
                            onClick={handleRole}
                            class="btn btn-xs">Make Admin</button>}

            </td>
            <td>Blue</td>
        </tr>
    );
};

export default User;
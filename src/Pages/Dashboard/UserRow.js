import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { name, email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }

    return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm btn-outline btn-warning">Make Admin</button>}</td>
            </tr>
    );
};

export default UserRow;
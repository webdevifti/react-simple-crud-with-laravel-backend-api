import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import http from '../http';
const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
             setData(res.data.user);
            //  console.log(res.data.data);
        })
    }
    const deleteUser = (id) => {
        
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
            //  console.log(res.data.data);
        })
        
    }
  return (
    <div>
        <h2>All Users</h2>
        <table className='table table-hovered'>
            <thead>
                <tr>
                    <th>Sl</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (

                <tr key={user.id}>
                    <td>{++index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    
                    <td>
                        <Link className='btn btn-info btn-sm' to={{pathname:"edit/"+user.id}}>Edit</Link>&nbsp;
                        <Link className='btn btn-success btn-sm' to={{pathname:"view/"+user.id}}>View</Link>&nbsp;
                        <button type='button' className='btn btn-danger btn-sm' onClick={() => {deleteUser(user.id)}}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Users
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import http from '../http'
const Edit = (props) => {
  const [users, setUsers] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetchUser();
  },[]);
  const fetchUser = () => {
    http.get('/users/'+id+'/edit').then((res) => {
        setUsers({
            name: res.data.user.name,
            email: res.data.user.email
        });
    });
  }
 
  return (
    <div>
        <h2>View Users</h2>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 justify-content-center'>
                <div className='card p-4'>
                        <h4><strong>Name : </strong> {users.name}</h4>
                        <h4><strong>Email : </strong> {users.email}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit
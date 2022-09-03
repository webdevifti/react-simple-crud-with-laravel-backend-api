import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import http from '../http'
const Edit = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetchUser();
  },[]);
  const fetchUser = () => {
    http.get('/users/'+id+'/edit').then((res) => {
        setInputs({
            name: res.data.user.name,
            email: res.data.user.email
        });
    });
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  const submitForm = () => {
    http.put('/users/'+id, inputs).then((res) => {
      navigate('/');
    })
  }
  return (
    <div>
        <h2>Update Users</h2>
        <div className='row'>
            <div className='col-sm-6 justify-content-center'>
                <div className='card p-4'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' className='form-control mb-2'
                      value={inputs.name || ''}
                      onChange={handleChange}

                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='form-control mb-2'
                     value={inputs.email || ''}
                     onChange={handleChange}
                    />

                   
                    <button onClick={submitForm} type='submit' className='btn btn-info btn-sm mt-2'>Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit
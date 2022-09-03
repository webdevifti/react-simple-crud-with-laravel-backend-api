import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import http from '../http'
const CreateUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  const submitForm = () => {
    http.post('/users', inputs).then((res) => {
      navigate('/');
    })
  }
  return (
    <div>
        <h2>Create New Users</h2>
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

                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className='form-control mb-2'
                       value={inputs.password || ''}
                       onChange={handleChange}
                    />

                    <button onClick={submitForm} type='submit' className='btn btn-info btn-sm mt-2'>Create</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser
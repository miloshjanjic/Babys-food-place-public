import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/index.css';

export function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  //const [loginRessult, setLoginRessult] = useState();
  const [loading, setLoading] = useState(false);

  //const userLogged = useSelector(state => state.UsersReducer.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    console.log(user);
    // e.preventDefault();
    dispatch(login(user)).then(
      response => {
        console.log(response);
        redirectIfLogedIn(response);
        setSuccess('Logged in successfully');
        setError('');
        setLoading(true);
      }).catch(error => {
        console.log(error);
        setSuccess('');
        setError('The email or password is incorrect !!');
        setLoading(false);
      });
  };

  async function redirectIfLogedIn(value) {
    if (value != null && value != false) {
      history.push(`/${value}/myProfile`);
      //< Redirect to={`/${value}/myProfile`} />
    }
  }

  return (
    <div id="login">
      <div className='h2'>Log In</div>
      <div className='formBody'>
        <div className='formText'>
          <h2 className='orangeHeader'>Welcome to <span style={{ color: "gray" }}>Baby`s</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Curabitur ut dui ac risus auctor ornare.
          Nam congue ligula quis venenatis auctor. Praesent
          justo risus, aliquet eu elit id, sollicitudin pharetra
          lacus. Aenean feugiat hendrerit dolor, ullamcorper
          sollicitudin mi ullamcorper id. Nulla vel tortor sapien.
          Proin tristique erat bibendum felis sollicitudin finibus.
            Integer ut euismod risus, in semper nisl. Nam congue pharetra aliquet.</p>
        </div>
        <form className='form'>
          <p>Email</p>
          <input
            type='email'
            className='input'
            placeholder='...@yahoo.com'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <p>Password</p>
          <input
            type='password'
            className='input'
            placeholder='***'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <br /><br />
          <button className='greenBtn' onClick={handleSubmit}>LOG IN</button>
        </form>

      </div>
    </div>
  )
};
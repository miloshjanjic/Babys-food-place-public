import React, { useContext, useState } from 'react';
import '../assets/index.css';
import { Redirect, useHistory } from 'react-router-dom';
//import { login } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

export function Login() {

  const [user, setUser] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loginRessult, setLoginRessult] = useState();
  const [loading, setLoading] = useState(false);
  // const { login } = useAuth();

  const userLogged = useSelector(state => state.UsersReducer.users);
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  //const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoginRessult(await dispatch(login(user)));
  //   if (loginRessult != null) {
  //     //dispatch(login(user));
  //     console.log(`Logged in successfully `);
  //     console.log(loginRessult);
  //     setSuccess('Logged in successfully');
  //     setError('');
  //     setLoading(true);
  //     history.push(`/${loginRessult}/myProfile`);
  //   } else {
  //     setSuccess('');
  //     setError('The email or password is incorrect !!');
  //     setLoading(false);
  //   }
  // }

  console.dir(`Login user: ${userLogged} and user: ${user}`);

  // TODOresearch how to get return value from login(user)
  /// when you get the login(user) return value, call redirect, or write to Dime :D 

  // await login(user).then((value) => {
  //   if (value != null) {
  //     < Redirect to={`/${value}/myProfile`} />
  //   }
  // }
  // );
  // setRedirect(true);

  //const userId = user._id;
  // const userId = userLogged._id;
  // if (redirect) {
  //   console.log(userLogged._id);

  //   return <Redirect to={`/${userLogged._id}/myProfile`} />
  // }

  // async function submitLogin(values) {  // f-ja za login da se primeni vo Actions i da vrati values !
  //   let result = await login(values);
  //   if (result.id) {
  //     setSuccess("Logged in successfully");
  //     setError("");
  //     setTimeout(function () {
  //       history.push('/')
  //       if(props.setshowLogin) props.setshowLogin(false);
  //     }, 800);
  //   } else {
  //     setError("The email or password is incorrect");
  //   }
  // }

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
        {/* <form className='form'>
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
            placeholder='*****'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <br /><br />
          <button className='greenBtn' onClick={handleSubmit}>LOG IN</button>
        </form> */}
  
  
      </div>
    </div>
  )
};
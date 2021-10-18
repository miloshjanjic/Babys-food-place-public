import React, { useState } from 'react';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, showOneUser } from '../actions/UserActions';
import { Redirect } from 'react-router-dom';
import FileBase from 'react-file-base64';
//import { set } from 'mongoose';
//import Cookies from 'universal-cookie';

export function MyProfile() {
  // const cookies = new Cookies();
  // const token = cookies.get("token");
  //const [token, setToken] = useState(JSON.parse(localStorage.getItem('profile',token)));
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const loggedUser = useSelector(state => state.UsersReducer.users); //! not work
  //const loggedUser = useState(JSON.parse(localStorage.getItem('profile')));

  const token = useSelector(state => state.UsersReducer.token); //! WORK
  const [user, setUser] = useState(loggedUser); //! not work  !!!

  console.log(`MyProfile user: ${loggedUser}`);
  console.log(`MyProfile Token: ${token}`);

  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = user._id;

    //dispatch(showOneUser(userId,user));
    dispatch(updateUser(userId, user)); //user or setUser
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to={`/${loggedUser._id}/myProfile`} />
  }


  return (
    <div id="myProfile">
      <div className='h2'>My Profile</div>
      <div className='formBody'>
        <div className='formAvatar'>
          <img src={user.avatar} alt="Avatar" className="avatar" />
          <div><FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setUser({ ...user, avatar: base64 })} /></div>
        </div>
        <div>
          <form className='form'>
            <p>First Name</p>
            <input
              type='text'
              placeholder='John'
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            ></input>
            <p>Email</p>
            <input
              type='email'
              placeholder='email@yahoo.com'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <p>Password</p>
            <input
              type='password'
              placeholder='**********'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
            <br /><br />
            <button className='greenBtn' onClick={handleSubmit}>UPDATE ACCOUNT</button>
          </form>
        </div>
        <div>
          <form className='form'>
            <p>Last Name</p>
            <input
              type='text'
              placeholder='Doo'
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            ></input>
            <p>Birthday</p>
            <input
              type='string'
              value={user.birthday}
              // .format('YYYY-MM-DD') 
              // yourDate.toISOString().split('T')[0]
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            ></input>
            <p>Repeat Password</p>
            <input
              type='password'
              placeholder='**********'
              value={user.repeatPassword}
              onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
};
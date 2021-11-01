import React, { useState } from 'react';
import '../assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, showOneUser } from '../actions/UserActions';
import { Redirect, useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';

export function MyProfile() {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  //const loggedUser = useState(JSON.parse(localStorage.getItem('profile')));

  const loggedUser = useSelector(state => state.UsersReducer.users); //! WORK

  const token = useSelector(state => state.UsersReducer.token); //! WORK
  const [user, setUser] = useState(loggedUser); //! NOT work  !!!

  console.log(`MyProfile user: ${loggedUser}`);
  console.log(`MyProfile Token: ${token}`);
  console.log(`MyProfile user: ${user}`);
  //const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = user._id;
    //const userId = loggedUser._id

    dispatch(updateUser(userId, user)); //! NOT work
    history.push(`/${loggedUser._id}/myProfile`);
    //setRedirect(true);
  }
  //const userId = loggedUser._id;

  // if (redirect) {
  //   return <Redirect to={`/${loggedUser._id}/myProfile`} />
  // } //    return <Redirect to={`/${loggedUser._id}/myProfile`} />

  console.log(`This is userId: ${loggedUser._id}`);

  return (
    <div id="myProfile">
      <div className='h2'>My Profile</div>
      <div className='formBody'>
        <div className='formAvatar'>
          <img src={user.avatar} alt="Avatar" className="avatar" />
          <div><FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setUser({ ...user, avatar: base64 })}
          /></div>
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
              placeholder='.....@yahoo.com'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <p>Password</p>
            <input
              type='password'
              placeholder='******'
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
              placeholder='YYYY-MM-DD'
              // .format('YYYY-MM-DD') 
              // yourDate.toISOString().split('T')[0]
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            ></input>
            <p>Repeat Password</p>
            <input
              type='password'
              placeholder='*****'
              value={user.repeatPassword}
              onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
};
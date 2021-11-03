import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/UserActions';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import FileBase from 'react-file-base64';
import '../assets/index.css';

export function MyProfile() {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  //const loggedUser = useState(JSON.parse(localStorage.getItem('profile')));

  const loggedUser = useSelector(state => state.UsersReducer.users); //! WORK

  const token = useSelector(state => state.UsersReducer.token); //! WORK
  const [user, setUser] = useState(loggedUser); //! NOT work  !!!
  // const [userEdit, setUserEdit] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   repeatPassword: '',
  //   birthday: ''
  // });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // console.log(`MyProfile user: ${loggedUser}`);
  // console.log(`MyProfile Token: ${token}`);
  // console.log(`MyProfile user: ${user}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    user.firstName = firstName //setFirstName 
    user.lastName = lastName //setLastName 
    user.email = email //setEmail
    user.password = password //setPassword
    user.repeatPassword = repeatPassword //setRepeatPassword 
    user.birthday = birthday //setBirthday
    user.avatar = avatar //setAvatar 
    // const userId = user._id;
    //const userId = loggedUser._id
    dispatch(updateUser(userId, user)); //! NOT work
    setRedirect(true);
    //history.push(`/${userId}/myProfile`);
    console.log(e);
    console.log(user);
    console.log(email);
  };

  if (redirect) {
    return <Redirect to={`/${userId}/myProfile`} />
  }

  console.log(`This is MyProfile userId: ${userId}`);

  return (
    <div id="myProfile">
      <div className='h2'>My Profile</div>
      <div className='formBody'>
        <div className='formAvatar'>
          <img src={user.avatar} alt="Avatar" className="avatar" />
          <div><FileBase
            type="file"
            multiple={false}
            //onDone={({ base64 }) => setUser({ ...user, avatar: base64 })}
          onDone={({ base64 }) => setAvatar( base64 )}
          /></div>
        </div>
        <div>
          <form className='form'>
            <p>First Name</p>
            <input
              type='text'
              placeholder='John'
              value={user.firstName}
              //onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            onChange={(e) =>  setFirstName (e.target.value )}
            // serUserEdit.name = e.target.value
            ></input>
            <p>Email</p>
            <input
              type='email'
              placeholder='.....@yahoo.com'
              value={user.email}
              //onChange={(e) => setUser({ ...user, email: e.target.value })}
              //onChange={(e) => setUser({ setEmail: e.target.value })}
              //onChange={(e) => console.log(e)}
              onChange={(e) => setEmail(e.target.value)}

              // {console.log(email)}
              ></input>
            <p>Password</p>
            <input
              type='password'
              placeholder='******'
              value={user.password}
              //onChange={(e) => setUser({ ...user, password: e.target.value })}
            onChange={(e) => setPassword (e.target.value )}
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
              //onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            onChange={(e) => setLastName( e.target.value )}
            ></input>
            <p>Birthday</p>
            <input
              type='string'
              value={user.birthday}
              placeholder='YYYY-MM-DD'
              // .format('YYYY-MM-DD') 
              // yourDate.toISOString().split('T')[0]
              //onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            onChange={(e) => setBirthday (e.target.value)}
            ></input>
            <p>Repeat Password</p>
            <input
              type='password'
              placeholder='*****'
              value={user.repeatPassword}
              //onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
            onChange={(e) => setRepeatPassword (e.target.value)}
            ></input>
          </form>
        </div>
      </div>
    </div >
  )
};
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/UserActions';
import { useHistory, useParams } from 'react-router-dom';
import FileBase from 'react-file-base64';
import Cookies from 'universal-cookie';
import axios from "axios";
import '../assets/index.css';

export function MyProfile() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')).user); //! work  !!!
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('profile')).token);
  // const [userId, setUserID] = useState(JSON.parse(localStorage.getItem('profile')).user._id);
  const { userId } = useParams();
  console.log(userId);
  const history = useHistory();

  const fetchUrl = `http://localhost:4000/users/${userId}/myProfile`;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [avatar, setAvatar] = useState('');

  axios.interceptors.request.use(
    config => {
      config.headers.authorization = `Bearer ${token}`;
      return config; 
    },
    error => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    fetch(fetchUrl, {
      headers: {
        Authorization: "Bearer" + token,  
        Accept: "application/json",  
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstName(data.user.firstName);
        setLastName(data.user.lastName);
        setEmail(data.user.email);
        setBirthday(data.user.birthday);
        setAvatar(data.user.avatar);
      })
      .catch((err) => console.error(err));
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(fetchUrl, {
        headers: {
          Authorization: "Bearer" + token,  
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        console.log({ data });
        fetch(fetchUrl, {
          credentials: "same-origin",
          method: "patch",
          headers: {
            Authorization: "Bearer" + token, 
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json", 
            "Content-Type": "application/json",
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthday: birthday,
            password: password,
            repeatPassword: repeatPassword,
            avatar: avatar,
          }),
        })
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((data) => {
            if (data.error) {
              alert(data.message);
            } else {
              alert("User Updated");
              console.log(data);
              history.push(`/${userId}/myProfile`);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });

  };

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
              placeholder={firstName}
              defaultValue={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            ></input>
            <p>Email</p>
            <input
              type='email'
              placeholder='.....@yahoo.com'
              defaultValue={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
            <p>Password</p>
            <input
              type='password'
              placeholder='******'
              defaultValue={user.password} //{12345}
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
              defaultValue={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            ></input>
            <p>Birthday</p>
            <input
              type='string'
              defaultValue={user.birthday}
              placeholder='YYYY-MM-DD'
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            ></input>
            <p>Repeat Password</p>
            <input
              type='password'
              placeholder='*****'
              defaultValue={user.repeatPassword} //{12345}
              onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
            ></input>
          </form>
        </div>
      </div>
    </div >
  )
};
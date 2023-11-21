import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'kelompok38' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      localStorage.setItem('isLoggedIn', 'false');
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <form action="/login" method="post" class="form loginlogin" onSubmit={handleLogin}>
        <div class="form__fieldlogin">
          <label for="login__username">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <span class="hiddenlogin">Username</span>
          </label>
          <input id="login__username" type="text" name="username" class="form__inputlogin" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div class="form__fieldlogin">
          <label for="login__password">
            <FontAwesomeIcon className="icon" icon={faLock} />
            <span class="hiddenlogin">Password</span>
          </label>
          <input id="login__password" type="password" name="password" class="form__inputlogin" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div class="form__fieldlogin">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </>
  );
};

export default LoginPage;

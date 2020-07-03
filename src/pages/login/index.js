import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { LOGIN } from '../../const';
import { checkEmail, checkPassword } from '../../validation/validateUtil';

export default function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');

  function onChangeText(value, type) {
    switch (type) {
      case LOGIN.EMAIL:
        setEmail(value);
        setMsgEmail(checkEmail(value));
        break;
      case LOGIN.PASSWORD:
        setPassword(value);
        setMsgPassword(checkPassword(value));
        break;
      default:
        break;
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-sm-6 col-md-4">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="task-name">Email</label>
              <input
                className="form-control"
                id="task-name"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => onChangeText(e.target.value, LOGIN.EMAIL)}
              />
              {msgEmail && <small class="form-text text-danger">{msgEmail}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="status">Password</label>
              <input
                className="form-control"
                id="status"
                type="password"
                value={password}
                onChange={(e) => onChangeText(e.target.value, LOGIN.PASSWORD)}
              />
              {msgPassword && <small class="form-text text-danger">{msgPassword}</small>}
            </div>
            <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
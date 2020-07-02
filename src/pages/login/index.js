import React from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  
  return (
    <div>
      <div className="row">
        <div className="col col-sm-6">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="task-name">Email</label>
              <input
                className="form-control"
                id="task-name"
                autoFocus
                type="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Password</label>
              <input
                className="form-control"
                id="status"
                type="password"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
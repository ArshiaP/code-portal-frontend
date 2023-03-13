import React from 'react'
import { Form } from 'semantic-ui-react'
import './signin.css'
function Signin() {
  return (
    <div className='signin-container'>
      <div className="left">
        <div className="child">
          <div className='type-container'>
            <div className="typing">
              printf(“Hello World”);
            </div>
          </div>
          <div className="question">
            Do not have an account?
          </div>
          <div className="button">
            Sign Up
          </div>
        </div>
      </div>
      <div className="right">
        <div className="child">
          <div className="title">Sign In</div>
          <div className="form">
            <Form>
              <Form.Field>
                <label>Email ID</label>
                <input placeholder='Email ID' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type={'password'} placeholder='Password' />
              </Form.Field>
              <div className="button">
                Sign In
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
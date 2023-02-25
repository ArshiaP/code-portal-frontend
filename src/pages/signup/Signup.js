import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import './signup.css'

function Signup() {
  return (
    <div className='signup-container'>
      <div className="left">
        <div className="child">
          <div className="title">Sign In</div>
          <div className="form">
            <Form>
              <Form.Field>
                <label>Email ID</label>
                <input placeholder='Email ID' />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type={'password'} placeholder='Password' />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input type={'password'} placeholder='Confirm Password' />
              </Form.Field>
              <div className="button">
                Sign Up
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="child">
          <div className="typing">
            printf(“Hello World”);
          </div>
          <div className="question">
            Already have an account?
          </div>
          <div className="button">
            Sign In
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
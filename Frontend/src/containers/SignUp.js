import React, { useState } from 'react';
import '../CSS/SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function SignUp() {
  const [errors, setErrors] = useState({});
  const [det, setDet] = useState({
    u_name: '',
    u_email: '',
    phone: '',
    u_pwd: '',
    confirm_pwd: ''
  });
  const navigate = useNavigate();

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setDet((prevDet) => ({
      ...prevDet,
      [name]: value
    }));

    const newErrors = { ...errors };
    if (value === "") {
      newErrors[name] = `${name.replace('_', ' ')} is required`;
    } else {
      newErrors[name] = "";
    }
    setErrors(newErrors);
  };

  const Clicked = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    if (det.u_name === "") {
      newErrors.u_name = "Full Name is required";
      isValid = false;
    }

    if (det.u_email === "") {
      newErrors.u_email = 'Email is required';
      isValid = false;
    }

    if (det.phone === "") {
      newErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (det.phone.length < 10) {
      newErrors.phone = 'Phone Number should contain 10 digits';
      isValid = false;
    }

    if (det.u_pwd === "") {
      newErrors.u_pwd = 'Password is required';
      isValid = false;
    }

    if (det.confirm_pwd === "") {
      newErrors.confirm_pwd = 'Confirm password is required';
      isValid = false;
    } else if (det.u_pwd !== det.confirm_pwd) {
      newErrors.confirm_pwd = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      axios.post('https://localhost:3002/signup', {
        u_name: det.u_name,
        u_email: det.u_email,
        phone: det.phone,
        u_pwd: det.u_pwd
      })
        .then(result => {
          console.log(result);
          alert("Successfully Signed into Website");
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="signup-page">
      <div className="card-container">
        <table>
          <tbody>
            <tr>
              <td>
                <h2 className="shop-heading">SHOPPING STORE</h2>
              </td>
            </tr>
            <tr>
              <td>
                <div className="card_1">
                  <h1>Sign Up Page</h1>
                  <form>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label className="input-label">Full Name:</label>
                          </td>
                          <td>
                            <input
                              className="input-field"
                              type='text'
                              name='u_name'
                              placeholder='Enter Full Name'
                              value={det.u_name}
                              onChange={ChangeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.u_name && <span style={{ color: 'red' }}>{errors.u_name}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td>
                            <label className="input-label">Email:</label>
                          </td>
                          <td>
                            <input
                              className="input-field"
                              type='email'
                              name='u_email'
                              placeholder='Enter Email'
                              value={det.u_email}
                              onChange={ChangeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.u_email && <span style={{ color: 'red' }}>{errors.u_email}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td>
                            <label className="input-label">Phone Number:</label>
                          </td>
                          <td>
                            <input
                              className="input-field"
                              type='number'
                              name='phone'
                              placeholder='Enter Number'
                              value={det.phone}
                              onChange={ChangeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td>
                            <label className="input-label">Password:</label>
                          </td>
                          <td>
                            <input
                              type='password'
                              className="input-field"
                              name='u_pwd'
                              placeholder='Enter Password'
                              value={det.u_pwd}
                              onChange={ChangeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.u_pwd && <span style={{ color: 'red' }}>{errors.u_pwd}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td>
                            <label className="input-label">Confirm Password:</label>
                          </td>
                          <td>
                            <input
                              type='password'
                              className="input-field"
                              name='confirm_pwd'
                              placeholder='Confirm Password'
                              value={det.confirm_pwd}
                              onChange={ChangeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.confirm_pwd && <span style={{ color: 'red' }}>{errors.confirm_pwd}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <button className="signup-button" onClick={Clicked}>Sign Up</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Loginpage.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../redux/constants/action-types';

function Loginpage() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [val, setVal] = useState({});
  const [details, setDetails] = useState({
    u_name: '',
    u_pwd: ''
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));

    setVal({});
    const newErrors = { ...errors };
    if (value === "") {
      if (name === "u_name") {
        newErrors.u_name = "Username required";
      }
      if (name === "u_pwd") {
        newErrors.u_pwd = "Password required";
      }
    } else {
      newErrors[name] = "";
    }
    setErrors(newErrors);
  };

  const SignupClicked = () => {
    navigate("/signup");
  }
 
  const Clicked = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    if (details.u_name === "") {
      newErrors.u_name = 'Email required';
      isValid = false;
    }
    if (details.u_pwd === "") {
      newErrors.u_pwd = 'Password required';
      isValid = false;
    }
  
    setErrors(newErrors);

    if (isValid) {
      localStorage.setItem('LoginDetails', JSON.stringify(details));
      console.log(details.u_pwd);
      
      axios.post("http://localhost:3002/",{
        u_name:details.u_name,
        u_pwd:details.u_pwd
      })
      .then(result=>{
        console.log(result)
        if(result.data==="Success"){
          alert("Login Successfull")
          dispatch({ type: ActionTypes.ADD_USER_DETAILS, payload: details.u_name 
          
          });
          console.log("Login successful", details.u_name);

        
          navigate('/home');
        

        }
        else{
         
          alert("Login Failed")
       

        }
       
      
        
      })
      .catch(err=>{
        console.log(err)
       
       
      })
    }
    
  };

  return (
    <div className="login-page">
      <div className="card-container">
        <table>
          <tbody>
            <tr>
              <td>
                <h2 className="shop-heading" style={{ margin: "30px auto" }}>SHOPPING STORE</h2>
              </td>
            </tr>
            <tr>
              <td>
                <div className="card_1">
                  <h1>Login Page</h1>
                  <form>
                    <table>
                      <tbody>
                        <tr>
                          
                          <td colSpan="2">
                          {errors.general && <span style={{ color: 'red' }}>{errors.general}</span>}<br />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label style={{ fontWeight: "bold", fontSize: "17px" }}>UserName:</label>
                          </td>
                          <td>
                            <input
                              className="input-field"
                              type='text'
                              name='u_name'
                              placeholder='Enter UserName'
                              value={details.u_name}
                              onChange={changeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.u_name && <span style={{ color: 'red' }}>{errors.u_name}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td>
                            <label style={{ fontWeight: "bold", fontSize: "17px" }}>Password:</label>
                          </td>
                          <td>
                            <input
                              type='password'
                              className="input-field"
                              name='u_pwd'
                              placeholder='Enter password'
                              value={details.u_pwd}
                              onChange={changeHandler}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{errors.u_pwd && <span style={{ color: 'red' }}>{errors.u_pwd}</span>}<br /></td>
                        </tr>
                        <tr>
                          <td>
                            <button className="login-button" onClick={Clicked}>Login</button>
                          </td>
                        </tr>
                        {/* <tr>
                          <td colSpan="2">
                            <a href='' className='forget' onClick={Forgetpassword}><u>Forgot Password?</u></a>
                          </td>
                        </tr> */}
                        <tr>
                          <td colSpan="2" className="center-signup">
                            <a href='' className='forget' onClick={SignupClicked}><u>Sign Up</u></a>
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

export default Loginpage;

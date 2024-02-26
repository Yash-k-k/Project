import React, { useEffect, useState } from 'react';
import './Login.css';
import Stars from './Stars';
import name from './images/nidhiname.png';
import './Crush';
import Crush from './Crush';
const App = () => {
  const [viewPass, setViewPass] = useState(false);
  const [isBtnActive, setBtnActive] = useState(true);
  const [isLightOn, setLightOn] = useState(false);
  const [formData, setFormData] = useState({ username: '', password:''})
  const [frontPage, setFrontPage] = useState(false)
  let username = "Kittu";
  let Password = "Kittu@26";

  const toggleBtn = () => {
    setBtnActive(prevState => !prevState);
    setLightOn(prevState => !prevState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData); // {username: 'Kittu', password: 'Kittu@26'}
    if(formData.username === username && formData.password === Password){
      setFrontPage(true);
    }
  };
  useEffect(()=> console.log(formData),[frontPage])
   return (
    !frontPage ? <div className='login-container-day'>
      <Stars numberOfStars={50} />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='heading'></div>
        <img src={name} alt="Logo" className='logo'></img>
        <div>
          <input type="text" id="username" placeholder="username" name='username' value={formData.username} onChange={handleInputChange}/>
        </div>
        <div className='lab-container'>
          {/* <label className="password">Password</label> */}
          <input type={viewPass ? 'text' : 'password'} id="password" placeholder="password" value={formData.password} name='password' onChange={handleInputChange}/>
          <ion-icon class="password__hidden" id="password_hidden" name="eye-off-outline"></ion-icon>
        </div>
        <button className='glow-on-hover' type="submit">Login</button>
      </form>
    </div>
    :
    <Crush/>
  )
}

export default App

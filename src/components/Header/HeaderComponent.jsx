import React from 'react'
import './header.css'
import profile from '../../assets/profile.png'
const HeaderComponent = () => {
  return (
    <div className='container-fluid'>
    <header className="header">
      <div className="container">
        <img className='header-img' src="https://evoqins.com/assets/images/header/logo.svg" alt="" />
        <div className="form d-flex">
          <input type="text" placeholder='search for domains' className='input-group '/>
          <button className='button'><i className='bi bi-search'></i></button>

        </div>

        <div className="profile-content ">
      <i class="bi bi-bell"><span>.</span></i>
      <img className=' profile-img' src={profile} alt="maria" />
      <select >
        <option >maria</option>
      </select>
      <i class="bi bi-cart2"><span>.</span></i>
      </div>
      
      </div>
    </header>
      
    </div>
  )
}

export default HeaderComponent


































/* // 






















import './header.css'

const HeaderComponent = () => {
  return (
    <div className="container d-flex justify-content-between mt-3 p-2 h-6  bg-primary ">
      <div>
        <h1 >enoquins</h1>
      </div>
      <div >
       <span className=" d-flex p-2"> <input type="text" placeholder="enter the domains" className="form-control  " />
       <span className="bg-primary  p-2 rounded-end"><i className="bi bi-search  "></i></span>
       </span>
        
      </div>
      <div className="d-flex">
      <i class="bi bi-bell"></i>
      <img src="" alt="maria" />
      <select >
        <option >maria</option>
      </select>
      <i class="bi bi-cart2"></i>
      </div>
    </div>
  )
}

export default HeaderComponent
 */



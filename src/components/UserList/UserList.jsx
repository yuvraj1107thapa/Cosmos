import React from 'react'
import "./UserList.css"
const UserList = () => {
  return (
    <div>

        <div>
            <div><h2>Who to follow?</h2></div>
            <div className="nav-profile userlist">
          <img
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1685259140/NegProjects/E-commerce/logo1_pskkes.jpg"
            alt=""
            className="nav-profile-pic"
          />
          <div>
            <h4>Yuvraj Thapa</h4>
            <span>@yuvrajthapa</span>
          </div>
          <button className='follow-btn'>+ Follow</button>
        </div>
        </div>

    </div>
  )
}

export default UserList
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import userIcon from '../images/user_icon.png';
import { SocialIcon } from 'react-social-icons';
export default function Navbar() {
  return (
    <div>
      {/* <!-- Nav Bar --> */}
      <nav className="navbar navbar-dark navbar-transparent navbar-expand-lg navbar-dark" id="navBar">
        <div className="container-fluid">
          <button className="btn nav-btn ms-3">
            <img className="mb-1 me-1" alt="icon" src={userIcon} height={20} width={20} />
            Dalvi Faraz
          </button>
          <div className="expand navbar-expand justify-content-end" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item me-3">
                <a className="nav-link active" href="#navBar">Projects</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" href="#navBar">Blogs</a>
              </li>
              <li className="nav-item me-1">
                <a className="nav-link active" href="#navBar">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="abs2" className="absolute">
        <SocialIcon url="https://www.github.com/dalvifaraz/"/>
        <SocialIcon className="mt-2" url="https://www.instagram.com/dalvifaraz/"/>
        <SocialIcon className="mt-2" url="https://www.twitter.com/dalvifaraz/"/>
      </div>
    </div>
  )
}

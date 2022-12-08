import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
        <div className="topLeft">
          <h1><span>J</span>HASAN.</h1>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/post">POST</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE</Link>

                </li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
                    <img className="topImg" src="https://w0.peakpx.com/wallpaper/609/744/HD-wallpaper-kakashi-naruto-kakashi-dms-kakashi-naruto-naruto-kakashi-hatake-kakashi-kakashi-uchiha-kakashi-hatake-naruto-shippuden-kakashi-sharingan.jpg" alt="" />

          ):(
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

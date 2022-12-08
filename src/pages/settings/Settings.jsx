import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label><b>Profile Picture</b></label>
                <div className="settingsPP">
                    <img src="https://w0.peakpx.com/wallpaper/609/744/HD-wallpaper-kakashi-naruto-kakashi-dms-kakashi-naruto-naruto-kakashi-hatake-kakashi-kakashi-uchiha-kakashi-hatake-naruto-shippuden-kakashi-sharingan.jpg" alt=""/>
                    <label htmlFor="fileInput">
                    <i className=" settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input className="settingsPPInput"  type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="your username" name="name"/>
                <label>Email</label>
                <input type="email" placeholder="user@email.com" name="email"/>
                <label>Previous Password</label>
                <input type="password" placeholder="old password" name="password"/>
                <label>New Password</label>
                <input type="password" placeholder="new password" name="password"/>
                <button className="settingsSubmit" type="submit">Update</button>
            </form>
        </div>

        <Sidebar/>
    </div>
  )
}

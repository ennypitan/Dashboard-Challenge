import "./sidebar.css";
import logoImg from "../../assets/logo.png";
import categoryImg from "../../assets/category.png";
import trendupImg from "../../assets/trend-up.png";
import profileUserImg from "../../assets/profile-2user.svg";
import boxImg from "../../assets/box.svg";
import discountImg from "../../assets/discount-shape.svg";
import infoCircleImg from "../../assets/info-circle.svg";
import brightnessImg from "../../assets/brightness.svg";
import moonImg from "../../assets/moon.svg";
import arrowImg from "../../assets/arrow-right.svg";
import settingImg from "../../assets/setting-2.svg";
import logoutImg from "../../assets/logout.svg";

function Sidebar() {
  return (
    <>
      <ul className="top-sidebar-icons">
        <li>
          <img src={logoImg} alt="logo" />
        </li>
        <li>
          <img src={categoryImg} alt="category" />
        </li>
        <li>
          <img src={trendupImg} alt="trend-up" />
        </li>
        <li>
          <img src={profileUserImg} alt="user-profile" />
        </li>
        <li>
          <img src={boxImg} alt="box" />
        </li>
        <li>
          <img src={discountImg} alt="discount" />
        </li>
        <li>
          <img src={infoCircleImg} alt="info circle" />
        </li>
        <li className="active">
          <img src={brightnessImg} alt="brightness" />
        </li>
        <li>
          <img src={moonImg} alt="brightness" />
        </li>
      </ul>
      <ul className="bottom-sidebar-icons">
        <li>
          <img src={arrowImg} alt="arrow-right" />
        </li>
        <li>
          <img src={settingImg} alt="settings" />
        </li>
        <li>
          <img src={logoutImg} alt="logout" />
        </li>
      </ul>
    </>
  );
}

export default Sidebar;

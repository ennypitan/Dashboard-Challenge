import "./header.css";
import searchIcon from "../../assets/IconSearch.svg";
import calenderImg from "../../assets/solar_calendar-linear.svg";
import bellImg from "../../assets/bell.svg";
function Header() {
  return (
    <>
      <nav>
        <div className="logo">Dashboard</div>
        <ul className="nav-menu">
          <li className="search">
            <input type="text" placeholder="Search..." />
            <div className="placeholder-img">
              <img src={searchIcon} alt="search icon" />
            </div>
          </li>
          <li>
            <div className="date">
              <div className="date-icon">
                <img src={calenderImg} alt="" />
              </div>
              <p>November, 15, 2023</p>
            </div>
          </li>
          <li className="bell">
            <div className="bell-icon">
              <img src={bellImg} alt="bell icon" />
            </div>
          </li>
          <li>profile dropdown</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

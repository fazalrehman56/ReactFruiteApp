import { NavLink } from "react-router-dom";
const Header = ({ render }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar">
        <div class="container-fluid Readjust">
          <a class="navbar-brand LOGO" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ENDElement" id="navbarNav">
            <ul class="navbar-nav flex">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
              
              
                <li>
                  <NavLink to="additems" className="nav-btn">
                    Add Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to="items" className="nav-btn">
                    See Items
                  </NavLink>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

function Header(props ){
    return (
        <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="#">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul className="flex nav-menu nav-menu-primary">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex nav-menu nav-menu-secondary">
            <li className="social-media-item">
              <a href="#"><i className="fab fa-facebook-square"></i></a>
            </li>
            <li className="social-media-item">
              <a href="#"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="social-media-item">
              <a href="#"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a className="btn btn-primary" href="#"> Sign in / Join </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
}


export default Header
function Header(props){
    return(
        <header className="container flex">
            <div>
                Gizmo
            </div>
            <nav>
                <ul className='flex nav-bar'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header
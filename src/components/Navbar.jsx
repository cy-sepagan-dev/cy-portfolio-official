import Logo from "../assets/images/logo.png"
const navLinks = [
    { title: "Home", path: "/"},
    { title: "Projects", path: "/projects"}
];

const Navbar = () => {
    return (
        <header className="container mx-auto flex flex-row py-4">
            <span className="flex-1"><img src={Logo} alt="personal logo" /></span>
            <nav>
                <ul className="flex flex-row flex-1">
                    {navLinks.map((link) => (
                        <li><a href={link.path} className="px-5 py-5">{link.title}</a></li>
                    ))}
                </ul>
            </nav>
        </header>        
        
    );
}

export default Navbar;
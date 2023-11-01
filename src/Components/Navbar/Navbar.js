import logo from '../Images/logo_saturno.png';
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo_nav">
                <h1 className="logo_title">SATURN</h1>
                <img src={logo} className="logo"></img>
            </div>
            <div className="src_nav">
                <input type="search" className="src" placeholder="Pesquisar"></input>
            </div>
            
        </div>
    );
}
export default Navbar;
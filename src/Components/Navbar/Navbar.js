import logo from '../Images/logo_saturno.png';
import './Navbar.css'

function Navbar() {
    return (
        <div class="nav-bg">
            <nav class="navbar navbar-expand-lg bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand text-white texto-logo " href="#">SATURN<img src={logo} class="logo logo-logo" alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import Menu from '../../Components/Menu/Menu';
import ImgAdm from '../../Components/Images/Adm.png';
import ImgBeleza from '../../Components/Images/Beleza.png';
import ImgCursos from '../../Components/Images/Cursos_tec.png';
import ImgDiversos from '../../Components/Images/Diversos.png';
import ImgFundo from '../../Components/Images/Fundo-copy.png';
import ImgIdiomas from '../../Components/Images/Idiomas.png';
import ImgIndustrial from '../../Components/Images/Industrial.png';
import ImgInformatica from '../../Components/Images/Informatica.png';
import ImgTecnologia from '../../Components/Images/Tecnologia.png';
import logo from '../../Components/Images/logo_saturno.png';

const Home = () => {
    return (
        <div className='home'>
            <header>
                <Navbar />
                <Menu />
            </header>
            <main>
                <div class="carrossel">
                    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={ImgFundo} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={ImgFundo} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={ImgFundo} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="cursos-home">
                    <div class="containerh text-center">
                        <div class="row">
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgAdm} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Administrativo</h5>
                                        <p class="card-text">Torne-se um profissional vestátil e inicie sua carreira em
                                            uma das profissões com maior campo no mercado de trabalho </p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgInformatica} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">INFORMÁTICA PROFISSIONALIZANTE</h5>
                                        <p class="card-text">Domine as habilidades mais requisitadas no mercado de
                                            trabalho. Com o mundo cada vez mais informatizado é
                                            essencial saber fazer uso dessas ferramentas</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgTecnologia} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">TECNOLOGIA</h5>
                                        <p class="card-text">Torne-se um profissional da tecnologia, seja na área de
                                            software ou hardware, capacite-se como um programador
                                            ou Técnico de Informática</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgIndustrial} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">INDUSTRIAL</h5>
                                        <p class="card-text">Capacite-se em diversas áreas do ramo e ganhe espaço nas industrias, cursos técnicos
                                            e profissionalizantes</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgBeleza} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">BELEZA</h5>
                                        <p class="card-text">Siga seus sonhos e torne-se um(a) profissional da área da
                                            beleza, diversos cursos voltados pra área. Trabalho como
                                            maquiador(a), cabelereiro(a), etc.</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgIdiomas} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">IDIOMAS</h5>
                                        <p class="card-text">Conquiste o mundo, torne-se bilíngue.
                                            Cursos para dominar a vários idiomas, incluindo
                                            os mais influentes no mundo</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgCursos} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">CURSOS TÉCNICOS</h5>
                                        <p class="card-text">Ter uma profissão que é muito requisitada no mercado
                                            de trabalho com um tempo consideravelmente curto
                                            de estudo. Receba seu certificado em poucos meses</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-white cardh" style={{ width: 100 + '%', height: 30 + 'rem' }}>
                                    <img src={ImgDiversos} class="card-img-top img-card" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">DIVERSOS</h5>
                                        <p class="card-text">Diversos cursos para você conquistar sua independência
                                            ou simplesmente descobrir um novo hobbie</p>
                                        <a href="#" class="btn btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Home;
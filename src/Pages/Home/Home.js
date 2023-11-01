import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import Menu from '../../Components/Menu/Menu';
import ImgAdm from '../../Components/Images/Rectangle23.png';

const Home = () => {
    return(
        <div className='home'>
            <header>
                <Navbar />
                <Menu />
            </header>
            <main>   
                <Card title="Administração" descricao="Torne-se um profissional vestátil e inicie sua carreira em
                    uma das profissões com maior campo no mercado de trabalho" img={ImgAdm}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Home;
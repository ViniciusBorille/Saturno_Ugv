import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Astronaut from '../../Components/Images/astronaut.png'
import Rocket from '../../Components/Images/rocket.png'
import Button from '../../Components/Button/Button';

const Login = () => {

    const [showLogin, setShowLogin] = useState(true);

    const [showCadastro, setShowCadastro] = useState(false);

    const [backgroundColorLogin, setBackgroundColorLogin] = useState('rgba(232, 90, 255, 1)');

    const [backgroundColorCadastro, setBackgroundColorCadastro] = useState('rgba(152, 19, 191, 1)');

    const focusLogin = () => {
        setShowLogin(true)
        setShowCadastro(false)
        changeBackground()
    }

    const focusCadastro = () => {
        setShowLogin(false)
        setShowCadastro(true)
        changeBackground()
    }


    const changeBackground = () => {
        if(showCadastro === true){
            setBackgroundColorLogin('rgba(232, 90, 255, 1)')
            setBackgroundColorCadastro('rgba(152, 19, 191, 1)')
        }else if(showCadastro === false){
            setBackgroundColorLogin('rgba(152, 19, 191, 1)')
            setBackgroundColorCadastro('rgba(232, 90, 255, 1)')
        }
    }

    return (
        <div className='login'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='main'>
                <div className='log-pg'>
                    <div className='lgn-pg' onClick={focusLogin} style={{backgroundColor: backgroundColorLogin}}>
                        <div className={`login-pg ${showLogin ? '' : 'hide'}`}>
                            <h1 className='title-lgn'>LOGIN</h1>
                            <input type='email' className="input" placeholder='E-mail' />
                            <input type='password' className="input" placeholder='Senha' />
                            <p className='txt'>Esqueci minha senha</p>
                            <Button title="Entrar"/>
                            <p className='separator'>Ou se preferir</p>
                            <input type='button' value='Entrar com facebook' />
                            <input type='button' value='Entrar com uma conta google' />
                        </div>
                        <img src={Rocket} className={`img-login ${showLogin ? 'hide' : ''}`} />
                    </div>
                    <div className='cadas' onClick={focusCadastro} style={{backgroundColor: backgroundColorCadastro}}>
                        <div className={`cadas-pg ${showCadastro ? '' : 'hide'}`}>
                            <h1 className='title-lgn'>CADASTRE-SE</h1>
                            <input type='text' className='input' placeholder='Nome'></input>
                            <input type='text' className='input' placeholder='Sobrenome'></input>
                            <input type='email' className="input" placeholder='E-mail' />
                            <input type='password' className="input" placeholder='Senha' />
                            <Button title="Cadastrar"/>
                            <p className='separator'>Ou se preferir</p>
                            <input type='button' value='Entrar com facebook' />
                            <input type='button' value='Entrar com uma conta google' />
                        </div>
                        <img src={Astronaut} className={`img-cadas ${showCadastro ? 'hide' : ''}`} />
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}
export default Login;
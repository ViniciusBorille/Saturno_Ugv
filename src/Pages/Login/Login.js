import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Astronaut from '../../Components/Images/astronaut.png'
import Rocket from '../../Components/Images/rocket.png'
import Button from '../../Components/Button/Button';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [isSignup, setIsSignup] = useState(false);

    function handleLogin() {
        setIsLogin(true);
        setIsSignup(false);
    }

    function handleSignup() {
        setIsLogin(false);
        setIsSignup(true);
    }

    return (
        <body className={`${isLogin ? "sign-in-js" : ""} ${isSignup ? "sign-up-js" : ""}`}>

                <div className="background-container">
                    <div className="container">
                        <div className={`content first-content`}>
                            <div className="first-column">
                                <img src={Rocket} />
                                <br />
                                <button id="signin" className="btnl btn-primaryl" onClick={handleLogin}>Entrar</button>
                            </div>
                            <div className="second-column">
                                <h2 className="title title-second">Cadastre-se</h2>
                                <form className="form">
                                    <label className="label-input" for="">
                                        <input type="text" placeholder="Nome" />
                                    </label>
                                    <label className="label-input" for="">
                                        <input type="text" placeholder="Sobrenome" />
                                    </label>
                                    <label className="label-input" for="">
                                        <input type="email" placeholder="Email" />
                                    </label>

                                    <label className="label-input" for="">
                                        <input type="password" placeholder="Senha" />
                                    </label>


                                    <button className="btnl btn-secondl">Cadastrar</button>
                                </form>
                                <br />
                                <div className="lined-paragraph">
                                    <p className="paragraph">Ou se preferir</p>
                                </div>
                                <button className="btn-facebook">Entrar com o Facebook</button>

                                <button className="btn-google">Entrar com uma conta Google</button>
                            </div>
                        </div>
                        <div className={`content second-content`}>
                            <div className="first-column">
                                <img src={Astronaut} />
                                <br />
                                <button id="signup" className="btnl btn-primaryl" onClick={handleSignup}>sign up</button>
                            </div>
                            <div className="second-column">
                                <h2 className="title title-second">LOGIN</h2>
                                <form className="form">

                                    <label className="label-input" for="">
                                        <input type="email" placeholder="Email" />
                                    </label>

                                    <label className="label-input" for="">
                                        <input type="password" placeholder="Senha" />
                                    </label>

                                    <a className="password" href="#">Esqueci minha senha</a>
                                    <button className="btnl btn-secondl">Entrar</button>
                                </form>
                                <br />
                                <div className="lined-paragraph">
                                    <p className="paragraph">Ou se preferir</p>
                                </div>
                                <button className="btn-facebook">Entrar com o Facebook</button>

                                <button className="btn-google">Entrar com uma conta Google</button>
                            </div>
                        </div>
                    </div>
                </div>
        </body>
    )
}
export default Login;
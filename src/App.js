import { useState } from "react";
import image from "./assets/image.png"
import "./styles.css"

function App() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <h1 className="login-form-title">Bem Vindo</h1>
            <img className="image-logo" src={image} alt="logo" />

            <div className="wrap-input">
              <input
              className={email !== "" ? 'has-val input' : 'input'} 
              value={email} 
              type="email" 
              onChange={e => setEmail(e.target.value)}
               
               />
              <span class="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'} 
              value={password} 
              type="password" 
              onChange={e => setPassword(e.target.value)}
              
              />
              <span class="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

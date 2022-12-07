import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"
import image from "../../assets/image.png"
import { Link } from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    return (
        <LayoutComponents>
             <form className="login-form">
        <h1 className="login-form-title">Criar conta</h1>
        <img className="image-logo" src={image} alt="logo" />

        <div className="wrap-input">
          <input
            className={name !== "" ? 'has-val input' : 'input'}
            value={name}
            type="email"
            onChange={e => setName(e.target.value)}/>
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? 'has-val input' : 'input'}
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}

          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? 'has-val input' : 'input'}
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}

          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta?</span>
          <Link className="txt2" to="/login">Acessar</Link>
        </div>

      </form>
        </LayoutComponents>
    )
}
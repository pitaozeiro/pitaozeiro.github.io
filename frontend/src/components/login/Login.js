// Login.js

import React from 'react';
import './Login.css';  // Certifique-se de que o caminho está correto

const Login = () => {
  return (
    <div className="container">
      <header className="section-information">
        <h1 className="b-title">Bem Vindo!</h1>
        <p className="info-text">Este aplicativo é apenas um portfólio que criei com o intuito em treinar e entrar na área de desenvolvimento de softwares, portanto não insira informações reais, nunca solicitaremos seus dados, pagamentos ou quaisquer outras ações.</p>
        <p className="info-text-login">Usuário: admin Senha: @admin123</p>
      </header>
      <section>
        <div className="container-login-form">
          <form className="sign-in" id="form-sign-in" >
            <input className="login-form-items" placeholder="usuário" />
            <input className="login-form-items" type="password" placeholder="senha" />
            <button className="login-form-submit" type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

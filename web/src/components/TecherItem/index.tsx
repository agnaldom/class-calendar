import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherIntem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/17270888?s=460&u=dcf4dc4c3d6c7bf0b6d7b43cddf7d80e90d642f7&v=4" alt="Agnaldo Marinho"/>
        <div>
          <strong>Agnaldo Marinho</strong>
          <span>Informatica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias da informação.
        <br /> <br />
        Apaixonado por ensinar de uma maneira totalmente seu e por mudar a vida das pessoas através do ensino.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherIntem;
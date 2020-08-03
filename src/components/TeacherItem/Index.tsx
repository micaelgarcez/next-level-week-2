import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
  name: string;
}

const TeacherItem: React.FC<TeacherItemProps> = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars1.githubusercontent.com/u/54011614?s=460&u=825e339ae3bbdff1262b374b727824aed4edb45f&v=4"
        alt="Micael Garcez"
      />
      <div>
        <strong>Micael Garcez</strong>
        <span>Matemática</span>
      </div>
    </header>

    <p>
      Mestre da melhores técnologias com matemática aplicada.
      <br /> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam
      accusamus at itaque omnis quibusdam nulla ut officia nostrum commodi?
      Numquam, maiores ex aliquid deleniti ratione libero illo mollitia ad?
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 100,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;

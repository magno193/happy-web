import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, ContentWrapper, Location, EnterApp } from './styles';

import logoImg from '../../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Botucatu</strong>
          <span>São Paulo</span>
        </Location>

        <EnterApp href="" >
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
}

export default Landing;
import React from 'react';
import styled from 'styled-components';
import Usuario from './Aside/usuario';
import Menu from './Aside/menu';
import Estado from './Aside/estado';

const Aside = () => {
  return (
    <BarraLateral>
      <Usuario />
      <Menu />
      <Estado />
    </BarraLateral>
  );
};

export default Aside;

const BarraLateral = styled.aside`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

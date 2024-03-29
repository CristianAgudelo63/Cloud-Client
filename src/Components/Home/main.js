import React from 'react';
import styled from 'styled-components';
import Submenu from './Main/subMenu.js';
import Carpeta from './../../Assets/Img/folder-home.png';

const ContenidoApp = () => {
  return (
    <Contenedor>
      <Submenu />
      <Contenido>
        <div>
          <CarpetaPrincipal src={Carpeta} title='Mi Unidad' alt='Carpeta Principal'></CarpetaPrincipal>
        </div>
      </Contenido>
    </Contenedor>
  );
};

export default ContenidoApp;

const Contenedor = styled.main`
  background: var(--fondoSegundario);
  border-radius: 10px 0px 0px 0px;
  height: 100vh;
`;

const Contenido = styled.section`
  border-radius: 5px;
  background: #fff;
  margin: 20px;
  height: 65vh;
  padding: 20px;
`;

const CarpetaPrincipal = styled.img`
  width: 15%;
  cursor: pointer;
`;

import { css } from "lit-element";

export default css`

:host{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
#cajas {
  height: 70px;
  font-size: 40px;
  font-weight: bold;
  background-color: #868686 ; /* Cambio a un color azul claro */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
}
#cajasi2 {
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  background-color: #D3D3D3; /* Cambio a un color azul claro */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
}
#cajas2 {
  width: 200px;
  height: 70px;
  font-size: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #D3D3D3; /* Cambio a un color azul claro */
  color: white;
}
#cuadro {
  width: 60rem;
  height: 35.5rem;
  border-radius: 1rem;
  border-color: black;
}
.user-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px; /* Opcional para agregar espacio entre las filas */
}

.user-column {
  flex: 1;
  margin: 0 5px; /* Opcional para agregar espacio entre las columnas */
}

`;

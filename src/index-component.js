import { LitElement, html, css, property } from "lit-element";
import stylesScss from './index-componentStyles';
import { renderPage } from './main.js';

export class Index extends LitElement {
  constructor() {
    super();
    this.users = [
      { id: 1, name: "Daniel", apellido: "Avila", telefono: "3204801930", campaign: "Motor fest" },
      { id: 2, name: "Marco ", apellido: "Reus", telefono: "3204802930", campaign: "Tuning japones" },
      { id: 3, name: "Jose ", apellido: "Lopez", telefono: "3204851930", campaign: "Americanos" },
    ];
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    const filteredUsers = this.users.filter((user) => {
      const telefonoMatch = user.telefono.includes(this.telefonoFiltro);
      const nombreMatch = this.nombreFiltro && user.name.toLowerCase().includes(this.nombreFiltro.toLowerCase());
      return telefonoMatch && nombreMatch;
    });

    const displayUsers = this.nombreFiltro || this.telefonoFiltro ? filteredUsers : this.users;

    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <div class="d-flex">
        <div class="pt-2 d-flex justify-content-left">
          <div class="d-flex  flex-shrink-0 p-3 ml-5" style="width: 250px; background-color: rgb(201, 205, 207); border-radius: 1rem; height: 42.4rem;">
            <hr>
            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
              <li class="nav-item">
                <button @click="${() => renderPage('index')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: #8DACBF; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                  <i class="fas fa-user me-2"></i> Usuarios
                </button>
              </li>
              <li class="nav-item pt-3">
                <button @click="${() => renderPage('index2')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: #8DACBF; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                  <i class="fas fa-user me-2"></i> Campañas
                </button>
              </li>
              <li class="nav-item pt-3">
                <button @click="${() => renderPage('index3')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: #8DACBF; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                  <i class="fas fa-user me-2"></i> Equipos
                </button>
              </li>
            </ul>
            <hr>
          </div>
        </div>
        &nbsp&nbsp&nbsp
        &nbsp&nbsp&nbsp
        <!-- cajas de texto -->
        <div class="pt-2 align-items-center">
          <div class="d-flex justify-content-left">
            &nbsp&nbsp&nbsp
            &nbsp&nbsp&nbsp
            <div class="row d-flex">
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">40</div>
                <div id="cajas2" class="col-md-5 pt-2">Usuarios Conectados</div>
              </div>
              &nbsp&nbsp&nbsp
              &nbsp&nbsp&nbsp
              &nbsp&nbsp&nbsp
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">10</div>
                <div id="cajas2" class="col-md-5 pt-2">Usuarios Ausentes</div>
              </div>
              &nbsp&nbsp&nbsp
              &nbsp&nbsp&nbsp
              &nbsp&nbsp&nbsp
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">10</div>
                <div id="cajas2" class="col-md-5 pt-2">Campañas Activas</div>
              </div>
              &nbsp&nbsp&nbsp
              &nbsp&nbsp&nbsp
              &nbsp&nbsp&nbsp
              <div class="row g-0 text-center pt-3">
                <div id="cajas" class="col-sm-6 col-md-4">0</div>
                <div id="cajas2" class="col-md-5 pt-2">Usuarios Llamados</div>
              </div>
            </div>
          </div>
          <br>
          <div id="cuadro" class="container border border-dark">
            <div class="d-flex p-3">
              <div class="border border-dark" style="width: 14rem; height: 33.3rem; border-radius: 1rem;">
                <div>
                  <div class="d-flex flex-shrink-0 p-3" style="width: 222px; background-color: grey; border-top-left-radius: 1rem; border-radius: 1rem; height: 33.3rem;">
                    <hr>
                    <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                      <div class="input-group mt-1" style="width: 12rem;">
                        <input class="form-control font-weight-bold" type="text" placeholder="Número" @input="${this.handleTelefonoFiltro}">
                      </div>
                      <div class="input-group mt-3" style="width: 12rem;">
                        <input class="form-control font-weight-bold" type="text" placeholder="Nombre" @input="${this.handleNombreFiltro}">
                      </div>
                      <div class="d-flex justify-content-center">
                        <button @click="${this.buscarUsuarios}" class="mt-2 text-center" style="width: 5rem; border-radius: 5px; background-color: #E7E7E7; color: black;">Buscar</button>
                      </div>
                    </ul>
                    <hr>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-flex justify-content-around">
                  <div class="ml-5">
                    <div class="row g-0 text-center pt-1">
                      <button @click="${this.mostrarAlerta}" class="mt-2 text-center" style="width: 6rem; border-radius: 5px; background-color: #E7E7E7; color: black;">Nuevo</button>
                    </div>
                  </div>
                  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                  <div class="d-flex justify-content-right ml-5">
                  </div>
                </div>
                <div class="container border border-dark mt-4 ml-4" style="border-radius: 1rem; width: 38rem; height: 28.5rem">
                  <!-- Títulos -->
                  <div class="user-container user-titles  border border-dark mt-4 ml-4" style="border-radius: 1rem; width: 32rem; height: 2rem">
                    <div class="user-column user-title">Nombre</div>
                    <div class="user-column user-title">Apellido</div>
                    <div class="user-column user-title">Telefono</div>
                    <div class="user-column user-title">Campaña</div>
                    <div class="user-column user-title">Acciones</div>
                  </div>
                  <!-- Lista de usuarios -->
                  <ul>
      ${displayUsers.map((user) => html`
        <li>
          <div class="user-container">
            <div class="user-column">${user.name}</div>
            <div class="user-column">${user.apellido}</div>
            <div class="user-column">${user.telefono}</div>
            <div class="user-column">${user.campaign}</div>
            ${this.nombreFiltro || this.telefonoFiltro ? html`
              <div class="user-column">
                <button @click="${() => this.llamarUsuario(user)}">Llamar</button>
              </div>
            ` : html``}
          </div>
        </li>
      `)}
    </ul>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Manejar cambios en el campo de número de teléfono
  handleTelefonoFiltro(event) {
    this.telefonoFiltro = event.target.value;
  }

  // Manejar cambios en el campo de nombre
  handleNombreFiltro(event) {
    this.nombreFiltro = event.target.value;
  }

  // Función para realizar la búsqueda
  buscarUsuarios() {
    this.requestUpdate(); // Actualizar la vista con los resultados de la búsqueda
  }

  // Función para mostrar una alerta y agregar un nuevo usuario
  mostrarAlerta() {
    const nombre = prompt("Ingrese el nombre del nuevo usuario:");
    if (nombre) {
      const apellido = prompt("Ingrese el apellido del nuevo usuario:");
      if (apellido) {
        const telefono = prompt("Ingrese el número de teléfono del nuevo usuario:");
        if (telefono) {
          const campaign = prompt("Ingrese la campaña del nuevo usuario:");
          if (campaign) {
            // Crear un nuevo objeto de usuario
            const nuevoUsuario = {
              id: this.users.length + 1,
              name: nombre,
              apellido: apellido,
              telefono: telefono,
              campaign: campaign
            };

            // Agregar el nuevo usuario a la matriz de usuarios
            this.users.push(nuevoUsuario);

            // Actualizar la vista
            this.requestUpdate();
          }
        }
      }
    }
  }

  // Función para llamar a un usuario
  llamarUsuario(user) {
    alert(`Llamando a ${user.name} ${user.apellido} al número ${user.telefono}`);
  }
}

customElements.define("index-component", Index);

// para usar el autocompletado de código 
/// <reference types="Cypress" />

// define una constante usuarios que almacena la que este en el archivo 
// no es necesario poner la extensión del archivo
const usuarios = require('../../fixtures/USUARIOS_EPCNT_ADM.json');
// para probar con solo uno
// const usuarios = require('../../fixtures/usuario-EPCNT_ADM.json');

describe('Usando un archivo para cargar datos en los tests', () => {
      usuarios.forEach((usuario) => {
        // para cada vuelta hacemos el test
        it('Lanzando el test para el usuario ' + usuario.cnt_id_usuario, function () {
          // la url de la página a visitar
          cy.visit('https://preaplicaciones.aragon.es/geb/')
          cy.get('#processLogin_idUsuario').type(usuario.cnt_id_usuario)
          cy.get('#processLogin_password').type('test')
          cy.contains('Conectar').click()
          cy.contains('EPCNT_ADM').click()
          if ((usuario.cnt_pri == 's')  && (usuario.cnt_sec == 's'))  
          { 
            cy.contains('Primaria').click()
            cy.contains('Etapa: Primaria')
            cy.screenshot('login de ' + usuario.cnt_id_usuario + ' en Primaria')
            cy.get('.vertical-middle').click()
            cy.contains('Secundaria').click()
            cy.contains('Etapa: Secundaria')
            cy.screenshot('login de ' + usuario.cnt_id_usuario + ' en Secundaria')
          } else if (usuario.cnt_pri == 's') {
            cy.contains('Etapa: Primaria')
            cy.screenshot('login de ' + usuario.cnt_id_usuario + ' en Primaria')
          }  else if (usuario.cnt_sec == 's') {
            cy.contains('Etapa: Secundaria')
            cy.screenshot('login de ' + usuario.cnt_id_usuario + ' en Secundaria')
          }
      });
  });

});
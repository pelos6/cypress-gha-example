/// <reference types="cypress" />
// vamos a usar estas funciones en el test
import { nombreFichero, escribeLog, escribeLogBefore, escribeLogAfter, f_url } from 'cypress-utilidades'; //  from "../support/utils";
// cargo datos generales a PADDOC desde este archivo
// const datosPaddoc = require('../fixtures/datosPaddoc.json');

describe('BASE_DATOS', () =>
{
  // cargo variables para los tests   
  var nombreFicheroLog = nombreFichero('BASE-DATOS');

  // antes de empezar los test 
  before(() =>
  {
    escribeLogBefore(nombreFicheroLog)
  })

  it('Comprobando la base de datos', () =>
  {
    escribeLog(nombreFicheroLog, 'Comprobando la base de datos')
    //  cy.visit(f_url() + 'eppla_adm/test.jsp')
    // cy.visit('https://example.cypress.io')
    // cy.contains('type')
    // funciona
     cy.visit('https://paddoc.aragon.es/eppla_adm/test.jsp')
    // no funciona
    //cy.visit('https://188.244.81.142/eppla_adm/test.jsp')
    // cy.visit('https://prepaddoc.aragon.es/eppla_adm/test.jsp')
    cy.contains('[ORACLE DB] - [OK]')
    escribeLog(nombreFicheroLog, 'OK. Comprobada la base de datos')
  })

  // al finalizar los tests 
  after(() =>
  {
    escribeLogAfter(nombreFicheroLog)
  })
})
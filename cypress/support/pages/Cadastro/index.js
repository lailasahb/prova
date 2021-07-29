/// <reference types="cypress" />

const faker = require('faker');

const elemento = require('./elements').ELEMENTS


class Cadastro{

    acessarCadastro(){
      cy.visit('teste/qa/')
    }
    
    Cadastrar(){
      cy.get(elemento.buttonCadastrar).click()
    }

    InformarTodosDadosValidos(){
        cy.get(elemento.inputNome).type(faker.name.findName())
        cy.get(elemento.inputEmail).type(faker.internet.email())
        cy.get(elemento.inputSenha).type(faker.internet.password())
    }

    ExclusaoDoPrimeiroRegistro(){
      cy.get('[id=removeUser1]').should('not.exist')
      
    }

    InformarNomeCompleto(){
      cy.get(elemento.inputNome).type(faker.name.findName())

    }

    InformarSenhaValida(){
      cy.get(elemento.inputSenha).type(faker.internet.password())
    }

    InformarEmailValido(){
      cy.get(elemento.inputEmail).type(faker.internet.email())
    }

    ValidarNaoExisteUsuarios(){
      cy.get('td[id*=tdUserId]').should('not.exist')
    }
    
  
}

export default new Cadastro();
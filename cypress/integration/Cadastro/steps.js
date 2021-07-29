/// <reference types="cypress" />

import { And } from 'cypress-cucumber-preprocessor/lib/resolveStepDefinition';

//import cadastro from '../pages/Cadastro/';

const faker = require('faker');

Given(/^que acesso o site prova.stefanini$/, () => {
    cy.visit('teste/qa/')
});
When("Carregar a página", () => {
    //cadastro.AcessarCadastro()
    cy.url().should('be.equal', 'http://prova.stefanini-jgr.com.br/teste/qa/')
})
Then("o campo Nome, E-mail e Senha devem estar vazios", () => {
    cy.get('input[id*=name]').should('be.empty')
    cy.get('input[id*=email]').should('be.empty')
    cy.get('input[id*=password]').should('be.empty')
})

And(/^o botão Cadastrar deve estar habilitado$/, () => {
    cy.get('button[id*=register]').should('be.exist')
});

And(/^não deverá aparecer a listagem de usuários$/, () => {
    cy.get('td[id*=tdUserId]').should('not.exist')
});


When(/^preencho o campo E-mail e o campo Senha$/, () => {
    //cadastro.InformarEmailValido();
   // cadastro.InformarSenhaValida();
   cy.get('input[id*=email]').type(faker.internet.email())
   cy.get('input[id*=password]').type(faker.internet.password())
});


When(/^preencho o campo Nome e o campo Senha$/, () => {
    //cadastro.InformarNomeValido();
    //cadastro.InformarSenhaValida();
   cy.get('input[id*=name]').type(faker.name.findName())
   cy.get('input[id*=password]').type(faker.internet.password())
});


When(/^preencho o campo Nome e o campo E-mail$/, () => {
    cy.get('input[id*=name]').type(faker.name.findName())
    cy.get('input[id*=email]').type(faker.internet.email())
});

When(/^eu não preencher os campos Nome, E-mail e Senha$/, () => {
    cy.get('input[id*=name]').should('be.empty')
    cy.get('input[id*=email]').should('be.empty')
    cy.get('input[id*=password]').should('be.empty')
});

When(/^preencher apenas o primeiro nome no campo Nome$/, () => {
    cy.get('input[id*=name]').type(faker.name.firstName())
});
Then(/^retornará a mensagem Por favor insira um nome completo$/, () => {
    cy.get('p[class*=error]').contains('Por favor, insira um nome completo.').should('be.exist')
})

When(/^preencher o campo E-mail e preencher o campo Senha$/, () => {
    cy.get('input[id*=email]').type(faker.internet.email())
    cy.get('input[id*=password]').type(faker.internet.password())
   // cadastro.InformarSenhaValida();
});

When(/^eu preencho o campo Nome e o campo Senha$/, () => {
    cy.get('input[id*=name]').type(faker.name.findName())
    cy.get('input[id*=password]').type(faker.internet.password())
});

When(/^preencher o campo E-mail inválido$/, () => {
    cy.get('input[id*=email]').type('testelaila.com')
});
Then(/^retornará a mensagem Por favor insira um e-mail válido$/, () => {
    cy.get('p[class*=error]').contains('Por favor, insira um e-mail válido').should('be.exist')
})


When(/^eu preencher o campo Nome e o campo E-mail$/, () => {
    cy.get('input[id*=name]').type(faker.name.findName())
    cy.get('input[id*=email]').type(faker.internet.email())
});

When(/^preencher o campo Senha com menos de 8 caracteres$/, () => {
    cy.get('input[id*=password]').type('1234')
});

Then(/^retornará a mensagem A senha deve conter ao menos 8 caracteres$/, () => {
    cy.get('p[class*=error]').contains('A senha deve conter ao menos 8 caracteres.').should('be.exist')
})
When(/^preencher os campos Nome, E-mail e Senha com dados válidos$/, () => {
       cy.get('input[id*=name]').type(faker.name.findName())
       cy.get('input[id*=email]').type(faker.internet.email())
       cy.get('input[id*=password]').type(faker.internet.password())
       cy.get('button[id*=register]').click()
      //  cadastro.Cadastrar();
        cy.get('input[id*=name]').type(faker.name.findName())
        cy.get('input[id*=email]').type(faker.internet.email())
        cy.get('input[id*=password]').type(faker.internet.password())
        cy.get('button[id*=register]').click()
      //  cadastro.InformarTodosDadosValidos();
      //  cadastro.Cadastrar();
      cy.get('input[id*=name]').type(faker.name.findName())
      cy.get('input[id*=email]').type(faker.internet.email())
      cy.get('input[id*=password]').type(faker.internet.password())
      cy.get('button[id*=register]').click()
       // cadastro.InformarTodosDadosValidos();
       // cadastro.Cadastrar();
});

Then(/^os dados que foram cadastrados deverão ser exibidos em uma tabela abaixo do formulário de cadastro$/, () => {
    cy.get('td[id*=tdUserId]').contains('1').should('be.exist')
    cy.get('td[id*=tdUserId]').contains('2').should('be.exist')
    cy.get('td[id*=tdUserId]').contains('3').should('be.exist')
});

And(/^a tabela deverá exibir os usuários ordenados pelo ID de forma crescentes$/, () => {
    cy.get('td[id*=tdUserId]').contains('1').should('be.exist')
    cy.get('td[id*=tdUserId]').contains('2').should('be.exist')
    cy.get('td[id*=tdUserId]').contains('3').should('be.exist')
});

And(/^visualizar o botão excluir ao lado de cada registro$/, () => {
    cy.get('a[id*=removeUser]').should('be.exist')
});

Given(/^que eu já tenho dados cadastrados no site prova.stefanini$/, () => {
    cy.get('[id*=removeUser]').should('be.exist')
});

When(/^eu clicar em Excluir um usuário$/, () => {
    cy.get('[id=removeUser1]').click() 
});

Then(/^o usuário selecionado deve ser excluído$/, () => {
    cy.get('[id=removeUser1]').should('not.exist')
});
Then(/^os demais registros não devem sofrer alteração em seus ID's$/, () => {
    cy.get('td[id*=tdUserId]').contains('2').should('be.exist')
    cy.get('td[id*=tdUserId]').contains('3').should('be.exist')
});

/// <reference types="cypress" />

const faker = require('faker');

import cadastro from '../support/pages/Cadastro';

   //Eu poderia adicionar um beforeEach para o cadastro.acessarCadastro() porém para meu último teste, necessito 
    //Usei conceito de page objects para parte do projeto apenas

context('Cadastro de Usuários ', () => {
    it('Visualizar a tela de cadastro em estado inicial', () => {
        cadastro.acessarCadastro() 
        cy.get('input[id*=name]').should('be.empty')
        cy.get('input[id*=email]').should('be.empty')
        cy.get('input[id*=password]').should('be.empty')
        cy.get('button[id*=register]').should('be.exist')
        cy.get('td[id*=tdUserId]').should('not.exist')
    });

    it('Cadastro sem preenchimento do Nome', () => {
        cadastro.acessarCadastro()
        cadastro.InformarEmailValido()
        cadastro.InformarSenhaValida()
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('O campo Nome é obrigatório.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

    it('Cadastro sem preenchimento do E-mail', () => {
        cadastro.acessarCadastro()
        cadastro.InformarNomeCompleto()
        cadastro.InformarSenhaValida()
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('O campo E-mail é obrigatório.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

    it('Cadastro sem preenchimento da Senha', () => {
        cadastro.acessarCadastro()
        cadastro.InformarNomeCompleto()
        cadastro.InformarEmailValido()
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('O campo Senha é obrigatório.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

    it('Cadastro sem preenchimento de todos os dados', () => {
        cadastro.acessarCadastro()
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('O campo Nome é obrigatório.').should('be.exist')
        cy.get('p[class*=error]').contains('O campo E-mail é obrigatório.').should('be.exist')
        cy.get('p[class*=error]').contains('O campo Senha é obrigatório.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

    it('Validação de cadastro com nome completo', () => {
        cadastro.acessarCadastro()
        cy.get('input[id*=name]').type(faker.name.firstName())
        cadastro.InformarEmailValido()
        cadastro.InformarSenhaValida()
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('Por favor, insira um nome completo.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

    it('Validação de cadastro com e-mail inválido', () => {
        cadastro.acessarCadastro()
        cadastro.InformarNomeCompleto()
        cy.get('input[id*=email]').type('testelaila.com')
        cadastro.InformarSenhaValida()
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('Por favor, insira um e-mail válido.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

    it('Validação de senha menor que 8 caracteres', () => {
        cadastro.acessarCadastro()
        cadastro.InformarNomeCompleto()
        cadastro.InformarEmailValido()
        cy.get('input[id*=password]').type('1234')
        cadastro.Cadastrar()
        cy.get('p[class*=error]').contains('A senha deve conter ao menos 8 caracteres.').should('be.exist')
        cadastro.ValidarNaoExisteUsuarios()
    });

   // Cypress._.times(5, ()  => { 
        it('Cadastro de Usuário com Sucesso', () => {
            cadastro.acessarCadastro()

            //abaixo, estou adicionando 3 cadastros de usuários
            cadastro.InformarTodosDadosValidos()
            cadastro.Cadastrar()

            cadastro.InformarTodosDadosValidos()
            cadastro.Cadastrar()

            cadastro.InformarTodosDadosValidos()
            cadastro.Cadastrar()

            //Acredito que há uma solução melhor pra a validação de ordem crescente 
            cy.get('td[id*=tdUserId]').contains('1').should('be.exist')
            cy.get('td[id*=tdUserId]').contains('2').should('be.exist')
            cy.get('td[id*=tdUserId]').contains('3').should('be.exist')

            cy.get('a[id*=removeUser]').should('be.exist')            
        });
    //});

        it('Exclusão de Usuário', () => {
           cy.get('[id=removeUser1]').click()  
           cy.get('[id=removeUser1]').should('not.exist')
           cy.get('td[id*=tdUserId]').contains('2').should('be.exist')
           cy.get('td[id*=tdUserId]').contains('3').should('be.exist')          
        });
});
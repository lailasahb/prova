Given(/^que acesso o site prova.stefanini$/, () => {
	cy.visit('teste/qa/')
})


When(/^eu clicar em Cadastrar$/, () => {
	cy.get('button[id*=register]').click()
})

When("Carregar a página", () => {
    //cadastro.AcessarCadastro()
    cy.url().should('be.equal', 'http://prova.stefanini-jgr.com.br/teste/qa/')

})

Then(/^retornará a mensagem O campo Nome é obrigatório$/, () => {
    cy.get('p[class*=error]').contains('O campo Nome é obrigatório.').should('be.exist')
})

Then(/^retornará a mensagem O campo E-mail é obrigatório$/, () => {
    cy.get('p[class*=error]').contains('O campo E-mail é obrigatório.').should('be.exist')
})


Then(/^retornará a mensagem O campo Senha é obrigatório$/, () => {
    cy.get('p[class*=error]').contains('O campo Senha é obrigatório.').should('be.exist')
})

Then(/^não deverá cadastrar o usuário$/, () => {
    cy.get('td[id*=tdUserId]').should('not.exist')
})

#language: pt
Funcionalidade: Cadastro

Como usuário, desejo realizar novos cadastrados
Para que possa utilizar o sistema

    Cenário: Visualizar a tela de cadastro em estado inicial
    Dado que acesso o site prova.stefanini 
    Quando Carregar a página 
    Então o campo Nome, E-mail e Senha devem estar vazios 
    E o botão Cadastrar deve estar habilitado
    E não deverá aparecer a listagem de usuários
    

    Cenário: Cadastro sem preenchimento do Nome 
    Dado que acesso o site prova.stefanini
    E preencho o campo E-mail e o campo Senha
    Quando eu clicar em Cadastrar
    Então retornará a mensagem O campo Nome é obrigatório
    E não deverá cadastrar o usuário

    Cenário: Cadastro sem preenchimento do E-mail
    Dado que acesso o site prova.stefanini
    E preencho o campo Nome e o campo Senha
    Quando eu clicar em Cadastrar
    Então retornará a mensagem O campo E-mail é obrigatório
    E não deverá cadastrar o usuário

    Cenário: Cadastro sem preenchimento da Senha
    Dado que acesso o site prova.stefanini
    E preencho o campo Nome e o campo E-mail
    Quando eu clicar em Cadastrar
    Então retornará a mensagem O campo Senha é obrigatório
    E não deverá cadastrar o usuário

    Cenário: Cadastro sem preenchimento de todos os dados
    Dado que acesso o site prova.stefanini
    E eu não preencher os campos Nome, E-mail e Senha
    Quando eu clicar em Cadastrar
    Então retornará a mensagem O campo Nome é obrigatório
    E retornará a mensagem O campo E-mail é obrigatório
    E retornará a mensagem O campo Senha é obrigatório
    E não deverá cadastrar o usuário

    Cenário: Cadastro apenas com o primeiro nome 
    Dado que acesso o site prova.stefanini
    E preencher apenas o primeiro nome no campo Nome
    E preencher o campo E-mail e preencher o campo Senha
    Quando eu clicar em Cadastrar
    Então retornará a mensagem Por favor insira um nome completo
    E não deverá cadastrar o usuário

    Cenário: Cadastro com E-mail inválido
    Dado que acesso o site prova.stefanini
    E  eu preencho o campo Nome e o campo Senha
    E  preencher o campo E-mail inválido
    Quando eu clicar em Cadastrar
    Então retornará a mensagem Por favor insira um e-mail válido
    E não deverá cadastrar o usuário

    Cenário: Cadastro com Senha menor que 8 caracteres
    Dado que acesso o site prova.stefanini
    E eu preencher o campo Nome e o campo E-mail
    E preencher o campo Senha com menos de 8 caracteres
    Quando eu clicar em Cadastrar
    Então retornará a mensagem A senha deve conter ao menos 8 caracteres
    E não deverá cadastrar o usuário

    Cenário: Cadastro de Usuário com Sucesso 
    Dado que acesso o site prova.stefanini
    E preencher os campos Nome, E-mail e Senha com dados válidos
    Quando eu clicar em Cadastrar 
    Então os dados que foram cadastrados deverão ser exibidos em uma tabela abaixo do formulário de cadastro
    E a tabela deverá exibir os usuários ordenados pelo ID de forma crescentes
    E visualizar o botão excluir ao lado de cada registro
                           
    Cenário: Exclusão de Usuário Cadastrado 
    Dado que eu já tenho dados cadastrados no site prova.stefanini
    Quando eu clicar em Excluir um usuário
    Então o usuário selecionado deve ser excluído 
    E os demais registros não devem sofrer alteração em seus ID's 

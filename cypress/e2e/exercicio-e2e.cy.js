/// <reference types="cypress" />
import checkout from "../support/page_objects/checkout";
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProduto1('Beaumont Summit Ki', 'M', 'Red', '2')
        cy.addProduto2('Caesar Warm-Up Pant', '33', 'Gray', '3')
        cy.addProduto3('Bruno Compete Hoodie', 'L', 'Black', '1')
        cy.addProduto4('Jupiter All-Weather Traine', 'M', 'Blue', '2')
       
        cy.visit('checkout/')
        checkout.Checkoutadd('Luis', 'Almeida', 'Ebac', 'Brasil', 'Av. brandao', 'São Luis','Maranhão', '65000000', '98999998899', 'teste@email.com')
        //validação
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.') 
    });

})

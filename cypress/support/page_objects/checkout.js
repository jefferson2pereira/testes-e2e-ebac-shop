class Checkout {

    Checkoutadd(nome, sobrenome, empresa, pais, endereço, cidade, estado, cep, fone, email){
        //ações do método
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').type(endereço)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').type(estado+'{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').type(fone)
        cy.get('#billing_email').type(email)
        cy.get('#order_comments').type('preferencia de entrega pela tarde')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new Checkout()

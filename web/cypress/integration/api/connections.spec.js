/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />


context('Connections endpoint', () => {
    it('', () => {
        // http://localhost:3333/connections
        // GET
        // 200
        
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`,
        }).then((response)=> {
            expect(response.status).to.eq(200)

            expect(response.duration).lessThan(20)
            //expect(response.duration).lt(20) //outra forma de usar o comando acima

            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .to.be.greaterThan(5)

                //outra forma de fazer o expect acima
                expect(response.body.total)
                    .an('number')
                    .satisfy((totalValue)=> { return totalValue >= 5}) //o satisfty permite usar uma função que retorna true ou false

            // Content-Type: application/json; charset=utf-8
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
                

        })
    })
});
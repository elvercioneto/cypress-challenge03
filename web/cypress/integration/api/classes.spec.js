/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoints', () => {
    it('POST - Cadastrar um novo professor', () => {

        //Request URL: http://localhost:3333/classes
        //POST
        //201 created
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Agilizei Prof",
                "avatar":"https://pickaface.net/gallery/avatar/unr_fakeeliot_181127_1929_w34iu.png",
                "whatsapp":"85999999999",
                "bio":"Lorem ipsun lorem ipsom",
                "subject":"Química",
                "cost":1000,
                "schedule":[
                  {
                    "week_day":0,
                    "from":"08:00",
                    "to":"09:00"
                  }
                ]
              }
            
        }).then((response) => {
            //asserções da resposta
            expect(response.status).to.equal(201)

        expect(response.headers)
            .to.have.property('content-type')
            .an('string')
            .equal('application/json; charset=utf-8')

            expect({ name: 'Agilizei Prof' }).to.deep.equal({ name: 'Agilizei Prof' })

            expect(response.body).to.be.a('array')
            
            
        })
        
    })
});
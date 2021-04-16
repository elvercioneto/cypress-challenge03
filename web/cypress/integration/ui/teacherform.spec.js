/// <reference types="cypress" />

const faker = require('faker')

const larguras = [1200, 1099]

    larguras.forEach(largura =>{

        context(`Teacher Form Page' - ${largura}px`, () => {
            beforeEach(()=> {
                cy.visit('/')
            })
            it('Cadastrar professor', () => {
                cy.get('div a.give-classes').click()
                cy.get('#name').type((faker.name.firstName() + ' ' + faker.name.lastName()))
                cy.get('#avatar').type('//https://pickaface.net/gallery/avatar/20120409_230759_3646_Fake.png')
                cy.get('#whatsapp').type(faker.phone.phoneNumber())
                cy.get('#bio').type(faker.lorem.paragraph())
                cy.get('select#subject').select('Matemática')
                cy.get('#cost').type('1000')
                cy.get('select#week_day').select('Terça-feira')
                cy.get('#from').type('18:00')
                cy.get('#to').type('19:00')

                cy.get('button[type=submit]').should('be.visible')
                
                cy.get('button[type=submit]').click()
                
                cy.on('window:alert',(txt)=>{
                    //Mocha assertions
                    expect(txt).to.contains('Cadastro realizado com sucesso!');
                })

                cy.on('window:confirm', () => true);
            

            
            });
        });
    })
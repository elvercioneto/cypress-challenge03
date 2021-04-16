/// <reference types="cypress" />


const larguras = [1200, 1099]

    larguras.forEach(largura =>{
        //a crase é utilizada para um template string
        //o skip é utilizado para não rodar o teste
        context(`Landing Page - ${largura}px`, () => {
            beforeEach(()=> {
                cy.visit('/')
                //cy.viewport('largura', 'altura')   //serve pra redimensioar a parte visivel da nossa tela
                cy.viewport(largura, 900)  
                cy.log('Largura: ', largura)
            })
            it('Navegar para o cadastro das aulas', () => {
                cy.get('div a.give-classes').click()
                cy.url().should('contain', 'give-classes')
                
            });
                 
            it('Navegar para a pesquisa de professores', () => {
                cy.get('div a.study').click()
                cy.url().should('contain', 'study')
            })
            
        });
    })
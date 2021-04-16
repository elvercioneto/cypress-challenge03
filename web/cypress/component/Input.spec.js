/// <reference types="cypress" />

import React from 'react'

import Input from '../../src/components/Input'

import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'

context('Input component', () => {

    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '../../components/Input/styles.css'
    it('deve ser renderizado com sucesso', () => {
        mount(
            <Router>
               <form>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            Input='name'
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            Input="avatar"
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            Input="whatsapp"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                            <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            />
                    </fieldset> 
                </form>
            </Router>
            ,
            {
                stylesheets:[baseCss, indexCss]
            }
            
        )
        cy.get('#name').as('nome')
        cy.get('#avatar').as('avatar')
        cy.get('#whatsapp').as('zap')

        cy.get('@nome').then(($elemento) => {
            //cy.log($elemento.css('background-color'))
            expect($elemento.css('background-color')).to.be.equal('rgb(248, 248, 252)')
        })
        cy.get('@avatar').then(($elemento) => {
            //cy.log($elemento.css('border-color'))
            expect($elemento.css('border-color')).to.be.equal('rgb(230, 230, 240)')
        })

        cy.get('@zap').then(($elemento) => {
            cy.log($elemento.css('border-color'))
            //expect($elemento.css('border-color')).to.be.equal('rgb(230, 230, 240)')
        })
        
        //cy.get('@input').children('input#name').as('title')
        //find e children - recursos avançados
        //parent..buscar o elemento acima
        //next..buscar o irmão do lado direito
        //prev..buscar o irmão do lado esquerdo
    });
});
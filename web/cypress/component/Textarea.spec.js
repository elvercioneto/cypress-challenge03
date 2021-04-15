/// <reference types="cypress" />

import React from 'react'

import Textarea from '../../src/components/Textarea'

import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'


context('Textarea component', () => {

    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/component/Textarea/styles.css'

    it('deve ser renderizado com sucesso', () => {
        mount(
            <Router>
                <Textarea
                    name="bio"
                    label="Biografia"
                />
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }
        )
        cy.get('label').as('biografia');
        cy.get('textarea').as('textoBio');

        cy.get('@biografia').should('have.text', 'Biografia');
        cy.get('@textoBio').then(($elemento) => {
            //cy.log($elemento.css('border'))
            expect($elemento.css('border-color')).to.be.equal('rgb(230, 230, 240)')
        })
    });
});
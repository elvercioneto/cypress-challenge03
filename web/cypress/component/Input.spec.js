/// <reference types="cypress" />

import React from 'react'

import Input from '../../src/components/Input'

import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'

context('Input component', () => {

    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/component/Input/styles.css'
    it('deve ser renderizado com sucesso', () => {
        mount(
            <Router>
                <form >
               
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
                </form>
            </Router>
            
        )
        //cy.get('.input-block').as('input')
        
        //cy.get('@input').children('input#name').as('title')
            
        
        
    });
});
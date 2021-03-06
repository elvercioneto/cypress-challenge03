/// <reference types="cypress" />

import React from 'react'

import PageHeader from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'



context('PageHeader component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = './../components/PageHeader/styles.css'

    it('deve ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "O primeiro passo é preencher esse formulário de inscrição."
        mount(
            <Router>
                <PageHeader
                    title={title}
                    description={description}
                />
            </Router>
            ,
            {
                stylesheets:[baseCss, indexCss]
            }
        )

        cy.get('.page-header').as('header')
        cy.get('strong').as('title');
        //uma outra forma de buscar é utilizando o find, nesse caso ele busca a partir do header
        //cy.get('@header').find('strong').as('title')
        cy.get('p').as('description');
        //outa forma de busca de elementos é utilizando o children, que busca todos os elementos q são filhos do header
        //cy.get('@header').children('p').as('description')
     

        cy.get('@title').should('have.text', title);
        cy.get('@description').should('have.text', description)

        cy.get('@header').then(($elemento) => {
            //cy.log($elemento.css('background-color'))
            //validar a cor de fundo do componente
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
        });
    });
});
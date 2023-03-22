class AddBoard {
     get addNewOrg () {
        return cy.get ('.vs-c-my-organization--add-new')
    }

    get newOrganisationWindowInput () {
        return cy.get ('input')
    }

    get nextBtn () {
        return  cy.get ('[name="next_btn"]')
    }

    get createBtn () {
        return cy.get ('[name="next_btn"]')
    }
    get addNewBoard () {
        return cy.get('.vs-c-boards-item__title')
    }
    get NewBoardInput () {
        return cy.get('[name="name"]')
    }
    get boardTypeScrumm () {
        return cy.get('[name="type_scrum"]')
    }
    get nextBtn () {
        return cy.get('[name="next_btn"]')
    }
    get configBtn () {
        return cy.get ('.vs-c-site-sign')
    }
    clickAddNewOrg () {
        this.addNewOrg.click()
    }
}

export const addBoard = new AddBoard
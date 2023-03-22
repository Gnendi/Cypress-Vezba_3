class DeleteBoard {
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
       return cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo')
   }

   get deleteBtn () {
    return cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn > :nth-child(2)')
   }

   get yesBtn () {
    return cy.get('[name="save-btn"]')
   }
   clickAddNewOrg () {
       this.addNewOrg.click()
   }
}

export const deleteBoard = new DeleteBoard
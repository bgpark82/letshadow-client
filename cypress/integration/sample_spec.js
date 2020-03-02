describe('My First Test',function(){
    it('Does not do much!',function(){
        expect(true).to.equal(true);
    })
    it('Visits the Letshadow',function(){
        cy.visit('http://letshadow.com')
    })
})


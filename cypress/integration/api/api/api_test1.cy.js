describe('all api tests', () => {

    it('GET 1', () => {

        cy.request('GET', "https://reqres.in/api/users?page=2").then ((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
        })
    })

    it('GET 1', () => {

        cy.request('GET', "https://reqres.in/api/users?page=2").as('user_list')
        })
   
   
    })

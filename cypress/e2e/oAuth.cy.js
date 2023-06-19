cy.request({
    method: 'POST',
    url: 'https://stage.twistle.com/',
    body: {
        username: 'ronojoy.pyne@twistle.com',
        password: 'Future@hope1',
        grant_type: 'Future@hope1',
        client_id:  `${Cypress.env('auth0_client_id')}`,
        client_secret: `${Cypress.env('auth0_client_secret')}`,
        audience: `${Cypress.env('auth0_audience')}`,
        scope: `${Cypress.env('auth0_scope')}`,
    },
}).then(({ body }) => {
    const claims = jwt.decode(body.id_token)
    const { nickname, name, picture, updated_at, email, email_verified, sub, exp } = claims

    const auth0Token = {
        body: {
            ...body,
            decodedToken: {
                claims,
                audience: `${Cypress.env('auth0_audience')}`,
                client_id: `${Cypress.env('auth0_client_id')}`,
                user: {
                    nickname,
                    name,
                    picture,
                    updated_at,
                    email,
                    email_verified,
                    sub
                },
            }
        },
        expiresAt: exp
    }

    window.localStorage.setItem(`auth0Cypress`, JSON.stringify(auth0Token));
});
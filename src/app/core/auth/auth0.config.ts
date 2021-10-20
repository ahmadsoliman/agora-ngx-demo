export const Auth0Config = {
    clientID: 'JV27y3SYEImqK7zVvQGANP4WkKQfDBDi',
    domain: 'thoughtdesign.auth0.com',
    responseType: 'token id_token',
    audience: 'https://cceportal/api',
    redirectUri: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/callback',
    scope: 'openid profile email',
    authConnectionType: 'TenantUsers',
};

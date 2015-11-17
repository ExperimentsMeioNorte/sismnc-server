Router.map(function() {

// JORNAL #################################################

    this.route( "jornal/coluna", { where: "server" })
        .get( function() {
            this.response.end('requisicao GET\n');
        })
        .post( function() {
            this.response.end('requisicao POST\n');
        })
        .put( function() {
            this.response.end('requisicao PUT\n');
        })
        .delete( function() {
            this.response.end('requisicao DELETE\n');
        });

// PORTAL #################################################

    this.route( "portal/coluna", { where: "server" })
        .get( function() {
            this.response.end('requisicao GET\n');
        })
        .post( function() {
            this.response.end('requisicao POST\n');
        })
        .put( function() {
            this.response.end('requisicao PUT\n');
        })
        .delete( function() {
            this.response.end('requisicao DELETE\n');
        });
});
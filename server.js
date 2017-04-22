
let ML = require( '@zelgadis87/ml.js' )
	, Bluebird = require( 'bluebird' )
	, logger = require( 'log4js' ).getLogger( 'server' )
	;

ML.register( 'server', [ 'database' ], ( database ) => {

	let server = {}, counter = 0;

	return Bluebird
		.resolve()
		.tap(() => logger.info( 'Starting server on port 123456...' ) )
		.delay( 1500 )
		.tap(() => server.interval = setInterval(() => database.put( `server-${ ++counter }` ), 1500 ) )
		.tap(() => logger.info( 'Server loaded' ) )
		.return( server );

}, ( server ) => {

	return Bluebird
		.resolve()
		.tap(() => logger.info( 'Shutting down listener on port 123456...' ) )
		.delay( 500 )
		.tap(() => clearInterval( server.interval ) )
		.tap(() => logger.info( 'Server stopped' ) );

} );

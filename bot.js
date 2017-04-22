
let ML = require( '@zelgadis87/ml.js' )
	, Bluebird = require( 'bluebird' )
	, logger = require( 'log4js' ).getLogger( 'bot' )
	;

ML.register( 'bot', [ 'database' ], ( database ) => {

	let bot = {};

	return Bluebird
		.resolve()
		.tap(() => logger.info( 'Loading bot...' ) )
		.delay( 250 )
		.tap(() => logger.info( 'Bot loaded, using database: ', database.getData() ) )
		.return( bot );

}, ( bot, database ) => {
	database.put( 'bot' );
	logger.info( 'Bot has been stopped' );
} );

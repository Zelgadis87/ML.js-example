
const log4js = require( 'log4js' );
log4js.configure( { appenders: [ { type: 'console' } ], levels: [ 'INFO' ] } );

const moduleLoader = require( '@zelgadis87/ml.js' )
	, Bluebird = require( 'bluebird' )
	// , log4js = require( 'log4js' )
	;

const logger = log4js.getLogger( 'main' );

const bot = require( './bot.js' )
	, database = require( './database.js' )
	, server = require( './server.js' );

Bluebird.resolve()
	.tap(() => logger.info( 'Starting modules...' ) )
	.tap( () => moduleLoader.start() )
	.tap(() => logger.info( 'All modules started, awaiting 2000ms...' ) )
	.delay( 2000 )
	.tap(() => logger.info( 'Stopping modules...' ) )
	.tap(() => moduleLoader.stop() )
	.tap(() => logger.info( 'All modules stopped, awaiting 2000ms...' ) )
	.delay( 2000 );

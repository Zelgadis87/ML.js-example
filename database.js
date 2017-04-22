
let ML = require( '@zelgadis87/ml.js' )
	, Bluebird = require( 'bluebird' )
	, logger = require( 'log4js' ).getLogger( 'database' )
	;

function Database() {

	let me = this, data = null;

	me.getData = function() {
		return data;
	};

	me.put = function( value ) {
		data.push( value );
		return me;
	};

	function setup() {
		return Bluebird
			.resolve()
			.tap(() => logger.info( 'Loading database...' ) )
			.delay( 3000 )
			.then(() => data = [ 'data' ] )
			.tap(( data ) => logger.info( 'Database loaded', data ) )
			.return( me );
	}

	function teardown() {
		return Bluebird
			.delay( 1000 )
			.tap(() => logger.info( 'Database data saved to file', data ) );
	}

	ML.register( 'database', [], setup, teardown );

}

module.exports = new Database();

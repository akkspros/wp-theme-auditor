/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: No Title', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=edge-case-no-title` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );

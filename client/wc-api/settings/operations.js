/** @format */

/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { pick } from 'lodash';

function read( resourceNames, fetch = apiFetch ) {
	return [ ...readSettings( resourceNames, fetch ) ];
}

function update( resourceNames, data, fetch = apiFetch ) {
	return [ ...updateSettings( resourceNames, data, fetch ) ];
}

function readSettings( resourceNames, fetch ) {
	if ( resourceNames.includes( 'settings' ) ) {
		const url = '/wc/v3/settings/wc_admin';

		return [
			fetch( { path: url } )
				.then( settingsToSettingsResource )
				.catch( error => {
					return { [ 'settings' ]: { error: String( error.message ) } };
				} ),
		];
	}
	return [];
}

function updateSettings( resourceNames, data, fetch ) {
	const resourceName = 'settings';
	const settingsFields = [ 'woocommerce_excluded_report_order_statuses' ];

	if ( resourceNames.includes( resourceName ) ) {
		const url = '/wc/v3/settings/wc_admin/';
		const settingsData = pick( data[ resourceName ], settingsFields );
		console.log( settingsData );

		const promises = Object.keys( settingsData ).map( setting =>
			fetch( { path: url + setting, method: 'POST', data: { value: settingsData[ setting ] } } )
				.then( settingsToSettingsResource )
				.catch( error => {
					return { [ resourceName ]: { error } };
				} )
		);

		console.log( promises );

		return [ promises ];

		// return [
		// 	fetch( { path: url, method: 'POST', data: settingsData } )
		// 		.then( settingsToSettingsResource )
		// 		.catch( error => {
		// 			return { [ resourceName ]: { error } };
		// 		} ),
		// ];
	}
	return [];
}

function settingsToSettingsResource( settings ) {
	const settingsData = {};
	settings.forEach( setting => ( settingsData[ setting.id ] = setting.value ) );
	return { [ 'settings' ]: { data: settingsData } };
}

export default {
	read,
	update,
};

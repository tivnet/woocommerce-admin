/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const withPluginsHydration = ( data ) => ( OriginalComponent ) => {
	return ( props ) => {
		const dataRef = useRef( data );

		useSelect( ( select, registry ) => {
			if ( ! dataRef.current ) {
				return;
			}

			const { isResolving, hasFinishedResolution } = select( STORE_NAME );
			const {
				startResolution,
				finishResolution,
				updateActivePlugins,
				updateInstalledPlugins,
			} = registry.dispatch( STORE_NAME );

			if (
				! isResolving( 'getActivePlugins', [] ) &&
				! hasFinishedResolution( 'getActivePlugins', [] )
			) {
				startResolution( 'getActivePlugins', [] );
				startResolution( 'getInstalledPlugins', [] );
				updateActivePlugins( dataRef.current.activePlugins );
				updateInstalledPlugins( dataRef.current.installedPlugins );
				finishResolution( 'getActivePlugins', [] );
				finishResolution( 'getInstalledPlugins', [] );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};

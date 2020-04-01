/**
 * Internal Dependencies
 */
import TYPES from './action-types';

export function updateActivePlugins( activePlugins ) {
	return {
		type: TYPES.UPDATE_ACTIVE_PLUGINS,
		activePlugins,
	};
}

export function updateInstalledPlugins( installedPlugins ) {
	return {
		type: TYPES.UPDATE_INSTALLED_PLUGINS,
		installedPlugins,
	};
}

export function setIsRequesting( selector, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}

export function setError( selector, error ) {
	return {
		type: TYPES.SET_ERROR,
		selector,
		error,
	};
}

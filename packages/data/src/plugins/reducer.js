/**
 * Internal dependencies
 */
import TYPES from './action-types';

const plugins = (
	state = { requesting: {}, errors: {} },
	{ type, activePlugins, installedPlugins, selector, isRequesting, error }
) => {
	switch ( type ) {
		case TYPES.UPDATE_ACTIVE_PLUGINS:
			state = {
				...state,
				activePlugins,
				requesting: {
					...state.requesting,
					getActivePlugins: false,
				},
				errors: {
					...state.errors,
					getActivePlugins: false,
				},
			};
			break;
			case TYPES.UPDATE_INSTALLED_PLUGINS:
			state = {
				...state,
				installedPlugins,
				requesting: {
					...state.requesting,
					getInstalledPlugins: false,
				},
				errors: {
					...state.errors,
					getInstalledPlugins: false,
				},
			};
			break;
		case TYPES.SET_IS_REQUESTING:
			state = {
				...state,
				requesting: {
					...state.requesting,
					[ selector ]: isRequesting,
				},
			};
			break;
		case TYPES.SET_ERROR:
			state = {
				...state,
				requesting: {
					...state.requesting,
					[ selector ]: false,
				},
				errors: {
					...state.errors,
					[ selector ]: error,
				},
			};
	}
	return state;
};

export default plugins;

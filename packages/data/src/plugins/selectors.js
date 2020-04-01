export const getActivePlugins = ( state ) => {
	return state.activePlugins || [];
};

export const getInstalledPlugins = ( state ) => {
	return state.installedPlugins || [];
}

export const isPluginsRequesting = ( state, selector ) => {
	return state.requesting[ selector ] || false;
};

export const getPluginsError = ( state, selector ) => {
	return state.errors[ selector ] || false;
};

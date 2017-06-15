export const DataSelector = (state) => {
	const {items} = state;
	console.log(state, 'selectors');
	return ({
		data: state,
		firstItem: items.data && items.data[0]
	});
};
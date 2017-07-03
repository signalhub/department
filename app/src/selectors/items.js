export const DataSelector = (state) => {
	const { items } = state;
	let { firstItem } = items;
	if(items.data && items.data.length) {
		firstItem = items.data[0];
	}
	console.log(state, 'selectors');
	return ({
		firstItem
	});
};
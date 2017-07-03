export const DataSelector = (state) => {
	const { items } = state;
	let { firstItem } = state.items;
	if(items.data && items.data.length) {
		firstItem = items.data[0];
	}
	return ({
		items: {
			data: items.data,
			firstItem
		}
	});
};
const DefaultState = {
	data: {},
	firstItem: null
};

export default function (state = DefaultState, action) {
	const { type, data } = action;
	console.log(action, 'reducers');
	switch (type) {
		case 'LOAD_DATA_SUCCESS': {
			return {
				...state,
				data,
				// firstItem: data[0]
			};
		}
		case 'LOAD_DATA_FAIL':
		default:
			return state;
	}
}

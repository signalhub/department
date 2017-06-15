import axios from 'axios';

export function loadData() {
	return (dispatch) => {
		const data = axios.get(`http://localhost:9000/items`)
			.then(data => data.data);
		dispatch({
			type: 'LOAD_DATA',
			promise: data
		});
	};
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import assignIn from 'lodash/assignIn';
import reduce from 'lodash/reduce';
import ItemsList from './../components/ItemsList';
import { loadData } from './../actions/items';
import { DataSelector } from './../selectors/items';

const propTypes = {
	loadData: PropTypes.func,
	items: PropTypes.object,
	firstItem: PropTypes.object
};

class App extends Component {

	componentDidMount() {
		this.props.loadData();
	}

	render() {
		const { items } = this.props;
		return (
			<ItemsList items={items.data}
					   firstItem={items.firstItem}/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loadData
	}, dispatch);
}

function mapStateToProps(state) {
	return reduce([
		DataSelector
	], (props, mapper) => assignIn(props, mapper(state)), {});
}

App.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
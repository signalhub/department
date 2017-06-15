import React, { Component, PropTypes } from 'react';

const propTypes = {
	item: PropTypes.object
};

class Item extends Component {

	render() {
		const { item } = this.props;
		return(
			<div className="b-item">
				<span>{item.name}</span>
			</div>
		)
	}
}

Item.PropTypes = propTypes;

export default Item;

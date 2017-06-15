import React, {Component, PropTypes} from 'react';
import Item from './Item';
import './styles.styl'

const propTypes = {
	items: PropTypes.array,
	firstItem: PropTypes.object
};

class ItemsList extends Component {

	render() {
		const { items, firstItem } = this.props;
		console.log(this.props, 'itemslist');
		return (
			<div className="b-main">
				<h1>SIMPLE LIST ITEMS</h1>
				<div>First item {firstItem && firstItem.name}</div>
				<div className="b-left-side">
					{
						items.length && items.map((item, index) => (
							<Item item={item} key={index}/>
						))
					}
				</div>
				<div className="b-right-side"></div>
			</div>
		)
	}
}

ItemsList.PropTypes = propTypes;

export default ItemsList;
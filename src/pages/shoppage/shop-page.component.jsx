import React, { Component } from 'react';

import './shop-page.style.scss';
import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1>Shop</h1>
        {collections.map(({ id, ...otherCollectionData }) => (
          <CollectionPreview key={id} {...otherCollectionData} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

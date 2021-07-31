import React from 'react';
import ProductCard from './ProductCard.jsx';
// import localStorage from '../../helpers/localStorage.js';
import axios from 'axios';
import '../css/RelatedProducts.css';

//
// Try to use product ids instead of products for performance reasons
//

const Outfit = (props) => {
  const { selectedProduct, selectProduct, outfit, updateOutfit } = props;
  const { localStorage } = window;

  // const update = (newOutfit) => {
  //   props.updateOutfit(newOutfit);
  // };

  const addToOutfit = () => {
    if (outfit.includes(selectedProduct)) {
      return;
    }
    const newOutfit = [ selectedProduct, ...outfit ];
    localStorage.setItem('outfit', JSON.stringify(newOutfit.map(item => item.id)));
    console.log('Outfit saved to localStorage:', localStorage.getItem('outfit'));

    updateOutfit(newOutfit);
  };

  const removeFromOutfit = (event, product) => {
    event.stopPropagation();
    const match = product.id;
    const newOutfit = [ ...outfit ];
    console.log('Remove', match);
    let i = newOutfit.length;
    while (i--) {
      if (newOutfit[i].id === match) {
        newOutfit.splice(i, 1);
      }
    }

    newOutfit.length ? localStorage.setItem('outfit', JSON.stringify(newOutfit.map(item => item.id))) : localStorage.removeItem('outfit');
    updateOutfit(newOutfit);
  };

  // const { outfit } = this.state;
  // console.log('Products in current outfit:', products);

  let key = 0;
  return selectedProduct ? (
    <div id='Outfit'>
      <h1></h1>
      <span className='rp-component-title'>YOUR OUTFIT</span>
      <div className='rp-card-container'>
        <div className='rp-card rp-card-placeholder' title={`Add ${selectedProduct.name} to outfit`} onClick={ addToOutfit }>
          <h1>+</h1>
          <h2>Add to Outfit</h2>
        </div>
        {outfit.length ? (
          outfit.map(product => (
            <ProductCard key={ key++ } type='outfit' value={ product.id } product={ product } selectProduct={ selectProduct } action={ removeFromOutfit } />
          ))) : null
        }
      </div>
    </div>
  ) : null;
};

export default Outfit;

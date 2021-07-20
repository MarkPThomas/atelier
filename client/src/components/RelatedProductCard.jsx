import React from 'react';
import '../style.css';

const stars = [1, 1, 1, .8, 0];

const RelatedProductCard = (props) => {
  const { product } = props;
  let key = 0;
  return (
    <div className='relatedProductCard'>
      <div className='imageBacker'>
        <img src=''></img>
        <a className='relatedProductStar' title="Add to outfit" onClick={() => { props.updateOutfit(product); }}>{String.fromCharCode(9734)}</a>
      </div>
      <div class='relatedProductInfo'>
        <span className='relatedProductCategory'>{product.category.toUpperCase()}</span>
        <span className='relatedProductTitle' title='View product detail'>{`${product.name}: ${product.slogan.toLowerCase()}`}</span>
        <span class='relatedProductPrice'>{'$' + product.default_price}</span>
        <div class='starRating' title='See reviews'>
          {stars.map(star => (
            <a key={key++}>{String.fromCharCode((star > 0) ? 9733 : 9734)}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;
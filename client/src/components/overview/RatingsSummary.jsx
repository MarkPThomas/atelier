import React from 'react';
import StarRating from '../shared/StarRating';
import './ratingsSummary.css';

const RatingsSummary = (props) => {
  const handleOnClick = () => {
    props.callback?.call();
    document.getElementById('rr-ratings-reviews-widget')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <span id="po-product-rating" class="row row-margin">
      {
        props.reviewCount > 0 ? (
          <React.Fragment>
            <StarRating
              rating={ props.averageRating }
            />
            <div id="po-read-all-reviews" onClick={handleOnClick} class="row link">
              Read all { props.reviewCount } reviews
            </div>
          </React.Fragment>
        ) : (
          <div>
            Loading Ratings Summary...
          </div>
        )
      }
    </span>
  );
};

export default RatingsSummary;
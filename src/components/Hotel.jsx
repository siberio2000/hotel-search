import React, { useState, useEffect } from "react";
import { Review } from "./Review";

import Button from "react-bootstrap/Button";

/**
 * Create Hotel component
 */
export const Hotel = ({ name, address, rating, reviews }) => {
  const [reviewData, setReviewData] = useState([]);
  //   console.log('review, data', reviewData)

  /**
   * Set ASC sorting
   */
  const sortAscending = () => {
    setReviewData([...reviews.sort((a, b) => a.rating - b.rating)]);
  };

  /**
   * Set DESC sorting
   */
  const sortDescending = () => {
    // console.log("test");
    setReviewData([...reviews.sort((a, b) => b.rating - a.rating)]);
  };

  /**
   * Set date sorting
   */
  const sortDate = () => {
    setReviewData([
      ...reviews.sort(
        (a, b) => new Date(a.publishedDate) - new Date(b.publishedDate)
      ),
    ]);
  };

  /**
   * Set default ASC sorting
   */
  useEffect(() => {
    // console.log('useEffect')
    sortAscending();
  }, []); // eslint-disable-line

  return (
    <>
      <div className="main p-5 col-xl-12">
        <div className="col-xl-12 p-3 d-flex justify-content-center">
          <div>
            <div className="text-center">
              <h3>{name}</h3>
              <p>{address}</p>
              <p>
                <b>Hotel rating: </b>
                {rating}
              </p>
            </div>
            <div className="col-xl-12 p-5 d-flex justify-content-center">
              <Button variant="secondary" onClick={sortAscending} active>
                Sort worst to best
              </Button>
              <Button variant="secondary" onClick={sortDescending}>
                Sort best to worst
              </Button>
              <Button variant="secondary" onClick={sortDate}>
                Sort by Date
              </Button>
            </div>
            <div>
              {reviewData.map((review) => (
                <Review key={review.publishedDate} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

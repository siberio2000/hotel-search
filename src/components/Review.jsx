import React from "react";

function formatDate(string){
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}

/**
 * Create Review component
 */
export const Review = ({
  publishedDate,
  rating,
  title,
  text,
  user,
  tripType,
}) => (
  <div className="main p-3">
    <div className="col-xl-12 d-flex justify-content-center list-group-item-success">
    <ul>
    <li><b>Published Date:</b> {formatDate(publishedDate)}</li>
    <li><b>Rating:</b> {rating}</li>
    <li><b>Title:</b> {title}</li>
    <li><b>Description:</b> {text}</li>
    <li><b>User:</b> {user.username}</li>
    {tripType && <li><b>Trip Type:</b> {tripType}</li>}
  </ul>
    </div>
  </div>
);

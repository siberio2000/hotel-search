import React, { useState, useEffect } from "react";

import { Hotel } from "./Hotel";

import { Image } from "react-bootstrap";

export const MainPage = () => {
  const [hotels, setHotels] = useState([]);

  /**
   * Call API once using useEffect
   */
  useEffect(() => {
    fetch(
      "https://api.whitbread.co.uk/reviews?hotel-codes=LONHOL,LONTOW,LONPUT,LONEUS,LONCOU"
    )
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.log(err));
  }, []);

  /**
   * walk through each hotel
   */
  return (
    <>
      <div className="col-xl-12 pt-5 pb-1 d-flex justify-content-center">
        <Image className="pt-4 pb-3"
          src="https://www.premierinn.com/content/dam/pi/websites/desktop/icons/brand/pi-logo-rest-easy.svg"
          rounded
        />
      </div>
      <div>
        {hotels.map((hotel) => (
          <Hotel key={hotel.hotelCode} {...hotel} />
        ))}
      </div>
      <div className="col-xl-12 pt-5 pb-5 d-flex justify-content-center text-center">
        <p style={{ fontSize: "11px", fontFamily: "Bradley Hand, cursive" }}>
          Hotels review app. <br />
          Created by Roman Jasko (2021)
        </p>
      </div>
    </>
  );
};

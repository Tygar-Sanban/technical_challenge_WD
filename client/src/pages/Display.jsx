import React, { useEffect, useState, CSSProperties } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Display() {
  const [allPhones, setAllPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onePhone, setOnePhone] = useState(null);

  async function getPhones() {
    try {
      const phones = await axios.get("http://localhost:5005/phone");
      setAllPhones(phones.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClick(id) {
    try {
      const thisPhone = await axios.get(`http://localhost:5005/phone/${id}`);
      setOnePhone(thisPhone.data);
      console.log("this is the onePhoen", onePhone);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPhones();
    console.log("this is the status", isLoading);
    console.log("those are all the phones", allPhones);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="sweet-loading">
          <ClipLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <div>
            <h1 style={{ fontFamily: "sans-serif" }}>
              Checkout our phone infos !
            </h1>
          </div>
          <div className="flex">
            <div className="inside-flex">
              {allPhones.map((elem) => {
                return (
                  <div>
                    <div
                      className="display-info"
                      onClick={() => handleClick(elem.id)}
                      key={elem.id}
                    >
                      {elem.name}
                    </div>
                  </div>
                );
              })}
              <div
                style={{ backgroundColor: "red" }}
                className="display-info"
                onClick={() => setOnePhone(null)}
              >
                Clear
              </div>
            </div>
            <div className="inside-flex">
              {onePhone && (
                <div className="content">
                  <p>{onePhone.name}</p>
                  <p>{onePhone.manufacturer}</p>
                  <p>{onePhone.description}</p>
                  <p>Color: {onePhone.color}</p>
                  <p>Price: {onePhone.price} $</p>
                  <p>Screen: {onePhone.screen}</p>
                  <p>Processor: {onePhone.processor}</p>
                  <p>Ram: {onePhone.ram}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;

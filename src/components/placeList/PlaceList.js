import React from "react";
import "./placeList.css";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

function PlaceList() {
  const { currentPage, filteredResults, searchInput } = useGlobalContext();
  console.log("PlaceList", currentPage);
  console.log("filteredResults", filteredResults);

  return (
    <div className="placelist">
      {searchInput.length > 1
        ? filteredResults.map((item) => {
            return (
              <div className="placelist-container" key={item.id}>
                <Link to={`/detail/${item.id}`} className="placelist-link">
                  <div className="placelist-blog">
                    <div className="placelist-header">
                      <img src={item.profile_image_url} alt="" />

                      <div className="placelist-title">
                        <h3>{item.name}</h3>
                        <div className="placelist-rate">
                          <p>
                            <GoCalendar />

                            {`${item.operation_time[0].time_open} AM - ${item.operation_time[0].time_close} AM`}
                          </p>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="placelist-img">
                      <div className="placelist-img-list">
                        {item.images.map((img) => {
                          return <img src={img} alt="" />;
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        : currentPage.map((item) => {
            return (
              <div className="placelist-container" key={item.id}>
                <Link to={`/detail/${item.id}`} className="placelist-link">
                  <div className="placelist-blog">
                    <div className="placelist-header">
                      <img src={item.profile_image_url} alt="" />

                      <div className="placelist-title">
                        <h3>{item.name}</h3>
                        <div className="placelist-rate">
                          <p>
                            <GoCalendar />

                            {`${item.operation_time[0].time_open} AM - ${item.operation_time[0].time_close} AM`}
                          </p>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="placelist-img">
                      <div className="placelist-img-list">
                        {item.images.map((img) => {
                          return <img src={img} alt="" />;
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

      {/* <div className="placelist-container">
        <div className="placelist-blog">
          <div className="placelist-header">
            <img
              src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              alt=""
            />

            <div className="placelist-title">
              <h3>Cantina Wine Bar & Italian Kitchen</h3>

              <div className="placelist-rate">
                <p>
                  <GoCalendar />
                  10.00 AM - 6.00PM
                </p>
                <span>4.5</span>
              </div>
            </div>
          </div>

          <div className="placelist-img">
            <div className="placelist-img-list">
              <img
                src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PlaceList;

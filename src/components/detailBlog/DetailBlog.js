import React, { useEffect } from "react";
import "./detailBlog.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

function DetailBlog() {
  const { id } = useParams();
  console.log("useparam detailblog", id);

  const { currentPage } = useGlobalContext();
  console.log("detailBlog", currentPage);

  const filterPage = currentPage.filter((item) => {
    return item.id.toString() === id;
  });
  console.log("filterPage detailblog", filterPage);

  // const filterPage = () => {
  //   return currentPage.filter((item) => {
  //     return item.id.toString() === id;
  //   });
  // };

  useEffect(() => {}, [id]);

  return (
    <div className="detailBlog">
      <div className="detailBlog-background">
        {filterPage.map((item) => {
          return (
            <div className="detailBlog-container" key={item.id}>
              <img src={item.profile_image_url} alt="" />

              <div className="detailBlog-title">
                <h3>{item.name}</h3>

                <div className="detailBlog-rate">
                  <span>{item.rating}</span>
                </div>
              </div>

              <div className="detailBlog-address">
                <h4>Address :</h4>

                <div>
                  <p>{item.address}</p>
                </div>
              </div>

              <div className="detailBlog-time">
                <h4>Opening Hour :</h4>

                <div>
                  {item.operation_time.map((time) => {
                    return (
                      <p>
                        {time.time_open} AM - {time.time_close} PM
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        <div className="detailBlog-Images-container">
          <div className="detailBlog-images">
            <h3>Images</h3>

            {filterPage.map((item) => {
              return (
                <div className="detailBlog-imglist">
                  {item.images.map((img) => {
                    return <img src={img} alt="" />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    // <div className="detailBlog">
    //   <div className="detailBlog-background">
    //     <div className="detailBlog-container">
    //       <img
    //         src="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1647082456/qov6sdzuqcrd4iyxpynx.jpg"
    //         alt=""
    //       />

    //       <div className="detailBlog-title">
    //         <h3>DAI LOU MODERN CHINESE CUISINE</h3>

    //         <div className="detailBlog-rate">
    //           <span>4.1</span>
    //         </div>
    //       </div>

    //       <div className="detailBlog-address">
    //         <h4>Address :</h4>

    //         <div>
    //           <p>
    //             55/5 Soi Phahon Yothin 2, Khwaeng Samsen Nai, Khet Phaya Thai,
    //             Krung Thep Maha Nakhon 10400, Thailand
    //           </p>
    //         </div>
    //       </div>

    //       <div className="detailBlog-time">
    //         <h4>Opening Hour :</h4>

    //         <div>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //           <p>Monday: 10.00 AM - 6.00 AM</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="detailBlog-Images-container">
    //       <div className="detailBlog-images">
    //         <h3>Images</h3>

    //         <div className="detailBlog-imglist">
    //           <img
    //             src="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1647082456/qov6sdzuqcrd4iyxpynx.jpg"
    //             alt=""
    //           />
    //           <img
    //             src="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1647082456/qov6sdzuqcrd4iyxpynx.jpg"
    //             alt=""
    //           />
    //           <img
    //             src="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1647082456/qov6sdzuqcrd4iyxpynx.jpg"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DetailBlog;

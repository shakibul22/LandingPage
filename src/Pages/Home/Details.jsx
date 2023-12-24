import React, { useState } from "react";

import closeIcon from "../../assets/icon-close-white.svg";
import prevIcon from "../../assets/icon-previous.svg";
import nextIcon from "../../assets/icon-next.svg";

export const data = [
  {
    "id": 1,
    "manufacturer": "Google Inc.",
    "model": "Google Pixel 3",
    "largeImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "smallImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "price": "799.00",
    "description": "Staying too far from your loved ones? Video call them for hours on end. The weather is romantic? Listen to your favourite playlists all day long. Don’t want to go out this weekend? Then binge watch your favourite series on the Internet. The Pixel 3 ensures that there’s never a dull moment, all thanks to its powerful battery, impressive cameras and its expansive bezel-less display.",
    "specs": {
      "body": "145.6 x 68.2 x 7.9 mm (5.73 x 2.69 x 0.31 in)",
      "camera": {
        "main": "12.2 MP (wide) dual pixel",
        "selfie": "8 MP (ultrawide), no AF",
        "features": "Dual-LED flash, Auto-HDR, panorama"
      },
      "memory": "64/128 GB, 4 GB RAM",
      "battery": "Non-removable Li-Po 2915 mAh battery",
      "chipset": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
      "display": "5.5 inches, 1080 x 2160 pixels, 18:9 ratio (~443 ppi density)",
      "features": "NFC, USB 3.1 Type-C 1.0, fingerprint (rear-mounted), fast battery charging, Gorilla Glass 5, aluminum frame, IP68 dust/water resistant, Always-on display, HDR",
      "platform": "OS Android 9.0 (Pie)"
    },
    "stock": 49
  },
  {
    "id": 2,
    "manufacturer": "Apple Inc.",
    "model": "iPhone 12",
    "largeImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "smallImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "price": "999.00",
    "description": "Experience the power of A14 Bionic chip. Capture your best moments with Night mode and Deep Fusion. Enjoy the edge-to-edge OLED display. The iPhone 12 brings innovation at every level for an exceptional user experience.",
    "specs": {
      "body": "146.7 x 71.5 x 7.4 mm (5.78 x 2.82 x 0.29 in)",
      "camera": {
        "main": "12 MP (wide) dual pixel",
        "selfie": "12 MP (ultrawide), HDR",
        "features": "Dual-LED dual-tone flash, Night mode, Deep Fusion"
      },
      "memory": "64/128/256 GB, 4 GB RAM",
      "battery": "Non-removable Li-Ion 2815 mAh battery",
      "chipset": "Apple A14 Bionic (5 nm)",
      "display": "6.1 inches, 1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)",
      "features": "Face ID, USB-C reversible connector, Ceramic Shield front cover, HDR10, Dolby Vision",
      "platform": "iOS 14, upgradable to iOS 15"
    },
    "stock": 35
  },
  {
    "id": 3,
    "manufacturer": "Samsung",
    "model": "Samsung Galaxy S21",
    "largeImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "smallImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "price": "899.00",
    "description": "Unleash your creativity with the powerful Exynos 2100 processor. Explore stunning photography with 8K video recording. Immerse yourself in the 120Hz Dynamic AMOLED display. The Galaxy S21 redefines smartphone excellence.",
    "specs": {
      "body": "151.7 x 71.2 x 7.9 mm (5.97 x 2.80 x 0.31 in)",
      "camera": {
        "main": "12 MP (wide) Dual Pixel",
        "selfie": "10 MP (wide), Dual Pixel",
        "features": "LED flash, auto-HDR, panorama, 8K video recording"
      },
      "memory": "128/256 GB, 8 GB RAM",
      "battery": "Non-removable Li-Ion 4000 mAh battery",
      "chipset": "Exynos 2100 (5 nm) - International",
      "display": "6.2 inches, 1080 x 2400 pixels, 20:9 ratio (~421 ppi density), Dynamic AMOLED 2X, 120Hz",
      "features": "Fingerprint (under display, ultrasonic), IP68 dust/water resistant, HDR10+, Gorilla Glass Victus",
      "platform": "Android 11, One UI 3.1"
    },
    "stock": 27
  },
  {
    "id": 4,
    "manufacturer": "Samsung",
    "model": "Samsung Galaxy S21",
    "largeImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "smallImg": "https://res.cloudinary.com/drhtv8dr4/image/upload/v1703019808/Pixel_zyadql.png",
    "price": "899.00",
    "description": "Unleash your creativity with the powerful Exynos 2100 processor. Explore stunning photography with 8K video recording. Immerse yourself in the 120Hz Dynamic AMOLED display. The Galaxy S21 redefines smartphone excellence.",
    "specs": {
      "body": "151.7 x 71.2 x 7.9 mm (5.97 x 2.80 x 0.31 in)",
      "camera": {
        "main": "12 MP (wide) Dual Pixel",
        "selfie": "10 MP (wide), Dual Pixel",
        "features": "LED flash, auto-HDR, panorama, 8K video recording"
      },
      "memory": "128/256 GB, 8 GB RAM",
      "battery": "Non-removable Li-Ion 4000 mAh battery",
      "chipset": "Exynos 2100 (5 nm) - International",
      "display": "6.2 inches, 1080 x 2400 pixels, 20:9 ratio (~421 ppi density), Dynamic AMOLED 2X, 120Hz",
      "features": "Fingerprint (under display, ultrasonic), IP68 dust/water resistant, HDR10+, Gorilla Glass Victus",
      "platform": "Android 11, One UI 3.1"
    },
    "stock": 27
  },
  {
    "id": 5,
    "manufacturer": "Samsung",
    "model": "Samsung Galaxy S21",
    "largeImg": "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark10-pro-.jpg",
    "smallImg": "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark10-pro-.jpg",
    "price": "899.00",
    "description": "Unleash your creativity with the powerful Exynos 2100 processor. Explore stunning photography with 8K video recording. Immerse yourself in the 120Hz Dynamic AMOLED display. The Galaxy S21 redefines smartphone excellence.",
    "specs": {
      "body": "151.7 x 71.2 x 7.9 mm (5.97 x 2.80 x 0.31 in)",
      "camera": {
        "main": "12 MP (wide) Dual Pixel",
        "selfie": "10 MP (wide), Dual Pixel",
        "features": "LED flash, auto-HDR, panorama, 8K video recording"
      },
      "memory": "128/256 GB, 8 GB RAM",
      "battery": "Non-removable Li-Ion 4000 mAh battery",
      "chipset": "Exynos 2100 (5 nm) - International",
      "display": "6.2 inches, 1080 x 2400 pixels, 20:9 ratio (~421 ppi density), Dynamic AMOLED 2X, 120Hz",
      "features": "Fingerprint (under display, ultrasonic), IP68 dust/water resistant, HDR10+, Gorilla Glass Victus",
      "platform": "Android 11, One UI 3.1"
    },
    "stock": 27
  }
];

const Details = () => {
  const [price, setPrice] = useState(999.0); // Set the price to 999.0 for iPhone 12
  const [qty, setQty] = useState(0);
  const products = [...data];
  const [value, setValue] = useState(0);

  const [modal, setModal] = useState(true);

  const largeImage = products[value].largeImg;

  const fixedPrice = price.toFixed(2);

  const totalPrice = fixedPrice * qty;
  const totalPriceFixed = totalPrice.toFixed(2);

  const decrease = () => {
    if (qty === 0) {
      return;
    }
    {
      setQty((prev) => prev - 1);
    }
  };
  
    const toggleModal = () => {
      setModal((prev) => !prev);
    };
  
    const goBack = () => {
      value === 0 ? setValue(0) : setValue((prev) => prev - 1);
    };
  
    const goForward = () => {
      value === products.length - 1
        ? setValue(products.length - 1)
        : setValue((prev) => prev + 1);
    };
  
    return (
      <main>
        <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
          <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
            <div className="hidden md:block large-image">
              <img
                onClick={toggleModal}
                className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]"
                src={largeImage}
                alt="snekers-photo"
              />
            </div>
            <div className="md:hidden large-image">
              <img
                onClick={goBack}
                className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
                src={prevIcon}
                alt="go-back"
              />
              <img
                className="w-[100%] h-[300px] object-cover"
                src={largeImage}
                alt="snekers-photo"
              />
              <img
                onClick={goForward}
                className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
                src={nextIcon}
                alt="go-forward"
              />
            </div>
            <div className="small-images hidden md:flex mt-7 justify-between w-[400px]">
              {data.map((img, idx) => {
                return (
                  <div key={img.id} className="single-image">
                    <img
                      onClick={() => setValue(idx)}
                      className="w-[80px] cursor-pointer rounded-xl transition-all hover:opacity-25 hover:border-[3px] border-orange"
                      src={img.smallImg}
                      alt="product-photo"
                    />
                  </div>
                );
              })}
            </div>
          </div>
  
          <div
            className={`${
              modal ? "hidden" : "hidden md:block"
            } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
          >
            <div
              className={
                "basis-1/2 flex flex-col justify-between absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              }
            >
              <div className="large-image">
                <img
                  className="w-[400px] h-[400px] rounded-xl cursor-pointer"
                  src={largeImage}
                  alt="snekers-photo"
                />
                <img
                  onClick={toggleModal}
                  className="w-[20px] h-[20px] absolute -top-8 left-[95%] transition-all cursor-pointer hover:scale-150"
                  src={closeIcon}
                  alt="close-icon"
                />
                <img
                  onClick={goBack}
                  className="bg-white p-4 rounded-full absolute top-[36%] -translate-x-[20px] cursor-pointer transition-all hover:scale-150"
                  src={prevIcon}
                  alt="previous"
                />
                <img
                  onClick={goForward}
                  className="bg-white p-4 rounded-full absolute top-[36%] left-[95%] cursor-pointer transition-all hover:scale-150"
                  src={nextIcon}
                  alt="next"
                />
              </div>
              <div className="small-images flex mt-7 justify-around w-[400px]">
                {data.map((img, idx) => {
                  return (
                    <div key={img.id} className="single-image">
                      <img
                        onClick={() => setValue(idx)}
                        className="w-[60px] cursor-pointer rounded-xl transition-all hover:border-[3px] border-orange"
                        src={img.smallImg}
                        alt="product-photo"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
  
          <div className="description p-6 md:basis-1/2 md:py-[40px]">
            <p className="text-orange text-[14px] tracking-widest uppercase font-[700] mb-6">
              Google pixel
            </p>
            <h1 className="text-3xl md:text-4xl capitalize font-[700]">
              Fall limited edition <br />pixel
            </h1>
            <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
              These low-profile sneakers are your perfect casual wear <br />
              companion. Featuring a durable rubber outer sole, they'll <br />
              withstand everything the weather can offer.
            </p>
            <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
              These low-profile sneakers are your perfect <br /> casual wear
              companion. Featuring a durable <br /> rubber outer sole, they'll
              withstand every - thing the br weather can offer.
            </p>
  
            <div className="price flex items-center">
              <span className="text-3xl font-[700] mr-4">${fixedPrice}</span>
              <span className="bg-paleOrange text-orange font-[700] py-1 px-2 rounded-lg">
                50%
              </span>
              <p className="md:hidden line-through text-grayishBlue font-[700] translate-x-[100px] mb-2">
                $250.00
              </p>
            </div>
            <p className="hidden md:block line-through text-grayishBlue font-[700] mt-2">
              $250.00
            </p>
  
            <div className="buttons-container flex flex-col md:flex-row mt-8">
              <div className="state w-[100%] flex justify-around md:justify-center items-center space-x-10 bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
                <button
                  onClick={decrease}
                  className="minus text-[24px] md:text-[20px] font-[700] text-orange transition-all hover:opacity-50"
                >
                  -
                </button>
                <p className="md:text-[14px] font-bold">{qty}</p>
                <button
                  onClick={() => setQty((prev) => prev + 1)}
                  className="plus text-[24px] md:text-[20px] font-[700] text-orange transition-all hover:opacity-50"
                >
                  +
                </button>
              </div>
              <button className="btn btn-outline btn-warning">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    );
  };
export default Details;
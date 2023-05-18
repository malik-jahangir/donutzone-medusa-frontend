import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="width about-us">
      <div className="about-us-img">
        <Image
          width={911}
          height={689}
          src="/images/about-us.png"
          alt="donut"
        />
        {/* <Image
          className="about-shadow"
          width={911}
          height={689}
          src="/images/about-shadow.png"
          alt="donut"
        /> */}
      </div>
      <div className="about-us-text">
        <h6>THE DONUT ZONE</h6>
        <h2>
          ABOUT <span>US</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
          euismod arcu, sodales vulputate dolor. Donec elementum metus eu
          vehicula malesuada. Cras consectetur congue pellentesque.{" "}
        </p>
        <button className="btn-primary-donut">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

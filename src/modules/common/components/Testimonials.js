import React, { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Virtual } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/virtual"
const Testimonials = () => {
  const [active, setActive] = useState(2)
  const handleArrow = function(direction){
    if(direction === 'right'){
      if(active<3){

        setActive((prev)=>prev+1)
      }
      else{
        setActive(1)
      }
    }
    else if(direction === 'left'){
      if(active>1){
        setActive((prev)=>prev-1)
      }
      else{
        setActive(3)
      }
    }
    else{
      console.log('wrong direction')
    }
  }
  return (
    <div className="width testimonials">
      <h6>WHAT THEY SAY ABOUT US</h6>
      <h2>TESTIMONIALS</h2>
      <div className={`testimonials-card-container active${active}`}>
        <div className="testimonial-card testimonial-card1">
          <div className="testimonial-card-content">
            <Image
              width={143}
              height={26}
              src="/images/stars.png"
              alt="stars"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
              euismod arcu, sodales vulputate dolor. Donec elementum metus eu
              vehicula malesuada. Cras consectetur congue pellentesque.
            </p>
            <div className="line"></div>
            <h4>STEVE B</h4>
            <h5>THE CHOCOLATE DIPPY DONUT</h5>
          </div>
        </div>
        <div className="testimonial-card testimonial-card2">
          <div className="testimonial-card-content">
            <Image
              width={143}
              height={26}
              src="/images/stars.png"
              alt="stars"
            />
            <p>
              Ut faucibus pulvinar elementum integer enim neque volutpat ac
              tincidunt. Sodales neque sodales ut etiam. Enim nunc faucibus a
              pellentesque sit amet porttitor integer eget dolor.
            </p>
            <div className="line"></div>
            <h4>JANE DOE</h4>
            <h5>THE CHOCOLATE DIPPY DONUT</h5>
          </div>
        </div>
        <div className="testimonial-card testimonial-card3">
          <div className="testimonial-card-content">
            <Image
              width={143}
              height={26}
              src="/images/stars.png"
              alt="stars"
            />
            <p>
              Orci eu lobortis elementum nibh tellus molestie nunc. Non enim
              praesent elementum facilisis leo vel fringilla. Ipsum consequat
              nisl vel pretium lectus quam id leo in sed velit.
            </p>
            <div className="line"></div>
            <h4>ALEC JOE</h4>
            <h5>THE CHOCOLATE DIPPY DONUT</h5>
          </div>
        </div>

      </div>
      <div onClick={()=>handleArrow('right')} className="arrow-right">
    <Image width={40} height={40} src="/images/arrow-right.svg" alt=""/>
        </div>
        <div onClick={()=>handleArrow('left')} className="arrow-left">
    <Image width={40} height={40} src="/images/arrow-left.svg" alt=""/>
        </div>
      <div className="testimonials-nav">
        <button
          onClick={() => setActive(1)}
          className={`line ${active == 1 ? "active" : ""}`}
        ></button>
        <button
          onClick={() => setActive(2)}
          className={`line ${active == 2 ? "active" : ""}`}
        ></button>
        <button
          onClick={() => setActive(3)}
          className={`line ${active == 3 ? "active" : ""}`}
        ></button>
      </div>
    </div>
  )
}

export default Testimonials

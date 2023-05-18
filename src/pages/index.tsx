import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import AboutUs from "@modules/common/components/AboutUs";
import Footer from "@modules/common/components/Footer";
import Header from "@modules/common/components/Header";
import ImageBanner from "@modules/common/components/ImageBanner";
import Location from "@modules/common/components/Location";
import OrderOnline from "@modules/common/components/OrderOnline";
import Showcase from "@modules/common/components/Showcase";
import SliderImages from "@modules/common/components/SliderImages";
import SocialFeed from "@modules/common/components/SocialFeed";
import Testimonials from "@modules/common/components/Testimonials";


const Home: NextPageWithLayout = () => {
  return (
    // <>
    //   <Head
    //     title="Home"
    //     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec euismod arcu, sodales vulputate dolor."
    //   />
    //   <Hero />
    //   <FeaturedProducts />
    // </>
    <>
    <section className="section1">
      <Header />
      <Showcase/>
    </section>
    <section className="section2">
      <SliderImages/>
      <AboutUs/>
    </section>
    <section className="section3">
      <OrderOnline/>
      <ImageBanner/>
    </section>
    <section className="section4">
       <Location/>
      </section>
      <section className="section5">
        <Testimonials/>
      </section>
      <section className="section6">
        <SocialFeed/>
      </section>
      <Footer/>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home

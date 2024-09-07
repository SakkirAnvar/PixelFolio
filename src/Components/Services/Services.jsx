import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

function ServiceItem({ imgUrl, title, description }) {
  return (
    <div className="service-item">
      <div className="item-content">
        <img src={imgUrl} alt={title} className="icon" />
        <div>
          <h3 className="item-title">{title}</h3>
          <p className="item-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
const Services = () => {
  return (
    <div className="widget-container">
      <div className="section1">
        <div className="content">
          <div>
            <h1 className="servicetag">Our Services</h1>
            <h1 className="serviceslogan">
              We design <span className="spantext">user-centric</span> web
              platforms.
            </h1>
          </div>
          <Link to={"/services"} className="servicebtn">View More</Link>
        </div>
      </div>

      <div className="widget-grid">
        {/* First column */}
        <div className="widget-column">
          <ServiceItem
            imgUrl={"/Images/web.png"}
            alt="Web Designing"
            title="Web Designing"
            description="We Design & Develop Websites that Work for You."
          />
          <ServiceItem
            imgUrl={"/Images/ecom.png"}
            alt="Ecommerce Development"
            title="Ecommerce Development"
            description="Boost Your Sales with Cutting-Edge E-commerce Solutions."
          />
          <ServiceItem
            imgUrl={"/Images/mobileapp.png"}
            alt="Mobile App Development"
            title="Mobile App Development"
            description="Turn Your Vision into a Pocket Powerhouse: Mobile App Development Made Easy."
          />
        </div>

        {/* Second column */}
        <div className="widget-column">
          <ServiceItem
            imgUrl={"/Images/seo.png"}
            alt="Search Engine Optimization"
            title="Search Engine Optimization"
            description="Get Found Online. Get Chosen. We Drive Organic Growth with Powerful SEO."
          />
          <ServiceItem
            imgUrl={"/Images/iot.png"}
            alt="Internet of Things (IoT)"
            title="Internet of Things (IoT)"
            description="Connecting Your World Seamlessly: We Design and Develop Smart IoT Solutions. "
          />
          <ServiceItem
            imgUrl={"/Images/social.png"}
            alt="Social Media Marketing"
            title="Social Media Marketing"
            description="Spark Engagement & Conversions: We Craft Winning Social Media Strategies."
          />
        </div>

        {/* Third column */}
        <div className="widget-column">
          <ServiceItem
            imgUrl={"/Images/uiux.png"}
            alt="UI/UX Design"
            title="UI/UX Design"
            description="Crafting User Experiences that Captivate and Convert. "
          />
          <ServiceItem
            imgUrl={"/Images/graphic.png"}
            alt="Graphic Design"
            title="Graphic Design"
            description="From Concept to Creation: We Craft Powerful Graphic Design Solutions."
          />
          <ServiceItem
            imgUrl={"/Images/digitalmarket.png"}
            alt="Digital Marketing"
            title="Digital Marketing"
            description="Own Your Online Presence. We Elevate Your Digital Marketing Game."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

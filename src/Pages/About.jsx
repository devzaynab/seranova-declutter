
import { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  const [introExpanded, setIntroExpanded] = useState(false);

  const reasons = [
    {
      number: '01',
      title: 'Variety of Products',
      text: 'Explore different product categories in one convenient place.',
    },
    {
      number: '02',
      title: 'Options for Every Budget',
      text: 'Choose between new and pre-owned items to suit your needs.',
    },
    {
      number: '03',
      title: 'Convenient Shopping',
      text: 'Browse products and discover your next great find from home.',
    },
    {
      number: '04',
      title: 'A Simple Experience',
      text: 'Enjoy a straightforward way to explore and shop for items.',
    },
  ];

  const categories = [
    'Phones & Tablets',
    'Computers & Electronics',
    'Furniture & Home Appliances',
    'Cars & Vehicles',
    'Gaming & Accessories',
    'Tools & Equipment',
  ];

  return (
    <main className="about-page">
      {/* PAGE HEADER */}
      <section className="about-page-header">
        <h1>About Us</h1>

        <div className="about-page-breadcrumb">
          <Link to="/">Home</Link>
          <span>-</span>
          <span>About</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div
          className={`about-intro-content ${
            introExpanded ? 'is-expanded' : ''
          }`}
        >
          <p className="about-label">GET TO KNOW US</p>

          <h2>Making great finds easier.</h2>

          <p>
            Seranova Declutter is an online marketplace where you can
            discover quality new and pre-owned items across different
            categories. From electronics and furniture to gadgets and
            everyday essentials, we make it easier to find items that
            suit your needs and budget.
          </p>

          <p className="about-extra-copy">
            We believe shopping should be simple, convenient, and
            accessible. That is why we bring a variety of products
            together in one place, helping you explore your options
            and find great value.
          </p>

          <button
            type="button"
            className="about-read-more"
            onClick={() => setIntroExpanded(!introExpanded)}
          >
            {introExpanded ? 'Read less −' : 'Read more +'}
          </button>

          <Link to="/shop" className="about-primary-button">
            Explore Our Shop
          </Link>
        </div>

        <div className="about-intro-highlight">
          <span className="about-highlight-mark">S</span>

          <p className="about-highlight-small">WELCOME TO</p>

          <h3>Seranova Declutter</h3>

          <p>
            Discover more. Shop smarter. Find what you need.
          </p>
        </div>
      </section>

      {/* WHAT WE DO - MOVING CATEGORIES */}
      <section className="about-what-we-do">
        <div className="about-section-heading">
          <p className="about-label">WHAT WE DO</p>

          <h2>More choices, all in one place.</h2>

          <p>
            Whether you are upgrading your gadgets or making your
            space feel more like home, explore a range of products
            to find what works for you.
          </p>
        </div>

        <div className="about-category-window">
          <div className="about-category-track">
            {[0, 1].map((group) => (
              <div className="about-category-group" key={group}>
                {categories.map((category) => (
                  <span className="about-category-item" key={category}>
                    {category}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="about-section-heading">
          <p className="about-label">WHY SERANOVA</p>

          <h2>A shopping experience built around you.</h2>

          <p>
            We aim to make finding the items you need easier and
            more convenient.
          </p>
        </div>

        <div className="about-reasons-grid">
          {reasons.map((reason) => (
            <article
              className="about-reason-card"
              key={reason.number}
            >
              <span>{reason.number}</span>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="about-mission">
        <p className="about-label">OUR MISSION</p>

        <h2>Good finds. More possibilities.</h2>

        <p>
          Our mission is to make shopping for new and pre-owned
          items easier by connecting customers with products that
          offer choice, convenience, and value.
        </p>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Ready to find your next great deal?</h2>

          <p>
            Explore our collection and discover something useful
            for your everyday life.
          </p>
        </div>

        <Link to="/shop" className="about-cta-button">
          Shop Now
        </Link>
      </section>
    </main>
  );
}

export default About;

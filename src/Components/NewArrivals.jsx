
import { Link } from 'react-router-dom';
import './NewArrivals.css';

import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';

function NewArrivals() {
  const firstRow = [
    {
      id: 5,
      image: image5,
      name: 'Industrial Machine',
      condition: 'New',
      price: '₦395,000',
      location: 'Lekki',
    },
    {
      id: 6,
      image: image6,
      name: 'Table Gas',
      condition: 'New',
      price: '₦150,000',
      location: 'Ikeja',
    },
    {
      id: 7,
      image: image7,
      name: 'Industrial Oven',
      condition: 'New',
      price: '₦900,000',
      location: 'Ajah',
    },
    {
      id: 8,
      image: image8,
      name: 'iPhone 14 Pro Max',
      condition: 'New',
      price: '₦960,000',
      location: 'Oshodi',
    },
    {
      id: 9,
      image: image9,
      name: 'Shoe Rack',
      condition: 'Pre-owned',
      price: '₦80,000',
      location: 'Ketu',
    },
  ];

  const secondRow = [
    {
      id: 10,
      image: image10,
      name: 'Dinner Set',
      condition: 'Pre-owned',
      price: '₦185,000',
      location: 'Berger',
    },
    {
      id: 11,
      image: image11,
      name: 'Corolar',
      condition: 'Pre-owned',
      price: '₦7,000,000',
      location: 'Ikorodu',
    },
    {
      id: 12,
      image: image12,
      name: 'Bed Frame',
      condition: 'Pre-owned',
      price: '₦70,000',
      location: 'Agege',
    },
    {
      id: 13,
      image: image13,
      name: 'Blender',
      condition: 'Pre-owned',
      price: '₦50,000',
      location: 'Lekki',
    },
    {
      id: 14,
      image: image14,
      name: 'iPhone XR',
      condition: 'Pre-owned',
      price: '₦195,000',
      location: 'Ikeja',
    },
  ];

  const renderProducts = (products, rowName) =>
    [...products, ...products].map((product, index) => (
      <Link
        to={`/new-arrival/${product.id}`}
        className="arrival-card"
        key={`${rowName}-${product.id}-${index}`}
      >
        <div className="arrival-card-image-wrap">
          <img src={product.image} alt={product.name} />

          <span className="arrival-condition">
            {product.condition}
          </span>
        </div>

        <div className="arrival-info">
          <h3>{product.name}</h3>

          <p className="arrival-price">
            {product.price}
            <span className="arrival-price-location">
              ({product.location})
            </span>
          </p>
        </div>
      </Link>
    ));

  return (
    <section className="new-arrivals">
      <div className="new-arrivals-header">
        <div>
          <p className="new-arrivals-label">NEW ARRIVALS</p>

          <h2>Fresh finds just in</h2>

          <p className="new-arrivals-text">
            Discover the latest items added to Seranova.
          </p>
        </div>

        <Link to="/shop" className="new-arrivals-explore">
          Explore new arrivals →
        </Link>
      </div>

      {/* FIRST ROW — MOVES LEFT */}
      <div className="arrival-window">
        <div className="arrival-row arrival-row-left">
          {renderProducts(firstRow, 'first')}
        </div>
      </div>

      {/* SECOND ROW — MOVES RIGHT */}
      <div className="arrival-window">
        <div className="arrival-row arrival-row-right">
          {renderProducts(secondRow, 'second')}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;

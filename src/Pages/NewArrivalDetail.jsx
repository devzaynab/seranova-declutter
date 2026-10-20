
import { useParams, Link } from 'react-router-dom';
import './NewArrivalDetail.css';

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

const allNewArrivals = [
  {
    id: 5,
    image: image5,
    name: 'Industrial Machine',
    condition: 'New',
    price: '₦395,000',
    location: 'Lekki',
    description: 'Industrial Machine',
  },
  {
    id: 6,
    image: image6,
    name: 'Table Gas',
    condition: 'New',
    price: '₦150,000',
    location: 'Ikeja',
    description: 'Table Gas',
  },
  {
    id: 7,
    image: image7,
    name: 'Industrial Oven',
    condition: 'New',
    price: '₦900,000',
    location: 'Ajah',
    description: 'Industrial Oven',
  },
  {
    id: 8,
    image: image8,
    name: 'iPhone 14 Pro Max',
    condition: 'New',
    price: '₦960,000',
    location: 'Oshodi',
    description: 'iPhone 14 Pro Max',
  },
  {
    id: 9,
    image: image9,
    name: 'Shoe Rack',
    condition: 'Pre-owned',
    price: '₦80,000',
    location: 'Ketu',
    description: 'Shoe Rack',
  },
  {
    id: 10,
    image: image10,
    name: 'Dinner Set',
    condition: 'Pre-owned',
    price: '₦185,000',
    location: 'Berger',
    description: 'Dinner Set',
  },
  {
    id: 11,
    image: image11,
    name: 'Corolar',
    condition: 'Pre-owned',
    price: '₦7,000,000',
    location: 'Ikorodu',
    description: 'Corolar',
  },
  {
    id: 12,
    image: image12,
    name: 'Bed Frame',
    condition: 'Pre-owned',
    price: '₦70,000',
    location: 'Agege',
    description: 'Bed Frame',
  },
  {
    id: 13,
    image: image13,
    name: 'Blender',
    condition: 'Pre-owned',
    price: '₦50,000',
    location: 'Lekki',
    description: 'Blender',
  },
  {
    id: 14,
    image: image14,
    name: 'iPhone XR',
    condition: 'Pre-owned',
    price: '₦195,000',
    location: 'Ikeja',
    description: 'iPhone XR',
  },
];

function NewArrivalDetail() {
  const { id } = useParams();

  const product = allNewArrivals.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-not-found">
        <h2>Product not found</h2>

        <p>
          The item you are looking for does not exist
          or has been removed.
        </p>

        <Link to="/shop" className="back-home-btn">
          Browse Shop
        </Link>
      </main>
    );
  }

  const isNew = product.condition.toLowerCase() === 'new';

  return (
    <main className="product-detail-page">
      <section className="product-header">
        <h1>{product.name}</h1>

        <div className="product-breadcrumb">
          <Link to="/">Home</Link>
          <span>-</span>
          <Link to="/shop">Shop</Link>
          <span>-</span>
          <span className="current">{product.name}</span>
        </div>
      </section>

      <section className="product-detail-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />

          <span
            className={`detail-condition ${
              isNew ? 'condition-new' : 'condition-preowned'
            }`}
          >
            {isNew ? 'New' : 'Pre-owned'}
          </span>
        </div>

        <div className="product-info-section">
          <p className="detail-location">
            {product.location}, Lagos
          </p>

          <h2>{product.name}</h2>

          <p className="detail-price">{product.price}</p>

          <div className="detail-divider" />

          <h3>About this item</h3>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="detail-actions">
            <button
              type="button"
              className="add-to-cart-btn"
              onClick={() =>
                alert('Added to cart successfully!')
              }
            >
              Add to Cart
            </button>

            <Link
              to="/shop"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewArrivalDetail;

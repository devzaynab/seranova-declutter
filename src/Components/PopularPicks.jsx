
import './PopularPicks.css';

import image1 from '../assets/image1.jpg';
import image22 from '../assets/image22.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image24 from '../assets/image24.jpg';
import image26 from '../assets/image26.jpg';

function PopularPicks() {

const products = [
  {
    id: 1,
    image: image1,
    condition: 'Pre-owned',
    name: 'Flowerverse',
    price: '₦120,000',
    location: 'Lekki',
  },
  {
    id: 2,
    image: image22,
    condition: 'New',
    name: 'Inverter AC',
    price: '₦400,000',
    location: 'Ikeja',
  },
  {
    id: 3,
    image: image3,
    condition: 'Pre-owned',
    name: 'Dressing Mirror',
    price: '₦265,000',
    location: 'Ajah',
  },
  {
    id: 4,
    image: image4,
    condition: 'New',
    name: 'dressing table',
    price: '₦415,000',
    location: 'Oshodi',
  },
  {
    id: 5,
    image: image24,
    condition: 'Pre-owned',
    name: 'iPhone 12 Mini',
    price: '₦285,000',
    location: 'Ketu',
  },
  {
    id: 6,
    image: image26,
    condition: 'Pre-owned',
    name: 'Bed and Bed Frame',
    price: '₦425,000',
    location: 'Ikorodu',
  },
];


  return (
    <section className="popular-picks">
      <div className="popular-header">
        <div>
          <p className="popular-label">POPULAR PICKS</p>

          <h2>What people are choosing</h2>

          <p className="popular-text">
            Explore some of the items shoppers are loving right now.
          </p>
        </div>

        <p className="popular-explore">
          Explore popular picks →
        </p>
      </div>

      <div className="popular-products">
        {products.map((product) => (
          <div className="popular-card" key={product.id}>
            <div className="popular-card-image">
              <img src={product.image} alt={product.name} />

              <span className="popular-condition">
                {product.condition}
              </span>
            </div>

            <div className="popular-card-info">
              <h3>{product.name}</h3>

              <p className="popular-price">
                {product.price}

                <span className="popular-location">
                  ({product.location})
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularPicks;

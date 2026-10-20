import { useState } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';

import camera from '../assets/camera.jpg';
import camera1 from '../assets/camera1.jpg';
import decor1 from '../assets/decor1.jpg';
import decor2 from '../assets/decor2.jpg';
import electro1 from '../assets/eletro1.jpg';
import electro2 from '../assets/eletro2.jpg';
import electro3 from '../assets/eletro3.jpg';
import furniture1 from '../assets/furniture1.jpg';
import furniture2 from '../assets/furniture2.jpg';
import furniture3 from '../assets/furniture3.jpg';
import furniture4 from '../assets/furniture4.jpg';
import furniture5 from '../assets/furniture5.jpg';
import furniture6 from '../assets/furniture6.jpg';
import gaming from '../assets/gaming.jpg';
import gaming2 from '../assets/gaming2.jpg';
import gaming3 from '../assets/gaming3.jpg';
import homea1 from '../assets/homea1.jpg';
import homea3 from '../assets/homea3.jpg';
import homea4 from '../assets/homea4.jpg';
import phone from '../assets/phone.jpg';
import phone1 from '../assets/phone1.jpg';
import phone2 from '../assets/phone2.jpg';
import laptop1 from '../assets/laptop1.jpg';
import laptop2 from '../assets/laptop2.jpg';
import laptop3 from '../assets/laptop3.jpg';
import laptop4 from '../assets/laptop4.jpg';

const products = [
  {
    id: 1,
    image: camera,
    name: 'Digital Camera',
    price: '₦85,000',
    location: 'Lekki',
    condition: 'Pre-owned',
    category: 'Cameras & Photography',
  },
  {
    id: 2,
    image: camera1,
    name: 'Digital Camera with Accessories',
    price: '₦220,000',
    location: 'Ogba',
    condition: 'Pre-owned',
    category: 'Cameras & Photography',
  },
  {
    id: 3,
    image: decor1,
    name: 'Decorative Artificial Flower Arrangement',
    price: '₦18,000',
    location: 'Chevon',
    condition: 'New',
    category: 'Other',
  },
  {
    id: 4,
    image: decor2,
    name: 'Decorative Home Flower Set',
    price: '₦25,000',
    location: 'Lekki',
    condition: 'New',
    category: 'Other',
  },
  {
    id: 5,
    image: electro1,
    name: 'Ox Fan',
    price: '₦150,000',
    location: 'Marryland',
    condition: 'Pre-owned',
    category: 'TVs & Electronics',
  },
  {
    id: 6,
    image: electro2,
    name: 'Home Electronics Device',
    price: '₦65,000',
    location: 'Ajah',
    condition: 'Pre-owned',
    category: 'TVs & Electronics',
  },
  {
    id: 7,
    image: electro3,
    name: 'Smart TV',
    price: '₦290,000',
    location: 'Ikorodu',
    condition: 'Pre-owned',
    category: 'TVs & Electronics',
  },
  {
    id: 8,
    image: furniture1,
    name: 'Modern Accent Chair',
    price: '₦285,000',
    location: 'Surulere',
    condition: 'New',
    category: 'Furniture',
  },
  {
    id: 9,
    image: furniture2,
    name: 'Bedframe',
    price: '₦55,000',
    location: 'Ogudu',
    condition: 'New',
    category: 'Furniture',
  },
  {
    id: 10,
    image: furniture3,
    name: 'Bed and BedFrame',
    price: '₦180',
    location: 'Ogba',
    condition: 'Pre-owned',
    category: 'Furniture',
  },
  {
    id: 11,
    image: furniture4,
    name: 'open shelve',
    price: '₦80,000',
    location: 'Ketu',
    condition: 'Pre-owned',
    category: 'Furniture',
  },
  {
    id: 12,
    image: furniture5,
    name: 'Modern Dining Chair',
    price: '₦245,000',
    location: 'Ketu',
    condition: 'New',
    category: 'Furniture',
  },
  {
    id: 13,
    image: furniture6,
    name: 'Bedside Table',
    price: '₦40,000',
    location: 'Chevon',
    condition: 'New',
    category: 'Furniture',
  },
  {
    id: 14,
    image: gaming,
    name: 'PlayStation 4 Console',
    price: '₦230,000',
    location: 'Agege',
    condition: 'Pre-owned',
    category: 'Gaming',
  },
  {
    id: 15,
    image: gaming2,
    name: 'PlayStation 4 Slim Console',
    price: '₦280,000',
    location: 'Berger',
    condition: 'Pre-owned',
    category: 'Gaming',
  },
  {
    id: 16,
    image: gaming3,
    name: 'PlayStation 5 Console',
    price: '₦750,000',
    location: 'Chevon',
    condition: 'Pre-owned',
    category: 'Gaming',
  },
  {
    id: 17,
    image: homea1,
    name: 'Electric Kettle',
    price: '₦25,000',
    location: 'Ojota',
    condition: 'New',
    category: 'Home Appliances',
  },
  {
    id: 18,
    image: homea3,
    name: 'Standing Fan',
    price: '₦35,000',
    location: 'Ogba',
    condition: 'Pre-owned',
    category: 'Home Appliances',
  },
  {
    id: 19,
    image: homea4,
    name: 'Microwave Oven',
    price: '₦85,000',
    location: 'Lekki',
    condition: 'Pre-owned',
    category: 'Home Appliances',
  },
  {
    id: 20,
    image: phone,
    name: 'Android Smartphone',
    price: '₦95,000',
    location: 'Ikotun',
    condition: 'Pre-owned',
    category: 'Phones & Tablets',
  },
  {
    id: 21,
    image: phone1,
    name: 'Android Smartphone',
    price: '₦150,000',
    location: 'Yaba',
    condition: 'New',
    category: 'Phones & Tablets',
  },
  {
    id: 22,
    image: phone2,
    name: 'Smartphone',
    price: '₦120,000',
    location: 'Ikorodu',
    condition: 'Pre-owned',
    category: 'Phones & Tablets',
  },
  {
    id: 23,
    image: laptop1,
    name: 'Laptop Computer',
    price: '₦250,000',
    location: 'Lekki',
    condition: 'Pre-owned',
    category: 'Computers & Laptops',
  },
  {
    id: 24,
    image: laptop2,
    name: 'Business Laptop',
    price: '₦300,000',
    location: 'Ojudu Begger',
    condition: 'Pre-owned',
    category: 'Computers & Laptops',
  },
  {
    id: 25,
    image: laptop3,
    name: 'Everyday Laptop',
    price: '₦450,000',
    location: 'Aja',
    condition: 'New',
    category: 'Computers & Laptops',
  },
  {
    id: 26,
    image: laptop4,
    name: 'Performance Laptop',
    price: '₦380,000',
    location: 'Agege',
    condition: 'Pre-owned',
    category: 'Computers & Laptops',
  },
];

const categories = [
  'Phones & Tablets',
  'Computers & Laptops',
  'TVs & Electronics',
  'Cars & Vehicles',
  'Furniture',
  'Home Appliances',
  'Gaming',
  'Cameras & Photography',
  'Other',
];

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState('All Categories');
  const [selectedCondition, setSelectedCondition] =
    useState('All Conditions');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [addedProducts, setAddedProducts] = useState([]);

  const hasActiveFilters =
    appliedSearch.trim() !== '' ||
    selectedCategory !== 'All Categories' ||
    selectedCondition !== 'All Conditions';

  const filteredProducts = products.filter((product) => {
    const search = appliedSearch.toLowerCase().trim();

    const matchesSearch =
      search === '' ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.condition.toLowerCase().includes(search) ||
      product.location.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === 'All Categories' ||
      product.category === selectedCategory;

    const matchesCondition =
      selectedCondition === 'All Conditions' ||
      product.condition === selectedCondition;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCondition
    );
  });

  const displayedProducts = hasActiveFilters
    ? filteredProducts
    : filteredProducts.slice(0, 12);

  function handleSearch(event) {
    event.preventDefault();
    setAppliedSearch(searchTerm);
  }

  function handleReset() {
    setSearchTerm('');
    setAppliedSearch('');
    setSelectedCategory('All Categories');
    setSelectedCondition('All Conditions');
  }

  function handleAddToCart(productId) {
    setAddedProducts((previous) =>
      previous.includes(productId)
        ? previous
        : [...previous, productId]
    );
  }

  return (
    <main className="shop">
      <section className="shop-header">
        <h1>Shop with Us</h1>

        <div className="shop-breadcrumb">
          <Link to="/">Home</Link>
          <span>-</span>
          <span>Shop</span>
        </div>
      </section>

      <section className="shop-content">
        <p className="shop-label">EXPLORE OUR COLLECTION</p>

        <h1>Shop new &amp; pre-owned</h1>

        <p className="shop-description">
          Discover great new and pre-owned items from across Nigeria.
        </p>

        <form className="shop-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            <option value="All Categories">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedCondition}
            onChange={(event) =>
              setSelectedCondition(event.target.value)
            }
          >
            <option value="All Conditions">All Conditions</option>
            <option value="New">New</option>
            <option value="Pre-owned">Pre-owned</option>
          </select>

          <button type="submit">Search</button>
        </form>

        <div className="shop-results">
          <p>
            Showing {displayedProducts.length} of{' '}
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1
              ? 'product'
              : 'products'}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              className="shop-reset"
              onClick={handleReset}
            >
              Clear filters
            </button>
          )}
        </div>

        {displayedProducts.length > 0 ? (
          <div className="shop-products">
            {displayedProducts.map((product) => {
              const isAdded = addedProducts.includes(product.id);

              return (
                <div className="shop-card" key={product.id}>
                  <div className="shop-card-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="shop-condition">
                      {product.condition}
                    </span>

                    <div className="shop-card-overlay">
                      <button
                        type="button"
                        className={`shop-add-button ${
                          isAdded ? 'is-added' : ''
                        }`}
                        onClick={() =>
                          handleAddToCart(product.id)
                        }
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>

                  <div className="shop-card-info">
                    <h3>{product.name}</h3>

                    <p className="shop-price">
                      {product.price}{' '}
                      <span className="shop-location">
                        ({product.location})
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="shop-empty">
            <h2>No products found</h2>

            <p>
              Try another search or category, or clear your
              filters to explore available products.
            </p>

            <button type="button" onClick={handleReset}>
              View all products
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;

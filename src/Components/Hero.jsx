
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState('All Categories');

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (searchTerm.trim()) {
      params.set('search', searchTerm.trim());
    }

    if (selectedCategory !== 'All Categories') {
      params.set('category', selectedCategory);
    }

    const query = params.toString();

    navigate(query ? `/shop?${query}` : '/shop');
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">SHOP NEW &amp; PRE-OWNED</p>

        <h1>Find your favourite items</h1>

        <p className="hero-text">
          Discover great new and pre-owned items from across Nigeria.
        </p>

        <form className="hero-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            <option value="All Categories">All Categories</option>
            <option value="Phones & Tablets">Phones &amp; Tablets</option>
            <option value="Computers & Laptops">Computers &amp; Laptops</option>
            <option value="TVs & Electronics">TVs &amp; Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Gaming">Gaming</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Cameras & Photography">
              Cameras &amp; Photography
            </option>
            <option value="Cars & Vehicles">Cars &amp; Vehicles</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;

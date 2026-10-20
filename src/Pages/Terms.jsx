import { Link } from 'react-router-dom';
import './Terms.css';

function Terms() {
  return (
    <main className="terms">

      {/* Header */}
      <section className="terms-header">
        <h1>Terms & Conditions</h1>

        <div className="terms-breadcrumb">
          <Link to="/">Home</Link>
          <span>-</span>
          <span>Terms</span>
        </div>
      </section>

      {/* Content */}
      <section className="terms-content">

        <p className="terms-date">
          Last updated: October 2026
        </p>

        <p>
          Welcome to Seranova Declutter. By using our website, creating
          an account, or placing an order, you agree to the terms below.
        </p>

        <h2> Using Seranova</h2>

        <p>
          Seranova Declutter is an online marketplace where customers
          can discover and purchase new and pre-owned products. You agree
          to use the website responsibly and only for lawful purposes.
        </p>

        <h2> Your Account</h2>

        <p>
          Some features require you to create an account. You are
          responsible for providing accurate information and keeping your
          login details secure. You should not use another person's
          account or provide false information.
        </p>

        <h2> Products & Availability</h2>

        <p>
          We offer both new and pre-owned products. Product images,
          descriptions, prices, condition, and availability are provided
          to help you make an informed purchase.
        </p>

        <p>
          Because some products are pre-owned, they may show normal signs
          of use. Please review the product information carefully before
          placing an order.
        </p>

        <h2> Orders & Payments</h2>

        <p>
          Adding an item to your cart does not guarantee its availability.
          An order is confirmed after the checkout process has been
          completed.
        </p>

        <p>
          All prices are displayed in Nigerian Naira (₦). We may cancel
          an order if a product is unavailable, incorrectly priced, or
          if we suspect fraudulent activity.
        </p>

        <h2> Delivery</h2>

        <p>
          We aim to deliver orders within the estimated delivery period
          provided at checkout. Delivery times may vary depending on
          location, product availability, and other circumstances.
        </p>

        <p>
          Customers are responsible for providing correct delivery
          information when placing an order.
        </p>

        <h2> Returns & Refunds</h2>

        <p>
          If you receive an item that is damaged or significantly
          different from its description, you may contact us to request
          a return or refund.
        </p>

        <p>
          Return and refund requests may require proof such as photographs
          of the item. Items that have been damaged or used after delivery
          may not qualify for a refund.
        </p>

        <h2> Prohibited Activities</h2>

        <p>
          You must not use Seranova to commit fraud, provide false
          information, gain unauthorized access to another account,
          interfere with the website, or engage in any unlawful activity.
        </p>

        <h2> Changes to These Terms</h2>

        <p>
          We may update these Terms & Conditions when necessary. Any
          changes will be published on this page with an updated date.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have questions about these terms, your order, or our
          services, please visit our{' '}
          <Link to="/contact">Contact</Link> page.
        </p>

      </section>

    </main>
  );
}

export default Terms;
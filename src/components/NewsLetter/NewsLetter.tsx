import "./newsletter.scss";

export const NewsLetter = () => {
  const content = (
    <div className="newsletter">
      <div className="newsletter-container">
        <h1 className="newsletter-heading">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="newsletter-text">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="newsletter-group">
          <label htmlFor="email" className="newsletter-offscreen">
            email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Id"
            className="newsletter-input"
          />
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );

  return content;
};

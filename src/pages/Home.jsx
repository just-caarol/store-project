import ScrollToTopButton from "../components/ScrollToTopButton";

export function Home() {
  return (
    <>
      <div className="mission-wrapper">
        <div className="mission">
          We believe that access to natural and local products at a reasonable
          price should not be an extravagance, but a NATURAL choice.
        </div>
      </div>
      <div className="page-purpose">
        <p className="title">How does it work?</p>
        <div className="gallery">
          <div>
            <img
              src="/background/b23.jpg"
              className="home-picture"
              alt="watering plants with a watering can"
            />
          </div>
          <div>
            <img
              src="/background/b24.jpg"
              className="home-picture"
              alt="a man picking tomatoes"
            />
          </div>
          <div>
            <img
              src="/background/b22.jpg"
              className="home-picture"
              alt="a man with a bowl of tomatoes"
            />
          </div>
        </div>

        <p className="company-description">
          We have collected for you the best offer of the local Farmers. Real
          food, which was created with respect for the environment, without
          improvers, artificial preservatives, without compromise. We do not
          improve nature, but we go in accordance with it.
        </p>
      </div>
      <div className="home-footer">
        <div className="contact-us d-flex align-items-center flex-column">
          <p>
            <strong>Contact us</strong>
          </p>
          <p>+48 123 456 789</p>
          <p>bok@grocerystand.pl</p>
          <p>Monday to Friday 9:00 - 17:00</p>
        </div>
        <div className="copyright">
          All rights reserved © 2024 Grocery Stand
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

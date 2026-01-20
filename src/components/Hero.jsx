import Navbar from "./Navbar";

function Hero({ children }) {
  return (
    <section className="hero">
      {/* HERO NAVBAR (ONLY HERE) */}
      <Navbar />

      {/* Centered hero content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Ninad Patil<span className="dot">.</span>
        </h1>

        <p className="hero-subtitle">
          Software Developer | Java • Backend • SQL • APIs
        </p>
      </div>

      {/* Footer inside hero (tech stack) */}
      <div className="hero-footer">
        {children}
      </div>
    </section>
  );
}

export default Hero;

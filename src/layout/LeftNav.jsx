import { scrollToSection } from "../utils/scrollToSection";
function LeftNav() {
  return (
    <aside className="left-nav">
      <div className="left-nav-inner">
        <div className="left-profile">
          <div className="left-name">
            Ninad Patil<span className="dot">.</span>
          </div>

          <div className="left-role">
            Software Developer | Java • Backend • SQL • APIs
          </div>

          <div className="left-tagline">
            I build reliable, scalable systems.
          </div>
        </div>

        <ul className="left-menu">
          <li className="nav-item" onClick={() => scrollToSection("about")}>About</li>
          <li className="nav-item" onClick={() => scrollToSection("expertise")}>Expertise</li>
          <li className="nav-item" onClick={() => scrollToSection("experience")}>Experience</li>
          <li className="nav-item" onClick={() => scrollToSection("work")}>Work</li>
          <li className="nav-item" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </aside>
  );
}

export default LeftNav;

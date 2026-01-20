import { useRef, useEffect } from "react";
import About from "./About";
import Expertise from "./Expertise";
import Work from "./Work";
import Experience from "./Experience";


function RightContent() {
  const rightRef = useRef(null);

  useEffect(() => {
    // expose scroll container globally (controlled, safe)
    window.__RIGHT_CONTENT__ = rightRef.current;
  }, []);

  return (
    <main className="right-content" ref={rightRef}>
      <About />
      <Expertise />
      <Experience />
      <Work />
      {/* <Contact /> */}
    </main>
  );
}

export default RightContent;

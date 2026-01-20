// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import TechStack from "./components/TechStack";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero>
//         <TechStack />
//       </Hero>
//     </>
//   );
// }

// export default App;



// import Hero from "./components/Hero";
// import MainLayout from "./layout/MainLayout";

// function App() {
//   return (
//     <>
//       <Hero />
//       <MainLayout />
//     </>
//   );
// }

// export default App;


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import MainLayout from "./layout/MainLayout";
import Contact from "./layout/Contact";

function App() {
  return (
    <>
      <Hero>
        <TechStack />
      </Hero>

      {/* POST-HERO LAYOUT */}
      <MainLayout />
      <Contact />
    </>
  );
}

export default App;



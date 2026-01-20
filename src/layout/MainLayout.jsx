import LeftNav from "./LeftNav";
import RightContent from "./RightContent";

function MainLayout() {
  return (
    <section className="main-layout" id="main-layout">
      <LeftNav />
      <RightContent />
    </section>
  );
}

export default MainLayout;

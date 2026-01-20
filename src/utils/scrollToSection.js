export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  // CONTACT is full-page section
  if (id === "contact") {
    section.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Other sections are inside right-content
  const container = window.__RIGHT_CONTENT__;
  const mainLayout = document.getElementById("main-layout");

  if (!container || !mainLayout) return;

  const mainLayoutTop = mainLayout.getBoundingClientRect().top;

  // If hero is visible, move to MainLayout first
  if (mainLayoutTop > 10) {
    mainLayout.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      scrollInsideContainer(container, section);
    }, 400);
  } else {
    scrollInsideContainer(container, section);
  }
}

function scrollInsideContainer(container, section) {
  const containerTop = container.getBoundingClientRect().top;
  const sectionTop = section.getBoundingClientRect().top;

  container.scrollTo({
    top: container.scrollTop + (sectionTop - containerTop),
    behavior: "smooth",
  });
}

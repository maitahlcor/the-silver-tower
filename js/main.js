document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (!menuToggle || !sidebar) {
    console.error("Menu elements not found");
    return;
  }

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);

    if (!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.remove("active");
    }
  });

  console.log("Menu JS loaded correctly");
});
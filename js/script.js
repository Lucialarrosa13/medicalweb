document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Price range slider
  const priceRange = document.getElementById("priceRange")
  const priceValue = document.getElementById("priceValue")

  if (priceRange && priceValue) {
    priceValue.textContent = "$" + priceRange.value + " UYU"

    priceRange.addEventListener("input", function () {
      priceValue.textContent = "$" + this.value + " UYU"
    })
  }

  // Show more clinics
  const showMoreClinics = document.getElementById("showMoreClinics")

  if (showMoreClinics) {
    showMoreClinics.addEventListener("click", function () {
      // This would typically show more clinic options
      this.textContent = this.textContent === "Ver más" ? "Ver menos" : "Ver más"
    })
  }

  // Search functionality
  const searchButton = document.getElementById("searchButton")

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      const doctorSearch = document.getElementById("doctorSearch").value
      const locationFilter = document.getElementById("locationFilter").value
      const clinicaFilter = document.getElementById("clinicaFilter").value

      // In a real application, this would filter the results
      console.log("Search:", doctorSearch, locationFilter, clinicaFilter)
    })
  }

  // Pagination
  const paginationBtns = document.querySelectorAll(".pagination-btn")

  if (paginationBtns.length > 0) {
    paginationBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        paginationBtns.forEach((b) => b.classList.remove("active"))
        this.classList.add("active")

        // In a real application, this would load the corresponding page
        console.log("Page:", this.textContent)
      })
    })
  }

  // Check if user is logged in
  checkLoginStatus()
})

// Function to check if user is logged in
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const headerButtons = document.querySelector(".header-buttons")

  if (isLoggedIn === "true" && headerButtons && !headerButtons.classList.contains("user-menu")) {
    // Redirect to profile page if on login or register page
    const currentPage = window.location.pathname
    if (currentPage.includes("login.html") || currentPage.includes("registro.html")) {
      window.location.href = "mi-perfil.html"
    }

    // Update header to show user menu instead of login/register buttons
    if (!headerButtons.classList.contains("user-menu")) {
      const username = localStorage.getItem("username") || "Usuario"

      headerButtons.innerHTML = `
                <div class="user-dropdown">
                    <button class="user-dropdown-btn">
                        <i class="fas fa-user-circle"></i>
                        <span>${username}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="user-dropdown-content">
                        <a href="mi-perfil.html">
                            <i class="fas fa-user"></i>
                            Mi Perfil
                        </a>
                        <a href="mis-citas.html">
                            <i class="fas fa-calendar-check"></i>
                            Mis Consultas
                        </a>
                        <a href="historial-medico.html">
                            <i class="fas fa-notes-medical"></i>
                            Historial Médico
                        </a>
                        <a href="#" id="logoutBtn">
                            <i class="fas fa-sign-out-alt"></i>
                            Cerrar Sesión
                        </a>
                    </div>
                </div>
            `

      // Add logout functionality
      const logoutBtn = document.getElementById("logoutBtn")
      if (logoutBtn) {
        logoutBtn.addEventListener("click", logout)
      }
    }
  }
}

// Function to logout
function logout(e) {
  if (e) e.preventDefault()

  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("username")

  // Redirect to home page
  window.location.href = "index.html"
}


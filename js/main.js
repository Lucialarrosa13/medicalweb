document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#currentYear")
  const currentYear = new Date().getFullYear()
  currentYearElements.forEach((element) => {
    element.textContent = currentYear
  })

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Search form submission
  const searchForm = document.getElementById("searchForm")
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const searchTerm = document.getElementById("searchTerm").value
      const location = document.getElementById("location").value
      const clinica = document.getElementById("clinica").value

      // Redirect to doctors page with search parameters
      let url = "doctores.html"
      const params = []

      if (searchTerm) params.push(`buscar=${encodeURIComponent(searchTerm)}`)
      if (location) params.push(`ubicacion=${encodeURIComponent(location)}`)
      if (clinica) params.push(`clinica=${encodeURIComponent(clinica)}`)

      if (params.length > 0) {
        url += "?" + params.join("&")
      }

      window.location.href = url
    })
  }

  // Check if user is logged in
  checkLoginStatus()
})

// Function to check if user is logged in and update UI accordingly
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  const headerButtons = document.getElementById("headerButtons")
  const mobileMenu = document.getElementById("mobileMenu")

  if (isLoggedIn && headerButtons) {
    const username = localStorage.getItem("username") || "Usuario"

    // Update header buttons
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
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault()
        logout()
      })
    }

    // Update mobile menu
    if (mobileMenu) {
      const mobileAuthButtons = mobileMenu.querySelector(".mobile-auth-buttons")
      if (mobileAuthButtons) {
        mobileAuthButtons.innerHTML = `
                    <a href="mi-perfil.html" class="btn btn-outline">Mi Perfil</a>
                    <a href="#" id="mobileLogoutBtn" class="btn btn-primary">Cerrar Sesión</a>
                `

        const mobileLogoutBtn = document.getElementById("mobileLogoutBtn")
        if (mobileLogoutBtn) {
          mobileLogoutBtn.addEventListener("click", (e) => {
            e.preventDefault()
            logout()
          })
        }
      }
    }
  }
}

// Function to logout
function logout() {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("username")
  localStorage.removeItem("userData")

  // Redirect to home page
  window.location.href = "index.html"
}


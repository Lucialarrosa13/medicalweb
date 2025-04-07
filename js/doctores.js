document.addEventListener("DOMContentLoaded", () => {
  // Get search parameters from URL
  const urlParams = new URLSearchParams(window.location.search)
  const searchTerm = urlParams.get("buscar")
  const location = urlParams.get("ubicacion")
  const clinica = urlParams.get("clinica")
  const especialidad = urlParams.get("especialidad")

  // Set search inputs based on URL parameters
  if (searchTerm) {
    const doctorSearch = document.getElementById("doctorSearch")
    if (doctorSearch) doctorSearch.value = searchTerm
  }

  if (location) {
    const locationFilter = document.getElementById("locationFilter")
    if (locationFilter) locationFilter.value = location
  }

  if (clinica) {
    const clinicaFilter = document.getElementById("clinicaFilter")
    if (clinicaFilter) clinicaFilter.value = clinica
  }

  if (especialidad) {
    // Check the corresponding specialty checkbox
    const specialtyCheckbox = document.querySelector(`input[name="specialty"][value="${especialidad}"]`)
    if (specialtyCheckbox) specialtyCheckbox.checked = true
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

  // Search button
  const searchButton = document.getElementById("searchButton")

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      const doctorSearch = document.getElementById("doctorSearch").value
      const locationFilter = document.getElementById("locationFilter").value
      const clinicaFilter = document.getElementById("clinicaFilter").value

      // Build URL with search parameters
      let url = "doctores.html"
      const params = []

      if (doctorSearch) params.push(`buscar=${encodeURIComponent(doctorSearch)}`)
      if (locationFilter) params.push(`ubicacion=${encodeURIComponent(locationFilter)}`)
      if (clinicaFilter) params.push(`clinica=${encodeURIComponent(clinicaFilter)}`)

      if (params.length > 0) {
        url += "?" + params.join("&")
      }

      // Reload page with new parameters
      window.location.href = url
    })
  }

  // Sort options
  const sortBy = document.getElementById("sortBy")

  if (sortBy) {
    sortBy.addEventListener("change", function () {
      // In a real app, this would sort the results
      console.log("Sort by:", this.value)
    })
  }

  // Pagination
  const paginationBtns = document.querySelectorAll(".pagination-btn")

  if (paginationBtns.length > 0) {
    paginationBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        paginationBtns.forEach((b) => b.classList.remove("active"))
        this.classList.add("active")

        // In a real app, this would load the corresponding page
        console.log("Page:", this.textContent)
      })
    })
  }

  // Filter checkboxes
  const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]')

  if (filterCheckboxes.length > 0) {
    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // In a real app, this would filter the results
        console.log("Filter changed:", this.name, this.value, this.checked)
      })
    })
  }
})


document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all tabs and panes
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabPanes.forEach((p) => p.classList.remove("active"))

      // Add active class to current tab and pane
      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Date selection
  const dateBtns = document.querySelectorAll(".date-btn")
  dateBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      dateBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Time selection
  const timeBtns = document.querySelectorAll(".time-btn")
  timeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      timeBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Get doctor details from URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const doctorId = urlParams.get("id")

  // Load doctor data based on ID (in a real app, this would come from an API)
  loadDoctorData(doctorId)

  // Appointment scheduling
  const scheduleAppointmentBtn = document.getElementById("scheduleAppointmentBtn")
  const confirmAppointmentBtn = document.getElementById("confirmAppointmentBtn")

  if (scheduleAppointmentBtn) {
    scheduleAppointmentBtn.addEventListener("click", () => {
      // Scroll to appointment form
      const appointmentCard = document.querySelector(".appointment-card")
      if (appointmentCard) {
        appointmentCard.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  if (confirmAppointmentBtn) {
    confirmAppointmentBtn.addEventListener("click", () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

      if (!isLoggedIn) {
        // Show login required modal
        showModal("loginRequiredModal")
        return
      }

      // Get selected date and time
      const selectedDate = document.querySelector(".date-btn.active")
      const selectedTime = document.querySelector(".time-btn.active")
      const consultationType = document.getElementById("consultationType").value
      const mutualista = document.getElementById("mutualista").value

      // Validate selections
      if (!selectedDate || !selectedTime || !consultationType || !mutualista) {
        alert("Por favor completa todos los campos para agendar tu consulta.")
        return
      }

      // Update appointment summary
      document.getElementById("summaryDoctor").textContent = document.getElementById("doctorName").textContent
      document.getElementById("summarySpecialty").textContent = document.getElementById("doctorSpecialty").textContent

      const day = selectedDate.querySelector(".day").textContent
      const date = selectedDate.querySelector(".date").textContent
      document.getElementById("summaryDate").textContent = `${day}, ${date} de Mayo 2023`

      document.getElementById("summaryTime").textContent = selectedTime.textContent
      document.getElementById("summaryType").textContent =
        consultationType === "presencial" ? "Presencial" : "Virtual (Videollamada)"

      let mutualistaText = "Particular"
      if (mutualista === "casmu") mutualistaText = "CASMU"
      else if (mutualista === "asociacion-espanola") mutualistaText = "Asociación Española"
      else if (mutualista === "hospital-britanico") mutualistaText = "Hospital Británico"
      else if (mutualista === "blue-cross") mutualistaText = "Blue Cross & Blue Shield"

      document.getElementById("summaryMutualista").textContent = mutualistaText

      // Show confirmation modal
      showModal("appointmentModal")
    })
  }

  // Modal functionality
  const modals = document.querySelectorAll(".modal")
  const closeButtons = document.querySelectorAll(".close-modal")

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = this.closest(".modal")
      if (modal) {
        modal.classList.remove("active")
      }
    })
  })

  // Close modal when clicking outside
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.remove("active")
      }
    })
  })

  // Cancel appointment button
  const cancelAppointmentBtn = document.getElementById("cancelAppointmentBtn")
  if (cancelAppointmentBtn) {
    cancelAppointmentBtn.addEventListener("click", () => {
      const appointmentModal = document.getElementById("appointmentModal")
      if (appointmentModal) {
        appointmentModal.classList.remove("active")
      }
    })
  }

  // Final confirm button
  const finalConfirmBtn = document.getElementById("finalConfirmBtn")
  if (finalConfirmBtn) {
    finalConfirmBtn.addEventListener("click", () => {
      // Hide appointment modal
      const appointmentModal = document.getElementById("appointmentModal")
      if (appointmentModal) {
        appointmentModal.classList.remove("active")
      }

      // Show success modal
      showModal("successModal")

      // In a real app, we would save the appointment to a database here
    })
  }

  // Close success modal
  const closeSuccessBtn = document.getElementById("closeSuccessBtn")
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener("click", () => {
      const successModal = document.getElementById("successModal")
      if (successModal) {
        successModal.classList.remove("active")
      }
    })
  }

  // Write review button
  const writeReviewBtn = document.getElementById("writeReviewBtn")
  if (writeReviewBtn) {
    writeReviewBtn.addEventListener("click", () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

      if (!isLoggedIn) {
        // Show login required modal
        showModal("loginRequiredModal")
        return
      }

      // In a real app, we would show a review form here
      alert("Funcionalidad de escribir reseña en desarrollo.")
    })
  }
})

// Function to show a modal
function showModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add("active")
  }
}

// Function to load doctor data
function loadDoctorData(doctorId) {
  // In a real app, this would fetch data from an API
  // For this demo, we'll use hardcoded data

  // Default doctor data (if no ID or ID not found)
  const doctorData = {
    id: 1,
    name: "Dra. Ana Martínez",
    specialty: "Cardiología",
    rating: 4.9,
    reviews: 124,
    location: "Av. 18 de Julio 1234, Montevideo",
    bio: "Especialista en cardiología con más de 15 años de experiencia. Certificada por la Sociedad Uruguaya de Cardiología y miembro del Colegio Médico del Uruguay. Especializada en el diagnóstico y tratamiento de enfermedades cardiovasculares.",
    image: "img/doctor1.jpg",
  }

  // Update doctor information in the UI
  document.getElementById("doctorName").textContent = doctorData.name
  document.getElementById("doctorSpecialty").textContent = doctorData.specialty
  document.getElementById("doctorRating").textContent = doctorData.rating
  document.getElementById("doctorReviews").textContent = doctorData.reviews
  document.getElementById("doctorLocation").textContent = doctorData.location
  document.getElementById("doctorBio").textContent = doctorData.bio
  document.getElementById("doctorImage").src = doctorData.image

  // Update page title
  document.title = `${doctorData.name} - MediAgenda Uruguay`
}


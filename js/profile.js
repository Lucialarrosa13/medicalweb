document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    window.location.href = "login.html"
    return
  }

  // Get user data
  const username = localStorage.getItem("username") || "Usuario"
  const userDataString = localStorage.getItem("userData")
  let userData = {}

  if (userDataString) {
    userData = JSON.parse(userDataString)
  }

  // Update profile information
  const userDisplayName = document.getElementById("userDisplayName")
  const profileUserName = document.getElementById("profileUserName")
  const profileUserEmail = document.getElementById("profileUserEmail")
  const profileFullName = document.getElementById("profileFullName")
  const profileEmail = document.getElementById("profileEmail")

  if (userDisplayName) userDisplayName.textContent = username
  if (profileUserName) profileUserName.textContent = username

  if (userData.email) {
    if (profileUserEmail) profileUserEmail.textContent = userData.email
    if (profileEmail) profileEmail.textContent = userData.email
  }

  if (userData.fullName) {
    if (profileFullName) profileFullName.textContent = userData.fullName
  } else if (userData.firstName && userData.lastName) {
    const fullName = `${userData.firstName} ${userData.lastName}`
    if (profileFullName) profileFullName.textContent = fullName
  }

  // Logout functionality
  const logoutBtns = document.querySelectorAll("#logoutBtn, #mobileLogoutBtn, #sidebarLogoutBtn")
  logoutBtns.forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault()

        // Clear user data from localStorage
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("username")
        localStorage.removeItem("userData")

        // Redirect to home page
        window.location.href = "index.html"
      })
    }
  })
})


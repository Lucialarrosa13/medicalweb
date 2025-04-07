document.addEventListener("DOMContentLoaded", () => {
  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  const currentPage = window.location.pathname

  // Redirect to profile if already logged in and trying to access login/register pages
  if (isLoggedIn && (currentPage.includes("login.html") || currentPage.includes("registro.html"))) {
    window.location.href = "mi-perfil.html"
    return
  }

  // Login form submission
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
      const rememberMe = document.getElementById("rememberMe").checked
      const messageContainer = document.getElementById("loginMessage")

      // Clear previous messages
      if (messageContainer) {
        messageContainer.textContent = ""
        messageContainer.className = "message-container"
      }

      // Check if username and password match the predefined credentials
      if (username === "usuario" && password === "123456") {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("username", username)

        if (rememberMe) {
          // If remember me is checked, we could set a longer expiration
          // But for this demo, we're just using localStorage which persists anyway
        }

        // Show success message
        if (messageContainer) {
          messageContainer.textContent = "¡Inicio de sesión exitoso! Redirigiendo..."
          messageContainer.className = "message-container success"
        }

        // Redirect to profile page after a short delay
        setTimeout(() => {
          window.location.href = "mi-perfil.html"
        }, 1000)
      } else {
        // Show error message
        if (messageContainer) {
          messageContainer.textContent = "Usuario o contraseña incorrectos. Intenta nuevamente."
          messageContainer.className = "message-container error"
        }
      }
    })
  }

  // Register form submission
  const registerForm = document.getElementById("registerForm")
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const username = document.getElementById("registerUsername").value
      const password = document.getElementById("registerPassword").value
      const confirmPassword = document.getElementById("confirmPassword").value
      const terms = document.getElementById("terms").checked
      const messageContainer = document.getElementById("registerMessage")

      // Clear previous messages
      if (messageContainer) {
        messageContainer.textContent = ""
        messageContainer.className = "message-container"
      }

      // Validate form
      if (!terms) {
        if (messageContainer) {
          messageContainer.textContent = "Debes aceptar los términos y condiciones para continuar."
          messageContainer.className = "message-container error"
        }
        return
      }

      if (password !== confirmPassword) {
        if (messageContainer) {
          messageContainer.textContent = "Las contraseñas no coinciden. Intenta nuevamente."
          messageContainer.className = "message-container error"
        }
        return
      }

      // Store user data in localStorage
      const userData = {
        firstName,
        lastName,
        email,
        username,
        fullName: `${firstName} ${lastName}`,
      }

      localStorage.setItem("userData", JSON.stringify(userData))
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("username", username)

      // Show success message
      if (messageContainer) {
        messageContainer.textContent = "¡Registro exitoso! Redirigiendo..."
        messageContainer.className = "message-container success"
      }

      // Redirect to profile page after a short delay
      setTimeout(() => {
        window.location.href = "mi-perfil.html"
      }, 1000)
    })
  }
})


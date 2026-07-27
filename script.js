// Barra de progresso de leitura
const progressBar = document.getElementById("progressBar")
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const percent = height > 0 ? (scrollTop / height) * 100 : 0
  progressBar.style.width = percent + "%"
})

// Menu responsivo (mobile)
const menuToggle = document.getElementById("menuToggle")
const mainNav = document.getElementById("mainNav")

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open")
  menuToggle.setAttribute("aria-expanded", String(isOpen))
})

// Fecha o menu ao clicar em um link
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open")
    menuToggle.setAttribute("aria-expanded", "false")
  })
})

// Destaca o link da secao ativa durante a rolagem
const sections = document.querySelectorAll("section[id]")
const navLinks = mainNav.querySelectorAll("a")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id")
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + id)
        })
      }
    })
  },
  { rootMargin: "-40% 0px -55% 0px" }
)

sections.forEach((section) => observer.observe(section))

// Botoes "Ver resposta" dos exercicios
document.querySelectorAll("[data-exercise]").forEach((exercise) => {
  const button = exercise.querySelector(".toggle-answer")
  const answer = exercise.querySelector(".exercise-a")

  button.addEventListener("click", () => {
    const isHidden = answer.hasAttribute("hidden")
    if (isHidden) {
      answer.removeAttribute("hidden")
      button.textContent = "Ocultar resposta"
    } else {
      answer.setAttribute("hidden", "")
      button.textContent = "Ver resposta"
    }
  })
})

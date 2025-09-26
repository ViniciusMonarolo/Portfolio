document.addEventListener("DOMContentLoaded", () => {
  // Fade-in ao rolar
  const faders = document.querySelectorAll('.fade-in');

  window.addEventListener('scroll', () => {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });

  // Troca de idioma (PT/EN simples)
  const langBtn = document.getElementById("lang-toggle");
  let lang = "pt";

  langBtn.addEventListener("click", () => {
    if (lang === "pt") {
      document.querySelector("header p").textContent = "Web Developer";
      document.querySelector("#about h2").textContent = "About me";
      document.querySelector("#about p").textContent = "I am a developer passionate about technology and creating modern web solutions.";
      document.querySelector("#projects h2").textContent = "Projects";
      document.querySelector("#skills h2").textContent = "Skills";
      document.querySelector("#contact h2").textContent = "Contact";
      document.querySelectorAll(".btn")[0].textContent = "View Project";
      document.querySelectorAll(".btn")[1].textContent = "View Project";
      document.querySelectorAll(".btn")[2].textContent = "View Project";
      langBtn.textContent = "PT";
      lang = "en";
    } else {
      document.querySelector("header p").textContent = "Desenvolvedor Web";
      document.querySelector("#about h2").textContent = "Sobre mim";
      document.querySelector("#about p").textContent = "Sou um desenvolvedor apaixonado por tecnologia e criação de soluções web modernas.";
      document.querySelector("#projects h2").textContent = "Projetos";
      document.querySelector("#skills h2").textContent = "Skills";
      document.querySelector("#contact h2").textContent = "Contato";
      document.querySelectorAll(".btn")[0].textContent = "Ver Projeto";
      document.querySelectorAll(".btn")[1].textContent = "Ver Projeto";
      document.querySelectorAll(".btn")[2].textContent = "Ver Projeto";
      langBtn.textContent = "EN";
      lang = "pt";
    }
  });
});

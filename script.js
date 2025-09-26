document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  // Fade-in ao rolar
  window.addEventListener('scroll', () => {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  });

  const texts = {
    pt: {
      header: "Desenvolvedor Web",
      aboutTitle: "Sobre mim",
      aboutText: "Sou um desenvolvedor apaixonado por tecnologia e criação de soluções web modernas.",
      projectsTitle: "Projetos",
      skillsTitle: "Skills",
      contactTitle: "Contato",
      projects: [
        {
          title: "Landing Page",
          desc: "Uma landing page moderna feita com HTML, CSS e JavaScript.",
          stack: "HTML, CSS, JavaScript",
          btn: "Ver Projeto",
          link: "https://github.com/ViniciusMonarolo/Projeto-Curso"
        },
        {
          title: "Pokedex",
          desc: "Pokedex consumindo uma API para exibir dados de Pokémon.",
          stack: "HTML, CSS, JavaScript",
          btn: "Ver Projeto",
          link: "https://github.com/ViniciusMonarolo/Projeto-Pokedex"
        },
        {
          title: "Gerador de Senhas",
          desc: "Gerador de senhas seguras com opções personalizadas.",
          stack: "HTML, CSS, JavaScript",
          btn: "Ver Projeto",
          link: "https://github.com/ViniciusMonarolo/Gerador-de-senhas"
        }
      ]
    },
    en: {
      header: "Web Developer",
      aboutTitle: "About me",
      aboutText: "I am a developer passionate about technology and creating modern web solutions.",
      projectsTitle: "Projects",
      skillsTitle: "Skills",
      contactTitle: "Contact",
      projects: [
        {
          title: "Landing Page",
          desc: "A modern landing page built with HTML, CSS, and JavaScript.",
          stack: "HTML, CSS, JavaScript",
          btn: "View Project",
          link: "https://github.com/ViniciusMonarolo/Projeto-Curso"
        },
        {
          title: "Pokedex",
          desc: "Pokedex consuming an API to display Pokémon data.",
          stack: "HTML, CSS, JavaScript",
          btn: "View Project",
          link: "https://github.com/ViniciusMonarolo/Projeto-Pokedex"
        },
        {
          title: "Password Generator",
          desc: "Generates secure passwords with customizable options.",
          stack: "HTML, CSS, JavaScript",
          btn: "View Project",
          link: "https://github.com/ViniciusMonarolo/Gerador-de-senhas"
        }
      ]
    }
  };

  let lang = "pt";
  const langBtn = document.getElementById("lang-toggle");

  langBtn.addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    const data = texts[lang];

    // Header e seções
    document.querySelector("header p").textContent = data.header;
    document.querySelector("#about h2").textContent = data.aboutTitle;
    document.querySelector("#about p").textContent = data.aboutText;
    document.querySelector("#projects h2").textContent = data.projectsTitle;
    document.querySelector("#skills h2").textContent = data.skillsTitle;
    document.querySelector("#contact h2").textContent = data.contactTitle;

    // Projetos
    const projectCards = document.querySelectorAll(".project");
    projectCards.forEach((card, i) => {
      card.querySelector("h3").textContent = data.projects[i].title;
      const paragraphs = card.querySelectorAll("p");
      paragraphs[0].textContent = data.projects[i].desc;
      paragraphs[1].innerHTML = `<strong>Stack:</strong> ${data.projects[i].stack}`;
      const link = card.querySelector(".btn");
      link.textContent = data.projects[i].btn;
      link.href = data.projects[i].link;
    });

    langBtn.textContent = lang === "pt" ? "EN" : "PT";
  });

  // Fade-in inicial
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

 const content = {
      en: {
        title: "Vinícius Monarolo",
        aboutTitle: "About Me",
        aboutText: "Hi! I'm Vinícius, a passionate developer focused on building clean, modern, and responsive web solutions. I love turning ideas into functional digital experiences.",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Contact"
      },
      pt: {
        title: "Vinícius Monarolo",
        aboutTitle: "Sobre Mim",
        aboutText: "Olá! Eu sou Vinícius, um desenvolvedor apaixonado por criar soluções web modernas, limpas e responsivas. Adoro transformar ideias em experiências digitais funcionais.",
        skillsTitle: "Habilidades",
        projectsTitle: "Projetos",
        contactTitle: "Contato"
      }
    };
    let currentLang = 'en';
    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'pt' : 'en';
      document.getElementById('title').innerText = content[currentLang].title;
      document.getElementById('about-title').innerText = content[currentLang].aboutTitle;
      document.getElementById('about-text').innerText = content[currentLang].aboutText;
      document.getElementById('skills-title').innerText = content[currentLang].skillsTitle;
      document.getElementById('projects-title').innerText = content[currentLang].projectsTitle;
      document.getElementById('contact-title').innerText = content[currentLang].contactTitle;
    }

    // Fade-in on scroll
    const faders = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', () => {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    });

    // Trigger on load for visible elements
    window.addEventListener('load', () => {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    });

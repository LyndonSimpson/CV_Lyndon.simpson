import translations from './translations.js';

document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const background1 = document.getElementById('background-1');
  const background2 = document.getElementById('background-2');
  const body = document.body;
  let currentLang = 'fr';

  function updateTranslations() {
    const translatedElements = document.querySelectorAll('[data-translate]');

    translatedElements.forEach((element) => {
      const translationKey = element.getAttribute('data-translate');
      element.textContent = translations[currentLang][translationKey];
    });
  }

  function updateButtonLabel() {
    const lightModeIcon = document.querySelector('.light-mode-icon');
    const darkModeIcon = document.querySelector('.dark-mode-icon');
  
    if (body.classList.contains('dark')) {
      lightModeIcon.style.opacity = '0';
      darkModeIcon.style.opacity = '1';
    } else {
      lightModeIcon.style.opacity = '1';
      darkModeIcon.style.opacity = '0';
    }
  }

  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateTranslations();
    langToggle.classList.toggle('fr');
  });  

  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    updateButtonLabel();
  });

  // Set the initial translations and button label
  updateTranslations();
  updateButtonLabel();

  // Add an event listener for scrolling
  window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight / 2) {
      background1.style.opacity = 0;
      background2.style.opacity = 1;
    } else {
      background1.style.opacity = 1;
      background2.style.opacity = 0;
    }
  });

  // Typewriter effect
  const codeText = `class Developer {
    constructor(name, role, skills, 
                location) {
      this.name = name;
      this.role = role;
      this.skills = skills;
      this.location = location;
    }
  
    introduce() {
      console.log(\`Hi, I'm \${this.name},
       a \${this.role}
        located in \${this.location}. 
        My skills include
         \${this.skills.join(', ')}.\`);
    }
  }
  
  const lyndon = new Developer(
    'Lyndon', 
    'Full Stack Developer', 
    ['JavaScript', 'HTML', 'CSS'], 
    'Paris');

  lyndon.introduce();`;

  const typewriterText = document.getElementById('typewriter-text');
  let currentIndex = 0;

  function typeWriter() {
    if (currentIndex < codeText.length) {
      typewriterText.innerHTML += codeText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeWriter, 20);
    }
  }

  // Particles.js effect
  const sections = document.querySelectorAll('section:not(#exclude-section)');

sections.forEach((section, index) => {
  const particlesId = `particles-js-${index}`;
  const particlesDiv = document.createElement('div');
  particlesDiv.setAttribute('id', particlesId);
  particlesDiv.classList.add('particles-js');
  section.prepend(particlesDiv);

  particlesJS(particlesId, {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    }
    ,
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
});
  typeWriter();
});




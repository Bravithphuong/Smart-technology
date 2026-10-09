
(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const languageToggle = document.getElementById("languageToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const servicesGrid = document.getElementById("servicesGrid");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const BUSINESS_EMAIL = "bravithphuong@gmail.com";
  const BUSINESS_NAME = "NEXORA TECHNOLOGIES";

  // SVG icon paths: rendered locally, no emoji font required.
  const icons = {
    consultant: '<path d="M12 3a7 7 0 0 0-4 12.7c.6.4 1 1.1 1 1.8h6c0-.7.4-1.4 1-1.8A7 7 0 0 0 12 3Z"/><path d="M9 21h6M9 18h6"/>',
    network: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M10.5 7.5 6.5 16M13.5 7.5 17.5 16M8 19h8"/>',
    server: '<rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6.5h.01M8 17.5h.01M12 6.5h4M12 17.5h4"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    camera: '<path d="M14 5h-4l-2 3H4a2 2 0 0 0-2 2v9h20v-9a2 2 0 0 0-2-2h-4Z"/><circle cx="12" cy="13" r="3"/>',
    access: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="9" r="2"/><path d="M9 15h6M12 11v4"/>',
    audio: '<path d="M11 5 6 9H3v6h3l5 4Z"/><path d="M15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"/>',
    fire: '<path d="M12 22c4.5 0 7-3.1 7-7 0-3-1.8-5.4-4.5-8-.2 2-1.2 3-2.2 3.5C12.7 6.5 10 3.5 8 2 8.5 6.5 5 9 5 14c0 4.7 2.9 8 7 8Z"/><path d="M10 17c0-1.5 1-2.5 2-3.5 1.5 1.5 2 2.5 2 3.5a2 2 0 0 1-4 0Z"/>',
    cable: '<path d="M8 7V3M16 7V3M6 7h12v4a6 6 0 0 1-12 0Z"/><path d="M12 17v4M9 21h6"/>',
    managed: '<path d="M12 8V4H8"/><path d="M4.9 9A8 8 0 1 1 4 14"/><path d="M4 4v5h5"/><path d="M12 12v4l3 2"/>',
    copier: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/><path d="M17 12h.01"/>',
    computer: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 8h10"/>'
  };

  const services = [
    {
      icon: "consultant",
      title: "IT Consultant",
      km: "IT Consultant",
      en: "IT Consultant",
      descKm: "ផ្ដល់យោបល់អំពីយុទ្ធសាស្ត្រ IT ការជ្រើសរើសបច្ចេកវិទ្យា និងផែនការអភិវឌ្ឍប្រព័ន្ធតាមតម្រូវការអង្គភាព។",
      descEn: "Expert advice on IT strategy, technology selection and digital transformation roadmaps tailored to your organization."
    },
    {
      icon: "network",
      title: "Network Infrastructure",
      km: "Network Infrastructure",
      en: "Network Infrastructure",
      descKm: "រចនា និងដំឡើងបណ្ដាញ LAN/WAN និង Wi-Fi ដែលមានស្ថិរភាព និងអាចពង្រីកបាន។",
      descEn: "Design and deployment of reliable, scalable wired and wireless networks for offices and campuses."
    },
    {
      icon: "server",
      title: "Server & Storage",
      km: "Server & Storage",
      en: "Server & Storage",
      descKm: "ដំណោះស្រាយ Server, Virtualization និង Storage ដើម្បីរក្សាទិន្នន័យឱ្យមានសុវត្ថិភាព និងអាចប្រើប្រាស់បាន។",
      descEn: "Server, virtualization and storage solutions that keep your data available, protected and ready to grow."
    },
    {
      icon: "shield",
      title: "Network & Cybersecurity",
      km: "Network & Cybersecurity",
      en: "Network & Cybersecurity",
      descKm: "កំណត់ Firewall ការពារការគំរាមកំហែង និងពង្រឹងសុវត្ថិភាពបណ្ដាញ ប្រព័ន្ធ និងទិន្នន័យ។",
      descEn: "Firewalls, threat protection and security hardening to safeguard your network, systems and data."
    },
    {
      icon: "camera",
      title: "CCTV Surveillance System",
      km: "CCTV Surveillance System",
      en: "CCTV Surveillance System",
      descKm: "រចនា និងដំឡើងកាមេរ៉ា IP/Analog និងប្រព័ន្ធតាមដានសម្រាប់បង្កើនសុវត្ថិភាពទីតាំង។",
      descEn: "IP camera design, installation and monitoring to secure your premises around the clock."
    },
    {
      icon: "access",
      title: "Access Control System",
      km: "Access Control System",
      en: "Access Control System",
      descKm: "ប្រព័ន្ធចូលចេញដោយកាត ស្នាមម្រាមដៃ និងការគ្រប់គ្រងទ្វារ។",
      descEn: "Card, biometric and door access solutions that manage who enters your facilities."
    },
    {
      icon: "audio",
      title: "Public Address (PA) / Audio System",
      km: "Public Address (PA) / Audio System",
      en: "Public Address (PA) / Audio System",
      descKm: "ប្រព័ន្ធសំឡេង ប្រកាសព័ត៌មាន និង Paging សម្រាប់ការិយាល័យ សាលារៀន និងទីតាំងសាធារណៈ។",
      descEn: "Clear audio, paging and announcement systems for offices, schools and public venues."
    },
    {
      icon: "fire",
      title: "Fire Alarm System",
      km: "Fire Alarm System",
      en: "Fire Alarm System",
      descKm: "ដំឡើងប្រព័ន្ធចាប់សញ្ញាអគ្គិភ័យ និងសំឡេងជូនដំណឹងសម្រាប់ការព្រមានទាន់ពេល។",
      descEn: "Fire detection and alarm systems designed to provide early warning and support safety requirements."
    },
    {
      icon: "cable",
      title: "Network Cabling",
      km: "Network Cabling",
      en: "Network Cabling",
      descKm: "រៀបចំខ្សែ Copper និង Fiber មានស្លាកសម្គាល់ តេស្ត និងរៀបចំឱ្យមានរបៀបរៀបរយ។",
      descEn: "Structured copper and fiber cabling, neatly installed, tested and labeled for dependable connectivity."
    },
    {
      icon: "managed",
      title: "Managed IT Services",
      km: "Managed IT Services",
      en: "Managed IT Services",
      descKm: "តាមដាន ថែទាំ និងផ្ដល់ជំនួយបច្ចេកទេស ដើម្បីឱ្យប្រព័ន្ធ IT ដំណើរការរលូន។",
      descEn: "Proactive monitoring, maintenance and helpdesk support so your IT runs smoothly."
    },
    {
      icon: "copier",
      title: "Copier Rental",
      km: "Copier Rental",
      en: "Copier Rental",
      descKm: "សេវាជួលម៉ាស៊ីនថតចម្លង ជាមួយការដំឡើង ថែទាំ និងគាំទ្រសម្ភារៈប្រើប្រាស់។",
      descEn: "Flexible copier rental plans with deployment, maintenance and supplies support."
    },
    {
      icon: "computer",
      title: "ICT Peripheral",
      km: "ICT Peripheral",
      en: "ICT Peripheral",
      descKm: "ផ្គត់ផ្គង់កុំព្យូទ័រ ម៉ាស៊ីនព្រីន គ្រឿងបន្លាស់ និងសម្ភារៈ ICT ផ្សេងៗ។",
      descEn: "Supply of computers, printers, accessories and other ICT peripherals for your workplace."
    }
  ];

  function renderServices(language) {
    if (!servicesGrid) return;

    const moreText = language === "en" ? "Learn more ↗" : "សាកសួរបន្ថែម ↗";

    servicesGrid.innerHTML = services.map((service) => `
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">${icons[service.icon]}</svg>
        </div>
        <h3>${service[language]}</h3>
        <p>${language === "en" ? service.descEn : service.descKm}</p>
        <a class="service-link" href="#contact">${moreText}</a>
      </article>
    `).join("");
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === "dark";

    if (themeIcon) {
      themeIcon.innerHTML = isDark
        ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>'
        : '<path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z"></path>';
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark ? "#080d19" : "#f4f8ff";

    try {
      localStorage.setItem("nexora-theme", theme);
    } catch (_) {}
  }

  function applyLanguage(language) {
    root.lang = language;
    document.body.setAttribute("lang", language);

    document.querySelectorAll("[data-km][data-en]").forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-placeholder-km][data-placeholder-en]").forEach((element) => {
      element.placeholder = language === "en"
        ? element.dataset.placeholderEn
        : element.dataset.placeholderKm;
    });

    if (languageToggle) {
      languageToggle.textContent = language === "km" ? "EN" : "ខ្មែរ";
      languageToggle.setAttribute(
        "aria-label",
        language === "km" ? "Switch to English" : "ប្ដូរទៅភាសាខ្មែរ"
      );
    }

    renderServices(language);

    if (formStatus && !formStatus.dataset.submitted) {
      formStatus.textContent = language === "en"
        ? "Click the button to open your email app."
        : "ចុចប៊ូតុង ដើម្បីបើកកម្មវិធីអ៊ីមែលរបស់អ្នក។";
    }

    try {
      localStorage.setItem("nexora-language", language);
    } catch (_) {}
  }

  // Load saved preferences; defaults are Light and Khmer.
  let savedTheme = null;
  let savedLanguage = null;

  try {
    savedTheme = localStorage.getItem("nexora-theme");
    savedLanguage = localStorage.getItem("nexora-language");
  } catch (_) {}

  applyTheme(savedTheme === "dark" ? "dark" : "light");
  applyLanguage(savedLanguage === "en" ? "en" : "km");

  themeToggle?.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  languageToggle?.addEventListener("click", () => {
    applyLanguage(root.lang === "km" ? "en" : "km");
  });

  menuToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight the current navigation section.
  const navLinks = [...document.querySelectorAll(".nav-menu a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });

    sections.forEach((section) => observer.observe(section));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Prepare an email. The visitor must review it and press Send.
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const service = document.getElementById("visitorService").value;
    const message = document.getElementById("visitorMessage").value.trim();
    const isEnglish = root.lang === "en";

    const subject = isEnglish
      ? `Service inquiry: ${service}`
      : `សំណើសុំសេវាកម្ម៖ ${service}`;

    const body = isEnglish
      ? [
          `Hello ${BUSINESS_NAME},`,
          "",
          "I'd like to inquire about your services.",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Service: ${service}`,
          "",
          "Message:",
          message,
          "",
          "Thank you."
        ].join("\n")
      : [
          `សួស្តី ${BUSINESS_NAME},`,
          "",
          "ខ្ញុំចង់សាកសួរអំពីសេវាកម្មរបស់អ្នក។",
          "",
          `ឈ្មោះ៖ ${name}`,
          `អ៊ីមែល៖ ${email}`,
          `សេវាកម្ម៖ ${service}`,
          "",
          "សារ៖",
          message,
          "",
          "សូមអរគុណ។"
        ].join("\n");

    if (formStatus) {
      formStatus.dataset.submitted = "true";
      formStatus.textContent = isEnglish
        ? "Your email app should open with the message prepared. Review it and press Send."
        : "កម្មវិធីអ៊ីមែលគួរតែបើកជាមួយសារដែលបានរៀបចំ។ សូមពិនិត្យ រួចចុច Send។";
    }

    const mailto = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
})();
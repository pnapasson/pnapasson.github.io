import { resumeData } from './resume-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const heroSummary = document.getElementById('hero-summary');
  const timelineContainer = document.getElementById('timeline-container');
  const portfolioContainer = document.getElementById('portfolio-container');
  const skillsContainer = document.getElementById('skills-container');
  const languagesContainer = document.getElementById('languages-container');
  const contactInfoContainer = document.getElementById('contact-info-container');
  const footerSocials = document.getElementById('footer-socials');
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconDark = document.getElementById('theme-icon-dark');
  const themeIconLight = document.getElementById('theme-icon-light');
  
  const menuHamburger = document.getElementById('menu-hamburger');
  const navDrawer = document.getElementById('nav-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBodyContent = document.getElementById('modal-body-content');
  
  const contactForm = document.getElementById('contact-form');
  const web3FormsKeyInput = document.getElementById('web3forms-key');
  const formStatus = document.getElementById('form-status');
  const demoKeyModal = document.getElementById('demo-key-modal');
  const demoModalClose = document.getElementById('demo-modal-close');
  const demoModalOk = document.getElementById('demo-modal-ok');
  
  // -------------------------------------------------------------
  // 1. Dynamic DOM Hydration
  // -------------------------------------------------------------
  
  // A. Hero & Personal Details
  if (heroSummary) {
    heroSummary.textContent = resumeData.personalInfo.summary;
  }
  
  // B. Timeline (Experience & Education combined chronologically)
  // Let's sort items by sorting them by period or display experience then education
  if (timelineContainer) {
    const timelineHTML = [];
    
    // Add Experience
    resumeData.experience.forEach(exp => {
      timelineHTML.push({
        type: 'experience',
        period: exp.period,
        role: exp.role,
        company: exp.company,
        bullets: exp.bullets
      });
    });
    
    // Add Education
    resumeData.education.forEach(edu => {
      timelineHTML.push({
        type: 'education',
        period: edu.period,
        role: edu.degree,
        company: edu.institution,
        bullets: null
      });
    });
    
    // Sort logic (We want Present first, then descending by years)
    // Since we have a small set of static items, we'll keep the order from our list:
    // Exp 1 (2024-Pres), Exp 2 (2023-2024), Exp 3 (2022-2023), Exp 4 (2021-2022), Edu 1 (2017-2021)
    // That matches exactly Experience items followed by Education items.
    
    const sortedTimeline = [
      ...timelineHTML.filter(t => t.type === 'experience'),
      ...timelineHTML.filter(t => t.type === 'education')
    ];
    
    timelineContainer.innerHTML = sortedTimeline.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-period">${item.period}</div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-role">${item.role}</h3>
            <div class="timeline-company">${item.company}</div>
          </div>
          ${item.bullets ? `
          <ul class="timeline-list">
            ${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
          </ul>
          ` : ''}
        </div>
      </div>
    `).join('');
  }
  
  // C. Skills Hydration
  if (skillsContainer) {
    skillsContainer.innerHTML = resumeData.skills.map(skill => `
      <div class="skill-item">
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-badge">${skill.badge}</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-level="${skill.level}" style="--skill-percentage: ${skill.level}%"></div>
        </div>
      </div>
    `).join('');
  }
  
  // D. Languages Hydration
  if (languagesContainer) {
    languagesContainer.innerHTML = resumeData.languages.map(lang => `
      <div class="language-item">
        <div class="language-info">
          <span class="skill-name">${lang.name}</span>
          <span class="language-proficiency">${lang.label}</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-level="${lang.level}" style="--skill-percentage: ${lang.level}%"></div>
        </div>
      </div>
    `).join('');
  }
  
  // E. Contact Information Hydration
  if (contactInfoContainer) {
    const info = resumeData.personalInfo;
    const contactItems = [
      {
        label: "Email Address",
        value: info.email,
        link: `mailto:${info.email}`,
        svg: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
      },
      {
        label: "Phone Number",
        value: info.phone,
        link: `tel:${info.phone.replace(/\s+/g, '')}`,
        svg: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
      },
      {
        label: "Location Office",
        value: info.address,
        link: null,
        svg: `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
      },
      {
        label: "LinkedIn Professional",
        value: "napasson-pisuttharachai",
        link: info.linkedin,
        svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
      },
      {
        label: "GitHub Repository",
        value: "pnapasson.github.io",
        link: "https://github.com/pnapasson/pnapasson.github.io",
        svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
      }
    ];
    
    contactInfoContainer.innerHTML = contactItems.map(item => `
      <div class="contact-info-item">
        <div class="contact-icon-wrapper">${item.svg}</div>
        <div class="contact-details">
          <h4>${item.label}</h4>
          ${item.link ? `<a href="${item.link}" target="_blank">${item.value}</a>` : `<p>${item.value}</p>`}
        </div>
      </div>
    `).join('');
  }
  
  // F. Footer Social Icons
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${resumeData.personalInfo.linkedin}" target="_blank" class="social-icon-btn" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href="${resumeData.personalInfo.github}" target="_blank" class="social-icon-btn" aria-label="GitHub">
        <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
    `;
  }
  
  // Footer dynamic year
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) {
    footerCopyright.innerHTML = `&copy; ${new Date().getFullYear()} Napasson Pisuttharachai. All rights reserved.`;
  }

  // -------------------------------------------------------------
  // 2. Typewriter Effect
  // -------------------------------------------------------------
  const typewriterText = document.getElementById('typewriter');
  if (typewriterText) {
    const words = resumeData.personalInfo.titles;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDelay = 2000;
    
    function handleTypewriter() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        // Deleting characters
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Typing characters
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let delta = isDeleting ? deleteSpeed : typeSpeed;
      
      if (!isDeleting && charIndex === currentWord.length) {
        // Word typed out fully, wait and start deleting
        delta = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Word cleared, move to the next
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delta = 500; // Small delay before typing next word
      }
      
      setTimeout(handleTypewriter, delta);
    }
    
    // Start typewriter
    setTimeout(handleTypewriter, 500);
  }

  // -------------------------------------------------------------
  // 3. Theme System (LocalStorage & Prefs)
  // -------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
      document.body.classList.add('light-theme');
      themeIconDark.style.display = 'none';
      themeIconLight.style.display = 'block';
    } else {
      document.body.classList.remove('light-theme');
      themeIconDark.style.display = 'block';
      themeIconLight.style.display = 'none';
    }
  }
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      
      if (isLight) {
        themeIconDark.style.display = 'none';
        themeIconLight.style.display = 'block';
      } else {
        themeIconDark.style.display = 'block';
        themeIconLight.style.display = 'none';
      }
    });
  }
  
  // Watch for system color changes dynamically
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      initTheme();
    }
  });
  
  // Initialize theme on load
  initTheme();

  // -------------------------------------------------------------
  // 4. Header shrink on Scroll
  // -------------------------------------------------------------
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // -------------------------------------------------------------
  // 5. Mobile Navigation Drawer
  // -------------------------------------------------------------
  const hamLine1 = document.getElementById('ham-line-1');
  const hamLine2 = document.getElementById('ham-line-2');
  const hamLine3 = document.getElementById('ham-line-3');
  
  function toggleDrawer() {
    const isOpen = navDrawer.classList.contains('open');
    if (isOpen) {
      // Close Drawer
      navDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
      menuHamburger.setAttribute('aria-expanded', 'false');
      // Reset Hamburger Icons
      hamLine1.style.transform = 'none';
      hamLine2.style.opacity = '1';
      hamLine3.style.transform = 'none';
    } else {
      // Open Drawer
      navDrawer.classList.add('open');
      drawerOverlay.classList.add('active');
      menuHamburger.setAttribute('aria-expanded', 'true');
      // Morph Hamburger to Cross
      hamLine1.style.transform = 'translateY(6px) rotate(45deg)';
      hamLine2.style.opacity = '0';
      hamLine3.style.transform = 'translateY(-6px) rotate(-45deg)';
    }
  }
  
  if (menuHamburger) {
    menuHamburger.addEventListener('click', toggleDrawer);
  }
  
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', toggleDrawer);
  }
  
  // Close drawer on link click
  const drawerLinks = document.querySelectorAll('.drawer-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navDrawer.classList.contains('open')) {
        toggleDrawer();
      }
    });
  });

  // -------------------------------------------------------------
  // 6. Intersection Observer Reveals & Skill Bar Progress
  // -------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
  
  // Skill bar loader animation
  const skillBarFills = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute('data-level');
        entry.target.style.width = `${level}%`;
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  skillBarFills.forEach(fill => skillObserver.observe(fill));

  // -------------------------------------------------------------
  // 7. Interactive Projects (Tabs Filter & Modal details)
  // -------------------------------------------------------------
  
  function renderProjects(filter = 'all') {
    if (!portfolioContainer) return;
    
    const filteredProjects = resumeData.projects.filter(proj => {
      return filter === 'all' || proj.category === filter;
    });
    
    portfolioContainer.innerHTML = filteredProjects.map(proj => `
      <div class="portfolio-card reveal visible" data-id="${proj.id}">
        <div class="portfolio-img-container">
          <img class="portfolio-card-img" src="${proj.image}" alt="${proj.title}">
        </div>
        <div class="portfolio-card-content">
          <div class="portfolio-card-subtitle">${proj.subtitle}</div>
          <h3 class="card-title">${proj.title}</h3>
          <p class="portfolio-card-description">${proj.description.substring(0, 120)}...</p>
          <div class="portfolio-card-tags">
            ${proj.tech.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
    
    // Rebind click events to project cards
    const cards = portfolioContainer.querySelectorAll('.portfolio-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const projId = card.getAttribute('data-id');
        openProjectModal(projId);
      });
    });
  }
  
  // Filter tabs listeners
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
  
  // Open project detailed modal popup
  function openProjectModal(id) {
    const project = resumeData.projects.find(p => p.id === id);
    if (!project) return;
    
    modalBodyContent.innerHTML = `
      <img class="modal-img" src="${project.image}" alt="${project.title}">
      <div class="modal-subtitle">${project.subtitle}</div>
      <h3 class="modal-title">${project.title}</h3>
      
      <div class="modal-meta">
        <div class="modal-meta-item">Organization: <strong>${project.company}</strong></div>
        <div class="modal-meta-item">Domain: <strong style="text-transform: capitalize;">${project.category}</strong></div>
      </div>
      
      <p class="modal-description">${project.description}</p>
      
      <h4 class="modal-checklist-title">Key Implementations & Milestones</h4>
      <ul class="modal-checklist">
        ${project.checklist.map(item => `<li>${item}</li>`).join('')}
      </ul>
      
      <div class="modal-tags">
        ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  }
  
  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }
  
  // Close modals clicking outside contents
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
    if (e.target === demoKeyModal) {
      closeDemoModal();
    }
  });
  
  // Escape key handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeDemoModal();
    }
  });
  
  // Initial projects render
  renderProjects('all');

  // -------------------------------------------------------------
  // 8. Dual-Mode Web3Forms Form Submission
  // -------------------------------------------------------------
  
  // Sync form access key from config data
  if (web3FormsKeyInput) {
    web3FormsKeyInput.value = resumeData.web3Forms.accessKey;
  }
  
  function openDemoModal() {
    demoKeyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeDemoModal() {
    demoKeyModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (demoModalClose) {
    demoModalClose.addEventListener('click', closeDemoModal);
  }
  if (demoModalOk) {
    demoModalOk.addEventListener('click', closeDemoModal);
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const currentKey = resumeData.web3Forms.accessKey;
      
      // Dual-Mode verification
      if (currentKey === "YOUR_WEB3FORMS_ACCESS_KEY" || !currentKey || currentKey.trim() === "") {
        // Demo Mode Active
        formStatus.textContent = "Form submission simulation: Ready. Instructions loaded.";
        formStatus.className = "form-status success";
        formStatus.style.display = "block";
        
        // Open the instruction modal
        openDemoModal();
      } else {
        // Production Mode Active
        formStatus.textContent = "Sending message...";
        formStatus.className = "form-status";
        formStatus.style.display = "block";
        
        try {
          const formData = new FormData(contactForm);
          // Overwrite the hidden apikey in case config object changed dynamically
          formData.set('apikey', currentKey);
          
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });
          
          const result = await response.json();
          
          if (response.status === 200 && result.success) {
            formStatus.textContent = "Thank you! Your message has been sent successfully.";
            formStatus.className = "form-status success";
            contactForm.reset();
          } else {
            formStatus.textContent = result.message || "An error occurred. Please try again later.";
            formStatus.className = "form-status error";
          }
        } catch (error) {
          formStatus.textContent = "Network error. Please check your internet connection.";
          formStatus.className = "form-status error";
        }
      }
    });
  }
});

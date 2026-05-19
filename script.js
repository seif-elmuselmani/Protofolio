/* ==========================================================================
   Premium Personal Portfolio Script Logic
   Author: Antigravity AI
   Target: Seif Eldin ELMuselmani (Backend Software Engineer)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // Global State Variables (Declared at the top to avoid ReferenceErrors/TDZ)
    // ==========================================================================
    const htmlElement = document.documentElement;
    const typingText = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    // Typing text content mapping by language
    const typingDict = {
        ar: [
            "مهندس برمجيات خلفية (Backend)",
            "متخصص .NET و C#",
            "مطور MEAN Stack",
            "مهتم بدمج الذكاء الاصطناعي"
        ],
        en: [
            "Backend Software Engineer",
            ".NET & C# Specialist",
            "MEAN Stack Developer",
            "AI Integration Enthusiast"
        ]
    };

    // ==========================================================================
    // 1. Loader Preloader Overlay Fade-Out
    // ==========================================================================
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 600); // Give the progress bar animation time to finish
        });

        // Fail-safe in case window load event already fired or delayed
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 3000);
    }

    // ==========================================================================
    // 2. Language Switcher Engine (AR / EN)
    // ==========================================================================
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'en'; // Seif requested English first or bilingual
    applyLanguage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            applyLanguage(currentLang);
        });
    }

    function applyLanguage(lang) {
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        localStorage.setItem('lang', lang);
        
        // Update page title dynamically for accessibility & SEO
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            if (lang === 'ar') {
                pageTitle.textContent = "سيف الدين المسلماني | مهندس برمجيات خلفية .NET & MEAN";
            } else {
                pageTitle.textContent = "Seif Eldin ELMuselmani | Backend Software Engineer";
            }
        }
        
        // Reset typing indices to start fresh in new language instantly
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        
        // Clear text to prevent ghost remnants when swapping languages
        if (typingText) {
            typingText.textContent = '';
        }
    }

    // ==========================================================================
    // 3. Theme Toggle Engine (Dark / Light)
    // ==========================================================================
    const themeToggle = document.getElementById('themeToggle');
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    htmlElement.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }

    // ==========================================================================
    // 4. Typing Effect Logic
    // ==========================================================================
    function typeEffect() {
        if (!typingText) return;
        
        const words = typingDict[currentLang] || typingDict['en'];
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2200; // Pause showing complete word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 600; // Pause before typing new word
        }

        typingTimeout = setTimeout(typeEffect, speed);
    }
    
    // Initialize Typing
    setTimeout(typeEffect, 1200);

    // ==========================================================================
    // 5. Scroll Progress Bar & Sticky Header
    // ==========================================================================
    const progressBar = document.getElementById('progressBar');
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
        
        // Sticky nav visual blur glow addition on scroll
        if (navbar) {
            if (winScroll > 40) {
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                navbar.style.padding = '8px 0'; // Compact nav on scroll
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.padding = '0'; // Restore full padding
            }
        }
    });

    // ==========================================================================
    // 6. Mobile Drawer Navigation Toggle
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
            
            // Lock body scroll when mobile menu is open to improve mobile UX
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = ''; // Unlock scroll on select link
            });
        });
    }

    // ==========================================================================
    // 7. Scroll Reveal & Skill Progress Animations (Intersection Observer)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');
    const skillProgressBars = document.querySelectorAll('.progress-bar-fill');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it is the skills section or bar, animate them
                if (entry.target.classList.contains('skills') || entry.target.querySelector('.progress-bar-fill')) {
                    animateSkillsBars();
                }
                
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    function animateSkillsBars() {
        skillProgressBars.forEach(bar => {
            const width = bar.getAttribute('data-progress');
            bar.style.width = width;
        });
    }

    // ==========================================================================
    // 8. Active Nav Link Tracking on Scroll
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Highlight a little early before section reaches top of screen
            if (scrollPosition >= (sectionTop - 180)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (currentSection && href && href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 9. Contact Form Simulation & WhatsApp API Integration
    // ==========================================================================
    const contactForm = document.getElementById('contactForm');
    const toastNotification = document.getElementById('toastNotification');

    if (contactForm && toastNotification) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract input values using correct HTML IDs
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            // Formulate WhatsApp message text dynamically based on selected language
            let waMessage = '';
            if (currentLang === 'ar') {
                waMessage = `*رسالة تواصل جديدة من معرض أعمالك*\n\n`;
                waMessage += `👤 *الاسم:* ${name}\n`;
                waMessage += `✉️ *البريد الإلكتروني:* ${email}\n`;
                waMessage += `📌 *الموضوع:* ${subject}\n\n`;
                waMessage += `💬 *الرسالة:*\n${message}`;
            } else {
                waMessage = `*New Contact Message from Portfolio*\n\n`;
                waMessage += `👤 *Name:* ${name}\n`;
                waMessage += `✉️ *Email:* ${email}\n`;
                waMessage += `📌 *Subject:* ${subject}\n\n`;
                waMessage += `💬 *Message:*\n${message}`;
            }

            const encodedText = encodeURIComponent(waMessage);
            const waUrl = `https://wa.me/201223817860?text=${encodedText}`;

            // Show sending spinner animation on submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'ar' ? 
                'جاري الإرسال... <i class="fa-solid fa-spinner fa-spin"></i>' : 
                'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

            setTimeout(() => {
                // Show Success Toast Notification Card
                toastNotification.classList.add('show');
                
                // Open WhatsApp Web/App in a new tab with the prepared message
                window.open(waUrl, '_blank');

                // Reset Button & Input Fields
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
                contactForm.reset();
                
                // Hide Toast after 4.5 seconds
                setTimeout(() => {
                    toastNotification.classList.remove('show');
                }, 4500);
                
            }, 1000);
        });
    }

    // 10. Certificates Lightbox Engine
    // ==========================================================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const certWrappers = document.querySelectorAll('.cert-img-wrapper');
    let lastActiveElement = null; // Store element that opened lightbox to restore focus

    if (lightbox && lightboxImg && lightboxCaption && lightboxClose) {
        certWrappers.forEach(wrapper => {
            // Enhance dynamic accessibility roles for the interactive image card
            wrapper.setAttribute('role', 'button');
            wrapper.setAttribute('tabindex', '0');
            wrapper.setAttribute('aria-label', 'عرض الشهادة | View Certificate');

            const openLightbox = () => {
                const img = wrapper.querySelector('.cert-img');
                const card = wrapper.closest('.cert-card');
                const titleHeading = card ? card.querySelector('h3') : null;

                if (img) {
                    lastActiveElement = document.activeElement; // Track focus
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt || 'Certificate Closeup';
                    if (titleHeading) {
                        lightboxCaption.innerHTML = titleHeading.innerHTML;
                    }
                    lightbox.classList.add('open');
                    document.body.style.overflow = 'hidden'; // Lock scroll
                    
                    // Shift focus inside modal to Close button for a11y compliance
                    setTimeout(() => {
                        lightboxClose.focus();
                    }, 50);
                }
            };

            wrapper.addEventListener('click', openLightbox);
            
            // Keyboard navigation listener (Enter & Space activation)
            wrapper.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox();
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('open');
            document.body.style.overflow = ''; // Unlock scroll
            
            // Restore focus back to the triggering certificate card
            if (lastActiveElement) {
                lastActiveElement.focus();
            }
        };

        lightboxClose.addEventListener('click', closeLightbox);
        
        // Close on clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
                closeLightbox();
            }
        });

        // Close on Escape key press
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('open')) {
                closeLightbox();
            }
        });
    }
});

import React, { useEffect } from 'react';
import './style.css';
import { initScript } from './script.js';

function App() {
  useEffect(() => {
    initScript();
  }, []);

  return (
    <div className="app-container">
      {/* Body Content */}
      

    {/* Premium Loading Screen */}
    <div id="loader" className="glass-loader">
        <div className="loader-content">
            <div className="loader-logo">SE<span className="pulse-dot">.</span></div>
            <div className="loader-bar-container">
                <div className="loader-bar"></div>
            </div>
        </div>
    </div>

    {/* Premium Dotted Grid Background Overlay */}
    <div className="grid-bg"></div>

    {/* Glowing Animated Background Orbs */}
    <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
    </div>

    {/* Header / Sticky Navbar */}
    <nav id="navbar" className="glass-nav">
        <div className="nav-container">
            <a href="#home" className="logo">SE<span className="logo-dot">.</span></a>
            
            {/* Desktop Links */}
            <div className="nav-links">
                <a href="#home" className="nav-link active">
                    <span className="lang-ar">الرئيسية</span>
                    <span className="lang-en">Home</span>
                </a>
                <a href="#about" className="nav-link">
                    <span className="lang-ar">عني</span>
                    <span className="lang-en">About</span>
                </a>
                <a href="#skills" className="nav-link">
                    <span className="lang-ar">المهارات</span>
                    <span className="lang-en">Skills</span>
                </a>
                <a href="#certificates" className="nav-link">
                    <span className="lang-ar">الشهادات</span>
                    <span className="lang-en">Certificates</span>
                </a>
                <a href="#experience" className="nav-link">
                    <span className="lang-ar">الخبرة</span>
                    <span className="lang-en">Experience</span>
                </a>
                <a href="#education" className="nav-link">
                    <span className="lang-ar">التعليم</span>
                    <span className="lang-en">Education</span>
                </a>
                <a href="#projects" className="nav-link">
                    <span className="lang-ar">المشاريع</span>
                    <span className="lang-en">Projects</span>
                </a>
                <a href="#testimonials" className="nav-link">
                    <span className="lang-ar">الآراء</span>
                    <span className="lang-en">Feedback</span>
                </a>
                <a href="#contact" className="nav-link">
                    <span className="lang-ar">تواصل معي</span>
                    <span className="lang-en">Contact</span>
                </a>
            </div>

            {/* Controls (Theme, Language, Hamburger) */}
            <div className="nav-controls">
                {/* Language Toggle Button */}
                <button id="langToggle" className="lang-btn" aria-label="Toggle Language">
                    <span className="lang-ar"><i className="fa-solid fa-globe"></i> EN</span>
                    <span className="lang-en"><i className="fa-solid fa-globe"></i> AR</span>
                </button>
                
                {/* Theme Toggle Button */}
                <button id="themeToggle" className="theme-btn" aria-label="Toggle Theme">
                    <i className="fas fa-moon dark-icon"></i>
                    <i className="fas fa-sun light-icon"></i>
                </button>
                
                {/* Hamburger Menu for Mobile */}
                <button className="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>

    {/* Mobile Drawer Navigation */}
    <div className="mobile-menu" id="mobileMenu">
        <a href="#home" className="mobile-link">
            <span className="lang-ar">الرئيسية</span>
            <span className="lang-en">Home</span>
        </a>
        <a href="#about" className="mobile-link">
            <span className="lang-ar">عني</span>
            <span className="lang-en">About</span>
        </a>
        <a href="#skills" className="mobile-link">
            <span className="lang-ar">المهارات</span>
            <span className="lang-en">Skills</span>
        </a>
        <a href="#certificates" className="mobile-link">
            <span className="lang-ar">الشهادات</span>
            <span className="lang-en">Certificates</span>
        </a>
        <a href="#experience" className="mobile-link">
            <span className="lang-ar">الخبرة</span>
            <span className="lang-en">Experience</span>
        </a>
        <a href="#education" className="mobile-link">
            <span className="lang-ar">التعليم</span>
            <span className="lang-en">Education</span>
        </a>
        <a href="#projects" className="mobile-link">
            <span className="lang-ar">المشاريع</span>
            <span className="lang-en">Projects</span>
        </a>
        <a href="#testimonials" className="mobile-link">
            <span className="lang-ar">الآراء</span>
            <span className="lang-en">Feedback</span>
        </a>
        <a href="#contact" className="mobile-link">
            <span className="lang-ar">تواصل معي</span>
            <span className="lang-en">Contact</span>
        </a>
    </div>

    {/* Scroll Progress Indicator Bar */}
    <div className="scroll-progress-container">
        <div className="scroll-progress-bar" id="progressBar"></div>
    </div>

    {/* Main Container */}
    <main>
        
        {/* 1. Hero / Home Section */}
        <section id="home" className="hero section">
            <div className="container hero-container">
                <div className="hero-text reveal fade-up">
                    
                    {/* Pulsing Available Badge */}
                    <div className="status-badge">
                        <span className="pulse"></span>
                        <span className="lang-ar">متاح للعمل المباشر أو التدريب</span>
                        <span className="lang-en">Open to Internship / Junior Roles</span>
                    </div>
                    
                    <p className="greeting">
                        <span className="lang-ar">مرحباً بك، أنا</span>
                        <span className="lang-en">Hi, I'm</span>
                    </p>
                    
                    <h1 className="name">
                        <span className="lang-ar">سيف الدين المسلماني</span>
                        <span className="lang-en">Seif Eldin ELMuselmani</span>
                    </h1>
                    
                    <h2 className="typing-container">
                        <span id="typing-text"></span><span className="cursor">|</span>
                    </h2>
                    
                    <h3 className="headline">
                        <span className="lang-ar">مهندس برمجيات خلفية (.NET & MEAN) | فائز بالمركز الأول في مسابقة DEPI على مستوى الجمهورية</span>
                        <span className="lang-en">Backend Software Engineer (.NET & MEAN) | BSc in CS | NTI & DEPI Scholar (1st Place Project)</span>
                    </h3>
                    
                    <p className="intro">
                        <span className="lang-ar">مطور برمجيات خلفية (Backend) حائز على جوائز، متخصص في الأنظمة القابلة للتوسع، البنية النظيفة (Clean Architecture)، وتطوير التطبيقات من الصفر. أبحث بنشاط عن تدريب أو وظيفة جونيور .NET (عن بعد/هجين) لتقديم مهارات تقنية متميزة وعقلية قيادية لفريقكم.</span>
                        <span className="lang-en">Award-winning Backend Developer specializing in scalable architecture, Clean Architecture, and zero-to-one application development. Actively seeking a Backend Internship or Junior .NET role (Remote/Hybrid) to bring a blend of technical skill and leadership mindset to your team.</span>
                    </p>
                    
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary ripple-btn">
                            <span className="lang-ar">مشاهدة الأعمال <i className="fa-solid fa-code"></i></span>
                            <span className="lang-en">View Projects <i className="fa-solid fa-code"></i></span>
                        </a>
                        <a href="assets/Seif_Eldin_Resume.pdf" className="btn btn-outline ripple-btn" download>
                            <span className="lang-ar">تحميل CV <i className="fa-solid fa-download"></i></span>
                            <span className="lang-en">Download CV <i className="fa-solid fa-download"></i></span>
                        </a>
                        <a href="#contact" className="btn btn-outline ripple-btn">
                            <span className="lang-ar">تواصل معي <i className="fa-solid fa-paper-plane"></i></span>
                            <span className="lang-en">Contact Me <i className="fa-solid fa-paper-plane"></i></span>
                        </a>
                    </div>

                    {/* Social Icons Grid */}
                    <div className="social-links">
                        <a href="https://github.com/seif-elmuselmani" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                        <a href="https://linkedin.com/in/seif-elmuselmani" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="mailto:eldenseif645@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>

                {/* Profile Container (Glow Effect & Floating Icons) */}
                <div className="hero-visuals reveal fade-left">
                    <div className="hero-image-container">
                        <img src="assets/profile.jpg" alt="Seif Eldin ELMuselmani" className="hero-image" />
                        <div className="image-glow"></div>
                        {/* Decorative Rotating Vector Rings */}
                        <svg className="hero-ring-vector" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="46" stroke="url(#ring-grad)" stroke-width="1" fill="none" stroke-dasharray="16 12" />
                            <defs>
                                <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="var(--primary)"/>
                                    <stop offset="100%" stop-color="var(--accent)"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Floating Technology Badges with CSS Micro-Animations representing .NET, C#, Database, and Node.js */}
                    <div className="float-icon icon-net" title=".NET & C#"><i className="fa-brands fa-microsoft"></i></div>
                    <div className="float-icon icon-node" title="Node.js"><i className="fa-brands fa-node-js"></i></div>
                    <div className="float-icon icon-csharp" title="C# Code"><i className="fa-solid fa-terminal"></i></div>
                    <div className="float-icon icon-database" title="Database"><i className="fa-solid fa-database"></i></div>
                </div>
            </div>
        </section>

        {/* 2. Badge Section */}
        <section className="badge-section">
            <div className="container badge-grid">
                
                {/* Badge 1 */}
                <div className="badge-card glass-card reveal fade-up">
                    <div className="badge-icon"><i className="fa-solid fa-trophy"></i></div>
                    <div className="badge-content">
                        <h3 className="badge-number">1st</h3>
                        <p className="badge-text">
                            <span className="lang-ar">المركز الأول على الجمهورية</span>
                            <span className="lang-en">DEPI National Winner</span>
                        </p>
                    </div>
                </div>

                {/* Badge 2 */}
                <div className="badge-card glass-card reveal fade-up" style={{transitionDelay: "50ms"}}>
                    <div className="badge-icon"><i className="fa-brands fa-linkedin"></i></div>
                    <div className="badge-content">
                        <h3 className="badge-number">+7K</h3>
                        <p className="badge-text">
                            <span className="lang-ar">متابع على لينكد إن</span>
                            <span className="lang-en">LinkedIn Followers</span>
                        </p>
                    </div>
                </div>

                {/* Badge 3 */}
                <div className="badge-card glass-card reveal fade-up" style={{transitionDelay: "100ms"}}>
                    <div className="badge-icon"><i className="fa-solid fa-diagram-project"></i></div>
                    <div className="badge-content">
                        <h3 className="badge-number">100%</h3>
                        <p className="badge-text">
                            <span className="lang-ar">بنية برمجية نظيفة</span>
                            <span className="lang-en">Clean Architecture</span>
                        </p>
                    </div>
                </div>

                {/* Badge 4 */}
                <div className="badge-card glass-card reveal fade-up" style={{transitionDelay: "150ms"}}>
                    <div className="badge-icon green"><i className="fa-solid fa-laptop-code"></i></div>
                    <div className="badge-content">
                        <h3 className="badge-number glow-text">100%</h3>
                        <p className="badge-text">
                            <span className="lang-ar">جاهز للتوظيف الفوري</span>
                            <span className="lang-en">Ready for Placement</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">عني</span>
                    <span className="lang-en">About Me</span>
                </h2>

                <div className="about-grid">
                    <div className="about-content glass-card reveal fade-right">
                        <h3>
                            <span className="lang-ar">شغفي بالبناء والتطوير</span>
                            <span className="lang-en">My Passion for Architecting scalable systems</span>
                        </h3>
                        <p>
                            <span className="lang-ar">أنا مهندس برمجيات شغوف وطالب في السنة النهائية بكلية الحاسبات والمعلومات بجامعة الزقازيق، متخصص في تطوير الأنظمة الخلفية (Backend) باستخدام .NET (C#) و SQL Server. تتميز مسيرتي بالقيادة والابتكار، بدءاً من الفوز بالمركز الأول على مستوى الجمهورية في مسابقة DEPI بمشروع "شريان"، وصولاً إلى قيادة تطوير نظام الرعاية الصحية المدعوم بالذكاء الاصطناعي "نبض".</span>
                            <span className="lang-en">I am a passionate Software Engineer and a Final Year Computer Science student at Zagazig University, specializing in Backend Development with .NET (C#) and SQL Server. My journey is defined by leadership and innovation, from winning 1st Place nationwide in the DEPI competition with the 'Shuryan' project, to leading the 'NABD' AI-driven healthcare ecosystem.</span>
                        </p>
                        <p>
                            <span className="lang-ar">إلى جانب البرمجة، أنا مساهم نشط في المجتمع التقني ولدي أكثر من 7,000 متابع على LinkedIn. أحب باستمرار تطبيق مبادئ SOLID والبرمجة كائنية التوجه OOP وبناء واجهات برمجية API قوية وسلسة تحل المشكلات الواقعية بكفاءة عالية.</span>
                            <span className="lang-en">Beyond coding, I am an active tech community contributor with over 7,000 followers on LinkedIn. I thrive on implementing SOLID principles, OOP, and building robust, scalable RESTful APIs that address complex real-world requirements.</span>
                        </p>
                        
                        <div className="about-strengths">
                            <span className="strength-badge"><i className="fa-solid fa-sitemap"></i> <span className="lang-ar">البنية النظيفة</span><span className="lang-en">Clean Architecture</span></span>
                            <span className="strength-badge"><i className="fa-solid fa-chart-line"></i> <span className="lang-ar">تحليل النظم</span><span className="lang-en">System Analysis</span></span>
                            <span className="strength-badge"><i className="fa-solid fa-square-check"></i> <span className="lang-ar">مراجعة الكود</span><span className="lang-en">Code Review</span></span>
                            <span className="strength-badge"><i className="fa-solid fa-user-gear"></i> <span className="lang-ar">القيادة والتميز</span><span className="lang-en">Leadership</span></span>
                        </div>
                    </div>

                    <div className="about-details glass-card reveal fade-left">
                        <h3>
                            <span className="lang-ar">معلومات عامة</span>
                            <span className="lang-en">General Info</span>
                        </h3>
                        <ul className="info-list">
                            <li>
                                <strong><span className="lang-ar">الاسم:</span><span className="lang-en">Name:</span></strong>
                                <span><span className="lang-ar">سيف الدين المسلماني</span><span className="lang-en">Seif Eldin ELMuselmani</span></span>
                            </li>
                            <li>
                                <strong><span className="lang-ar">التخصص:</span><span className="lang-en">Specialty:</span></strong>
                                <span><span className="lang-ar">مطور خوادم .NET & MEAN</span><span className="lang-en">Backend Developer (.NET & MEAN)</span></span>
                            </li>
                            <li>
                                <strong><span className="lang-ar">البريد الإلكتروني:</span><span className="lang-en">Email:</span></strong>
                                <span>eldenseif645@gmail.com</span>
                            </li>
                            <li>
                                <strong><span className="lang-ar">رقم الهاتف:</span><span className="lang-en">Phone:</span></strong>
                                <span>+20 122 381 7860</span>
                            </li>
                            <li>
                                <strong><span className="lang-ar">الموقع:</span><span className="lang-en">Location:</span></strong>
                                <span><span className="lang-ar">الزقازيق، مصر</span><span className="lang-en">Zagazig, Egypt</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. Skills Section */}
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">المهارات والشهادات</span>
                    <span className="lang-en">Skills & Certifications</span>
                </h2>

                <div className="skills-grid">
                    
                    {/* Progress Bars Left Column */}
                    <div className="skills-bars-col glass-card reveal fade-right">
                        <h3>
                            <span className="lang-ar">أبرز مجالات التخصص</span>
                            <span className="lang-en">Top Expert Domains</span>
                        </h3>
                        
                        <div className="skill-progress-item">
                            <div className="skill-info">
                                <span className="skill-name">C# & ASP.NET Core Web API</span>
                                <span className="skill-percent">95%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" data-progress="95%"></div>
                            </div>
                        </div>

                        <div className="skill-progress-item">
                            <div className="skill-info">
                                <span className="skill-name">MEAN Stack (MongoDB, Express, Angular, Node)</span>
                                <span className="skill-percent">90%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" data-progress="90%"></div>
                            </div>
                        </div>

                        <div className="skill-progress-item">
                            <div className="skill-info">
                                <span className="skill-name">SQL Server & EF Core (Code-First)</span>
                                <span className="skill-percent">92%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" data-progress="92%"></div>
                            </div>
                        </div>

                        <div className="skill-progress-item">
                            <div className="skill-info">
                                <span className="skill-name">Clean Architecture & SOLID Principles</span>
                                <span className="skill-percent">95%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" data-progress="95%"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skills & Certifications Grid */}
                    <div className="skills-cards-col">
                        
                        {/* Core Tech Stack Card */}
                        <div className="skills-category-card glass-card reveal fade-up">
                            <h4><i className="fa-solid fa-cubes"></i> <span className="lang-ar">التقنيات الأساسية</span><span className="lang-en">Core Technical Stack</span></h4>
                            <div className="skill-chips">
                                <span className="chip">C# & ASP.NET Core</span>
                                <span className="chip">Node.js & Express</span>
                                <span className="chip">Angular & React</span>
                                <span className="chip">SQL Server & MongoDB</span>
                                <span className="chip">EF Core & SQL Server</span>
                                <span className="chip">JavaScript (ES6+) & TS</span>
                                <span className="chip">Clean Architecture & SOLID</span>
                                <span className="chip">Git & GitHub Workflows</span>
                            </div>
                        </div>

                        {/* Certifications Card */}
                        <div className="skills-category-card glass-card reveal fade-up" style={{transitionDelay: "100ms"}}>
                            <h4><i className="fa-solid fa-certificate"></i> <span className="lang-ar">الشهادات والمسارات</span><span className="lang-en">Certifications & Tracks</span></h4>
                            <div className="skill-chips">
                                <span className="chip"><i className="fa-solid fa-brain"></i> Deep Learning Intro</span>
                                <span className="chip"><i className="fa-brands fa-python"></i> Python Basics</span>
                                <span className="chip"><i className="fa-solid fa-graduation-cap"></i> Business English Track</span>
                                <span className="chip"><i className="fa-solid fa-star"></i> DEPI 1st Winner</span>
                                <span className="chip"><i className="fa-solid fa-user-shield"></i> System Analysis</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="certificates section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">الشهادات والاعتمادات</span>
                    <span className="lang-en">Certificates & Credentials</span>
                </h2>

                <div className="certificates-grid">
                    
                    {/* Cert 1: DEPI */}
                    <div className="cert-card glass-card reveal fade-up">
                        <div className="cert-img-wrapper">
                            <img src="assets/Seif elden mohamed ibrahim (1).jpg" alt="Digital Egypt Pioneers Program (DEPI) Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <span className="cert-zoom-btn"><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">DEPI - Ministry of Communications Egypt</span>
                            <h3>
                                <span className="lang-ar">مطور ويب متكامل Full Stack .Net</span>
                                <span className="lang-en">Full stack .Net Web Developer</span>
                            </h3>
                            <p className="cert-date">June - December 2025</p>
                        </div>
                    </div>

                    {/* Cert 2: SQL Intermediate */}
                    <div className="cert-card glass-card reveal fade-up" style={{transitionDelay: "50ms"}}>
                        <div className="cert-img-wrapper">
                            <img src="assets/Screenshot 2026-05-17 190150.png" alt="HackerRank SQL Intermediate Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <span className="cert-zoom-btn"><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">HackerRank</span>
                            <h3>
                                <span className="lang-ar">شهادة استعلامات SQL (مستوى متوسط)</span>
                                <span className="lang-en">SQL (Intermediate) Certificate</span>
                            </h3>
                            <p className="cert-date">18 Jul, 2025</p>
                        </div>
                    </div>

                    {/* Cert 3: SQL Basic */}
                    <div className="cert-card glass-card reveal fade-up" style={{transitionDelay: "100ms"}}>
                        <div className="cert-img-wrapper">
                            <img src="assets/Screenshot 2026-05-17 190117.png" alt="HackerRank SQL Basic Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <span className="cert-zoom-btn"><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">HackerRank</span>
                            <h3>
                                <span className="lang-ar">شهادة استعلامات SQL (مستوى مبتدئ)</span>
                                <span className="lang-en">SQL (Basic) Certificate</span>
                            </h3>
                            <p className="cert-date">21 Jul, 2025</p>
                        </div>
                    </div>

                    {/* Cert 4: Deep Learning Intro */}
                    <div className="cert-card glass-card reveal fade-up" style={{transitionDelay: "150ms"}}>
                        <div className="cert-img-wrapper">
                            <img src="assets/Screenshot 2026-05-17 1859f35.png" alt="Mahara-Tech Deep Learning Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <span className="cert-zoom-btn"><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">ITI Mahara-Tech</span>
                            <h3>
                                <span className="lang-ar">مقدمة في التعلم العميق Deep Learning</span>
                                <span className="lang-en">Introduction to Deep Learning</span>
                            </h3>
                            <p className="cert-date">25 Jan, 2026</p>
                        </div>
                    </div>

                    {/* Cert 5: Python Basics */}
                    <div className="cert-card glass-card reveal fade-up" style={{transitionDelay: "200ms"}}>
                        <div className="cert-img-wrapper">
                            <img src="assets/Screenshot 2026-05-17 190031.png" alt="Mahara-Tech Python Basics Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <span className="cert-zoom-btn"><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">ITI Mahara-Tech</span>
                            <h3>
                                <span className="lang-ar">أساسيات البرمجة بلغة بايثون Python</span>
                                <span className="lang-en">Python Programming Basics</span>
                            </h3>
                            <p className="cert-date">21 Jan, 2026</p>
                        </div>
                    </div>

                    {/* Cert 6: Git & GitHub */}
                    <div className="cert-card glass-card reveal fade-up" style={{transitionDelay: "250ms"}}>
                        <div className="cert-img-wrapper">
                            <img src="assets/Screenshot 2026-05-17 190218.png" alt="Almdrasa Git and GitHub Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <span className="cert-zoom-btn"><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">Almdrasa Platform</span>
                            <h3>
                                <span className="lang-ar">إدارة النسخ وسير عمل Git & GitHub</span>
                                <span className="lang-en">Git & GitHub Version Control</span>
                            </h3>
                            <p className="cert-date">2025</p>
                        </div>
                    </div>

                    {/* Cert 7: Business English Track */}
                    <div className="cert-card glass-card reveal fade-up" style={{transitionDelay: "300ms"}}>
                        <div className="cert-img-wrapper">
                            <img src="assets/Business English Track.png" alt="Berlitz Business English Certificate" className="cert-img" />
                            <div className="cert-img-overlay">
                                <a href="assets/Saif Al-Din Muhammad Ibrahim.pdf" target="_blank" className="cert-zoom-btn"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="cert-info">
                            <span className="cert-issuer">Berlitz Egypt & DEPI</span>
                            <h3>
                                <span className="lang-ar">مسار اللغة الإنجليزية للأعمال</span>
                                <span className="lang-en">Business English Track</span>
                            </h3>
                            <p className="cert-date">June - December 2025</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* 5. Experience Section */}
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">الخبرة المهنية</span>
                    <span className="lang-en">Work Experience</span>
                </h2>

                <div className="timeline">
                    
                    {/* Timeline Item 1: MEAN Stack Intern */}
                    <div className="timeline-item reveal fade-up">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="timeline-date">Mar 2026 - <span className="lang-ar">الآن</span><span className="lang-en">Present</span></span>
                            <h3>MEAN Stack Developer Intern</h3>
                            <h4 className="timeline-company">National Telecommunication Institute (NTI)</h4>
                            <p className="timeline-summary">
                                <span className="lang-ar">برنامج تدريبي وتطبيقي مكثف يركز على احتراف MEAN Stack وبناء تطبيقات ويب كاملة مع تعزيز كفاءة تطوير الخوادم المعقدة.</span>
                                <span className="lang-en">Intensive training program focusing on the MEAN Stack. Building full-stack web applications and enhancing complex server-side development skills.</span>
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 2: Freelancer */}
                    <div className="timeline-item reveal fade-up" style={{transitionDelay: "50ms"}}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="timeline-date">2024 - <span className="lang-ar">الآن</span><span className="lang-en">Present</span></span>
                            <h3>Freelance Software Developer</h3>
                            <h4 className="timeline-company">Self-Employed</h4>
                            <p className="timeline-summary">
                                <span className="lang-ar">قيادة تطوير الأنظمة الخلفية من الصفر، وتصميم عقود واجهات البرمجة (API Contracts)، وتحليل الأنظمة، وإجراء مراجعة شاملة للأكواد.</span>
                                <span className="lang-en">Leading zero-to-one backend development, API contracts design, and system analysis for multiple web-based solutions. Conducting rigorous code reviews.</span>
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 3: DEPI Trainee */}
                    <div className="timeline-item reveal fade-up" style={{transitionDelay: "100ms"}}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="timeline-date">Jun 2025 - Dec 2025</span>
                            <h3>Full Stack .NET Trainee</h3>
                            <h4 className="timeline-company">Digital Egypt Pioneers Initiative (DEPI)</h4>
                            <p className="timeline-summary">
                                <span className="lang-ar">مسار تقني مكثف. احتراف بناء تطبيقات ويب قابلة للتوسع باستخدام ASP.NET Core و EF Core (منهج الكود أولاً). تطبيق أفضل الممارسات مثل أنماط التصميم والبنية النظيفة. تخرجت بامتياز وحصلت على المركز الأول على مستوى الجمهورية.</span>
                                <span className="lang-en">Intensive technical track. Mastered scalable web apps using ASP.NET Core and EF Core (Code-First). Applied industry-standard practices including Design Patterns and Clean Architecture. Secured 1st Place nationwide.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* 6. Education Section */}
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">التعليم والإنجازات</span>
                    <span className="lang-en">Education & Achievements</span>
                </h2>

                <div className="education-grid">
                    
                    {/* Degree Card */}
                    <div className="edu-card glass-card reveal fade-right">
                        <div className="card-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                        <span className="card-duration">Aug 2022 - May 2026 (<span className="lang-ar">متوقع</span><span className="lang-en">Expected</span>)</span>
                        <h3>
                            <span className="lang-ar">بكالوريوس علوم الحاسب</span>
                            <span className="lang-en">Bachelor of Science in Computer Science</span>
                        </h3>
                        <h4>
                            <span className="lang-ar">كلية الحاسبات والمعلومات - جامعة الزقازيق</span>
                            <span className="lang-en">Faculty of Computers & Information, Zagazig University</span>
                        </h4>
                        <p className="card-desc">
                            <strong><span className="lang-ar">التقدير التراكمي:</span><span className="lang-en">Cumulative Grade:</span></strong>
                            <span className="highlight-val"> <span className="lang-ar">جيد جداً</span><span className="lang-en">Very Good</span></span>
                        </p>
                    </div>

                    {/* Achievements Card */}
                    <div className="edu-card glass-card reveal fade-left">
                        <div className="card-icon"><i className="fa-solid fa-award"></i></div>
                        <h3>
                            <span className="lang-ar">أبرز الإنجازات والجوائز</span>
                            <span className="lang-en">Key Achievements</span>
                        </h3>
                        <div className="courses-list">
                            
                            <div className="course-item">
                                <div className="course-bullet"></div>
                                <div className="course-text">
                                    <h4>
                                        <span className="lang-ar">المركز الأول على مستوى الجمهورية - مسابقة DEPI</span>
                                        <span className="lang-en">1st Place Winner - DEPI Nationwide Competition</span>
                                    </h4>
                                    <p>
                                        <span className="lang-ar">الفوز بالمركز الأول من بين آلاف المطورين على مستوى الجمهورية بفضل مشروع الرعاية الصحية المتكامل "شريان".</span>
                                        <span className="lang-en">Secured 1st Place nationwide out of thousands of developers in Egypt with the integrated healthcare platform "Shuryan".</span>
                                    </p>
                                </div>
                            </div>

                            <div className="course-item">
                                <div className="course-bullet"></div>
                                <div className="course-text">
                                    <h4>
                                        <span className="lang-ar">+7,000 متابع مهني على لينكد إن</span>
                                        <span className="lang-en">7K+ Tech Network on LinkedIn</span>
                                    </h4>
                                    <p>
                                        <span className="lang-ar">تأسيس حضور تقني متميز ونشط لمشاركة المعرفة بالـ Backend وممارسات كتابة الكود النظيف في المجتمع البرمجي.</span>
                                        <span className="lang-en">Building an active technology brand on LinkedIn, contributing concepts of Backend engineering, architecture, and SOLID coding.</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* 7. Projects Section */}
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">المشاريع المميزة</span>
                    <span className="lang-en">Featured Projects</span>
                </h2>

                <div className="projects-grid">
                    
                    {/* Project 1: Shryan */}
                    <div className="project-card glass-card reveal fade-up">
                        <div className="project-img-wrapper">
                            <img src="assets/shryan.png" alt="Shryan Healthcare Platform" className="project-img" />
                            <div className="project-img-overlay"></div>
                        </div>
                        <div className="project-info-content">
                            <div className="project-tags">
                                <span className="tag">.NET 8</span>
                                <span className="tag">Clean Architecture</span>
                                <span className="tag">SQL Server</span>
                            </div>
                            <h3>
                                <span className="lang-ar">شريان (منصة رعاية صحية متكاملة)</span>
                                <span className="lang-en">Shryan (Healthcare Platform)</span>
                            </h3>
                            <p>
                                <span className="lang-ar">المشروع الحائز على المركز الأول في مسابقة DEPI على مستوى الجمهورية. هندسة نظام بيئي كامل يربط الصيدليات والعيادات الطبية مع فصل منطق الأعمال بالكامل باستخدام البنية النظيفة.</span>
                                <span className="lang-en">1st Place DEPI project. Architected a full-scale ecosystem connecting pharmacies and clinics, decoupling business logic using Clean Architecture.</span>
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/seif-elmuselmani" target="_blank" className="btn btn-outline btn-sm"><i className="fa-brands fa-github"></i> <span className="lang-ar">كود المشروع</span><span className="lang-en">GitHub</span></a>
                                <a href="https://shuryan-healthcare.netlify.app/" target="_blank" className="btn btn-primary btn-sm"><i className="fa-solid fa-arrow-up-right-from-square"></i> <span className="lang-ar">المعاينة الحية</span><span className="lang-en">Live Demo</span></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Nabd */}
                    <div className="project-card glass-card reveal fade-up" style={{transitionDelay: "100ms"}}>
                        <div className="project-img-wrapper">
                            <img src="assets/nabd.png" alt="Nabd AI Diagnosis" className="project-img" />
                            <div className="project-img-overlay"></div>
                        </div>
                        <div className="project-info-content">
                            <div className="project-tags">
                                <span className="tag">ASP.NET Core Web API</span>
                                <span className="tag">ML.NET</span>
                                <span className="tag">Python</span>
                                <span className="tag">React</span>
                            </div>
                            <h3>
                                <span className="lang-ar">نبض (نظام التشخيص الطبي بالذكاء الاصطناعي)</span>
                                <span className="lang-en">Nabd (AI-Driven Diagnosis System)</span>
                            </h3>
                            <p>
                                <span className="lang-ar">مشروع التخرج (قائد الفريق). قيادة وتطوير الواجهة الخلفية بـ ASP.NET Core مدمجة مع نماذج تشخيص طبي ذكية مخصصة للربط الفعال بين البيانات الطبية وتوقعات الحالات بدقة.</span>
                                <span className="lang-en">Senior graduation project (Project Lead). Orchestrating the development of a .NET backend integrated with custom AI diagnostic models, bridging medical data and intelligent diagnostics.</span>
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/seif-elmuselmani" target="_blank" className="btn btn-outline btn-sm"><i className="fa-brands fa-github"></i> <span className="lang-ar">كود المشروع</span><span className="lang-en">GitHub</span></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Kshaf */}
                    <div className="project-card glass-card reveal fade-up" style={{transitionDelay: "200ms"}}>
                        <div className="project-img-wrapper">
                            <img src="assets/kshaf.png" alt="Kshaf Scouting Platform" className="project-img" />
                            <div className="project-img-overlay"></div>
                        </div>
                        <div className="project-info-content">
                            <div className="project-tags">
                                <span className="tag">MongoDB</span>
                                <span className="tag">Express.js</span>
                                <span className="tag">Angular</span>
                                <span className="tag">Node.js</span>
                            </div>
                            <h3>
                                <span className="lang-ar">كشاف (منصة الكشف عن المواهب الرياضية)</span>
                                <span className="lang-en">Kshaf (Sports Talent Scouting Platform)</span>
                            </h3>
                            <p>
                                <span className="lang-ar">تم تطويره في المعهد القومي للاتصالات (NTI) باستخدام MEAN Stack. تطبيق خوارزميات بحث وتصفية متقدمة ومعقدة، واستغلال TypeScript لتحقيق أعلى كفاءة وأداء في فرز المواهب وتصنيفها.</span>
                                <span className="lang-en">Developed at NTI using the MEAN stack. Implemented complex search/filtering algorithms and leveraged TypeScript for high performance.</span>
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/seif-elmuselmani" target="_blank" className="btn btn-outline btn-sm"><i className="fa-brands fa-github"></i> <span className="lang-ar">كود المشروع</span><span className="lang-en">GitHub</span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* 8. Services Section */}
        <section id="services" className="services section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">الخدمات التقنية</span>
                    <span className="lang-en">My Services</span>
                </h2>

                <div className="services-grid">
                    
                    {/* Service 1 */}
                    <div className="service-card glass-card reveal fade-up">
                        <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                        <h3>
                            <span className="lang-ar">تطوير الأنظمة الخلفية (.NET & MEAN)</span>
                            <span className="lang-en">Backend Development</span>
                        </h3>
                        <p>
                            <span className="lang-ar">تصميم وتطوير خوادم وأنظمة ويب خلفية عالية الأداء وقابلة للتوسع، وإدارة قواعد البيانات وواجهات البرمجة (APIs) المعقدة.</span>
                            <span className="lang-en">Designing and developing high-performance, secure, and scalable server-side systems, RESTful APIs, and robust databases.</span>
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card glass-card reveal fade-up" style={{transitionDelay: "50ms"}}>
                        <div className="service-icon"><i className="fa-solid fa-sitemap"></i></div>
                        <h3>
                            <span className="lang-ar">البنية البرمجية النظيفة ومبادئ SOLID</span>
                            <span className="lang-en">Clean Architecture & SOLID</span>
                        </h3>
                        <p>
                            <span className="lang-ar">تطبيق أفضل ممارسات هندسة البرمجيات وفصل منطق الأعمال لضمان كود منظم، سهل القراءة والصيانة وسرعة التطوير.</span>
                            <span className="lang-en">Applying SOLID principles and Clean Architecture design patterns to decouple business logic, ensuring highly maintainable codebases.</span>
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card glass-card reveal fade-up" style={{transitionDelay: "100ms"}}>
                        <div className="service-icon"><i className="fa-solid fa-database"></i></div>
                        <h3>
                            <span className="lang-ar">تصميم وتحسين قواعد البيانات</span>
                            <span className="lang-en">Database Optimization</span>
                        </h3>
                        <p>
                            <span className="lang-ar">بناء وتصميم جداول وقواعد بيانات SQL & NoSQL محسنة، مع ضبط الاستعلامات المعقدة لضمان أقصى سرعة واستجابة.</span>
                            <span className="lang-en">Designing high-performance relational and non-relational database schemas, writing complex queries, and tuning indexing for speed.</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* 9. Testimonials / Feedback Section */}
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">آراء وتوصيات مهنية</span>
                    <span className="lang-en">Professional Testimonials</span>
                </h2>

                <div className="testimonials-grid">
                    
                    {/* Recommendation 1: Sherif Adel */}
                    <div className="testimonial-card glass-card reveal fade-up">
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="quote">
                            <span className="lang-ar">"بصفتي المسؤول الإداري في الفرع، يسعدني جداً أن أوصي بشدة بسيف المسلماني، الذي كان أحد الطلاب المتميزين والبارزين خلال فترة تواجده في برنامج المعهد القومي للاتصالات (NTI). أظهر سيف التزاماً قوياً بالتعلم والتطوير الذاتي المستمر. كان يحضر الجلسات باستمرار، ويشارك بنشاط في المناقشات والأنشطة العملية، وأظهر قدرة رائعة على استيعاب المفاهيم بسرعة وتطبيقها بفعالية وبأسلوب منظم. بالإضافة إلى ذلك، فهو يتمتع بنظرة إيجابية، ومهارات عمل جماعي قوية، وحس عالٍ بالمسؤولية، مما يجعله أصلاً قيماً لأي مؤسسة ينضم إليها."</span>
                            <span className="lang-en">"In my capacity as the administrative officer at the branch, I am pleased to highly recommend Seif ElMuselmani, who was one of the outstanding students during his time in the NTI program. Seif demonstrated a strong commitment to learning and continuous self-development. He consistently attended sessions, actively participated in discussions and practical activities, and showed an impressive ability to quickly grasp concepts and apply them effectively in a structured manner. In addition, he possesses a positive attitude, strong teamwork skills, and a high sense of responsibility, making him a valuable asset to any organization he joins."</span>
                        </p>
                        <div className="user-info">
                            <div className="avatar-fallback"><i className="fa-solid fa-user-tie"></i></div>
                            <div className="user-details">
                                <h4>
                                    <span className="lang-ar">شريف عادل</span>
                                    <span className="lang-en">Sherif Adel</span>
                                </h4>
                                <span className="title">
                                    <span className="lang-ar">المسؤول الإداري في الفرع - NTI (موجه سيف)</span>
                                    <span className="lang-en">Administrative Officer at Branch, NTI (Seif's Mentor)</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Recommendation 2: Rayan Mohamed */}
                    <div className="testimonial-card glass-card reveal fade-up" style={{transitionDelay: "50ms"}}>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="quote">
                            <span className="lang-ar">"لقد سعدت بالعمل مع سيف خلال فترة تدريبه في مسار MEAN Stack. سيف هو أحد أكثر المتدربين تفانياً واجتهاداً الذين قابلتهم، وشغفه بالتعلم والتطوير المستمر واضح وجلي للغاية. إن ما يميز سيف حقاً هو فضوله التقني ورغبته العميقة في فهم كل التفاصيل. كان يطرح باستمرار أسئلة مدروسة ويهتم بشدة بالتفاصيل الصغيرة في الشروحات لضمان استيعابه الكامل للمفاهيم. أعتقد أن سيف ينتظره مستقبل واعد للغاية في مجال تطوير البرمجيات، وأوصي به بشدة لأي فرصة في مجال تطوير الويب."</span>
                            <span className="lang-en">"I had the pleasure of working with Seif during his training in the MEAN Stack track. Seif is one of the most dedicated and hardworking trainees I have met, and his passion for learning and continuous improvement is very clear. What truly distinguishes Seif is his technical curiosity and his desire to understand every detail. He consistently asked thoughtful questions and paid close attention to the small details in the explanations to ensure he fully understood the concepts. I believe Seif has a very promising future in software development, and I highly recommend him for any opportunity in Web Development."</span>
                        </p>
                        <div className="user-info">
                            <div className="avatar-fallback"><i className="fa-solid fa-user-gear"></i></div>
                            <div className="user-details">
                                <h4>
                                    <span className="lang-ar">ريان محمد</span>
                                    <span className="lang-en">Rayan Mohamed</span>
                                </h4>
                                <span className="title">
                                    <span className="lang-ar">مطور واجهات أمامية (موجه سيف في MEAN Stack)</span>
                                    <span className="lang-en">Front-end Developer (Seif's MEAN Stack Mentor)</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* 10. Contact / Get In Touch Section */}
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title reveal fade-up">
                    <span className="lang-ar">تواصل معي</span>
                    <span className="lang-en">Contact Me</span>
                </h2>

                <div className="contact-grid">
                    
                    {/* Direct Contact Details */}
                    <div className="contact-info reveal fade-right">
                        
                        {/* Email Card */}
                        <div className="info-item-card glass-card">
                            <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="info-text">
                                <h4><span className="lang-ar">البريد الإلكتروني</span><span className="lang-en">Email Me</span></h4>
                                <a href="mailto:eldenseif645@gmail.com">eldenseif645@gmail.com</a>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="info-item-card glass-card">
                            <div className="info-icon"><i className="fa-solid fa-phone-volume"></i></div>
                            <div className="info-text">
                                <h4><span className="lang-ar">رقم الهاتف / واتساب</span><span className="lang-en">Call / WhatsApp</span></h4>
                                <a href="tel:+201223817860" dir="ltr">+20 122 381 7860</a>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="info-item-card glass-card">
                            <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                            <div className="info-text">
                                <h4><span className="lang-ar">الموقع الجغرافي</span><span className="lang-en">Location</span></h4>
                                <p><span className="lang-ar">الزقازيق، مصر</span><span className="lang-en">Zagazig, Egypt</span></p>
                            </div>
                        </div>

                        {/* Social Media Info */}
                        <div className="info-item-card glass-card">
                            <div className="info-icon"><i className="fa-solid fa-share-nodes"></i></div>
                            <div className="info-text">
                                <h4><span className="lang-ar">تابعني على السوشيال ميديا</span><span className="lang-en">Follow My Socials</span></h4>
                                <div className="social-flex">
                                    <a href="https://github.com/seif-elmuselmani" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                                    <a href="https://linkedin.com/in/seif-elmuselmani" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form Card */}
                    <form id="contactForm" className="contact-form glass-card reveal fade-left">
                        <div className="form-group">
                            <input type="text" id="form-name" required placeholder=" " />
                            <label htmlFor="form-name">
                                <span className="lang-ar">الاسم الكريم</span>
                                <span className="lang-en">Your Full Name</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <input type="email" id="form-email" required placeholder=" " />
                            <label htmlFor="form-email">
                                <span className="lang-ar">البريد الإلكتروني</span>
                                <span className="lang-en">Email Address</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="form-subject" required placeholder=" " />
                            <label htmlFor="form-subject">
                                <span className="lang-ar">عنوان الرسالة</span>
                                <span className="lang-en">Message Subject</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <textarea id="form-message" rows="5" required placeholder=" "></textarea>
                            <label htmlFor="form-message">
                                <span className="lang-ar">مضمون الرسالة</span>
                                <span className="lang-en">Your Message Detail</span>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary ripple-btn w-100">
                            <span className="lang-ar">إرسال الرسالة الآن <i className="fa-solid fa-paper-plane"></i></span>
                            <span className="lang-en">Send Message Now <i className="fa-solid fa-paper-plane"></i></span>
                        </button>
                    </form>

                </div>
            </div>
        </section>

    </main>

    {/* Footer */}
    <footer className="footer">
        <div className="footer-bottom">
            <div className="container text-center">
                <p>&copy; 2026 ENG. Seif Eldin ELMuselmani. <span className="lang-ar">جميع الحقوق محفوظة.</span><span className="lang-en">All rights reserved.</span></p>
                <p>
                    <span className="lang-ar">بُني بشغف وبرمجة نظيفة 💻</span>
                    <span className="lang-en">Built with passion & Clean Architecture 💻</span>
                </p>
            </div>
        </div>
    </footer>

    {/* Form Notification Dialog Overlay */}
    <div id="toastNotification" className="toast-card glass-card">
        <div className="toast-icon"><i className="fa-solid fa-circle-check"></i></div>
        <div className="toast-text">
            <h4 className="lang-ar">تم الإرسال بنجاح!</h4>
            <h4 className="lang-en">Sent Successfully!</h4>
            <p className="lang-ar">شكراً لتواصلك، سأقوم بالرد عليك في أقرب وقت.</p>
            <p className="lang-en">Thank you, I will contact you back shortly.</p>
        </div>
    </div>

    {/* Image Lightbox Modal Overlay for Certificates */}
    <div id="lightbox" className="lightbox-modal">
        <button id="lightboxClose" className="lightbox-close" aria-label="إغلاق - Close">&times;</button>
        <div className="lightbox-content-wrapper">
            <img className="lightbox-content" id="lightboxImg" src="" alt="Certificate Closeup" />
            <div id="lightboxCaption" className="lightbox-caption"></div>
        </div>
    </div>

    {/* Custom Cursor */}
    <div id="custom-cursor" className="custom-cursor"></div>
    <div id="cursor-follower" className="cursor-follower"></div>

    {/* Scroll to Top Button */}
    <button id="back-to-top" className="back-to-top" aria-label="Scroll to top">
        <i className="fa-solid fa-chevron-up"></i>
    </button>

    </div>
  );
}

export default App;

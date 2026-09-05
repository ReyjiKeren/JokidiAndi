// -------- Hamburger Toggle --------
const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

// -------- Sticky Navbar Shadow --------
const navbar = document.getElementById('navbar');
const onScroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
window.addEventListener('scroll', onScroll, { passive: true });

// -------- Scroll Progress Bar --------
const progressBar = document.getElementById('scroll-progress');
const updateProgress = () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight > 0) {
        const pct = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = pct + '%';
    }
};
window.addEventListener('scroll', updateProgress, { passive: true });

// -------- Scroll Reveal (Intersection Observer) --------
const revealObserver = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    },
    { root: null, threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// -------- ScrollSpy Active Link --------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const updateSpy = () => {
    let current = '';
    const offset = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (offset >= top && offset < top + height) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};
window.addEventListener('scroll', updateSpy, { passive: true });

// -------- ReactBits Stroke Text Animation Replay on Hover --------
const strokeTextElem = document.getElementById('strokeTextBantu');
if (strokeTextElem) {
    strokeTextElem.addEventListener('mouseenter', () => {
        const letters = strokeTextElem.querySelectorAll('.st-letter');
        const underline = strokeTextElem.querySelector('.doodle-underline path');
        letters.forEach((l) => {
            l.style.animation = 'none';
            l.offsetHeight; // trigger reflow
            l.style.animation = '';
        });
        if (underline) {
            underline.style.animation = 'none';
            underline.offsetHeight;
            underline.style.animation = '';
        }
    });
}

// -------- ReactBits Accordion Gallery Panel Switcher --------
const accordionPanels = document.querySelectorAll('.accordion-panel');
if (accordionPanels.length > 0) {
    accordionPanels.forEach(panel => {
        const activatePanel = () => {
            accordionPanels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        };
        panel.addEventListener('mouseenter', activatePanel);
        panel.addEventListener('click', activatePanel);
    });
}



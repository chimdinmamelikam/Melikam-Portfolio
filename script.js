// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ==================== MOBILE NAVIGATION ====================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ==================== HEADER SCROLL EFFECT ====================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== ACTIVE NAVIGATION LINK ====================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
        // In a real application, you would send this data to a server
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project items for scroll animations
document.querySelectorAll('.project-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// ==================== TYPING EFFECT (Optional Enhancement) ====================
// Uncomment this section if you want a typing effect on the hero title
/*
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});
*/

// ==================== PARTICLES BACKGROUND (Optional Enhancement) ====================
// You can add a particles.js or similar library for animated background
// This is just a placeholder for where you'd initialize it

// ==================== THEME TOGGLE (Optional Enhancement) ====================
// Add this if you want dark/light mode toggle
/*
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});
*/

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== PROJECT LINK TRACKING (Optional) ====================
// Track clicks on project links for analytics
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const projectTitle = link.closest('.project-item').querySelector('.project-title').textContent;
        const linkType = link.textContent.trim();
        console.log(`Project link clicked: ${projectTitle} - ${linkType}`);
        // Here you would typically send this to an analytics service
    });
});

// ==================== FORM FIELD ANIMATIONS ====================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission
  emailjs.sendForm('service_voph2z4', 'Contact Us', this)
    .then(function() {
      alert('Message sent! ✅');
      document.getElementById('contact-form').reset(); // clears the form
    }, function(error) {
      alert('Oops! Something went wrong. ❌', error);
    });
});


// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to my portfolio!', 'color: #c5f82a; font-size: 20px; font-weight: bold;');
console.log('%cLooking to connect? Reach out at loismelikam@gmail.com', 'color: #888; font-size: 14px;');

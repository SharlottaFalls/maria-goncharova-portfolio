// Add particle animation to background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerHTML = getRandomCodingSymbol();
    
    // Random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Random animation duration and delay
    const duration = Math.random() * 10 + 10; // 10-20 seconds
    particle.style.animation = `float ${duration}s linear infinite`;
    particle.style.animationDelay = Math.random() * -20 + 's';
    
    // Random size
    const size = Math.random() * 20 + 10; // 10-30px
    particle.style.fontSize = size + 'px';
    
    container.appendChild(particle);
}

function getRandomCodingSymbol() {
    const symbols = [
        '{', '}', '<', '>', '/', ';',
        '$', '#', '()', '[]', '{}',
        'function', 'class', 'const',
        '===', '=>', '++', '--'
    ];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add glitch effect to main title
function addGlitchEffect() {
    const title = document.querySelector('.glitch-text');
    if (!title) return;

    let isGlitching = false;

    setInterval(() => {
        if (!isGlitching) {
            isGlitching = true;
            
            const glitchDuration = 100;
            const glitchCount = 5;
            
            let count = 0;
            const glitchInterval = setInterval(() => {
                title.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px var(--color-purple),
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px var(--color-teal)
                `;
                
                count++;
                if (count >= glitchCount) {
                    clearInterval(glitchInterval);
                    title.style.textShadow = '2px 2px var(--color-purple)';
                    isGlitching = false;
                }
            }, glitchDuration);
        }
    }, 3000);
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-tag, .language-tag, .contact-item, .about-me');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}

// Add hover animations
function addHoverAnimations() {
    // Skill tags hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            const nearbyTags = document.querySelectorAll('.skill-tag');
            nearbyTags.forEach(nearby => {
                if (nearby !== tag) {
                    nearby.style.transform = 'scale(0.95)';
                }
            });
        });
        
        tag.addEventListener('mouseout', () => {
            const nearbyTags = document.querySelectorAll('.skill-tag');
            nearbyTags.forEach(nearby => {
                if (nearby !== tag) {
                    nearby.style.transform = 'scale(1)';
                }
            });
        });
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    addGlitchEffect();
    animateOnScroll();
    addHoverAnimations();
});

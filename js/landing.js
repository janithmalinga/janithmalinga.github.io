// Mouse tracking for radial gradient
document.addEventListener('mousemove', (e) => {
  const gradient = document.getElementById('radialGradient');
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  
  gradient.style.setProperty('--mouse-x', x + '%');
  gradient.style.setProperty('--mouse-y', y + '%');
});

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles); 
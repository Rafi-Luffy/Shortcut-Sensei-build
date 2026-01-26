// Newsletter Subscription Handler - Apply to ALL pages

// API Base URL - backend on port 5000
const NEWSLETTER_API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
  ? 'http://localhost:5000/api' 
  : window.location.origin + '/api';

document.addEventListener('DOMContentLoaded', function() {
    // Find all subscribe forms
    const subscribeForms = document.querySelectorAll('.subscribe-form');
    
    subscribeForms.forEach(form => {
        // Use capture + stopImmediatePropagation to avoid duplicate handlers on pages
        // that also bind their own newsletter logic.
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            
            const emailInput = form.querySelector('input[type="email"]');
            if (!emailInput) {
                showSubscribeMessage(form, 'Please enter your email address', 'error');
                return;
            }
            const email = emailInput.value.trim();
            
            // Validate email
            if (!email || !isValidEmail(email)) {
                showSubscribeMessage(form, 'Please enter a valid email address', 'error');
                return;
            }
            
            const normalizedEmail = email.toLowerCase();
            const subscriptionMap = getSubscriptionMap();
            const alreadySubscribed = subscriptionMap[normalizedEmail] === true;

            // Store subscription flag
            subscriptionMap[normalizedEmail] = true;
            saveSubscriptionMap(subscriptionMap);

            // Show message based on previous subscription state
            showSubscribeMessage(
                form,
                alreadySubscribed ? "You're already subscribed!" : 'Thank you for subscribing to our newsletter!',
                'success'
            );

            // Fireworks every time
            createFireworks();
            
            // Clear input
            emailInput.value = '';
            
            // Optional: Send to backend
            // sendToBackend(email);
        }, true);
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSubscribeMessage(form, message, type) {
    // Remove existing message
    const existingMessage = form.querySelector('.subscribe-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'subscribe-message';
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    // Normal background (no green/red block). Keep it subtle and consistent.
    messageDiv.style.backgroundColor = 'transparent';
    messageDiv.style.padding = '0';
    messageDiv.style.marginTop = '10px';
    messageDiv.style.fontWeight = '600';
    messageDiv.style.borderRadius = '0';
    messageDiv.style.color = type === 'error' ? '#ff4d4f' : '#ffffff';
    // If page background is light, white text could be unreadable. Prefer a safe fallback.
    if (!document.body.classList.contains('dark-mode')) {
        messageDiv.style.color = type === 'error' ? '#d32f2f' : '#2e7d32';
    }
    
    // Insert after form
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.5s';
        setTimeout(() => messageDiv.remove(), 500);
    }, 5000);
}

function getSubscriptionMap() {
    try {
        return JSON.parse(localStorage.getItem('newsletterSubscriptions') || '{}');
    } catch (error) {
        return {};
    }
}

function saveSubscriptionMap(map) {
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(map));
}

function ensureFireworksStyles() {
    if (document.getElementById('newsletter-fireworks-style')) return;
    const style = document.createElement('style');
    style.id = 'newsletter-fireworks-style';
    style.textContent = `
        .fireworks-container {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9999;
        }
        .firework {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            animation: firework-burst 1.8s ease-out forwards;
        }
        @keyframes firework-burst {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(12); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function createFireworks() {
    ensureFireworksStyles();
    const container = document.createElement('div');
    container.className = 'fireworks-container';
    document.body.appendChild(container);

    const colors = ['#ff9800', '#e91e63', '#9c27b0', '#03a9f4', '#4caf50', '#ffc107'];
    const count = 12;

    for (let i = 0; i < count; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 60 + 10}%`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.animationDelay = `${Math.random() * 0.3}s`;
        container.appendChild(firework);
    }

    setTimeout(() => container.remove(), 2000);
}

// Optional: Send to backend
function sendToBackend(email) {
    fetch(NEWSLETTER_API_BASE + '/newsletter/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Newsletter subscription successful:', data);
    })
    .catch(error => {
        console.error('Newsletter subscription error:', error);
    });
}

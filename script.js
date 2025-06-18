// <<<---Dark Mode Toggle Functionality--->>>
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // <<<---Apply new theme--->>>
    html.setAttribute('data-theme', newTheme);
    
    // <<<---Save theme preference to localStorage--->>>
    localStorage.setItem('theme', newTheme);
    
    // <<<---Show notification--->>>
    const themeText = newTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
    showNotification(`${themeText} activated!`, 'success');
    
    // <<<---Add smooth transition effect--->>>
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// <<<---Initialize theme on page load--->>>
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// <<<---Scroll-based toggle button animation--->>>
let lastScrollTop = 0;
let isScrolling = false;
let buttonHidden = false; // <<<---Track if button has been hidden--->>>

function handleScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const themeToggleBtn = document.getElementById('themeToggle');
        
        if (themeToggleBtn) {
            // <<<---Show button only when at top, hide when scrolling down--->>>
            if (currentScrollTop <= 100) {
                // <<<---At top - show button--->>>
                themeToggleBtn.style.transform = 'translateY(0) scale(1)';
                themeToggleBtn.style.opacity = '1';
                themeToggleBtn.style.pointerEvents = 'auto';
                buttonHidden = false; // <<<---Reset hidden state--->>>
            } else if (currentScrollTop > lastScrollTop && !buttonHidden) {
                // <<<---Scrolling down and button not yet hidden - hide button--->>>
                themeToggleBtn.style.transform = 'translateY(-100px) scale(0.8)';
                themeToggleBtn.style.opacity = '0';
                themeToggleBtn.style.pointerEvents = 'none';
                buttonHidden = true; // <<<---Mark as hidden--->>>
            }
            // <<<---No else condition - button stays hidden when scrolling up unless at top--->>>
        }
        
        lastScrollTop = currentScrollTop;
        isScrolling = false;
    });
}

// <<<---Throttled scroll handler for better performance--->>>
function throttleScroll() {
    let ticking = false;
    
    return function() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    };
}

// <<<---PDF Download Functionality--->>>
function downloadPDF() {
    // <<<---Show loading state--->>>
    const button = document.querySelector('.pdf-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    button.disabled = true;

    // <<<---Configure PDF options--->>>
    const options = {
        margin: [10, 10, 10, 10],
        filename: 'Suman_Kumar_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // <<<---Get the resume element--->>>
    const element = document.getElementById('resume');

    // <<<---Generate PDF--->>>
    html2pdf()
        .from(element)
        .set(options)
        .save()
        .then(() => {
            // <<<---Success - restore button--->>>
            button.innerHTML = originalText;
            button.disabled = false;
            
            // <<<---Show success message--->>>
            showNotification('PDF downloaded successfully!', 'success');
        })
        .catch((error) => {
            // <<<---Error - restore button and show error--->>>
            button.innerHTML = originalText;
            button.disabled = false;
            
            console.error('PDF generation failed:', error);
            showNotification('Failed to generate PDF. Please try again.', 'error');
        });
}

// <<<---Notification system--->>>
function showNotification(message, type = 'info') {
    // <<<---Remove existing notifications--->>>
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // <<<---Create notification element--->>>
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // <<<---Add styles--->>>
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: 500;
        max-width: 400px;
        animation: slideDown 0.3s ease;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;

    // <<<---Add animation styles--->>>
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }
        
        .notification-close:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `;
    document.head.appendChild(style);

    // <<<---Add to page--->>>
    document.body.appendChild(notification);

    // <<<---Auto remove after 5 seconds--->>>
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// <<<---Add smooth scrolling for better UX--->>>
document.addEventListener('DOMContentLoaded', function() {
    // <<<---Initialize theme--->>>
    initializeTheme();
    
    // <<<---Initialize scroll-based toggle button animation--->>>
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        // <<<---Set initial styles for smooth animation--->>>
        themeToggleBtn.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        themeToggleBtn.style.transform = 'translateY(0) scale(1)';
        themeToggleBtn.style.opacity = '1';
        
        // <<<---Add scroll event listener--->>>
        window.addEventListener('scroll', throttleScroll());
        
        // <<<---Add hover effects--->>>
        themeToggleBtn.addEventListener('mouseenter', function() {
            if (window.pageYOffset <= 100) {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            }
        });
        
        themeToggleBtn.addEventListener('mouseleave', function() {
            if (window.pageYOffset <= 100) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    }
    
    // <<<---Add smooth scrolling to all internal links--->>>
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // <<<---Fix image loading - remove problematic opacity transition--->>>
    const profileImage = document.getElementById('profile-img');
    if (profileImage) {
        // <<<---Ensure image is always visible--->>>
        profileImage.style.opacity = '1';
        profileImage.style.transition = 'transform 0.3s ease';
        
        // <<<---Add error handling for image loading--->>>
        profileImage.addEventListener('error', function() {
            console.error('Profile image failed to load');
            // <<<---You could set a fallback image here if needed--->>>
        });
        
        // <<<---Add load event to ensure proper display--->>>
        profileImage.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }

    // <<<---Add hover effects for interactive elements--->>>
    const interactiveElements = document.querySelectorAll('.skill-tag, .tech-tag, .project-item, .experience-item, .achievement-item, .presence-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform || 'scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // <<<---Add keyboard navigation support--->>>
    document.addEventListener('keydown', function(e) {
        // <<<---Ctrl/Cmd + P for PDF download--->>>
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            downloadPDF();
        }
        
        // <<<---Ctrl/Cmd + D for dark mode toggle--->>>
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
    });
});

// <<<---Add some additional utility functions--->>>
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

// <<<---Add click handlers for contact information--->>>
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            copyToClipboard(text);
        });
        
        // <<<---Add hover effect--->>>
        item.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
}); 
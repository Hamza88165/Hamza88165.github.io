document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.elements[0].value;
        const email = this.elements[1].value;
        const message = this.elements[2].value;
        
        console.log('Form submitted:', { name, email, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        
        this.reset();
    });
}

document.querySelectorAll('.demo-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('This would open the project demo in a real application.');
    });
});
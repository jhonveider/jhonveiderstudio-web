document.addEventListener('DOMContentLoaded', () => {
    console.log('Jhon Veider Studio loaded. System Online.');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for form button (visual feedback)
    const btnSubmit = document.querySelector('.btn-submit');
    if(btnSubmit) {
        btnSubmit.addEventListener('mousedown', () => {
           btnSubmit.style.transform = 'scale(0.98)';
        });
        btnSubmit.addEventListener('mouseup', () => {
            btnSubmit.style.transform = 'scale(1)';
         });
    }
});

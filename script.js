document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 12, 0.95)'; /* Yahan bhi rich dark color apply kiya */
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.padding = '18px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 12, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    console.log("Mudasir's portfolio dark layout activated fully.");
});
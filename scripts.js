document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.project-slider');
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20; // 20 is the gap
        slider.scrollLeft = currentIndex * cardWidth;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Fungsi untuk CV Modal
    window.showCV = function() {
        const modal = document.getElementById('cvModal');
        modal.style.display = "block";
    }
    
    // Tambahkan event listener untuk tombol close
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('cvModal').style.display = "none";
    });
    
    // Tutup modal ketika mengklik di luar gambar
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('cvModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}); 

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
}); 

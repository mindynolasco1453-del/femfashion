// Script para Fem Fashion

// Smooth Scroll
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

// Agregar al carrito
const botonesComprar = document.querySelectorAll('.btn-comprar');
botonesComprar.forEach(boton => {
    boton.addEventListener('click', function() {
        const producto = this.parentElement.querySelector('h3').textContent;
        alert(`¡${producto} agregado al carrito!`);
        this.textContent = '✓ Agregado';
        this.style.background = '#4caf50';
        setTimeout(() => {
            this.textContent = 'Agregar al Carrito';
            this.style.background = '';
        }, 2000);
    });
});

// Enviar formulario de contacto
const formularioContacto = document.querySelector('.contacto-form');
if (formularioContacto) {
    formularioContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        this.reset();
    });
}

// Animación al hacer scroll
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in';
        }
    });
});

document.querySelectorAll('.producto-card').forEach(card => {
    observador.observe(card);
});

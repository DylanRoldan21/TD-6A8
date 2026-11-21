// ALUMNO 5 - Filtros por edad, elegir color, tallas y agregar al carrito
(() => {
  const seccion = document.getElementById('ninos');
  
  // Si la sección no existe en esta página, no ejecutamos nada
  if (!seccion) return; 

  const filtros = seccion.querySelectorAll('.filtro');
  const productos = seccion.querySelectorAll('.producto');

  // ---------- 1. Filtrar por edad ----------
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      productos.forEach(p => {
        p.classList.toggle('oculto', categoria !== 'todo' && p.dataset.categoria !== categoria);
      });
    });
  });

  // ---------- 2. Elegir color ----------
  productos.forEach(producto => {
    const bolitas = producto.querySelectorAll('.a5-color');
    const texto = producto.querySelector('.a5-color-texto');
    bolitas.forEach(bolita => bolita.addEventListener('click', () => {
      bolitas.forEach(b => b.classList.remove('activo'));
      bolita.classList.add('activo');
      texto.textContent = 'Color: ' + bolita.dataset.color;
    }));
  });

  // ---------- 3. Elegir talla (Reto Extra) ----------
  productos.forEach(producto => {
    const tallas = producto.querySelectorAll('.a5-talla-btn');
    if (tallas.length > 0) {
      tallas.forEach(talla => talla.addEventListener('click', () => {
        // Resetear todas las tallas a blanco
        tallas.forEach(t => {
            t.style.background = '#fff'; 
            t.style.color = '#333';
        });
        // Pintar la talla seleccionada de morado
        talla.style.background = '#9b59b6'; 
        talla.style.color = 'white';
      }));
    }
  });

  // ---------- 4. Agregar al carrito con el color elegido ----------
  seccion.querySelectorAll('.btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      const color = producto.querySelector('.a5-color.activo');
      
      // Agregamos el color al nombre para que se guarde en el carrito
      const nombre = producto.dataset.nombre + (color ? ' - ' + color.dataset.color : '');
      agregarAlCarrito(nombre, producto.dataset.precio);
    });
  });
})();
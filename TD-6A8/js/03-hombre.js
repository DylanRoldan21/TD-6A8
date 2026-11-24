// ALUMNO 3 - Filtros, elegir talla y agregar al carrito
(() => {
  const seccion = document.getElementById('hombre');
  if (!seccion) return;

  const filtros   = seccion.querySelectorAll('.a3-filtro');
  const productos = seccion.querySelectorAll('.a3-producto');

  // 1. Filtrar por categoría
  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      const categoria = boton.dataset.filtro;
      productos.forEach(p => {
        const mostrar = categoria === 'todo' || p.dataset.categoria === categoria;
        p.classList.toggle('a3-oculto', !mostrar);
      });
    });
  });

  // 2. Elegir talla
  seccion.querySelectorAll('.a3-tallas').forEach(grupo => {
    const botones = grupo.querySelectorAll('button');
    botones.forEach(b => b.addEventListener('click', () => {
      botones.forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
    }));
  });

  // 3. Agregar al carrito (obliga a elegir talla)
  seccion.querySelectorAll('.a3-btn-agregar').forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.a3-producto');
      const talla    = producto.querySelector('.a3-tallas button.activo');
      if (!talla) {
        mostrarToast('⚠️ Primero elige una talla');
        return;
      }
      agregarAlCarrito(
        producto.dataset.nombre + ' (Talla ' + talla.textContent + ')',
        producto.dataset.precio
      );
    });
  });
})();
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar datos del formulario
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Número de teléfono (Cámbialo por el tuyo, incluye código de país sin el +)
    const phone = "593987654321"; // Ejemplo para Ecuador

    // Crear mensaje para WhatsApp
    const message = `Hola Alys Bites! Mi nombre es ${name}. Me gustaría pedir ${quantity} unidades de ${product}. ¿Me confirman la disponibilidad?`;
    
    // Codificar mensaje para URL
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(url, '_blank');
});
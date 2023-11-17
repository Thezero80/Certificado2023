// Función para descargar el certificado en PDF
function descargarCertificado() {
    // Se crea un objeto PDF
    var pdf = new jsPDF();

    // Se agrega el contenido del documento HTML al PDF
    pdf.html(document.querySelector(".certificado"));

    // Se establece el nombre del archivo PDF
    var nombreArchivo = prompt("Introduce el nombre del archivo:");
    pdf.save(nombreArchivo + ".pdf");
}

// Se agrega un enlace para descargar el certificado
document.querySelector(".certificado").appendChild(document.createElement("a"));
document.querySelector(".certificado a").href = "javascript:descargarCertificado()";
document.querySelector(".certificado a").textContent = "Descargar certificado";
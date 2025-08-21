
function buscarCurso() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cursos = ["java", "python", "html", "css", "javascript"];
  
  if (cursos.includes(input)) {
    alert("¡Sí tenemos el curso de " + input + " disponible!");
  } else {
    alert("Lo sentimos, aún no tenemos ese curso 😢");
  }
}

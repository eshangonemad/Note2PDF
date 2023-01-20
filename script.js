function createPDF(){
let text = document.getElementById("textarea").value;
var doc = new jsPDF();
doc.text(20, 20, text);
doc.save('document.pdf');
}
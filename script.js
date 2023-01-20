function createPDF(){
let text = document.getElementById("textarea").value;
let title = document.getElementById("title").value
var doc = new jsPDF();
doc.text(20, 20, text);
doc.save(title+'.pdf');
}
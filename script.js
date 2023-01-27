
var img={};
  function encodeImageFileAsURL(element) {
        let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
        img = reader.result
          console.log(img)
        }
        reader.readAsDataURL(file);

      }

    function createPDF() {
  let text = document.getElementById("textarea").value;

  let title = document.getElementById("title").value
  var doc = new jsPDF();
  doc.text(20, 20, text);
  doc.addImage(img, 'png',20,20)
  doc.save(title + '.pdf');
};
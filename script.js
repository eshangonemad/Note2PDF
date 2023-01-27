function mavi(){
  
document.getElementById("2").style.display = "none";
}
var nomr= 1
console.log(nomr)
var img={};
var img2={}
  function encodeImageFileAsURL(element) {
   
            let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
        img = reader.result
          console.log(img)
          nomr++
          console.log(nomr)
         if (nomr==2){
           
document.getElementById("2").style.display = "block";
         }
        }
        reader.readAsDataURL(file);

  }
  function q(element) {
   
            let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
        img2 = reader.result
          console.log(img)
          nomr++
          console.log(nomr)
         if (nomr==3){
           
document.getElementById("2").style.display = "block";
         }
        }
        reader.readAsDataURL(file);
  }


    function createPDF() {
  let text = document.getElementById("textarea").value;

  let title = document.getElementById("title").value
  var doc = new jsPDF();
  doc.text(20, 20, text);
  doc.addImage(img, 'png',20,20)  
  doc.addImage(img2, 'png',20,20)
  doc.save(title + '.pdf');
};
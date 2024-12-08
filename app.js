const form = document.getElementById('myform');
const resultBox =document.getElementById('resultDiv');
const alrt =document.getElementById('message');

form.addEventListener("submit", function(e){
    e.preventDefault()
    let imageArr = [];
    const shetForm = e.target;
    const ImageOne = shetForm.imageOne.value;
    const ImageTwo = shetForm.imageTwo.value;
    const ImageThree = shetForm.imageThree.value;
    const ImageFour = shetForm.imageFour.value;
    
    if(ImageOne.length > 5){
        imageArr.push(ImageOne)
    }
    if(ImageTwo.length > 5){
        imageArr.push(ImageTwo)
    }
    if(ImageThree.length > 5){
        imageArr.push(ImageThree)
    }
    if(ImageFour.length > 5){
        imageArr.push(ImageFour)
    }
   
    
    
    
    
    console.log("first",imageArr)

    resultBox.value = imageArr;
    shetForm.reset();
})


function handleCopy() {
    // Get the text field
    var copyText = document.getElementById("resultDiv");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alrt.innerText = "Copied!!"
  }
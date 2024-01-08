const InputFile=document.getElementById("inputfile");
const ImgContainer=document.getElementById("imagecontainer")
const ImgPreview=ImgContainer.querySelector(".Image_Preview")
const ImgdefText=ImgContainer.querySelector(".imagePreview_defaultText")
InputFile.addEventListener("change", function(){
    const file=this.files[0];
    if(file){
        const reader=new FileReader();
        ImgdefText.style.display="none";
        ImgPreview.style.display="block";

        reader.addEventListener("load", function(){
            ImgPreview.setAttribute("src", this.result)
        })
        reader.readAsDataURL(file);
    }
})


// const inputFile = document.getElementById("inputfile");
// const imgContainer = document.getElementById("imagecontainer");
// const imgPreview = imgContainer.querySelector(".Image_Preview");
// const imgDefText = imgContainer.querySelector(".imagePreview_defaultText");

// inputFile.addEventListener("change", function () {
//     const file = this.files[0];

//     if (file) {
//         const reader = new FileReader();

//         imgDefText.style.display = "none";
//         imgPreview.style.display = "block";

//         reader.addEventListener("load", function () {
//             // Use the 'target' property to get the result
//             imgPreview.setAttribute("src", reader.result);
//         });

//         // Handle errors during reading the file
//         reader.addEventListener("error", function () {
//             console.error("Error reading the file");
//         });

//         // Start reading the file as a data URL
//         reader.readAsDataURL(file);
//     }
// });
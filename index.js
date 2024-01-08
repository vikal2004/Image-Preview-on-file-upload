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



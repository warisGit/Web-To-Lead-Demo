function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("Input Date Value :", inputdate.value);
const formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
outputdate.value = formattedDate;
}
const studentFullName ='Sachin Denny';
const studentNumber =1196251
const result=studentFullName+'-'+studentNumber;
console.log(result)
let headerContent =document.querySelector(".message")
headerContent.innerHTML=result
headerContent.classList.add("headingPrimary")
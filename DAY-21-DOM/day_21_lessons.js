const paragraf = document.querySelector("p")
console.log(paragraf)

let birinci = document.querySelector("#first")
console.log(birinci )

console.log(document.querySelectorAll("p"))
document.querySelectorAll("p")[3].textContent = "hasan";
const array = [...document.querySelectorAll("p")];
array.map((item) => (item.className = "id"));
console.log(array);
for(let item of array){
    item.className="title"
}
console.log(array)
let array1 = [1,3,5]
let array2= array1.map(item=>item**2)
// console.log(array2)
const paragraf1 = document.querySelectorAll("p")

let len = paragraf1.length
console.log(len)

for(let i =0; i<len; i++){
    paragraf1[i].style.fontSize="2rem"
    if(i%2==0){
        paragraf1[i].style.color="green"
        paragraf1[i].style.border="2px solid black"
        paragraf1[i].textContent="tek satırlar"
    }else{
        paragraf1[i].style.color="red"
        paragraf1[i].textContent="   CİFT SATIRLAR"
    }
}


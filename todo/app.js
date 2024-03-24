let add = document.querySelector(".add");
let ul = document.querySelector("ul");
let inpt = document.querySelector("input");




add.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerHTML = inpt.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerHTML = "delete";
    dltbtn.classList.add("delete");

    item.appendChild(dltbtn);

    ul.appendChild(item);
    inpt.value = "";
});

//  jab bhi hum javaScript k through elements create krte h to unpe event listeners kaam nahin krte 
//  isiliye hum usk parent k liye event listener lagate hain;

ul.addEventListener("click", function(evt){
    if(evt.target.nodeName == "BUTTON"){
        let listItem = evt.target.parentElement;
        listItem.remove();
    }
});


// let deleteBtn = document.querySelectorAll(".delete");
// for(dltbtn of deleteBtn ){
// dltbtn.addEventListener("click", function() {
//     let par = this.parentElement;
//     par.remove();
//    });
// }

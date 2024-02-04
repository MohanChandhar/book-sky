//selecting addpopup-button,overlay,popupbox
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbtn=document.getElementById("addpopup-button")

 addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

 })


//selecting cancelbtn
var cancelpop=document.getElementById("cancelbtn")
cancelpop.addEventListener("click",function(e){
   e.preventDefault()
   popupoverlay.style.display="none"
   popupbox.style.display="none"
})

//select  continer,addbtn,booktittle,authorname,shortnotes

var container=document.querySelector(".container")
var addbook=document.getElementById("addbtn")
var booktittle=document.getElementById("booktittle")
var authorname=document.getElementById("authorname")
var shortnotes=document.getElementById("shortnotes")

addbook.addEventListener("click",function(e){
   e.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book-contianer")
   div.innerHTML=`<h2>${booktittle.value}</h2>
   <h5>${authorname.value}</h5>
   <p>${shortnotes.value}</p>
   <button onclick="deletebook(event)">Delete</button>`
   container.append(div)
   popupoverlay.style.display="none"
   popupbox.style.display="none"
})


function deletebook(event){
   event.target.parentElement.remove()
}

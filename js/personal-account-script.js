	// my personal account    
function allowEditNameUser (editElemClickP,editElemP,datalocal){
    let editElemClick = document.querySelector(editElemClickP)
    let editElem = document.querySelector(editElemP);
    editElemClick.addEventListener('click', function (){
            editElem.removeAttribute("readonly");
            editElem.focus();
            editElem.classList.add("active-edit")
            editElem.nextElementSibling.style.display = "block"
            editElemClick.style.color = "#1E1E1E"
            
    })
    editElem.nextElementSibling.addEventListener('click', function (e){
            // e.preventDefault()
            editElem.setAttribute("readonly","readonly");
            editElem.blur();
            editElem.classList.remove("active-edit")
            editElem.nextElementSibling.style.display = ""
            editElemClick.style.color = "rgba(67, 127, 200, 1)"
            localStorage.setItem(datalocal, editElem.value)
    })
}   
allowEditNameUser("#editNameClick","#editName","userName")
allowEditNameUser("#editAddressClick","#editAddress" ,"userAddress")
allowEditNameUser("#editMailClick","#editMail","userMailAddress")
allowEditNameUser("#editNumberClick","#editNumber","userNumber")

  
    

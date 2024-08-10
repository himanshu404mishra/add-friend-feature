let isStatus = document.querySelector("h5");


document.querySelectorAll("#btn-container button").forEach(btn=>{
    btn.addEventListener("click", function(e){
        if(e.target.id === "add"){
            isStatus.textContent = "Friends"
            isStatus.style.color = "green"
            e.target.id = "remove"
            e.target.textContent = "Remove"
        }else{
            isStatus.textContent = "Stranger"
            isStatus.style.color = "red"
            e.target.id = "add"
            e.target.textContent = "Add Friend"
        }
    })
})
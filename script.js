    var ul=document.getElementById("list-container")
    var add=document.getElementById("one")
    function insert(){
        var listitem=document.createElement("li")
        listitem.innerHTML="<span>" + add.value + "</span>" + "<button onclick='remove(event)'>Remove</button>";
        ul.append(listitem)
        add.value=""
    }
    function remove(event){
        event.target.parentElement.remove()
    }

function drag(event){
    event.dataTransfer.setData("text",event.target.id)

    // Set ID of Image Element in dataTransfer Object = myImage
}

function allowDrop(event){
    event.preventDefault();
    
}

function drop(event){
    // Get the ID of Image that need to dropped
    var data = event.dataTransfer.getData("text") //image id; data = myImage


   //event.target = <div></div>
    event.target.appendChild(document.getElementById(data))
    /* <div>
        <img/>
    </div> */

}
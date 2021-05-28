/* 
        <li> 
          <img src="pic1.jpg"/>
        </li>
*/
function showFileImage(){
   var preview = document.getElementById('preview')
   var fileInput = document.getElementById('theImageFile')

   var fileLength = fileInput.files.length //2

   for(let i = 0 ;i < fileLength; i++){  // i=0 ,0 => pic1.jpg ,1=> pic2.jpg
     
     var reader= new FileReader();     
     reader.readAsDataURL(fileInput.files[i]) //i=1

     reader.onload = function(event){         
        var listItem = document.createElement('li') //<li></li>
        var imageElement = document.createElement('img') //<img/>
        imageElement.src = event.target.result //<img src="pic1.jpg"/>
        listItem.appendChild(imageElement)
        preview.appendChild(listItem)
     } 

   }
   


}
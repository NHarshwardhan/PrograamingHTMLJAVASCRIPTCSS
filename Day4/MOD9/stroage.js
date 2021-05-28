function saveData(){

 let username =  document.getElementById('nameBox').value   

  localStorage.setItem('user',username)

//sessionStorage.setItem('user',username)


}

function deleteItem(){
    localStorage.removeItem('user')
}
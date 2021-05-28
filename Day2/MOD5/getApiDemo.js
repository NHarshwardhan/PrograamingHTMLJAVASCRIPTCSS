// API_URL ="http://jsonplaceholder.typicode.com/users"

// Demo of XMLHttpRequest
function getRemoteData(API_URL){
  return new Promise((resolve,reject)=>{
       
    let request = new XMLHttpRequest()
     
    request.open("GET",API_URL)

    request.send();

    //Automatically Called once process done
    request.onload = ()=>{
        // console.log(request)

        if(request.status === 200){
            resolve(request.response)
        }else{
            reject(request.statusText)
        }
    }    

  })
}

function showServerDataInTable(userData){
  for(let user of userData){
    
    // Creating New Table Row
    let tr =  document.createElement('tr');   
    
   //Create 4 table data 
   let td_1 = document.createElement('td');
   let td_2 = document.createElement('td');
   let td_3 = document.createElement('td');
   let td_4 = document.createElement('td');
   
   td_1.innerHTML = `${user.id}`;
   td_2.innerHTML = `${user.name}`;
   td_3.innerHTML = `${user.username}`;
   td_4.innerHTML = `${user.email}`;

   //Add all Table Data into Table Row
   tr.appendChild(td_1)
   tr.appendChild(td_2)
   tr.appendChild(td_3)
   tr.appendChild(td_4)
   
    //Add Table row into Existing Table
   document.getElementById('myUserData').appendChild(tr)
  
}
}
let API_URL = "http://jsonplaceholder.typicode.com/users"
getRemoteData(API_URL)
        .then((data) => showServerDataInTable(JSON.parse(data)))
        .catch((err)=>console.log(err))




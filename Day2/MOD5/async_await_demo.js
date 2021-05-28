// API_URL ="http://jsonplaceholder.typicode.com/users"

// Demo of Fetch API
async function getRemoteData(API_URL){
  let repsonse = await fetch(API_URL)
  let json = await repsonse.json();
  showServerDataInTable(json)
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
         
 
 
 
 
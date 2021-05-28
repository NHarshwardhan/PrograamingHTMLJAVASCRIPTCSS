(function(){
    // To Chech , Browser Support IndexedDB or not
    if(!window.indexedDB){
        console.log('Your browser does not support IndexedDB')
        return;
    }

    // OPen a Database
    // Instance of IDBOpenDBRequest interface
    const request =  indexedDB.open('KOENIGDB',1)

    request.onerror = (event)=>{
        console.log(`Database Error ${event.target.errorCode}`)
    }

    request.onsuccess = (event)=>{
        const db = event.target.result

        // call insert method
        // insertContacts(db,{
        //     'email':'nishant@gmail.com',
        //     'firstname' :'Nishant',
        //     'lastname':'Harshwardhan'
        // });

        // insertContacts(db,{
        //     'email':'peter@gmail.com',
        //     'firstname' :'Peter',
        //     'lastname':'Parker'
        // })

        // Get Item by ID
        // getContactById(db,2)

        // Read All Record
        // getAllContacts(db)

        // Delete Record number 1
        deleteContact(db,1)
    }

    request.onupgradeneeded = (event)=>{

      let db =  event.target.result  
     // Create the Contacts Object store and with auto-increment id
     
      let store = db.createObjectStore('Contacts',{autoIncrement: true})

      // Create the email column and make it as index
      let index = store.createIndex('email','email',{unique:true})

    }

    function insertContacts(db,contact){
        //Create a new Transaction to modify object store
        const txn = db.transaction('Contacts','readwrite')
       
        //get the Contacts object store
        const store = txn.objectStore('Contacts')

        let query = store.put(contact)
        
        //handle success
        query.onsuccess = (event)=>{
            console.log(event)
        }
       
        //handle succeerrorss
        query.onerror = (event)=>{
            console.log(event)
        }

        // close the database once the transaction completes
        txn.oncomplete = ()=>{
            db.close();
        }

    }

    function getContactById(db,id){

         const txn = db.transaction('Contacts','readonly')       
         const store = txn.objectStore('Contacts')
 
         let query = store.get(id)
         
         query.onsuccess = (event)=>{
             if(!event.target.result){
                 console.log(`The contact with ${id} not found`)
             }
             else{
                 console.table(event.target.result)
             }
         }
        
     
         query.onerror = (event)=>{
             console.log(event.target.result)
         }
 

         txn.oncomplete = ()=>{
             db.close();
         }
    }

    function getAllContacts(db){
      const txn = db.transaction('Contacts','readonly')
      
      const objectStore = txn.objectStore('Contacts')

      objectStore.openCursor().onsuccess = (event)=>{  //3
         let record = event.target.result //3
         if(record){
             let contact = record.value
             console.log(contact) //print 3 record

             record.continue(); //next iteration
         }

      }

      txn.oncomplete = ()=>{
          db.close();
      }

    }

    function deleteContact(db,id){
 
         const txn = db.transaction('Contacts','readwrite')

         const store = txn.objectStore('Contacts')
 
         let query = store.delete(id)         
 
         query.onsuccess = (event)=>{
             console.log(event)
         }       

         query.onerror = (event)=>{
             console.log(event)
         } 

         txn.oncomplete = ()=>{
             db.close();
         }
    }

})();
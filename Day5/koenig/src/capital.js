//john cena -  John Cena
function capital(myname){
   
    const capitalizedString = 
      myname.substring(0,1).toUpperCase() + myname.substring(1)

    return capitalizedString;  
}

export default capital;
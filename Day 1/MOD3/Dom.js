function sayThankYou(){
    let username = document.getElementById('nameBox').value
   
    let pElement = document.createElement('p')
    pElement.innerHTML = "Thank you " + username;
    
    document.getElementById('thankYouArea').appendChild(pElement);
}


// document.getElementById('clickBtn').onclick = sayThankYou;
document.getElementById('clickBtn').addEventListener("click",sayThankYou);
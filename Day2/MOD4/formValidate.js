function validateForm(){

let username = document.getElementById('namebox').value
let password = document.getElementById('passBox').value
let cpassword = document.getElementById('cpassBox').value

if(username == null || username ==''){
    alert("Username can't be Blank")
    return false
}
else if(password.length <6){
  alert('Password must be alteast 6 character long')
  return false;
 }
else if(password !== cpassword){
   alert("Password must be same..!")
   return false;
} 


 }

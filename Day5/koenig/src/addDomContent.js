function addDomContent(content){
   
     const h1Element = document.createElement('h1')
     h1Element.innerHTML = content
     document.body.appendChild(h1Element)
}

export default addDomContent
document.getElementById('suggestions-form').addEventListener('submit',(event)=>{       
   event.srcElement.childNodes.forEach(node=>{
      if (node.checked) event.target.action+=node.id;
   })      
});

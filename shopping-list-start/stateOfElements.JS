const itemExists=(item)=>{
    const elements=getItemsFromStorage();
    //includes return a bool vale
    return elements.includes(item);
    
}

const stateOfElements=()=>{
    //to clean the input bar
    itemInput.value='';

    //To show items throuw the filter function
    const ListLi=itemList.querySelectorAll('li');

    if (ListLi.length===0) {
        itemClearBtn.style.display='none';
        filter.style.display='none';
    }
    else{
        itemClearBtn.style.display='block';
        filter.style.display='block';
    }

    //to handle the function of the button submit
    editMode=false;

}


const isAllInvisible=(array)=>{
    let cantidad=0;
    array.forEach(element=>{
    if(element.style.display==="none"){
        cantidad+=1;
    }})

   if (cantidad===array.length ) {
    const text=document.createElement('p');
    text.textContent="no one";
    text.className="no-one";
    itemList.appendChild(text);
   }
   else if(itemList.querySelector('.no-one')){
    const element=itemList.querySelector('.no-one');
    element.remove();
   }
}
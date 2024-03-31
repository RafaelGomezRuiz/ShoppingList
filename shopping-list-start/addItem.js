function onAddItemSubmit(e){
    e.preventDefault();
    const newItem=itemInput.value;

    if (newItem==='') {
        alert("the field is empty");
        return;
    }
    if (editMode) {
            const itemToEdit=itemList.querySelector('.edit-mode');
            const inputValue=itemInput.value;
            removeFromLocalStore(inputValue);
            itemToEdit.remove();
            btnAddItem.innerHTML=`<i class="fa-solid fa-plus"></i> Add Item`;
            btnAddItem.style.backgroundColor='';
  
    }else{
        if(itemExists(newItem)){
            alert('Item already exists');
            return;
        }
    }
    addItemToDom(newItem);
    addItemToLocalStore(newItem);
    stateOfElements();  
}

//this function create the div with the value
function addItemToDom(item){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(item)); 
    li.appendChild(createButton("remove-item btn-link text-red"));

    itemList.appendChild(li);
}

function addItemToLocalStore(item){
    let itemsFromStore=getItemsFromStorage();
    //adding a item
    itemsFromStore.push(item);

    //convert to JSON string and set to localstore
    localStorage.setItem('items',JSON.stringify(itemsFromStore));

}
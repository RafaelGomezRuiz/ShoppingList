//Here i init the app
function getItemsFromStorage(){
    let array;
    if (localStorage.getItem('items')===null) {
        return array=[];
    }
    else{
        return array=JSON.parse(localStorage.getItem('items'));
    }
}

function DisplayItemsContentLoaded(){
    let itemsFromStore=getItemsFromStorage();
    if (itemsFromStore !==null) {
        itemsFromStore.forEach(item=>{
            addItemToDom(item);
        })
    }
    stateOfElements();
}

const initApp=()=>{
    itemForm.addEventListener('submit',onAddItemSubmit);
    itemList.addEventListener('click',onClickItem);
    itemClearBtn.addEventListener('click',deleteAll);
    filter.addEventListener('input',filterItems);
    document.addEventListener('DOMContentLoaded',DisplayItemsContentLoaded);
}

initApp();
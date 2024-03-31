const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const itemClearBtn=document.getElementById('clear');
//i had a event listener for a submit fron the form 
const btnAddItem=document.getElementById('btn-add');

let editMode=false;

const filter=document.getElementById('filter');


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
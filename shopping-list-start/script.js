const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const itemClearBtn=document.getElementById('clear');
const filter=document.getElementById('filter');


//this is the function to add the element
function onAddItemSubmit(e){
    e.preventDefault();
    const newItem=itemInput.value;

    if (newItem==='') {
        alert("the field is empty");
        return;
    }
    addItemToDom(newItem);
    addItemToLocalStore(newItem);

    checkFilterClearElements();
    itemInput.value='';
    
}
//this function create the div with the value
function addItemToDom(item){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(item)); 
    li.appendChild(createButton("remove-item btn-link text-red"));

    itemList.appendChild(li);
}

const createButton=(classes)=>{
    const button = document.createElement('button');
    button.className=classes;
    button.appendChild(createIcon("fa-solid fa-xmark"));
    return button;
}

const createIcon=(classe)=>{
    const icon=document.createElement('i');
    icon.className=classe;
    return icon;
}
function getItemsFromStorage(){
    let array;
    if (localStorage.getItem('items')===null) {
        return array=[];
    }
    else{
        return array=JSON.parse(localStorage.getItem('items'));
    }
}
function addItemToLocalStore(item){
    let itemsFromStore=getItemsFromStorage();
    //adding a item
    itemsFromStore.push(item);

    //convert to JSON string and set to localstore
    localStorage.setItem('items',JSON.stringify(itemsFromStore));

}

function DisplayItemsContentLoaded(){
    let itemsFromStore=getItemsFromStorage();
    if (itemsFromStore !==null) {
        itemsFromStore.forEach(item=>{
            addItemToDom(item);
        })
    }
    checkFilterClearElements();
}

function onClickItem(e){
    //if someone click on the icon
    removeItem(e);

}

//this is the function from the icon
function removeItem(e){
    if (e.target.tagName==='I') {
        if (confirm("Quieres eliminar el elemento?")) {
            e.target.parentElement.parentElement.remove();
            removeFromLocalStore(e.target.parentElement.parentElement.textContent);
            //to check if are there any element
            checkFilterClearElements();
        }
    }
}
function removeFromLocalStore(item){
    let itemFromlocalStorage=getItemsFromStorage();
    // console.log(item);

    //filter returns a new array without the ona that we spicify
    itemFromlocalStorage=itemFromlocalStorage.filter((i)=>i !== item);

    //and here i set the new list with the value
    localStorage.setItem('items',JSON.stringify(itemFromlocalStorage));
    
}

const deleteAll=(e)=>{
    // itemList.innerHTML='';
    if (confirm("Deses borrar todos los elemtnos?")) {
        while(itemList.firstChild){
            itemList.removeChild(itemList.firstChild);

            //remove all from localStorage
            localStorage.removeItem('items');
            //i cant use the one underneath because it remove all the keys from the localStorage
            // localStorage.clear();
            checkFilterClearElements();
        }
    }
}
const checkFilterClearElements=()=>{
    const ListLi=itemList.querySelectorAll('li');

    if (ListLi.length===0) {
        itemClearBtn.style.display='none';
        filter.style.display='none';
    }
    else{
        itemClearBtn.style.display='block';
        filter.style.display='block';
    }
}

const filterItems=(e)=>{
    const ListLi=itemList.querySelectorAll('li');
    const text=e.target.value.toLowerCase();

    ListLi.forEach (element=>{
        const itemName=element.firstChild.textContent.toLowerCase();
        //if nothing match it returns -1
        if (itemName.indexOf(text) != -1) {
            element.style.display="flex";
        }
        else{
            element.style.display="none";
        }
    })
    isAllNone(ListLi);
}
const isAllNone=(array)=>{
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
    itemList.removeChild(element);
   }
}
const initApp=()=>{

    itemForm.addEventListener('submit',onAddItemSubmit);
    itemList.addEventListener('click',onClickItem);
    itemClearBtn.addEventListener('click',deleteAll);
    filter.addEventListener('input',filterItems);
    document.addEventListener('DOMContentLoaded',DisplayItemsContentLoaded);
}

initApp();
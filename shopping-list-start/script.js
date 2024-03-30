const itemForm=document.getElementById('item-form');
const itemInput=document.getElementById('item-input');
const itemList=document.getElementById('item-list');
const itemClearBtn=document.getElementById('clear');
const filter=document.getElementById('filter');

function addItem(e){
    e.preventDefault();
    const newItem=itemInput.value;

    if (newItem==='') {
        alert("the field is empty");
        return;
    }
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(newItem)); 
    li.appendChild(createButton("remove-item btn-link text-red"));

    itemList.appendChild(li);
    checkFilterClearElements();
    itemInput.value='';
    
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

function removeItem(e){
    if (e.target.tagName==='I') {

        if (confirm("Quieres eliminar el elemento?")) {
            e.target.parentElement.parentElement.remove();
            checkFilterClearElements();
        }
    }
}
const deleteAll=(e)=>{
    // itemList.innerHTML='';
    if (confirm("Deses borrar todos los elemtnos?")) {
        while(itemList.firstChild){
            itemList.removeChild(itemList.firstChild);
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
        
        if (itemName.indexOf(text) != -1) {
            element.style.display="flex";
        }
        else{
            element.style.display="none";
        }
    })
}

itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
itemClearBtn.addEventListener('click',deleteAll);
filter.addEventListener('input',filterItems);
checkFilterClearElements();

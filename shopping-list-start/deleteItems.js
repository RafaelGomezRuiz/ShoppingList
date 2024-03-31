
//this is the function from the icon
function removeItem(e){
    if (confirm("Quieres eliminar el elemento?")) {
        e.target.parentElement.parentElement.remove();
        removeFromLocalStore(e.target.parentElement.parentElement.textContent);
        //to check if are there any element
        stateOfElements();
    }
}

function removeFromLocalStore(itemValue){
let itemFromlocalStorage=getItemsFromStorage();
// console.log(item);

//filter returns a new array without the ona that we spicify
itemFromlocalStorage=itemFromlocalStorage.filter((i)=>i !== itemValue);

//and here i set the new list with the value
localStorage.setItem('items',JSON.stringify(itemFromlocalStorage));

}

const deleteAll=()=>{
// itemList.innerHTML='';
if (confirm("Deses borrar todos los elemtnos?")) {
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);

        //remove all from localStorage
        localStorage.removeItem('items');
        //i cant use the one underneath because it remove all the keys from the localStorage
        // localStorage.clear();
        stateOfElements();
    }
}
}
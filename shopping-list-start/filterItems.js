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
    isAllInvisible(ListLi);
}
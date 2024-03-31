// ++++++++++++++++++++++++++++++++ update
function onClickItem(e){
    if (e.target.tagName==='I') {
        //if someone click on the icon
        removeItem(e);
    }
    else if(e.target.tagName==='LI')
    {
        setValueToEdit(e);
    }
}

function setValueToEdit(item){
        editMode=true;
        
        //to avoid that two element got the color at the same time
        itemList.querySelectorAll('li').forEach(li=>{
            li.classList.remove('edit-mode');
        })

        item.target.classList.add('edit-mode');

        btnAddItem.innerHTML='<i class="fa-solid fa-pen"></i> Update Item';
        btnAddItem.style.backgroundColor='#228B22';
        itemInput.value=item.target.textContent;
}




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
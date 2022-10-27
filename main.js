/*let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');*/


/*function enviar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value; 
    const abrirModal = document.querySelector('.btn');
    const modal= document.querySelector('.modal');    

    modal.classList.add('modal--show');

    
}*/
let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let mail = document.getElementById('mail').value;
let mensaje = document.getElementById('mensaje').value;
let modal = document.querySelector('.modalError');
let modalTitle = document.getElementById('error_title');
let form = document.getElementById('contactform');


function modalOpen(){
    if (nombre==""){       
        modal.classList.add('Errormodal--show');         
        modalTitle.innerHTML="NO ME DIJISTE COMO TE LLAMAS";        
                
    }
    else if (apellido ==""){        
        nombre= document.getElementById('nombre');
        modal.classList.add('Errormodal--show');      
        modalTitle.innerHTML="NO ME DIJISTE TU APELLIDO"; 
    }
    else if (mail==""){
        
        modal.classList.add('Errormodal--show');       
        modalTitle.innerHTML="NO ME DIJISTE TU MAIL";
    }
    else if (mensaje ==""){
        
        modal.classList.add('Errormodal--show');       
        modalTitle.innerHTML="NO ME DIJISTE TU MENSAJE";
    }
}



function closeModal(){
    modal.classList.remove('Errormodal--show');
}

/*let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let email = document.getElementById('mail').value;
let mensaje = docuement.getElementById('mensaje').value;
let abrirModal = document.querySelector('.btn');
let modal = document.querySelector('.modal');


function modalOpen(){    
        modal.classList.add('modal--show');
    
}*/

/*
const openModal = document.querySelector('.btn');
const modal = document.querySelector('.modal');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});*/
/*const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});*/
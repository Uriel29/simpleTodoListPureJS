




var lista = [];


let addButton = document.getElementById('nTarefa');
let tarefas = document.getElementById('tarefas');

let listArray = [];


var addToList = function () {
     let addInput = document.getElementById('novo').value;
     listArray.unshift({tarefa: addInput,feito:0});
     // console.log(listArray)


     refreLista();
    
     document.getElementById('novo').value = '';
    
     
}

var refreLista = function () {

   
    tarefas.innerHTML='';

   for(let i= 0; i < listArray.length; i++) {
        let item = document.createElement(`li`);
        if(listArray[i].feito == 1){

             item.setAttribute("class", 'normal minha')


             item.appendChild(document.createTextNode(listArray[i].tarefa));


             tarefas.appendChild(item);
        }else{
             item.setAttribute("class", 'normal')


             item.appendChild(document.createTextNode(listArray[i].tarefa ));


             tarefas.appendChild(item);
          
        }


        

   }
  
      
   remove()


}

var remove = function () {
//   lista = document.querySelector("ul"),
//        lista.addEventListener("click", function (e) {

//             // Faz a coloração acontecer somente ao elemento clicado.

//             e.target.classList.add('green');

//        });

     
     var el = document.getElementById('tarefas').childNodes;

     for(let i = 0; i < el.length;i++){

          el[i].addEventListener('click', function (e) {
                
               //console.log(e.target)

               if (listArray[i].tarefa == e.target.textContent && e.target.classList[1]=='minha'){
                    e.target.classList.remove('minha')
                    listArray[i].feito = 0;



               }else{
                    if (listArray[i].tarefa == e.target.textContent) {
                         e.target.classList.add('minha')
                         listArray[i].feito = 1;


               }
          }


          });
     }
     for (let i = 0; i < el.length; i++) {

          el[i].addEventListener('dblclick', function (e) {


               if (listArray[i].tarefa == e.target.textContent) {
                    e.target.style.display = "none";

                    listArray.splice(i, 1);


               }
               
               refreLista();
               
              

          });
     }
} 






addButton.addEventListener('click', addToList);


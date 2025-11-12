const hamburguesa = document.querySelector('.hamburguesa')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(hamburguesa)


hamburguesa.addEventListener('click', ()=> {
    // alert("click") chek de prueba 
    menu.classList.toggle("spread")
})

window.addEventListener('click',e=>{
    
    if(menu.classList.contains('spread')
            && e.target != menu &&  e.target != hamburguesa     ){
            
            menu.classList.toggle("spread")    
    }


    // agregando console log y dando click en cualquier parte de 
    // la pantalla me arroja en la consola el codigo de donde di click
    // console.log(e.target) 

})
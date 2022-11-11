var header = document.getElementById('header');
var menuIcon = document.getElementById('menu-icon');
var headerHeight = header.clientHeight;

menuIcon.onclick = function(){
     var isClose = header.clientHeight === headerHeight;
     if(isClose){
       header.style.height = 'auto';
     }
     else {
       header.style.height = null;

     }
    
   }


var menuItems = document.querySelectorAll('.navigation ul li a[href*="#"]');
for(var i = 0 ; i < menuItems.length; i++){
    var menuItem = menuItems[i];


    menuItem.onclick = function(event){
        var isParentChild = this.nextElementSibling && this.nextElementSibling('#sub-nav');

        if(isParentChild){

            event.preventDefault();
        }else{
        header.style.height = null;
        }

      



    }
    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose = document.querySelector('.js-close')


    for(const buyBtn of buyBtns){
       buyBtn.addEventListener('click',function(){
           modal.classList.add('open')
       })
    }
    modalClose.addEventListener('click', function(){
       modal.classList.remove('open')
    })
    modal.addEventListener('click',function(){
       modal.classList.remove('open')
    })

    modalContainer.addEventListener('click', function(event){
       event.stopPropagation()
    })

}


let carticon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');

// open and close cart 
carticon.onclick = () =>
{
    cart.classList.add("active");
}
closecart.onclick = () =>
{
    cart.classList.remove("active");
}

// Cart working in JS => 

     if(document.readyState == 'loading')
     {
        document.addEventListener('DOMContentLoaded', ready )
     }else
     {
        ready();
     }
     function ready()
     {
        // Remove items from cart here select the Button
        var removecartbtns = document.getElementsByClassName('cart-remove');
        console.log(removecartbtns);
        for(var i = 0 ;i < removecartbtns.length;i++)
        {
            var button = removecartbtns[i]
            button.addEventListener('click',removecartitem);
        }   
        // Quantity Changes 
         var quantityinputs = document.getElementsByClassName("cart-quantity");

         for(var i=0;i<quantityinputs.length;i++)
         {
            var input = quantityinputs[i];
            input.addEventListener('change',quantitychanged)   
         }

     }

    //   function Remove items for cart (here select the parent or whole item)

    function removecartitem(event)
    {
        var buttonclicked = event.target ;
        buttonclicked.parentElement.remove();
    }


    // Quantity Function 

     function quantitychanged(event)
     {
        var input = event.target;
        if(isNaN(input.value) || input.value <=0)
        {
            input.value = 1;
        }
     }
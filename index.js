
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

        //  Add to Cart 

         var addcart = document.getElementsByClassName("add-cart");
         for(var i=0;i<addcart.length;i++)
         {
            var button = addcart[i];
            button.addEventListener('click',addcartclicked)
         }
     }

    //   function Remove items for cart (here select the parent or whole item)

    function removecartitem(event)
    {
        var buttonclicked = event.target ;
        buttonclicked.parentElement.remove();
        updatetotal();
    }

    // Quantity Function 

     function quantitychanged(event)
     {
        var input = event.target;
        if(isNaN(input.value) || input.value <=0)
        {
            input.value = 1;
        }
        updatetotal();
     }

    //  addto cart

     function addcartclicked(event)
     {
        var buttonclick =  event.target;
        var shoprod = buttonclick.parentElement;
        var title = shoprod.getElementsByClassName('product-title')[0].innerText;
        var price = shoprod.getElementsByClassName('price')[0].innerText;
        var prodimg = shoprod.getElementsByClassName('product-img')[0].src;

            addproductocart(title,price,prodimg);
            updatetotal();

     }

      function addproductocart(title,price,prodimg)
      {
        var cartshopbox = document.createElement('div');
        cartshopbox.classList.add('cart-box');
        var  cartitems = document.getElementsByClassName("cart-content")[0];
        var cartitemsname = cartitems.getElementsByClassName('cart-product-title');

        for(var  i=0;i<cartitemsname.length;i++)
        {
             if(cartitemsname[i].innerText == title)
             {
                alert('You have already added this item to the Cart ');
                return;
             }
        }

             var cartboxcontent = `
               <img src = "${prodimg}"  alt = "" class = "cart-img" />    
                <div class = "detail-box"> 
                        <div class = "cart-product-title"> ${title}  </div>
                       <div class = "cart-price"> ${price} </div>
                        <input type = "number" value = "1" class = "cart-quantity">
                </div>

                <i class = "bx bx-trash-alt cart-remove"></i> `;


      cartshopbox.innerHTML =   cartboxcontent;
      cartitems.append(cartshopbox)
      cartshopbox.getElementsByClassName('cart-remove')[0].addEventListener('click',removecartitem);
      cartshopbox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantitychanged);

      }

     function updatetotal()
     {
        var cartcontent = document.getElementsByClassName("cart-content")[0];
        var cartboxes = cartcontent.getElementsByClassName("cart-box");
        var total = 0;

        for(var i = 0;i<cartboxes.length;i++)
        {
            var cartbox = cartboxes[i];
            var priceElement = cartbox.getElementsByClassName("cart-price")[0];
            var quantityelement =  cartbox.getElementsByClassName("cart-quantity")[0];
            var price  = parseFloat(priceElement.innerText.replace("$",""));
            var quantity = quantityelement.value;
            total = total + price * quantity;

            document.getElementsByClassName("total-price")[0].innerText = "$" + total ;
        }

     }

const carts = document.querySelector('.shoping-cart');

carts.addEventListener('click', function(e){
    const item = e.target;
    
    if(item.classList.contains("fa-remove")){
        const cartInfo = item.parentElement;
        const cartItem = cartInfo.parentElement;
        cartItem.style.display = 'none';
    }
    else if(item.classList.contains("fa-plus")){
        const cartInfo = item.parentElement;
        const subItem = cartInfo.childNodes;

        const quantity = subItem[3].innerText;
        var quantityNumber = parseInt(quantity);
        quantityNumber = quantityNumber + 1;
        subItem[3].innerText = quantityNumber;

        
        const itemPrice = subItem[7].childNodes;
        const cost = itemPrice[1].innerText;
        var amount = parseInt(cost);

        if(amount % 1120 == 0){
            var total = amount + 1120;

            const subTotal = document.getElementById('subtotal-price').innerText;
            var subTotalPrice = parseInt(subTotal);
            subTotalPrice = subTotalPrice + 1120;
            document.getElementById('subtotal-price').innerText = subTotalPrice;
            document.getElementById('total-price').innerText = subTotalPrice;
        }
        else{
            var total = amount + 800;

            const subTotal = document.getElementById('subtotal-price').innerText;
            var subTotalPrice = parseInt(subTotal);
            subTotalPrice = subTotalPrice + 800;
            document.getElementById('subtotal-price').innerText = subTotalPrice;
            document.getElementById('total-price').innerText = subTotalPrice;
        }
        itemPrice[1].innerText = total;

        
    }
    else if(item.classList.contains("fa-minus")){
        const cartInfo = item.parentElement;
        const subItem = cartInfo.childNodes;

        const quantity = subItem[3].innerText;
        var quantityNumber = parseInt(quantity);
        quantityNumber = quantityNumber - 1;
        subItem[3].innerText = quantityNumber;


        const itemPrice = subItem[7].childNodes;
        const cost = itemPrice[1].innerText;
        var amount = parseInt(cost);

        if(amount % 1120 == 0){
            var total = amount - 1120;

            const subTotal = document.getElementById('subtotal-price').innerText;
            var subTotalPrice = parseInt(subTotal);
            subTotalPrice = subTotalPrice - 1120;
            document.getElementById('subtotal-price').innerText = subTotalPrice;
            document.getElementById('total-price').innerText = subTotalPrice;
            }
        else{
            var total = amount - 800;

            const subTotal = document.getElementById('subtotal-price').innerText;
            var subTotalPrice = parseInt(subTotal);
            subTotalPrice = subTotalPrice - 800;
            document.getElementById('subtotal-price').innerText = subTotalPrice;
            document.getElementById('total-price').innerText = subTotalPrice;
            }
            itemPrice[1].innerText = total;
    }
});

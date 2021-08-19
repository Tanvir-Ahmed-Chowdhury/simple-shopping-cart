function updateProductNumber(product,price,isIcreasing){
    const productInput = document.getElementById(product + '-input');
    let ProductNumber = productInput.value;
    if(isIcreasing == true){
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if(ProductNumber > 0){
        ProductNumber = parseInt(ProductNumber) - 1;
    }
    productInput.value = ProductNumber;

    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = ProductNumber * price;

    // calculate total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    /* const phoneInput = document.getElementById('phone-input');
    const phoneNumber = parseInt(phoneInput.value); */
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal =  getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    /* const phoneInput = document.getElementById('phone-input');
    const phoneNumber = phoneInput.value;
     phoneInput.value = parseInt(phoneNumber) + 1; */
   updateProductNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
   /*  const phoneInput = document.getElementById('phone-input');
    const phoneNumber = phoneInput.value;
     phoneInput.value = parseInt(phoneNumber) - 1; */
     updateProductNumber('phone',1219,false);
});

// handle case increase/decrease evets
document.getElementById('case-plus').addEventListener('click',function(){
   /*  const caseInput = document.getElementById('case-input');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
   /*  const caseInput = document.getElementById('case-input');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1; */
    updateProductNumber('case',59,false);
});

document.getElementById('checkout').addEventListener('click', function(){
    window.alert('Your order has been procced!!!');
})
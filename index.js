
 displayhomepageitems();


function displayhomepageitems(){

  let item=document.querySelector(".items-container");

  let innerhtml=''; 

  items.forEach(item => {

    innerhtml=innerhtml+`

     <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        
        
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          
            <span class="original-price">Rs ${item.original_price}</span>
          
        </div>
        <button class="Buy-now" )">Buy Now</button>
      </div>
    
    
    
    
    
    `
    
  });

  item.innerHTML=innerhtml;


}


let buynowelement=document.querySelector('.Buy-now');






  buynowelement.addEventListener('click',function (){

    console.log('button clicked');
    
  })



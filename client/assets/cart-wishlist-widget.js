$(document).ready(function(){

    // your product card markup
    var productTileMarkup = `
      <li class="grid__item grid__item--collection-template small--one-half medium-up--one-quarter">
        <div class="grid-view-item product-card">
          <a class="grid-view-item__link grid-view-item__image-container full-width-link" href="{{du}}">
            <span class="visually-hidden">{{dt}}</span>
          </a>
  
          <div class="grid-view-item__image-wrapper product-card__image-wrapper js">
            <div style="padding-top: 66.66666666666666%;">
              <img  class="grid-view-item__image lazyautosizes" src="{{iu}}" />
            </div>
          </div>
  
          <div class="h4 grid-view-item__title product-card__title" aria-hidden="true">{{dt}}</div>
          <dl class="price" data-price="">
            <span class="price-item price-item--sale" data-sale-price="">
              Rs.{{pr}}
            </span>
          </dl>
          <a href="" data-product-id="{{empi}}" data-url="{{du}}" data-variant-id="{{epi}}" class="add-to-cart">
              {{#isInCart}}Moved to cart{{/isInCart}}
              {{^isInCart}}Move to cart{{/isInCart}}
          </a>
        </div>
      </li>
    `;
    
    function swymCallbackFn(){
      var wishlistItemsContainer = document.getElementById("wishlist-items");
      if(wishlistItemsContainer){
        window._swat.fetchWrtEventTypeET(
          function(wishlistProducts) {
            wishlistProducts.forEach(function(wishlistProduct){
              wishlistProduct.isInCart = _swat.platform.isInDeviceCart(wishlistProduct.epi);
              var renderedProductTile = SwymUtils.renderTemplateString(productTileMarkup, wishlistProduct);
              wishlistItemsContainer.insertAdjacentHTML( 'beforeend', renderedProductTile );
            });
            
            attachClickListeners();
          },
          window._swat.EventTypes.addToWishList
        );
      } else {
        attachClickListeners(); 
      }
    }
    if(!window.SwymCallbacks){
      window.SwymCallbacks = [];
    }
    window.SwymCallbacks.push(swymCallbackFn);
    
    
    function attachClickListeners(){
     $(".add-to-cart").on("click", function(e){
       e.preventDefault();
       var productId = e.target.getAttribute("data-product-id");
       var variantId = e.target.getAttribute("data-variant-id");
       var du = e.target.getAttribute("data-url");
       e.target.innerHTML = "Moving..";
       window._swat.replayAddToCart(
         {empi: productId, du: du},
         variantId,
         function() {
           e.target.innerHTML = "Moved to cart";
           window.location.reload();
           console.log("Successfully added product to cart.");
         },
         function(e) {
           console.log(e);
         }
       );
     }); 
    }
  });


fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((productList) => {

    for (let i = 0; i < productList.length; i++) {
        const products = productList[i];
        
        const collectionList = document.getElementById('productList')

        const productsDiv = document.createElement('div');
        productsDiv.classList.add('col-md-6');
        productsDiv.classList.add('col-lg-4');
        productsDiv.classList.add('col-xl-3');
        productsDiv.classList.add('p-2');
        productsDiv.classList.add('best');
        productsDiv.classList.add('h-100%');
        productsDiv.id = 'product'
        
        const linkTag = document.createElement('a');
        linkTag.setAttribute('href','purchase-1.html');
        linkTag.classList.add('text-decoration-none');
        productsDiv.appendChild(linkTag)
        
        const imgDivTag = document.createElement('div');
        imgDivTag.classList.add('collection-img');
        imgDivTag.classList.add('position-relative');
        linkTag.appendChild(imgDivTag);

        const imgTag = document.createElement('img');
        imgTag.src = products.image;
        imgTag.classList.add('w-100');
        imgTag.classList.add('img-fluid');
      
        imgDivTag.appendChild(imgTag);
        
        const spanTag = document.createElement('span');
        spanTag.classList.add('position-absolute');
        spanTag.classList.add('d-flex');
        spanTag.classList.add('align-items-center');
        spanTag.classList.add('justify-content-center');
        spanTag.id = 'sale';
        spanTag.innerHTML = "sale"
        imgDivTag.appendChild(spanTag);
        
        const textCenterDiv = document.createElement('div');
        textCenterDiv.classList.add('text-center');
        productsDiv.appendChild(textCenterDiv);

        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('rating');
        starRatingDiv.classList.add('mt-3');
        textCenterDiv.appendChild(starRatingDiv);

        const starRatingSpan1 = document.createElement('span');
        starRatingSpan1.classList.add('rating-color');
        starRatingDiv.appendChild(starRatingSpan1);

        const icon1 = document.createElement('i');
        icon1.classList.add('fas');
        icon1.classList.add('fa-star');
        starRatingSpan1.appendChild(icon1);

        const starRatingSpan2 = document.createElement('span');
        starRatingSpan2.classList.add('rating-color');
        starRatingDiv.appendChild(starRatingSpan2);

        const icon2 = document.createElement('i');
        icon2.classList.add('fas');
        icon2.classList.add('fa-star');
        starRatingSpan2.appendChild(icon2);

        const starRatingSpan3 = document.createElement('span');
        starRatingSpan3.classList.add('rating-color');
        starRatingDiv.appendChild(starRatingSpan3);

        const icon3 = document.createElement('i');
        icon3.classList.add('fas');
        icon3.classList.add('fa-star');
        starRatingSpan3.appendChild(icon3);

        const starRatingSpan4 = document.createElement('span');
        starRatingSpan4.classList.add('rating-color');
        starRatingDiv.appendChild(starRatingSpan4);

        const icon4 = document.createElement('i');
        icon4.classList.add('fas');
        icon4.classList.add('fa-star');
        starRatingSpan4.appendChild(icon4);

        const starRatingSpan5 = document.createElement('span');
        starRatingSpan5.classList.add('rating-color');
        starRatingDiv.appendChild(starRatingSpan5);

        const icon5 = document.createElement('i');
        icon5.classList.add('fas');
        icon5.classList.add('fa-star');
        starRatingSpan5.appendChild(icon5);

        const titleParaTag = document.createElement('p');
        titleParaTag.classList.add('text-capitalize');
        titleParaTag.classList.add('my-1');
        titleParaTag.innerHTML = products.title;
        starRatingDiv.appendChild(titleParaTag);
        
        const priceSpanTag = document.createElement('span');
        priceSpanTag.classList.add('fw-bold');
        priceSpanTag.innerHTML = products.price;
        starRatingDiv.appendChild(priceSpanTag)
        console.log(productsDiv)
        
        collectionList.appendChild(productsDiv);

    }
})


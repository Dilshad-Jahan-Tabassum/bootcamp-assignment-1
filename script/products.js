const manageSpinner = status =>{
    if(status === true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('products-container').classList.add('hidden');
    }
    else{
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('products-container').classList.remove('hidden');
    }
}

const loadCategory = () =>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>showCategory(data))
}

const loadProducts = () =>{
    manageSpinner(true);
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayProducts(data))
}
const removeActiveClass = () =>{
    const categoryBtn = document.querySelectorAll('.product');
    //console.log(categoryBtn);
    categoryBtn.forEach(btn=>{
        btn.classList.remove('active');
    })
}

const loadCategoryProducts = category =>{
    
    const url = `https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass(); // remove active class from all category button
        const clickCategoryBtn = document.getElementById(`product-${category}`);
        //console.log(clickCategoryBtn);
        clickCategoryBtn.classList.add('active')
        displayProducts(data)
    })
}

const loadDetails = async (id) =>{
    const url = `https://fakestoreapi.com/products/${id}`;
    //console.log(url);
    const res = await fetch (url);
    const details = await res.json();
    displayDetails(details);
}
const displayDetails = details =>{
    console.log(details);
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `<div class="">
            <h2 class="text-2xl font-bold ">${details.title}</h2>
        </div>
        <div class="">
            <h2 class="text-xl ">${details.description}</h2>
        </div>
        <div class="flex gap-10 ">
            <p class="text-2xl font-bold">$ ${details.price}</p>
            <p class="text-2xl font-bold"><span class="text-warning"><i class="fa-solid fa-star mr-1"></i></span>${details.rating.rate} (${details.rating.count})</p>
        </div>
        <div class="">
           <Button class="btn btn-primary">Add to cart</Button>
        </div>`
    document.getElementById('product_details').showModal();
}
const displayProducts = products =>{
    const cardContainer = document.getElementById('products-container');
    cardContainer.innerHTML = '';
    products.forEach(product=>{
        //console.log(product);
        const div = document.createElement('div');
        div.innerHTML = `
        
            <div class="rounded-xl shadow-lg p-3 h-[500px]">  
                <figure>
                    <img class="h-72 w-full bg-gray-300"
                    src="${product.image}"
                     />
                </figure>
                <div class="content p-3">
                      <div class="flex justify-between mt-3">
                        <div class="badge badge-soft badge-primary p-2">${product.category}</div>
                        <p class="text-gray-500"><span class="text-warning"><i class="fa-solid fa-star mr-1"></i></span>${product.rating.rate} (${product.rating.count})</p>
                      </div>
                      <div>
                        <h2 class="font-semibold mt-3 mb-3 truncate">${product.title}</h2>
                        <p class="font-bold">$ ${product.price}</p>
                      </div>
                      <div class="flex justify-between mt-3 ">
                        <button onClick="loadDetails(${product.id})" class="border p-3 w-25 rounded-md"><span><i class="fa-regular fa-eye mr-1"></i></span>Details</button>
                        <button class="bg-primary p-3 w-20 rounded-md text-white"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add</button>
                      </div>
                </div>
            </div>
        
        `;
        cardContainer.append(div);
    });
    manageSpinner(false);
}

const showCategory = categories =>{
    const categoryContainer = document.getElementById('category-container');
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.innerHTML = `
            <button id="product-${category}" onclick="loadCategoryProducts('${category.replace(/'/g, "\\'")}')" class="btn rounded-full product">${category}</button>

        `
     categoryContainer.append(btn);
    })
}
loadCategory();
loadProducts();
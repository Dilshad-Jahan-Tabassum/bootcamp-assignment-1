const loadCategory = () =>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>showCategory(data))
}

const loadProducts = () =>{
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayProducts(data))
}

const loadCategoryProducts = category =>{
    
    const url = `https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayProducts(data))
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
                        <button class="border p-3 w-25 rounded-md"><span><i class="fa-regular fa-eye mr-1"></i></span>Details</button>
                        <button class="bg-primary p-3 w-20 rounded-md text-white"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add</button>
                      </div>
                </div>
            </div>
        
        `;
        cardContainer.append(div);
    })
}

const showCategory = categories =>{
    const categoryContainer = document.getElementById('category-container');
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.innerHTML = `
            <button onClick="loadCategoryProducts('${category.replace(/'/g, "\\'")}')" class="btn rounded-full">${category}</button>

        `
     categoryContainer.append(btn);
    })
}
loadCategory();
loadProducts();
const loadCategory = () =>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>showCategory(data))
}

const showCategory = categories =>{
    const categoryContainer = document.getElementById('category-container');
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.innerHTML = `
            <button class="btn rounded-full">${category}</button>

        `
     categoryContainer.append(btn);
    })
}
loadCategory();
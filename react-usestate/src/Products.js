import React, { useEffect, useState } from 'react'

function Products() {

    console.log("Products component called");

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    function getProductsByCategory() {
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res => res.json())
            .then(products => {
                console.log("Products fetched", products);
                setProducts(products);
            })
    }

    function getAllCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setCategories(json);
            })
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    useEffect(() => {
        console.log("use effect will be called when category is modified", selectedCategory);
        if (selectedCategory) {
            getProductsByCategory();
        }
    }, [selectedCategory]);

    function handleChange(e) {
        setSelectedCategory(e.target.value);
    }


    return (
        <div>
            <select name="categories" id="categories" onChange={handleChange}>
                {categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)}
            </select>

            <h1 className='sCategory'>{selectedCategory}</h1>
            <section className='product'>
                {products.map(prod => {
                    return(<section className='product-item' key={prod.id}>
                        <img style={{height:200, width:200, objectFit:"contain" }} src={prod.image} alt={prod.title} />
                        <section>
                            <h2>{prod.title}</h2>
                            {/* <h3>{prod.description}</h3> */}
                        </section>
                    </section>)
                 })}

            </section>
        </div>
    )
}

export default Products
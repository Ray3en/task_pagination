import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";



export default function ProductList(){

    const [products, setProducts] = useState([])

    // Суть задания заключается в формировании пагинации на странице со списками продуктов 
    // Пагинация - возможность формирования нескольких страниц с перечисляемыми элементами для лучшей
    // оптимизации работы веб-приложения. Пользователю будет дана возможность самостоятельно переключаться по страницам, нажимая на нумерованные элементы 

    // Реализуйте в рамках 1 страницы отображения ПЕРВЫХ 9 продуктов [0 - 8]
    // Для второй страницы - [9-17] 
    // Для третьей - (по аналогии)

    // Количество страниц можно определить выражением (длина массива / 9) округляя вверъ

    // В работе не предоплагается использовать роутинг, работайте с состоянием useState

    // Глобальная задача - отслайсить массив продуктов по диапазону индексов в зависимости от выбранной страницы 

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=50')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    console.log(products)
    return (
        <div className="content">
            <div className="product_wrapper">
                {products.map(product => <ProductCard 
                                            key={product.id} 
                                            title={product.title} 
                                            price={product.price}
                                            image={product.thumbnail}
                                        />)}
            </div>
            {/* Измените компонент Pagination таким образом, чтобы пагинация на странице работала */}
            <Pagination count={5}/>
        </div>
    )
}
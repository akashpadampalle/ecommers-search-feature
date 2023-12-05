import fetchProducts from "../api/client"
import Spinner from "./Spinner"
import FilterProducts from "./FilterProducts";
import {useEffect, useState } from "react";

const ProductsList = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)

    const fetchData = async () => {
        
            try {
                setLoading(true)
                const res = await fetchProducts((page * 10), 10)
                setProducts(prev => [...prev, ...res])
                setError(null)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }

    }



    useEffect(() => {

        const handleScroll = () =>  {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && page < 3) {
                setPage(prev => prev + 1)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [loading, page])



    useEffect(() => { 
        fetchData() 
    }, [page]);



    if (error) {
        return <div className=" text-red-600 text-center" >{error.message}</div>
    }

    return (
        <>
            <FilterProducts products={products} />
            {loading &&
                (
                    <div className="flex justify-center">
                        <Spinner>{page}</Spinner>
                    </div>
                )
            }
        </>
    )
}

export default ProductsList

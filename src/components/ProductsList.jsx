// Importing necessary dependencies and components
import fetchProducts from "../api/client";
import Spinner from "./Spinner";
import FilterProducts from "./FilterProducts";
import { useEffect, useState } from "react";

// ProductsList Component
const ProductsList = () => {
    // State variables for managing products, errors, loading state, and pagination
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    // Function to fetch products from the API
    const fetchData = async () => {
        try {
            setLoading(true);
            // Fetching products based on pagination
            const res = await fetchProducts(page * 10, 10);
            // Updating products state with new data
            setProducts((prev) => [...prev, ...res]);
            // Resetting error state and indicating that loading is complete
            setError(null);
            setLoading(false);
        } catch (error) {
            // Handling errors and updating error state
            setError(error);
            // Indicating that loading is complete
            setLoading(false);
        }
    };

    // Effect to implement infinite scrolling
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // Checking if user has scrolled to the bottom of the page and not currently loading more data
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight &&
                !loading &&
                page < 3
            ) {
                // Incrementing the page number to fetch more data
                setPage((prev) => prev + 1);
            }
        };

        // Adding event listener for scroll events
        window.addEventListener("scroll", handleScroll);

        // Cleaning up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, page]);

    // Effect to fetch data when the page number changes
    useEffect(() => {
        fetchData();
    }, [page]);

    // Rendering UI based on the state
    if (error) {
        // Displaying error message if there's an error
        return <div className="text-red-600 text-center">{error.message}</div>;
    }

    // Displaying FilterProducts component and a loading spinner if loading is in progress
    return (
        <>
            <FilterProducts products={products} />
            {loading && (
                <div className="flex justify-center">
                    {/* Displaying Spinner component with page number */}
                    <Spinner>{page}</Spinner>
                </div>
            )}
        </>
    );
};

// Exporting the ProductsList component
export default ProductsList;

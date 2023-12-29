import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

import { categories, brands, colors } from "../api/client";

// FilterProducts Component
const FilterProducts = ({ products }) => {

    // State variables for filter options
    const [color, setColor] = useState();
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [sortByPrice, setSortByPrice] = useState(false);
    const [search, setSearch] = useState("");
    const [renderProducts, setRenderProducts] = useState([]);

    // Effect to filter and sort products based on user input
    useEffect(() => {
        // Filtering products based on user input
        let filteredProducts = products.filter((product) => {
            if (
                (search && !product.title.toLowerCase().includes(search.toLowerCase())) ||
                (color && color !== product.color && color !== "All") ||
                (brand && brand !== product.brand && brand !== "All") ||
                (category && category !== product.category && category !== "All")
            ) {
                return false;
            }
            return true;
        });

        // Sorting products by price if sortByPrice is true
        if (sortByPrice) {
            filteredProducts = filteredProducts.sort((p1, p2) => p1.price - p2.price);
        }

        // Setting the filtered and sorted products to state
        setRenderProducts([...filteredProducts]);

    }, [color, brand, category, sortByPrice, products, search]);

    // State for controlling the visibility of the filter dialog
    const [openDialog, setOpenDialog] = useState(false);

    // Function to open the filter dialog
    const handleOpenDialog = () => setOpenDialog(true);

    // JSX rendering
    return (
        <div className="antialiased">
            {/* Search and filter bar */}
            <nav className="flex m-5 border-solid rounded overflow-hidden">
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="search..." className="flex-grow text-center py-2 border border-black outline-purple-200" />
                {/* Tooltip for the filter button */}
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <button className="px-5 text-2xl" onClick={handleOpenDialog}>
                                <LuSettings2 />
                            </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            {/* Tooltip content */}
                            <Tooltip.Content className="p-2 bg-slate-100 rounded shadow-2xl z-10" sideOffset={5}>
                                Filters
                                <Tooltip.Arrow className="fill-slate-100" />
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>
            </nav>

            {/* Filter dialog */}
            <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-2xl p-5 shadow-2xl z-20">

                        <div className="flex justify-between items-center pb-5">
                            {/* Dialog title */}
                            <Dialog.Title className="font-semibold text-lg">
                                Apply Filters
                            </Dialog.Title>
                            {/* Close button for the dialog */}
                            <Dialog.Close className="text-red-500">
                                <AiOutlineClose />
                            </Dialog.Close>
                        </div>

                        {/* Filter options table */}
                        <table>
                            <tbody>
                                {/* Brand filter */}
                                <tr>
                                    <td className="m"><label htmlFor="brand">Brand</label></td>
                                    <td className="ps-2">
                                        {/* Dropdown for selecting brands */}
                                        <select className="w-full" id="brand" value={brand} onChange={(event) => { setBrand(event.target.value) }}>
                                            {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                                        </select>
                                    </td>
                                </tr>
                                {/* Color filter */}
                                <tr>
                                    <td>
                                        <label htmlFor="color" className="flex items-center">
                                            Color
                                            {/* Displaying a colored box to represent the selected color */}
                                            <div
                                                className="h-4 w-4 rounded shadow inline-block ms-1"
                                                style={{ backgroundColor: color ? color.toLowerCase() : "white" }}>
                                            </div>
                                        </label>
                                    </td>
                                    <td className="ps-2">
                                        {/* Dropdown for selecting colors */}
                                        <select className="w-full" id="color" value={color} onChange={(event) => { setColor(event.target.value) }}>
                                            {colors.map(color => <option key={color} value={color} className="flex items-center">
                                                {color}
                                            </option>)}
                                        </select>
                                    </td>
                                </tr>
                                {/* Category filter */}
                                <tr>
                                    <td><label htmlFor="category">Category</label></td>
                                    <td className="ps-2">
                                        {/* Dropdown for selecting categories */}
                                        <select className="w-full" id="category" value={category} onChange={(event) => { setCategory(event.target.value) }}>
                                            {categories.map(category => <option key={category} value={category}>{category}</option>)}
                                        </select>
                                    </td>
                                </tr>
                                {/* Price sorting option */}
                                <tr>
                                    <td><label htmlFor="price">Sort by Price</label></td>
                                    <td className="ps-2">
                                        {/* Switch for toggling price sorting */}
                                        <Switch.Root id="price" checked={sortByPrice} onCheckedChange={setSortByPrice} className="w-[42px] h-[25px] bg-slate-400 rounded-2xl relative shadow data-[state=checked]:bg-cyan-400  transition-colors duration-200 ease-in-out">
                                            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow translate-x-[2px] data-[state=checked]:translate-x-[19px] transition-transform duration-200 ease-in-out" />
                                        </Switch.Root>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* Rendering filtered and sorted products */}
            {renderProducts.map(product => <ProductItem product={product} key={product.id} />)}

        </div>
    );
};

// Exporting the FilterProducts component
export default FilterProducts;

import { MdOutlineCategory } from "react-icons/md"
import { CgOrganisation } from "react-icons/cg"
import { BiSolidColor } from "react-icons/bi"

// ProductItem Component
const ProductItem = ({ product }) => {
    return (
        // Container for the entire product item
        <div className="flex m-5 shadow rounded bg-purple-200 px-10 py-5 min-w-[700px]">
            {/* Container for the product image */}
            <div className="rounded-2xl overflow-hidden mr-10">
                {/* Displaying the product image */}
                <img src={product.image} className="w-40 h-40" />
            </div>
            {/* Container for the product details */}
            <div className="flex flex-col justify-between">
                {/* Product title */}
                <h2 className="font-semibold text-lg">{product.title}</h2>
                {/* Shortened product description */}
                <p className="text-gray-600">{product.description.substring(0, 100)}</p>
                {/* Product price */}
                <div className="text-yellow-950 font-medium">$ {product.price}</div>
                {/* Container for product category, brand, and color */}
                <div className="flex gap-5">
                    {/* Product category */}
                    <div className="flex items-center gap-2">
                        <MdOutlineCategory />
                        {product.category}
                    </div>
                    {/* Product brand */}
                    <div className="flex items-center gap-2">
                        <CgOrganisation />
                        {product.brand}
                    </div>
                    {/* Product color with dynamic styles based on color value */}
                    <div
                        className="flex items-center gap-2 px-5 rounded-xl shadow"
                        style={{
                            color: product.color !== "White" ? "white" : "black",
                            backgroundColor: product.color.toLowerCase()
                        }}
                    >
                        <BiSolidColor />
                        {product.color}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporting the ProductItem component
export default ProductItem;

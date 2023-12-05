import { MdOutlineCategory } from "react-icons/md"
import { CgOrganisation } from "react-icons/cg"
import { BiSolidColor } from "react-icons/bi"

/*
    {
        id: 1,
        title: "Men's Classic Shirt",
        description: "A timeless classic shirt for men",
        image: "shirt1.jpg",
        price: 49.99,
        category: "Mens",
        brand: "Gucci",
        color: "White",
    }
*/


const ProductItem = ({ product }) => {
    return (
        <div className="flex m-5 shadow rounded bg-purple-200 px-10 py-5 min-w-[700px]">
            <div className="rounded-2xl overflow-hidden mr-10">
                <img src={product.image} className=" w-40 h-40" />
            </div>
            <div className="flex flex-col justify-between">
                <h2 className=" font-semibold text-lg">{product.title}</h2>
                <p className="text-gray-600">{product.description.substring(0, 100)}</p>
                <div className=" text-yellow-950 font-medium">$ {product.price}</div>
                <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                        <MdOutlineCategory />
                        {product.category}
                    </div>
                    <div className="flex items-center gap-2">
                        <CgOrganisation />
                        {product.brand}
                    </div>
                    <div
                        className="flex items-center gap-2 px-5 rounded-xl shadow"
                        style={{
                            color: (product.color != "White") ? "white" : "black",
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

export default ProductItem
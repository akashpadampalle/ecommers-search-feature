
const fetchProducts = (start, quantity) => {
   return new Promise( (resolve, reject) => {
    setTimeout(()=>{
       /* if (!start) {
            resolve(products)
        } else if (start && !quantity ) {
            const product = products.find( product => product.id == start)

            if (product) {
                resolve(product)
            } else {
                reject(new Error("Product not found"))
            }
        } else if (start && quantity) {

            let subset

            if (start + quantity > products.length) {
                subset = products.slice(start)
            } else {
                subset = products.slice(start, start + quantity)
            }

            
            
            if (subset.length > 0) {
                resolve(subset)
            } else {
                reject(new Error("Invalid start or end Indices"))
            }

        } else {
            reject(new Error("Invalid arguments"))
        } */
        if (!start && start !== 0) {
            return resolve(products)
        } else if (start && !quantity) {
            const product = products.find((product) => product.id === start)
            return resolve([product])
        } else if ((start || start === 0) && quantity) {
            const subset = ( start + quantity > products.length ) ? products.slice(start) : products.slice(start, start + quantity)

            return subset.length ? resolve(subset) : reject("Unable to find products")

        } else {
            reject("Invalid argument passed")
        }
    }, 1000)
   })
}

export default fetchProducts

export const categories = ["All", "Mens", "Womens", "Kids"]
export const brands = ["All", "Gucci", "Prada", "Adidas", "H&M", "Nike"]
export const colors = ["All", "White", "Black", "Red", "Blue", "Green", "Yellow", "Pink", "Gray", "Brown", "Khaki", "Silver", "Purple", "Navy", "Chocolate", "Darkblue"] 

const products = [
    {
        id: 1,
        title: "Men's Classic Shirt",
        description: "A timeless classic shirt for men",
        image: "https://i.imgur.com/rh8he3z.jpg",
        price: 49.99,
        category: "Mens",
        brand: "Gucci",
        color: "White",
    },
    {
        id: 2,
        title: "Women's Elegant Dress",
        description: "An elegant dress for women's special occasions",
        image: "https://i.imgur.com/qFtgtW3.jpg",
        price: 129.99,
        category: "Womens",
        brand: "Prada",
        color: "Black",
    },
    {
        id: 3,
        title: "Kids' Playful Sneakers",
        description: "Comfortable and playful sneakers for kids",
        image: "https://i.imgur.com/uBbXQK2.jpg",
        price: 34.99,
        category: "Kids",
        brand: "Adidas",
        color: "Red",
    },
    {
        id: 4,
        title: "Men's Casual T-Shirt",
        description: "A comfortable and casual t-shirt for men",
        image: "https://i.imgur.com/QmzmWVZ.jpg",
        price: 19.99,
        category: "Mens",
        brand: "H&M",
        color: "Blue",
    },
    {
        id: 5,
        title: "Women's Sporty Leggings",
        description: "Stretchable leggings for women's workout sessions",
        image: "https://i.imgur.com/4nk0Qa8.jpg",
        price: 29.99,
        category: "Womens",
        brand: "Nike",
        color: "Green",
    },
    {
        id: 6,
        title: "Kids' Colorful Backpack",
        description: "A vibrant backpack for kids to carry their essentials",
        image: "https://i.imgur.com/3CbNDWf.jpg",
        price: 24.99,
        category: "Kids",
        brand: "H&M",
        color: "Yellow",
    },
    {
        id: 7,
        title: "Men's Stylish Jacket",
        description: "A stylish jacket for men's fashion-forward looks",
        image: "https://i.imgur.com/uUIA1fl.jpg",
        price: 79.99,
        category: "Mens",
        brand: "Adidas",
        color: "Black",
    },
    {
        id: 8,
        title: "Women's Boho Maxi Dress",
        description: "A bohemian-style maxi dress for women",
        image: "https://i.imgur.com/d4J2UnH.jpg",
        price: 89.99,
        category: "Womens",
        brand: "Gucci",
        color: "Red",
    },
    {
        id: 9,
        title: "Kids' Dinosaur Pajamas",
        description: "Cozy pajamas featuring cute dinosaur prints for kids",
        image: "https://i.imgur.com/YyQJ6I9.jpg",
        price: 19.99,
        category: "Kids",
        brand: "H&M",
        color: "Blue",
    },
    {
        id: 10,
        title: "Men's Classic Jeans",
        description: "Classic denim jeans for men's everyday wear",
        image: "https://i.imgur.com/vdLIwpq.jpg",
        price: 59.99,
        category: "Mens",
        brand: "Nike",
        color: "Black",
    },
    {
        id: 11,
        title: "Women's Sneaker Boots",
        description: "Fashionable sneaker boots for women",
        image: "https://i.imgur.com/TNud7zK.jpg",
        price: 109.99,
        category: "Womens",
        brand: "Adidas",
        color: "White",
    },
    {
        id: 12,
        title: "Kids' Unicorn Backpack",
        description: "A magical unicorn-themed backpack for kids",
        image: "https://i.imgur.com/VUR9eMy.jpg",
        price: 29.99,
        category: "Kids",
        brand: "Nike",
        color: "Pink",
    },
    {
        id: 13,
        title: "Men's Active Hoodie",
        description: "A comfortable and active hoodie for men",
        image: "https://i.imgur.com/EAQiRPS.jpg",
        price: 44.99,
        category: "Mens",
        brand: "H&M",
        color: "Gray",
    },
    {
        id: 14,
        title: "Women's Floral Skirt",
        description: "A floral-printed skirt for women's summer wardrobe",
        image: "https://i.imgur.com/MeYXavW.jpg",
        price: 39.99,
        category: "Womens",
        brand: "Prada",
        color: "Yellow",
    },
    {
        id: 15,
        title: "Kids' Superhero T-Shirt",
        description: "T-shirts featuring kids' favorite superheroes",
        image: "https://i.imgur.com/jPb12nb.jpg",
        price: 14.99,
        category: "Kids",
        brand: "Nike",
        color: "Red",
    },
    {
        id: 16,
        title: "Men's Leather Sneakers",
        description: "Stylish leather sneakers for men",
        image: "https://i.imgur.com/m3jWGc6.jpg",
        price: 69.99,
        category: "Mens",
        brand: "Gucci",
        color: "Brown",
    },
    {
        id: 17,
        title: "Women's Classic Handbag",
        description: "A timeless classic handbag for women",
        image: "https://i.imgur.com/U9L6dva.jpg",
        price: 79.99,
        category: "Womens",
        brand: "Prada",
        color: "Black",
    },
    {
        id: 18,
        title: "Kids' Rainbow Umbrella",
        description: "Colorful rainbow umbrella for kids on rainy days",
        image: "https://i.imgur.com/Fqqsznf.jpg",
        price: 9.99,
        category: "Kids",
        brand: "Adidas",
        color: "White",
    },
    {
        id: 19,
        title: "Men's Vintage Sunglasses",
        description: "Vintage-style sunglasses for men",
        image: "https://i.imgur.com/paUu9WG.jpg",
        price: 34.99,
        category: "Mens",
        brand: "Nike",
        color: "Black",
    },
    {
        id: 20,
        title: "Women's Boho Blouse",
        description: "Bohemian-style blouse for women's casual chic looks",
        image: "https://i.imgur.com/ntKhHQU.jpg",
        price: 49.99,
        category: "Womens",
        brand: "H&M",
        color: "White",
    },
    {
        id: 21,
        title: "Men's Graphic Print T-Shirt",
        description: "Trendy graphic print t-shirt for men",
        image: "https://i.imgur.com/F0MZnsq.jpg",
        price: 24.99,
        category: "Mens",
        brand: "Adidas",
        color: "Gray",
    },
    {
        id: 22,
        title: "Women's High Heel Boots",
        description: "Stylish high heel boots for women",
        image: "https://i.imgur.com/WLgvGXI.jpg",
        price: 89.99,
        category: "Womens",
        brand: "Gucci",
        color: "Brown",
    },
    {
        id: 23,
        title: "Kids' Space-themed Pajamas",
        description: "Cozy pajamas with a space theme for kids",
        image: "https://i.imgur.com/dw8Rxoe.jpg",
        price: 18.99,
        category: "Kids",
        brand: "Nike",
        color: "Blue",
    },
    {
        id: 24,
        title: "Men's Slim Fit Chinos",
        description: "Slim fit chinos for a polished look",
        image: "https://i.imgur.com/rxsZwgL.jpg",
        price: 54.99,
        category: "Mens",
        brand: "H&M",
        color: "Khaki",
    },
    {
        id: 25,
        title: "Women's Floral Jumpsuit",
        description: "A floral-printed jumpsuit for women",
        image: "https://i.imgur.com/dOEv3wN.jpg",
        price: 69.99,
        category: "Womens",
        brand: "Prada",
        color: "Green",
    },
    {
        id: 26,
        title: "Kids' Light-Up Sneakers",
        description: "Sneakers with LED lights for a fun look",
        image: "https://i.imgur.com/wGCbppK.jpg",
        price: 29.99,
        category: "Kids",
        brand: "Adidas",
        color: "Pink",
    },
    {
        id: 27,
        title: "Men's Waterproof Jacket",
        description: "Waterproof jacket for outdoor adventures",
        image: "https://i.imgur.com/s7SlT9n.jpg",
        price: 74.99,
        category: "Mens",
        brand: "Nike",
        color: "Black",
    },
    {
        id: 28,
        title: "Women's Oversized Sweater",
        description: "Cozy oversized sweater for women",
        image: "https://i.imgur.com/2vlsaVK.jpg",
        price: 49.99,
        category: "Womens",
        brand: "H&M",
        color: "Gray",
    },
    {
        id: 29,
        title: "Kids' Dinosaur Backpack",
        description: "Backpack featuring cute dinosaur prints for kids",
        image: "https://i.imgur.com/ks6xns0.jpg",
        price: 26.99,
        category: "Kids",
        brand: "Gucci",
        color: "Blue",
    },
    {
        id: 30,
        title: "Men's Aviator Sunglasses",
        description: "Classic aviator sunglasses for men",
        image: "https://i.imgur.com/w1SQpe8.jpg",
        price: 39.99,
        category: "Mens",
        brand: "Prada",
        color: "Silver",
    },
    {
        id: 31,
        title: "Women's Boho Maxi Skirt",
        description: "Bohemian-style maxi skirt for women",
        image: "https://i.imgur.com/rt4aRRC.jpg",
        price: 44.99,
        category: "Womens",
        brand: "Nike",
        color: "Purple",
    },
    {
        id: 32,
        title: "Kids' Cartoon Print T-Shirt",
        description: "T-shirts with cartoon prints for kids",
        image: "https://i.imgur.com/CG4O4UA.jpg",
        price: 16.99,
        category: "Kids",
        brand: "H&M",
        color: "Yellow",
    },
    {
        id: 33,
        title: "Men's Leather Belt",
        description: "Genuine leather belt for men's accessories",
        image: "https://i.imgur.com/GUH5GuT.jpg",
        price: 29.99,
        category: "Mens",
        brand: "Gucci",
        color: "Brown",
    },
    {
        id: 34,
        title: "Women's Velvet Evening Gown",
        description: "Luxurious velvet gown for special occasions",
        image: "https://i.imgur.com/03AH8tE.jpg",
        price: 129.99,
        category: "Womens",
        brand: "Adidas",
        color: "Red",
    },
    {
        id: 35,
        title: "Kids' Butterfly Wings Costume",
        description: "Costume with butterfly wings for imaginative play",
        image: "https://i.imgur.com/KHaluX6.jpg",
        price: 21.99,
        category: "Kids",
        brand: "Nike",
        color: "Purple",
    },
    {
        id: 36,
        title: "Men's Striped Polo Shirt",
        description: "Classic striped polo shirt for men",
        image: "https://i.imgur.com/lyuPAwp.jpg",
        price: 34.99,
        category: "Mens",
        brand: "H&M",
        color: "Navy",
    },
    {
        id: 37,
        title: "Women's Leather Ankle Boots",
        description: "Chic leather ankle boots for women",
        image: "https://i.imgur.com/xLglZ93.jpg",
        price: 79.99,
        category: "Womens",
        brand: "Prada",
        color: "Black",
    },
    {
        id: 38,
        title: "Kids' Rainbow Socks Set",
        description: "Colorful rainbow socks set for kids",
        image: "https://i.imgur.com/b0CWx47.jpg",
        price: 12.99,
        category: "Kids",
        brand: "Adidas",
        color: "White",
    },
    {
        id: 39,
        title: "Men's Wool Blend Sweater",
        description: "Warm wool blend sweater for cold days",
        image: "https://i.imgur.com/AlwRcl9.jpg",
        price: 54.99,
        category: "Mens",
        brand: "Nike",
        color: "Chocolate",
    },
    {
        id: 40,
        title: "Women's Denim Overall Dress",
        description: "Denim overall dress for a trendy look",
        image: "https://i.imgur.com/w9YwGRE.jpg",
        price: 59.99,
        category: "Womens",
        brand: "Gucci",
        color: "Darkblue",
    }
]





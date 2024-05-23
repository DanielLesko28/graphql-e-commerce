const {categories, products} = require('../data')

exports.Query = {
    hello: () => {
        return 'Hello Wworld'
    } ,
    anotherHello: () => {
        return 'returning another Hello from the World'
    },
    floatNum: () => {
        return 28.7
    },
    products: () => {
        return products
    },
    product: (parent, args, context ) => {
        // console.log(args)
        const productId = args.id
        const product = products.find(singleProduct => singleProduct.id === productId)
        // console.log('single product', product)

        return product

    },
    categories: () => {
        return categories
    },
    category: (parent, args, context) => {
        const {id} = args
        return categories.find(category => category.id === id)
    },
}
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
    products: (parent, args, {products}) => {
     
        return products
    },
    product: (parent, args, {products} ) => {
      
        // console.log(args)
        const productId = args.id
        const product = products.find(singleProduct => singleProduct.id === productId)
        // console.log('single product', product)

        return product

    },
    categories: (parent, args, context) => {
        const {categories} = context
        return categories
    },
    category: (parent, args, context) => {
        const {id} = args
        const {categories} = context
        return categories.find(category => category.id === id)
    },
}
exports.Category = {
    products:(parent, args, context) => {
        const {products} = context
        // console.log(parent)
        const categoryId = parent.id
        return products.filter(product => product.categoryId === categoryId)
    }
}
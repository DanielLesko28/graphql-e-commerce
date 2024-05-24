exports.Product = {
    category: (parent, args, context) => {
        const {categories} = context
        const categoryId = parent.categoryId
        return categories.find(category => category.id === categoryId)
    },
    reviews: (parent, args, {reviews}) => {
        const {id} = parent

        return reviews.filter(review => review.productId === id)
    }
}
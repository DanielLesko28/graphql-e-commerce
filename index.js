const {ApolloServer} = require('apollo-server')
const {typeDefs} = require('./schema.js')
const {Query} = require('./resolvers/Query.js')
const {Category} = require('./resolvers/Category.js')
const {Product} = require('./resolvers/Product.js')
const {products, categories, reviews} = require('./data.js')



const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context: {
        categories,
        products,
        reviews
    }
})

server.listen().then(({url}) => {
    console.log('Server is running at ' + url)
})

//Scalar types => String, Int, Float, Boolean, ID!
//Also We have array types ([String!]!)
//type Product is Object type
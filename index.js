const {ApolloServer, qgl, gql} = require('apollo-server')
const {products, categories} = require('./data.js')




const typeDefs = gql`
    type Query {
        hello: String,
        anotherHello: String
        floatNum: Float!
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product{
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }

    type Category{
        id: ID!
        name: String!
    }

`


const resolvers = {
    Query: {
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log('Server is running at ' + url)
})

//Scalar types => String, Int, Float, Boolean, ID!
//Also We have array types ([String!]!)
//type Product is Object type
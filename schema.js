const {gql} = require('apollo-server')
 
 exports.typeDefs = gql`
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
        category: Category
    }

    type Category{
        id: ID!
        name: String!
        products: [Product!]!
    }

`

module.exports = {
    development: {
      username: "ecommerce_user",
      password: "password",
      database: "ecommerce",
      host: "127.0.0.1",
      port: "3306",
      dialect: 'mysql',
      dialectOptions: {
        bigNumberStrings: true
      }
    },
}
module.exports = {
  User: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "User's name",
        example: 'John Smith',
      },
      email: {
        type: 'string',
        description: "User's email",
        example: 'smith@mail.com',
      },
      password: {
        type: 'string',
        description: "Hashed user's password",
        example: 'hjdf5sx76ggsx',
      },
      token: {
        type: 'string',
        description: "User's json web token",
        example: 'Bearer adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa',
      },
      receiptsCollection: {
        type: 'array',
        description: "User's collection of arrays",
        example:
          "[{name: myCollection, items: [{name:'receipt001', description:'blablabla', rating:9.7, createdAt: 01.01.2010}], createdAt:01.01.2010}]",
      },
    },
  },
}

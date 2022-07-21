const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ingredients',{
    name:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.FLOAT
    },
    amount:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    stock:{
        type:DataTypes.STRING
    }
  })
  }
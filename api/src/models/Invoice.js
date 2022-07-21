const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('invoice',{
  
    state:{
        type:DataTypes.STRING,
    },
    detail:{
        type:DataTypes.STRING,
    },
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    }
  
  })
}
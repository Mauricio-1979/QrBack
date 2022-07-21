const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('menues', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false,
     
    },
    image:{
      type:DataTypes.STRING,
    },
    description:{
      type:DataTypes.STRING,
    },
    type:{
      type:DataTypes.STRING,
    }
 
  });
};

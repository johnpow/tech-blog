
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}



User.init(
        {
          id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          sequelize,
          freezeTableName: true,
          modelName: 'user',
        }
      );

      module.exports = User;
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class BlogPost extends Model {
}


BlogPost.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blog_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'blogpost',
    // timestamps: false,
  }
);

module.exports = BlogPost;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
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
        model: "user",
        key: "id",
      },
    },
    blogpost_id: {
      type: DataTypes.UUID,
      references: {
        model: "blogpost",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "comment",
  }
);

module.exports = Comment;

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust the path

const Friends = sequelize.define('Friends', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  kiskaFriend: {
    type: DataTypes.STRING,
    allowNull: false
  },
  whoIsTheFriend: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'friends',
  timestamps: false
});

export default Friends;

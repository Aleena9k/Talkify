import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path

const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fromEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'notification',
  timestamps: false
});

export default Notification;

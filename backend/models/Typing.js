import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path

const Typing = sequelize.define('Typing', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  whoIsTheTyping: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kismeTyping: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'typing_detection',
  timestamps: false
});

export default Typing;

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // adjust path

const ProfilePhoto = sequelize.define('ProfilePhoto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  whosPhoto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING // or DataTypes.BLOB if storing binary
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'profile_photos',
  timestamps: false
});

export default ProfilePhoto;

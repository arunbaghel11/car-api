const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import the Sequelize instance
const NewTable = require('./NewTable'); // Import the NewTable model for foreign key reference

const Table2 = sequelize.define('table2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  govtId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: NewTable,
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  schema: 'new_schema',
  timestamps: true
});

module.exports = Table2;

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '.';
import Marker from './Marker';

interface EmployeeAttributes {
  id: string;
  name: string;
  email: string;
};

interface EmployeeInstance extends Model<EmployeeAttributes>,
  EmployeeAttributes {
    created_at?: Date;
    updated_at?: Date;
  }

const Employee = sequelize.define<EmployeeInstance>(
  'Employee',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }
);

Employee.hasMany(Marker, {
  sourceKey: 'id',
  foreignKey: 'employee_id',
  as: 'markers'
});

Marker.belongsTo(Employee, {
  foreignKey: 'employee_id',
  as: 'employee'
});

export default Employee;
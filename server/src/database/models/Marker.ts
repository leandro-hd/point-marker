import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface MarkerAttributes {
  id: string;
  employee_id: string;
  time_from: string;
  time_to: string;
  date: string;
}

interface MarkerCreationAttributes extends Optional<MarkerAttributes, 'time_to'> {}


interface MarkerInstance extends Model<MarkerAttributes, MarkerCreationAttributes>,
  MarkerAttributes {
    created_at?: string;
    updated_at?: string;
  }

const Marker = sequelize.define<MarkerInstance>(
  'Marker',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: 'employees', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    time_from: {
      type: DataTypes.TIME,
      allowNull: false
    },
    time_to: {
      type: DataTypes.TIME,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }
);

export default Marker;
import { Optional } from 'sequelize';
import {
  Table,
  Model,
  TableOptions,
  Column,
  DataType,
} from 'sequelize-typescript';

export interface IUserTable {
  id?: number;
  name: string;
  email: string;
  password?: string;
  provider?: string;
}

interface UserCreationAttributes extends Optional<IUserTable, 'id'> {}

const option: TableOptions<Model<any, any>> = {
  timestamps: true,
  tableName: 'User',
  createdAt: true,
  deletedAt: true,
  updatedAt: true,
  initialAutoIncrement: 'id',
};

@Table(option)
export class User extends Model<IUserTable, UserCreationAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataType.INTEGER,
  })
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column({ type: DataType.STRING, defaultValue: 'password' })
  provider: string;
}

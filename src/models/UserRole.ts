import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { User } from '@src/models/User';
import { Role } from '@src/models/Role';

@Table({ tableName: 'users_roles', timestamps: true })
export class UserRole extends Model<UserRole> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId!: number;
}

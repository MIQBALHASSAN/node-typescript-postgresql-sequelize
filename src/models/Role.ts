import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript';
import { User } from '@src/models/User';
import { UserRole } from './UserRole';

@Table({ tableName: 'roles', timestamps: true })
export class Role extends Model<Role> {
  @Column name: string;
  @Column resource_id: number;
  @Column resource_type: string;

  // relations
  @BelongsToMany(() => User, () => UserRole)
  authors: User[];
}

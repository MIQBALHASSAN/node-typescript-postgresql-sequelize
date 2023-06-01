import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript';
import { User } from '@src/models/User';
import { CameraUser } from '@src/models/CameraUser';

@Table({ tableName: 'cameras', timestamps: true })
export class Camera extends Model<Camera> {
  @Column uuid: string;
  @Column model: string;
  @Column serial_number: string;
  @Column firmware_version: string;
  @Column owner_id: number;

  // relations
  @BelongsToMany(() => User, () => CameraUser)
  users: User[];
}

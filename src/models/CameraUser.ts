import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { Camera } from '@src/models/Camera';
import { User } from '@src/models/User';

@Table({ tableName: 'camera_users', timestamps: true })
export class CameraUser extends Model<CameraUser> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Camera)
  @Column
  cameraId!: number;
}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'work_order_users', timestamps: true })
export class WorkOrderUser extends Model<WorkOrderUser> {}

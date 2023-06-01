import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'work_orders', timestamps: true })
export class WorkOrder extends Model<WorkOrder> {}

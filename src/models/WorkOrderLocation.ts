import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'work_order_locations', timestamps: true })
export class WorkOrderLocation extends Model<WorkOrderLocation> {}

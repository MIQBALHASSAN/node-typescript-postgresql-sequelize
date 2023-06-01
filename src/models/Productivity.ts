import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'productivities', timestamps: true })
export class Productivity extends Model<Productivity> {}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'tours', timestamps: true })
export class Tour extends Model<Tour> {}

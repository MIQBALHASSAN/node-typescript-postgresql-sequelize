import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'locations', timestamps: true })
export class Location extends Model<Location> {}

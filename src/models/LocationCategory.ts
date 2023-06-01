import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_categories', timestamps: true })
export class LocationCategory extends Model<LocationCategory> {}

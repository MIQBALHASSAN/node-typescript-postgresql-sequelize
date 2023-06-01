import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_collections', timestamps: true })
export class LocationCollection extends Model<LocationCollection> {}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_discoveries', timestamps: true })
export class LocationDiscovery extends Model<LocationDiscovery> {}

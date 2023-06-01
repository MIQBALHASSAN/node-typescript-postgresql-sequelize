import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_collections_locations', timestamps: true })
export class LocationCollectionLocation extends Model<LocationCollectionLocation> {}

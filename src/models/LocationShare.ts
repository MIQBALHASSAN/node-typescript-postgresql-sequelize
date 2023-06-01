import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_shares', timestamps: true })
export class LocationShare extends Model<LocationShare> {}

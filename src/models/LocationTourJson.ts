import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_tour_jsons', timestamps: true })
export class LocationTourJson extends Model<LocationTourJson> {}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_notes', timestamps: true })
export class LocationNote extends Model<LocationNote> {}

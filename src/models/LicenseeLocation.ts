import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'licensee_locations', timestamps: true })
export class LicenseeLocation extends Model<LicenseeLocation> {}

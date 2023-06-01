import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'licensee_categories', timestamps: true })
export class LicenseeCategory extends Model<LicenseeCategory> {}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'licensees', timestamps: true })
export class Licensee extends Model<Licensee> {}

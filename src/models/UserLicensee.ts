import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'user_licensees', timestamps: true })
export class UserLicensee extends Model<UserLicensee> {}

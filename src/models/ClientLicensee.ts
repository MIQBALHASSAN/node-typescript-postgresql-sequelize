import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'client_licensees', timestamps: true })
export class ClientLicensee extends Model<ClientLicensee> {}

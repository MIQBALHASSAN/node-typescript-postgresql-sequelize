import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'clients', timestamps: true })
export class Client extends Model<Client> {}

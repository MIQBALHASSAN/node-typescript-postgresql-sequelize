import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'client_specific_entitlements', timestamps: true })
export class ClientSpecificEntitlement extends Model<ClientSpecificEntitlement> {}

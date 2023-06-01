import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'client_product_plans', timestamps: true })
export class ClientProductPlan extends Model<ClientProductPlan> {}

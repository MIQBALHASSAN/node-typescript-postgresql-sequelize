import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'product_plan_entitlements', timestamps: true })
export class ProductPlanEntitlement extends Model<ProductPlanEntitlement> {}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'product_plans', timestamps: true })
export class ProductPlan extends Model<ProductPlan> {}

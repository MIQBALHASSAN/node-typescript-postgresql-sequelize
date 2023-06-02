import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'client_product_plans', timestamps: true })
export class ClientProductPlan extends Model<ClientProductPlan> {
  client_id: number;
  @Column product_plan_id: number;
  @Column active: boolean;
  @Column created_by: string;
  @Column updated_by: string;
  @Column created_at: Date;
  @Column updated_at: Date;
  @Column billing_first_name: string;
  @Column billing_last_name: string;
  @Column billing_street: string;
  @Column billing_street_2: string;
  @Column billing_city: string;
  //   @Column billing_type: enum;
  @Column billing_state: string;
  @Column billing_postal_code: string;
  @Column billing_country: string;
  @Column billing_email: string;
  @Column billing_phone_number: string;
  @Column billing_company: string;
}

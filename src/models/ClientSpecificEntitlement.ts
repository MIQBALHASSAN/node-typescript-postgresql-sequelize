import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'client_specific_entitlements', timestamps: true })
export class ClientSpecificEntitlement extends Model<ClientSpecificEntitlement> {
  @Column client_id: number;
  @Column entitlement_id: number;
  @Column active: boolean;
  @Column created_by: string;
  @Column updated_by: string;
  //   @Column allowed_quantity: decimal;
  @Column enabled: boolean;
}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'client_licensees', timestamps: true })
export class ClientLicensee extends Model<ClientLicensee> {
  @Column client_id: number;
  @Column licensee_id: number;
  @Column active: boolean;
  @Column created_by: string;
  @Column updated_by: string;
}

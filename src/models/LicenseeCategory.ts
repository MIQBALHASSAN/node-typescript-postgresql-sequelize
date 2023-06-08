import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'licensee_categories', timestamps: true })
export class LicenseeCategory extends Model<LicenseeCategory> {
  @Column name: string;
  @Column icon: string;
  @Column color: string;
  @Column licensee_id: number;
}

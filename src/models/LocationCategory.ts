import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_categories', timestamps: true })
export class LocationCategory extends Model<LocationCategory> {
  @Column name: string;
  @Column color: string;
  @Column icon: string;
  @Column derived_from: string;
  @Column active: boolean;
  //   @Column licensee_id: number;
}

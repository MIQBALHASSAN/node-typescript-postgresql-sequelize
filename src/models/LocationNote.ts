import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_notes', timestamps: true })
export class LocationNote extends Model<LocationNote> {
  //   @Column location_id: number;
  @Column note: string;
  //   @Column created_by_id: number;
  //   @Column licensee_id: number;
  @Column active: boolean;
}

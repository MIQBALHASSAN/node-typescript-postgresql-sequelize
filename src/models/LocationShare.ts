import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'location_shares', timestamps: true })
export class LocationShare extends Model<LocationShare> {
  @Column location_id: number;
  @Column licensee_id: number;
  @Column licensee_location_id: number;
  @Column slug: string;
  @Column title: string;
  @Column subtitle: string;
  @Column description: string;
  // @Column(DataType.JSONB) cta: jsonb;
  // @Column contact: jsonb;
  // @Column links: jsonb;
  // @Column threshold_override: jsonb;
  // @Column created_by_id: number;
  // @Column created_at: datetime;
  // @Column updated_at: datetime;
  // @Column show_tour_details: boolean;
}

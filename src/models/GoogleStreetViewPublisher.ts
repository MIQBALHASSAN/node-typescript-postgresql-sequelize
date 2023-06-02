import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'google_street_view_publishers', timestamps: true })
export class GoogleStreetViewPublisher extends Model<GoogleStreetViewPublisher> {
  @Column email: string;
  @Column refresh_token: string;
  @Column created_by_id: number;
  @Column licensee_id: number;
}

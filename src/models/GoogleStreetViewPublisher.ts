import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'google_street_view_publishers', timestamps: true })
export class GoogleStreetViewPublisher extends Model<GoogleStreetViewPublisher> {}

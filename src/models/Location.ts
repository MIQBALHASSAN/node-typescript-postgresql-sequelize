import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'locations', timestamps: true })
export class Location extends Model<Location> {
  @Column name: string;
  @Column(DataType.FLOAT) latitude: number;
  @Column(DataType.FLOAT) longitude: number;
  @Column(DataType.FLOAT) altitude: number;
  @Column street: string;
  @Column street2: string;
  @Column city: string;
  @Column state: string;
  @Column postal_code: string;
  @Column country: string;
  @Column active: boolean;
  @Column google_id: string;
  @Column(DataType.JSONB) google_address_components: object;
  @Column formatted_address: string;
  @Column vicinity: string;
  @Column phone_number: string;
  @Column email: string;
  @Column website: string;
  @Column(DataType.JSONB) google_open_hours: object;
  @Column(DataType.JSONB) google_categories: object;
  @Column suggested_category: string;
  @Column permanently_closed: Date;
  @Column(DataType.FLOAT) entrance_latitude: number;
  @Column(DataType.FLOAT) entrance_longitude: number;
  @Column primary_tour_id: number;
  @Column active_tour_ids: number;
  @Column completed_tour_ids: number;
  @Column content_updated_at: Date;
  @Column recapture_requested_at: Date;
  @Column exclude_from_google: boolean;
  @Column uncapture_reason: string;
  @Column status: number;
  @Column field_status: number;
  @Column here_id: string;
  @Column(DataType.JSONB) here_categories: object;
  @Column(DataType.JSONB) here_food_categories: object;
  @Column(DataType.JSONB) here_address_components: object;
  @Column(DataType.JSONB) here_open_hours: object;
  @Column override_for_google_licensee_id: number;
  @Column visible_on_map: boolean;
  @Column primary_contact_name: string;
  @Column affiliate_licensee_id: number;
  @Column actual_primary_licensee_id: number;
}

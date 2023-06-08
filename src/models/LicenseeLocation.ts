import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'licensee_locations', timestamps: true })
export class LicenseeLocation extends Model<LicenseeLocation> {
  location_id: number;
  @Column licensee_id: number;
  @Column status: number;
  @Column reference_id: string;
  @Column category: string;
  @Column name: string;
  @Column street: string;
  @Column street2: string;
  @Column city: string;
  @Column state: string;
  @Column postal_code: string;
  @Column country: string;
  @Column phone_number: string;
  @Column email: string;
  @Column website: string;
  @Column(DataType.FLOAT) latitude: number;
  @Column(DataType.FLOAT) longitude: number;
  @Column batch_id: string;
  @Column imported_by_id: number;
  @Column rec_type: number;
  @Column thumbnail_updated_at: Date;
  //   @Column thumbnail_bucket: enum;
  //   @Column thumbnail_path_prefix: enum;
  @Column capture_category: string;
  @Column poc_name: string;
  @Column poc_title: string;
  @Column poc_phone_number: string;
  @Column notes: string;
  //   @Column metadata: jsonb;
  @Column cta_label: string;
  @Column cta_url: string;
  //   @Column threshold_override: jsonb;
  @Column location_category_id: number;
  @Column lead_generation_image: string;
  @Column lead_generation_url: string;
  @Column poc_email: string;
}

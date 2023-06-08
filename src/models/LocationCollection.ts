import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'location_collections', timestamps: true })
export class LocationCollection extends Model<LocationCollection> {
  name: string;
  @Column description: string;
  //   @Column licensee_id: number;
  //   @Column created_by_id: number;
  //   @Column anchor_location_id: number;
  @Column anchor_color: string;
  @Column anchor_title: string;
  @Column anchor_subtitle: string;
  @Column cta_url: string;
  @Column cta_label: string;
  @Column cta_new_tab: boolean;
  @Column(DataType.JSONB) settings: object;
  @Column password: string;
  @Column headline: string;
  @Column contact_name: string;
  @Column contact_phone_number: string;
  @Column contact_email: string;
  @Column contact_button_url: string;
  @Column contact_button_label: string;
  @Column slug: string;
  @Column contact_job_title: string;
  @Column thumbnail_updated_at: Date;
  //   @Column thumbnail_bucket: enum;
  //   @Column thumbnail_path_prefix: enum;
  @Column enable_routing: boolean;
  @Column map_view: number;
  @Column icon_type: number;
}

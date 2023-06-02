import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'licensees', timestamps: true })
export class Licensee extends Model<Licensee> {
  @Column name: string;
  @Column api_key: string;
  //   @Column map_settings: json;
  @Column customer_type: number;
  @Column logo: string;
  //   @Column logo_bucket: enum;
  //   @Column logo_path_prefix: enum;
  //   @Column latitude: float;
  //   @Column longitude: float;
  @Column active: boolean;
  @Column chargebee_id: string;
  @Column chargebee_data: string;
  @Column billing_first_name: string;
  @Column billing_last_name: string;
  @Column billing_street: string;
  @Column billing_street2: string;
  @Column billing_city: string;
  @Column billing_state: string;
  @Column billing_postal_code: string;
  @Column billing_country: string;
  @Column billing_email: string;
  @Column billing_phone_number: string;
  @Column billing_company: string;
  @Column tier_size: number;
  @Column pixel_viewer_on_load: string;
  @Column pixel_viewer_on_interact: string;
  @Column hubspot_id: number;
  @Column wide_logo: string;
  //   @Column wide_logo_bucket: enum;
  //   @Column wide_logo_path_prefix: enum;
  @Column website: string;
  //   @Column location_category_override: jsonb,
  @Column automatic_invites_toggle: boolean;
  @Column automatic_invite: boolean;
}

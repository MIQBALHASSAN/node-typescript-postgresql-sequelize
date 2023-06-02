import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'clients', timestamps: true })
export class Client extends Model<Client> {
  @Column name: string;
  @Column description: string;
  @Column address_1: string;
  @Column address_2: string;
  @Column city: string;
  @Column state: string;
  @Column zip_code: string;
  @Column phone_number: string;
  @Column website_url: string;
  @Column fb_url: string;
  @Column main_contact_name: string;
  @Column main_contact_phone: string;
  @Column main_contact_email: string;
  @Column active: boolean;
  @Column created_by: string;
  @Column updated_by: string;
  @Column created_at: Date;
  @Column updated_at: Date;
  @Column automatic_invites: boolean;
  @Column auto_invite: boolean;
}

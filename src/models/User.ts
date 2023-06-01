import { Model, Column, Table, BelongsToMany } from 'sequelize-typescript';
import { Role } from '@src/models/Role';
import { UserRole } from '@src/models/UserRole';
import { CameraUser } from '@src/models/CameraUser';
import { Camera } from '@src/models/Camera';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @Column email: string;
  @Column encrypted_password: string;
  @Column reset_password_token: string;
  @Column reset_password_sent_at: Date;
  @Column remember_created_at: Date;
  @Column sign_in_count: number;
  @Column current_sign_in_at: Date;
  @Column last_sign_in_at: Date;
  @Column current_sign_in_ip: string;
  @Column last_sign_in_ip: string;
  @Column authentication_token: string;
  @Column first_name: string;
  @Column last_name: string;
  @Column street: string;
  @Column city: string;
  @Column state: string;
  @Column postal_code: string;
  @Column country: string;
  @Column invitation_token: string;
  @Column invitation_created_at: Date;
  @Column invitation_sent_at: Date;
  @Column invitation_accepted_at: Date;
  @Column invitation_limit: number;
  @Column invited_by_id: number;
  @Column invited_by_type: string;
  @Column invitations_count: number;
  @Column confirmation_token: string;
  @Column confirmed_at: Date;
  @Column confirmation_sent_at: Date;
  @Column unconfirmed_email: string;
  @Column hubspot_id: number;
  @Column phone_number: string;
  @Column active: Boolean;
  @Column accepted_terms_at: Date;

  // relations
  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @BelongsToMany(() => Camera, () => CameraUser)
  cameras: Camera[];
}

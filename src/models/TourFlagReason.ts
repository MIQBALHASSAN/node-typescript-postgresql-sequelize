import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'tour_flag_reasons', timestamps: true })
export class TourFlagReason extends Model<TourFlagReason> {}

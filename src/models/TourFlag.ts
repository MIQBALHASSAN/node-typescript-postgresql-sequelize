import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'tour_flags', timestamps: true })
export class TourFlag extends Model<TourFlag> {}

import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'tour_notes', timestamps: true })
export class TourNote extends Model<TourNote> {}

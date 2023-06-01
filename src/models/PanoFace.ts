import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'pano_faces', timestamps: true })
export class PanoFace extends Model<PanoFace> {}

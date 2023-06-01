import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'pano_images', timestamps: true })
export class PanoImage extends Model<PanoImage> {}

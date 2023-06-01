import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'pano_regions', timestamps: true })
export class PanoRegion extends Model<PanoRegion> {}

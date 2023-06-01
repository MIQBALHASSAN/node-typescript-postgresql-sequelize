import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'panos', timestamps: true })
export class Pano extends Model<Pano> {}

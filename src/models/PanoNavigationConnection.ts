import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'pano_navigation_connections', timestamps: true })
export class PanoNavigationConnection extends Model<PanoNavigationConnection> {}

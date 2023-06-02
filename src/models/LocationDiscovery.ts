import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_discoveries', timestamps: true })
export class LocationDiscovery extends Model<LocationDiscovery> {
  @Column geohash_bucket: number;
  @Column geohash_group: string;
  @Column geohash_sort: number;
  //   @Column geom: geometry;
  @Column location_id: number;
  @Column location_name: string;
  @Column location_category: string;
  @Column licensed_by: number;
}

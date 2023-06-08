import { Table, Model, Column } from 'sequelize-typescript';

@Table({ tableName: 'location_collections_locations', timestamps: true })
export class LocationCollectionLocation extends Model<LocationCollectionLocation> {
  //   @Column location_collection_id: number;
  //   @Column location_id: number;
  @Column weight: number;
  @Column url: string;
  @Column url_label: string;
  @Column licensee_category_id: number;
  @Column subtitle: string;
  @Column youtube_id: string;
}

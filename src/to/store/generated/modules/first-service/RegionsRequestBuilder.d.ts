import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Regions } from './Regions';
/**
 * Request builder class for operations supported on the {@link Regions} entity.
 */
export declare class RegionsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Regions<T>, T> {
    /**
     * Returns a request builder for retrieving one `Regions` entity based on its keys.
     * @param regionId Key property. See {@link Regions.regionId}.
     * @returns A request builder for creating requests to retrieve one `Regions` entity based on its keys.
     */
    getByKey(regionId: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<Regions<T>, T>;
    /**
     * Returns a request builder for querying all `Regions` entities.
     * @returns A request builder for creating requests to retrieve all `Regions` entities.
     */
    getAll(): GetAllRequestBuilder<Regions<T>, T>;
    /**
     * Returns a request builder for creating a `Regions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Regions`.
     */
    create(entity: Regions<T>): CreateRequestBuilder<Regions<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Regions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Regions`.
     */
    update(entity: Regions<T>): UpdateRequestBuilder<Regions<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Regions`.
     * @param regionId Key property. See {@link Regions.regionId}.
     * @returns A request builder for creating requests that delete an entity of type `Regions`.
     */
    delete(regionId: number): DeleteRequestBuilder<Regions<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Regions`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Regions` by taking the entity as a parameter.
     */
    delete(entity: Regions<T>): DeleteRequestBuilder<Regions<T>, T>;
}
//# sourceMappingURL=RegionsRequestBuilder.d.ts.map
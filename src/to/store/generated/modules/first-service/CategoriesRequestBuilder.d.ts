import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Categories } from './Categories';
/**
 * Request builder class for operations supported on the {@link Categories} entity.
 */
export declare class CategoriesRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Categories<T>, T> {
    /**
     * Returns a request builder for retrieving one `Categories` entity based on its keys.
     * @param categoryId Key property. See {@link Categories.categoryId}.
     * @returns A request builder for creating requests to retrieve one `Categories` entity based on its keys.
     */
    getByKey(categoryId: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<Categories<T>, T>;
    /**
     * Returns a request builder for querying all `Categories` entities.
     * @returns A request builder for creating requests to retrieve all `Categories` entities.
     */
    getAll(): GetAllRequestBuilder<Categories<T>, T>;
    /**
     * Returns a request builder for creating a `Categories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Categories`.
     */
    create(entity: Categories<T>): CreateRequestBuilder<Categories<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Categories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Categories`.
     */
    update(entity: Categories<T>): UpdateRequestBuilder<Categories<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Categories`.
     * @param categoryId Key property. See {@link Categories.categoryId}.
     * @returns A request builder for creating requests that delete an entity of type `Categories`.
     */
    delete(categoryId: number): DeleteRequestBuilder<Categories<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Categories`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Categories` by taking the entity as a parameter.
     */
    delete(entity: Categories<T>): DeleteRequestBuilder<Categories<T>, T>;
}
//# sourceMappingURL=CategoriesRequestBuilder.d.ts.map
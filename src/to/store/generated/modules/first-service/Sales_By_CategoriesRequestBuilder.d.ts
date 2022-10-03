import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Sales_By_Categories } from './Sales_By_Categories';
/**
 * Request builder class for operations supported on the {@link Sales_By_Categories} entity.
 */
export declare class Sales_By_CategoriesRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Sales_By_Categories<T>, T> {
    /**
     * Returns a request builder for retrieving one `Sales_By_Categories` entity based on its keys.
     * @param categoryId Key property. See {@link Sales_By_Categories.categoryId}.
     * @param categoryName Key property. See {@link Sales_By_Categories.categoryName}.
     * @param productName Key property. See {@link Sales_By_Categories.productName}.
     * @returns A request builder for creating requests to retrieve one `Sales_By_Categories` entity based on its keys.
     */
    getByKey(categoryId: DeserializedType<T, 'Edm.Int32'>, categoryName: DeserializedType<T, 'Edm.String'>, productName: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Sales_By_Categories<T>, T>;
    /**
     * Returns a request builder for querying all `Sales_By_Categories` entities.
     * @returns A request builder for creating requests to retrieve all `Sales_By_Categories` entities.
     */
    getAll(): GetAllRequestBuilder<Sales_By_Categories<T>, T>;
    /**
     * Returns a request builder for creating a `Sales_By_Categories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sales_By_Categories`.
     */
    create(entity: Sales_By_Categories<T>): CreateRequestBuilder<Sales_By_Categories<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Sales_By_Categories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sales_By_Categories`.
     */
    update(entity: Sales_By_Categories<T>): UpdateRequestBuilder<Sales_By_Categories<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Sales_By_Categories`.
     * @param categoryId Key property. See {@link Sales_By_Categories.categoryId}.
     * @param categoryName Key property. See {@link Sales_By_Categories.categoryName}.
     * @param productName Key property. See {@link Sales_By_Categories.productName}.
     * @returns A request builder for creating requests that delete an entity of type `Sales_By_Categories`.
     */
    delete(categoryId: number, categoryName: string, productName: string): DeleteRequestBuilder<Sales_By_Categories<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Sales_By_Categories`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Sales_By_Categories` by taking the entity as a parameter.
     */
    delete(entity: Sales_By_Categories<T>): DeleteRequestBuilder<Sales_By_Categories<T>, T>;
}
//# sourceMappingURL=Sales_By_CategoriesRequestBuilder.d.ts.map
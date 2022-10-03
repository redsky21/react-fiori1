import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Current_Product_Lists } from './Current_Product_Lists';
/**
 * Request builder class for operations supported on the {@link Current_Product_Lists} entity.
 */
export declare class Current_Product_ListsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Current_Product_Lists<T>, T> {
    /**
     * Returns a request builder for retrieving one `Current_Product_Lists` entity based on its keys.
     * @param productId Key property. See {@link Current_Product_Lists.productId}.
     * @param productName Key property. See {@link Current_Product_Lists.productName}.
     * @returns A request builder for creating requests to retrieve one `Current_Product_Lists` entity based on its keys.
     */
    getByKey(productId: DeserializedType<T, 'Edm.Int32'>, productName: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Current_Product_Lists<T>, T>;
    /**
     * Returns a request builder for querying all `Current_Product_Lists` entities.
     * @returns A request builder for creating requests to retrieve all `Current_Product_Lists` entities.
     */
    getAll(): GetAllRequestBuilder<Current_Product_Lists<T>, T>;
    /**
     * Returns a request builder for creating a `Current_Product_Lists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Current_Product_Lists`.
     */
    create(entity: Current_Product_Lists<T>): CreateRequestBuilder<Current_Product_Lists<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Current_Product_Lists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Current_Product_Lists`.
     */
    update(entity: Current_Product_Lists<T>): UpdateRequestBuilder<Current_Product_Lists<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Current_Product_Lists`.
     * @param productId Key property. See {@link Current_Product_Lists.productId}.
     * @param productName Key property. See {@link Current_Product_Lists.productName}.
     * @returns A request builder for creating requests that delete an entity of type `Current_Product_Lists`.
     */
    delete(productId: number, productName: string): DeleteRequestBuilder<Current_Product_Lists<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Current_Product_Lists`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Current_Product_Lists` by taking the entity as a parameter.
     */
    delete(entity: Current_Product_Lists<T>): DeleteRequestBuilder<Current_Product_Lists<T>, T>;
}
//# sourceMappingURL=Current_Product_ListsRequestBuilder.d.ts.map
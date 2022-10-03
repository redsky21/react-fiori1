import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Order_Details } from './Order_Details';
/**
 * Request builder class for operations supported on the {@link Order_Details} entity.
 */
export declare class Order_DetailsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Order_Details<T>, T> {
    /**
     * Returns a request builder for retrieving one `Order_Details` entity based on its keys.
     * @param orderId Key property. See {@link Order_Details.orderId}.
     * @param productId Key property. See {@link Order_Details.productId}.
     * @returns A request builder for creating requests to retrieve one `Order_Details` entity based on its keys.
     */
    getByKey(orderId: DeserializedType<T, 'Edm.Int32'>, productId: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<Order_Details<T>, T>;
    /**
     * Returns a request builder for querying all `Order_Details` entities.
     * @returns A request builder for creating requests to retrieve all `Order_Details` entities.
     */
    getAll(): GetAllRequestBuilder<Order_Details<T>, T>;
    /**
     * Returns a request builder for creating a `Order_Details` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Order_Details`.
     */
    create(entity: Order_Details<T>): CreateRequestBuilder<Order_Details<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Order_Details`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Order_Details`.
     */
    update(entity: Order_Details<T>): UpdateRequestBuilder<Order_Details<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Order_Details`.
     * @param orderId Key property. See {@link Order_Details.orderId}.
     * @param productId Key property. See {@link Order_Details.productId}.
     * @returns A request builder for creating requests that delete an entity of type `Order_Details`.
     */
    delete(orderId: number, productId: number): DeleteRequestBuilder<Order_Details<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Order_Details`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Order_Details` by taking the entity as a parameter.
     */
    delete(entity: Order_Details<T>): DeleteRequestBuilder<Order_Details<T>, T>;
}
//# sourceMappingURL=Order_DetailsRequestBuilder.d.ts.map
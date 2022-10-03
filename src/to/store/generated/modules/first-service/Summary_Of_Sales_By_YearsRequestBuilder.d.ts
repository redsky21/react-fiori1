import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Summary_Of_Sales_By_Years } from './Summary_Of_Sales_By_Years';
/**
 * Request builder class for operations supported on the {@link Summary_Of_Sales_By_Years} entity.
 */
export declare class Summary_Of_Sales_By_YearsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Summary_Of_Sales_By_Years<T>, T> {
    /**
     * Returns a request builder for retrieving one `Summary_Of_Sales_By_Years` entity based on its keys.
     * @param orderId Key property. See {@link Summary_Of_Sales_By_Years.orderId}.
     * @returns A request builder for creating requests to retrieve one `Summary_Of_Sales_By_Years` entity based on its keys.
     */
    getByKey(orderId: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<Summary_Of_Sales_By_Years<T>, T>;
    /**
     * Returns a request builder for querying all `Summary_Of_Sales_By_Years` entities.
     * @returns A request builder for creating requests to retrieve all `Summary_Of_Sales_By_Years` entities.
     */
    getAll(): GetAllRequestBuilder<Summary_Of_Sales_By_Years<T>, T>;
    /**
     * Returns a request builder for creating a `Summary_Of_Sales_By_Years` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Summary_Of_Sales_By_Years`.
     */
    create(entity: Summary_Of_Sales_By_Years<T>): CreateRequestBuilder<Summary_Of_Sales_By_Years<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Summary_Of_Sales_By_Years`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Summary_Of_Sales_By_Years`.
     */
    update(entity: Summary_Of_Sales_By_Years<T>): UpdateRequestBuilder<Summary_Of_Sales_By_Years<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Summary_Of_Sales_By_Years`.
     * @param orderId Key property. See {@link Summary_Of_Sales_By_Years.orderId}.
     * @returns A request builder for creating requests that delete an entity of type `Summary_Of_Sales_By_Years`.
     */
    delete(orderId: number): DeleteRequestBuilder<Summary_Of_Sales_By_Years<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Summary_Of_Sales_By_Years`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Summary_Of_Sales_By_Years` by taking the entity as a parameter.
     */
    delete(entity: Summary_Of_Sales_By_Years<T>): DeleteRequestBuilder<Summary_Of_Sales_By_Years<T>, T>;
}
//# sourceMappingURL=Summary_Of_Sales_By_YearsRequestBuilder.d.ts.map
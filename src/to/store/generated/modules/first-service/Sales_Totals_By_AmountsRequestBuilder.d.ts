import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Sales_Totals_By_Amounts } from './Sales_Totals_By_Amounts';
/**
 * Request builder class for operations supported on the {@link Sales_Totals_By_Amounts} entity.
 */
export declare class Sales_Totals_By_AmountsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Sales_Totals_By_Amounts<T>, T> {
    /**
     * Returns a request builder for retrieving one `Sales_Totals_By_Amounts` entity based on its keys.
     * @param orderId Key property. See {@link Sales_Totals_By_Amounts.orderId}.
     * @param companyName Key property. See {@link Sales_Totals_By_Amounts.companyName}.
     * @returns A request builder for creating requests to retrieve one `Sales_Totals_By_Amounts` entity based on its keys.
     */
    getByKey(orderId: DeserializedType<T, 'Edm.Int32'>, companyName: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
    /**
     * Returns a request builder for querying all `Sales_Totals_By_Amounts` entities.
     * @returns A request builder for creating requests to retrieve all `Sales_Totals_By_Amounts` entities.
     */
    getAll(): GetAllRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
    /**
     * Returns a request builder for creating a `Sales_Totals_By_Amounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sales_Totals_By_Amounts`.
     */
    create(entity: Sales_Totals_By_Amounts<T>): CreateRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Sales_Totals_By_Amounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sales_Totals_By_Amounts`.
     */
    update(entity: Sales_Totals_By_Amounts<T>): UpdateRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Sales_Totals_By_Amounts`.
     * @param orderId Key property. See {@link Sales_Totals_By_Amounts.orderId}.
     * @param companyName Key property. See {@link Sales_Totals_By_Amounts.companyName}.
     * @returns A request builder for creating requests that delete an entity of type `Sales_Totals_By_Amounts`.
     */
    delete(orderId: number, companyName: string): DeleteRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Sales_Totals_By_Amounts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Sales_Totals_By_Amounts` by taking the entity as a parameter.
     */
    delete(entity: Sales_Totals_By_Amounts<T>): DeleteRequestBuilder<Sales_Totals_By_Amounts<T>, T>;
}
//# sourceMappingURL=Sales_Totals_By_AmountsRequestBuilder.d.ts.map
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Alphabetical_List_Of_Products } from './Alphabetical_List_Of_Products';
/**
 * Request builder class for operations supported on the {@link Alphabetical_List_Of_Products} entity.
 */
export declare class Alphabetical_List_Of_ProductsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Alphabetical_List_Of_Products<T>, T> {
    /**
     * Returns a request builder for retrieving one `Alphabetical_List_Of_Products` entity based on its keys.
     * @param productId Key property. See {@link Alphabetical_List_Of_Products.productId}.
     * @param productName Key property. See {@link Alphabetical_List_Of_Products.productName}.
     * @param discontinued Key property. See {@link Alphabetical_List_Of_Products.discontinued}.
     * @param categoryName Key property. See {@link Alphabetical_List_Of_Products.categoryName}.
     * @returns A request builder for creating requests to retrieve one `Alphabetical_List_Of_Products` entity based on its keys.
     */
    getByKey(productId: DeserializedType<T, 'Edm.Int32'>, productName: DeserializedType<T, 'Edm.String'>, discontinued: DeserializedType<T, 'Edm.Boolean'>, categoryName: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Alphabetical_List_Of_Products<T>, T>;
    /**
     * Returns a request builder for querying all `Alphabetical_List_Of_Products` entities.
     * @returns A request builder for creating requests to retrieve all `Alphabetical_List_Of_Products` entities.
     */
    getAll(): GetAllRequestBuilder<Alphabetical_List_Of_Products<T>, T>;
    /**
     * Returns a request builder for creating a `Alphabetical_List_Of_Products` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Alphabetical_List_Of_Products`.
     */
    create(entity: Alphabetical_List_Of_Products<T>): CreateRequestBuilder<Alphabetical_List_Of_Products<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Alphabetical_List_Of_Products`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Alphabetical_List_Of_Products`.
     */
    update(entity: Alphabetical_List_Of_Products<T>): UpdateRequestBuilder<Alphabetical_List_Of_Products<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Alphabetical_List_Of_Products`.
     * @param productId Key property. See {@link Alphabetical_List_Of_Products.productId}.
     * @param productName Key property. See {@link Alphabetical_List_Of_Products.productName}.
     * @param discontinued Key property. See {@link Alphabetical_List_Of_Products.discontinued}.
     * @param categoryName Key property. See {@link Alphabetical_List_Of_Products.categoryName}.
     * @returns A request builder for creating requests that delete an entity of type `Alphabetical_List_Of_Products`.
     */
    delete(productId: number, productName: string, discontinued: boolean, categoryName: string): DeleteRequestBuilder<Alphabetical_List_Of_Products<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Alphabetical_List_Of_Products`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Alphabetical_List_Of_Products` by taking the entity as a parameter.
     */
    delete(entity: Alphabetical_List_Of_Products<T>): DeleteRequestBuilder<Alphabetical_List_Of_Products<T>, T>;
}
//# sourceMappingURL=Alphabetical_List_Of_ProductsRequestBuilder.d.ts.map
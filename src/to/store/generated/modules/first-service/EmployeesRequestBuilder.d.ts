import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Employees } from './Employees';
/**
 * Request builder class for operations supported on the {@link Employees} entity.
 */
export declare class EmployeesRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Employees<T>, T> {
    /**
     * Returns a request builder for retrieving one `Employees` entity based on its keys.
     * @param employeeId Key property. See {@link Employees.employeeId}.
     * @returns A request builder for creating requests to retrieve one `Employees` entity based on its keys.
     */
    getByKey(employeeId: DeserializedType<T, 'Edm.Int32'>): GetByKeyRequestBuilder<Employees<T>, T>;
    /**
     * Returns a request builder for querying all `Employees` entities.
     * @returns A request builder for creating requests to retrieve all `Employees` entities.
     */
    getAll(): GetAllRequestBuilder<Employees<T>, T>;
    /**
     * Returns a request builder for creating a `Employees` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Employees`.
     */
    create(entity: Employees<T>): CreateRequestBuilder<Employees<T>, T>;
    /**
     * Returns a request builder for updating an entity of type `Employees`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Employees`.
     */
    update(entity: Employees<T>): UpdateRequestBuilder<Employees<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Employees`.
     * @param employeeId Key property. See {@link Employees.employeeId}.
     * @returns A request builder for creating requests that delete an entity of type `Employees`.
     */
    delete(employeeId: number): DeleteRequestBuilder<Employees<T>, T>;
    /**
     * Returns a request builder for deleting an entity of type `Employees`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Employees` by taking the entity as a parameter.
     */
    delete(entity: Employees<T>): DeleteRequestBuilder<Employees<T>, T>;
}
//# sourceMappingURL=EmployeesRequestBuilder.d.ts.map
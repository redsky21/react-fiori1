/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Customers } from './Customers';

/**
 * Request builder class for operations supported on the {@link Customers} entity.
 */
export class CustomersRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Customers<T>, T> {
  /**
   * Returns a request builder for retrieving one `Customers` entity based on its keys.
   * @param customerId Key property. See {@link Customers.customerId}.
   * @returns A request builder for creating requests to retrieve one `Customers` entity based on its keys.
   */
  getByKey(customerId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Customers<T>, T> {
    return new GetByKeyRequestBuilder<Customers<T>, T>(this.entityApi, { CustomerID: customerId });
  }

  /**
   * Returns a request builder for querying all `Customers` entities.
   * @returns A request builder for creating requests to retrieve all `Customers` entities.
   */
  getAll(): GetAllRequestBuilder<Customers<T>, T> {
    return new GetAllRequestBuilder<Customers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Customers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Customers`.
   */
  create(entity: Customers<T>): CreateRequestBuilder<Customers<T>, T> {
    return new CreateRequestBuilder<Customers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Customers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Customers`.
   */
  update(entity: Customers<T>): UpdateRequestBuilder<Customers<T>, T> {
    return new UpdateRequestBuilder<Customers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Customers`.
   * @param customerId Key property. See {@link Customers.customerId}.
   * @returns A request builder for creating requests that delete an entity of type `Customers`.
   */
  delete(customerId: string): DeleteRequestBuilder<Customers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Customers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Customers` by taking the entity as a parameter.
   */
  delete(entity: Customers<T>): DeleteRequestBuilder<Customers<T>, T>;
  delete(customerIdOrEntity: any): DeleteRequestBuilder<Customers<T>, T> {
    return new DeleteRequestBuilder<Customers<T>, T>(this.entityApi, customerIdOrEntity instanceof Customers ? customerIdOrEntity : { CustomerID: customerIdOrEntity! });
  }
}

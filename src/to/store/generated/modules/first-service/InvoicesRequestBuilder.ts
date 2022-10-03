/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Invoices } from './Invoices';

/**
 * Request builder class for operations supported on the {@link Invoices} entity.
 */
export class InvoicesRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Invoices<T>, T> {
  /**
   * Returns a request builder for retrieving one `Invoices` entity based on its keys.
   * @param customerName Key property. See {@link Invoices.customerName}.
   * @param salesperson Key property. See {@link Invoices.salesperson}.
   * @param orderId Key property. See {@link Invoices.orderId}.
   * @param shipperName Key property. See {@link Invoices.shipperName}.
   * @param productId Key property. See {@link Invoices.productId}.
   * @param productName Key property. See {@link Invoices.productName}.
   * @param unitPrice Key property. See {@link Invoices.unitPrice}.
   * @param quantity Key property. See {@link Invoices.quantity}.
   * @param discount Key property. See {@link Invoices.discount}.
   * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
   */
  getByKey(customerName: DeserializedType<T, 'Edm.String'>, salesperson: DeserializedType<T, 'Edm.String'>, orderId: DeserializedType<T, 'Edm.Int32'>, shipperName: DeserializedType<T, 'Edm.String'>, productId: DeserializedType<T, 'Edm.Int32'>, productName: DeserializedType<T, 'Edm.String'>, unitPrice: DeserializedType<T, 'Edm.Decimal'>, quantity: DeserializedType<T, 'Edm.Int16'>, discount: DeserializedType<T, 'Edm.Single'>): GetByKeyRequestBuilder<Invoices<T>, T> {
    return new GetByKeyRequestBuilder<Invoices<T>, T>(this.entityApi, {
      CustomerName: customerName,
      Salesperson: salesperson,
      OrderID: orderId,
      ShipperName: shipperName,
      ProductID: productId,
      ProductName: productName,
      UnitPrice: unitPrice,
      Quantity: quantity,
      Discount: discount
    });
  }

  /**
   * Returns a request builder for querying all `Invoices` entities.
   * @returns A request builder for creating requests to retrieve all `Invoices` entities.
   */
  getAll(): GetAllRequestBuilder<Invoices<T>, T> {
    return new GetAllRequestBuilder<Invoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Invoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Invoices`.
   */
  create(entity: Invoices<T>): CreateRequestBuilder<Invoices<T>, T> {
    return new CreateRequestBuilder<Invoices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Invoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Invoices`.
   */
  update(entity: Invoices<T>): UpdateRequestBuilder<Invoices<T>, T> {
    return new UpdateRequestBuilder<Invoices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param customerName Key property. See {@link Invoices.customerName}.
   * @param salesperson Key property. See {@link Invoices.salesperson}.
   * @param orderId Key property. See {@link Invoices.orderId}.
   * @param shipperName Key property. See {@link Invoices.shipperName}.
   * @param productId Key property. See {@link Invoices.productId}.
   * @param productName Key property. See {@link Invoices.productName}.
   * @param unitPrice Key property. See {@link Invoices.unitPrice}.
   * @param quantity Key property. See {@link Invoices.quantity}.
   * @param discount Key property. See {@link Invoices.discount}.
   * @returns A request builder for creating requests that delete an entity of type `Invoices`.
   */
  delete(customerName: string, salesperson: string, orderId: number, shipperName: string, productId: number, productName: string, unitPrice: BigNumber, quantity: number, discount: number): DeleteRequestBuilder<Invoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Invoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Invoices` by taking the entity as a parameter.
   */
  delete(entity: Invoices<T>): DeleteRequestBuilder<Invoices<T>, T>;
  delete(customerNameOrEntity: any, salesperson?: string, orderId?: number, shipperName?: string, productId?: number, productName?: string, unitPrice?: BigNumber, quantity?: number, discount?: number): DeleteRequestBuilder<Invoices<T>, T> {
    return new DeleteRequestBuilder<Invoices<T>, T>(this.entityApi, customerNameOrEntity instanceof Invoices ? customerNameOrEntity : {
      CustomerName: customerNameOrEntity!,
      Salesperson: salesperson!,
      OrderID: orderId!,
      ShipperName: shipperName!,
      ProductID: productId!,
      ProductName: productName!,
      UnitPrice: unitPrice!,
      Quantity: quantity!,
      Discount: discount!
    });
  }
}

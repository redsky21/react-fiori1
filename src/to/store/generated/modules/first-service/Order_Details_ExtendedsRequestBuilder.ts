/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Order_Details_Extendeds } from './Order_Details_Extendeds';

/**
 * Request builder class for operations supported on the {@link Order_Details_Extendeds} entity.
 */
export class Order_Details_ExtendedsRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Order_Details_Extendeds<T>, T> {
  /**
   * Returns a request builder for retrieving one `Order_Details_Extendeds` entity based on its keys.
   * @param orderId Key property. See {@link Order_Details_Extendeds.orderId}.
   * @param productId Key property. See {@link Order_Details_Extendeds.productId}.
   * @param productName Key property. See {@link Order_Details_Extendeds.productName}.
   * @param unitPrice Key property. See {@link Order_Details_Extendeds.unitPrice}.
   * @param quantity Key property. See {@link Order_Details_Extendeds.quantity}.
   * @param discount Key property. See {@link Order_Details_Extendeds.discount}.
   * @returns A request builder for creating requests to retrieve one `Order_Details_Extendeds` entity based on its keys.
   */
  getByKey(orderId: DeserializedType<T, 'Edm.Int32'>, productId: DeserializedType<T, 'Edm.Int32'>, productName: DeserializedType<T, 'Edm.String'>, unitPrice: DeserializedType<T, 'Edm.Decimal'>, quantity: DeserializedType<T, 'Edm.Int16'>, discount: DeserializedType<T, 'Edm.Single'>): GetByKeyRequestBuilder<Order_Details_Extendeds<T>, T> {
    return new GetByKeyRequestBuilder<Order_Details_Extendeds<T>, T>(this.entityApi, {
      OrderID: orderId,
      ProductID: productId,
      ProductName: productName,
      UnitPrice: unitPrice,
      Quantity: quantity,
      Discount: discount
    });
  }

  /**
   * Returns a request builder for querying all `Order_Details_Extendeds` entities.
   * @returns A request builder for creating requests to retrieve all `Order_Details_Extendeds` entities.
   */
  getAll(): GetAllRequestBuilder<Order_Details_Extendeds<T>, T> {
    return new GetAllRequestBuilder<Order_Details_Extendeds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Order_Details_Extendeds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Order_Details_Extendeds`.
   */
  create(entity: Order_Details_Extendeds<T>): CreateRequestBuilder<Order_Details_Extendeds<T>, T> {
    return new CreateRequestBuilder<Order_Details_Extendeds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Order_Details_Extendeds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Order_Details_Extendeds`.
   */
  update(entity: Order_Details_Extendeds<T>): UpdateRequestBuilder<Order_Details_Extendeds<T>, T> {
    return new UpdateRequestBuilder<Order_Details_Extendeds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Order_Details_Extendeds`.
   * @param orderId Key property. See {@link Order_Details_Extendeds.orderId}.
   * @param productId Key property. See {@link Order_Details_Extendeds.productId}.
   * @param productName Key property. See {@link Order_Details_Extendeds.productName}.
   * @param unitPrice Key property. See {@link Order_Details_Extendeds.unitPrice}.
   * @param quantity Key property. See {@link Order_Details_Extendeds.quantity}.
   * @param discount Key property. See {@link Order_Details_Extendeds.discount}.
   * @returns A request builder for creating requests that delete an entity of type `Order_Details_Extendeds`.
   */
  delete(orderId: number, productId: number, productName: string, unitPrice: BigNumber, quantity: number, discount: number): DeleteRequestBuilder<Order_Details_Extendeds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Order_Details_Extendeds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Order_Details_Extendeds` by taking the entity as a parameter.
   */
  delete(entity: Order_Details_Extendeds<T>): DeleteRequestBuilder<Order_Details_Extendeds<T>, T>;
  delete(orderIdOrEntity: any, productId?: number, productName?: string, unitPrice?: BigNumber, quantity?: number, discount?: number): DeleteRequestBuilder<Order_Details_Extendeds<T>, T> {
    return new DeleteRequestBuilder<Order_Details_Extendeds<T>, T>(this.entityApi, orderIdOrEntity instanceof Order_Details_Extendeds ? orderIdOrEntity : {
      OrderID: orderIdOrEntity!,
      ProductID: productId!,
      ProductName: productName!,
      UnitPrice: unitPrice!,
      Quantity: quantity!,
      Discount: discount!
    });
  }
}

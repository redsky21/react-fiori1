/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Summary_of_Sales_by_Years" of service "first".
 */
export class Summary_Of_Sales_By_Years<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Summary_Of_Sales_By_YearsType<T> {
  /**
   * Technical entity name for Summary_Of_Sales_By_Years.
   */
  static _entityName = 'Summary_of_Sales_by_Years';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Summary_Of_Sales_By_Years entity
   */
  static _keys = ['OrderID'];
  /**
   * Shipped Date.
   * @nullable
   */
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Order Id.
   */
  orderId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subtotal.
   * @nullable
   */
  subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}

export interface Summary_Of_Sales_By_YearsType<T extends DeSerializers = DefaultDeSerializers> {
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  orderId: DeserializedType<T, 'Edm.Int32'>;
  subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
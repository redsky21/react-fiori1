/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Order_Subtotals" of service "first".
 */
export class Order_Subtotals<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Order_SubtotalsType<T> {
  /**
   * Technical entity name for Order_Subtotals.
   */
  static _entityName = 'Order_Subtotals';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Order_Subtotals entity
   */
  static _keys = ['OrderID'];
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

export interface Order_SubtotalsType<T extends DeSerializers = DefaultDeSerializers> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}

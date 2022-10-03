/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Current_Product_Lists" of service "first".
 */
export class Current_Product_Lists<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Current_Product_ListsType<T> {
  /**
   * Technical entity name for Current_Product_Lists.
   */
  static _entityName = 'Current_Product_Lists';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Current_Product_Lists entity
   */
  static _keys = ['ProductID', 'ProductName'];
  /**
   * Product Id.
   */
  productId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName!: DeserializedType<T, 'Edm.String'>;
}

export interface Current_Product_ListsType<T extends DeSerializers = DefaultDeSerializers> {
  productId: DeserializedType<T, 'Edm.Int32'>;
  productName: DeserializedType<T, 'Edm.String'>;
}

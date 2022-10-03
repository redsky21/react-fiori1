/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Products_by_Categories" of service "first".
 */
export class Products_By_Categories<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Products_By_CategoriesType<T> {
  /**
   * Technical entity name for Products_By_Categories.
   */
  static _entityName = 'Products_by_Categories';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Products_By_Categories entity
   */
  static _keys = ['CategoryName', 'ProductName', 'Discontinued'];
  /**
   * Category Name.
   * Maximum length: 15.
   */
  categoryName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Per Unit.
   * Maximum length: 20.
   * @nullable
   */
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Units In Stock.
   * @nullable
   */
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Discontinued.
   */
  discontinued!: DeserializedType<T, 'Edm.Boolean'>;
}

export interface Products_By_CategoriesType<T extends DeSerializers = DefaultDeSerializers> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  productName: DeserializedType<T, 'Edm.String'>;
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  discontinued: DeserializedType<T, 'Edm.Boolean'>;
}

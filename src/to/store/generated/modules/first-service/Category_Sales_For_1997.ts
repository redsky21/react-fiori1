/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Category_Sales_for_1997" of service "first".
 */
export class Category_Sales_For_1997<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Category_Sales_For_1997Type<T> {
  /**
   * Technical entity name for Category_Sales_For_1997.
   */
  static _entityName = 'Category_Sales_for_1997';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Category_Sales_For_1997 entity
   */
  static _keys = ['CategoryName'];
  /**
   * Category Name.
   * Maximum length: 15.
   */
  categoryName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Sales.
   * @nullable
   */
  categorySales?: DeserializedType<T, 'Edm.Decimal'> | null;
}

export interface Category_Sales_For_1997Type<T extends DeSerializers = DefaultDeSerializers> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  categorySales?: DeserializedType<T, 'Edm.Decimal'> | null;
}

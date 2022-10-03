/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Alphabetical_list_of_products" of service "first".
 */
export class Alphabetical_List_Of_Products<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Alphabetical_List_Of_ProductsType<T> {
  /**
   * Technical entity name for Alphabetical_List_Of_Products.
   */
  static _entityName = 'Alphabetical_list_of_products';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Alphabetical_List_Of_Products entity
   */
  static _keys = ['ProductID', 'ProductName', 'Discontinued', 'CategoryName'];
  /**
   * Product Id.
   */
  productId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  productName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Id.
   * @nullable
   */
  supplierId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Category Id.
   * @nullable
   */
  categoryId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Quantity Per Unit.
   * Maximum length: 20.
   * @nullable
   */
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Units In Stock.
   * @nullable
   */
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Units On Order.
   * @nullable
   */
  unitsOnOrder?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Reorder Level.
   * @nullable
   */
  reorderLevel?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Discontinued.
   */
  discontinued!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Category Name.
   * Maximum length: 15.
   */
  categoryName!: DeserializedType<T, 'Edm.String'>;
}

export interface Alphabetical_List_Of_ProductsType<T extends DeSerializers = DefaultDeSerializers> {
  productId: DeserializedType<T, 'Edm.Int32'>;
  productName: DeserializedType<T, 'Edm.String'>;
  supplierId?: DeserializedType<T, 'Edm.Int32'> | null;
  categoryId?: DeserializedType<T, 'Edm.Int32'> | null;
  quantityPerUnit?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitsInStock?: DeserializedType<T, 'Edm.Int16'> | null;
  unitsOnOrder?: DeserializedType<T, 'Edm.Int16'> | null;
  reorderLevel?: DeserializedType<T, 'Edm.Int16'> | null;
  discontinued: DeserializedType<T, 'Edm.Boolean'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
}

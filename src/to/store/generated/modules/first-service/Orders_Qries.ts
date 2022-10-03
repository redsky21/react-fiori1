/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Orders_Qries" of service "first".
 */
export class Orders_Qries<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Orders_QriesType<T> {
  /**
   * Technical entity name for Orders_Qries.
   */
  static _entityName = 'Orders_Qries';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Orders_Qries entity
   */
  static _keys = ['OrderID', 'CompanyName'];
  /**
   * Order Id.
   */
  orderId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Id.
   * Maximum length: 5.
   * @nullable
   */
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Order Date.
   * @nullable
   */
  orderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Required Date.
   * @nullable
   */
  requiredDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Shipped Date.
   * @nullable
   */
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Ship Via.
   * @nullable
   */
  shipVia?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Freight.
   * @nullable
   */
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Ship Name.
   * Maximum length: 40.
   * @nullable
   */
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Address.
   * Maximum length: 60.
   * @nullable
   */
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship City.
   * Maximum length: 15.
   * @nullable
   */
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Region.
   * Maximum length: 15.
   * @nullable
   */
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Country.
   * Maximum length: 15.
   * @nullable
   */
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  companyName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Address.
   * Maximum length: 60.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 15.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 15.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 15.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
}

export interface Orders_QriesType<T extends DeSerializers = DefaultDeSerializers> {
  orderId: DeserializedType<T, 'Edm.Int32'>;
  customerId?: DeserializedType<T, 'Edm.String'> | null;
  employeeId?: DeserializedType<T, 'Edm.Int32'> | null;
  orderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  requiredDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  shipVia?: DeserializedType<T, 'Edm.Int32'> | null;
  freight?: DeserializedType<T, 'Edm.Decimal'> | null;
  shipName?: DeserializedType<T, 'Edm.String'> | null;
  shipAddress?: DeserializedType<T, 'Edm.String'> | null;
  shipCity?: DeserializedType<T, 'Edm.String'> | null;
  shipRegion?: DeserializedType<T, 'Edm.String'> | null;
  shipPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  shipCountry?: DeserializedType<T, 'Edm.String'> | null;
  companyName: DeserializedType<T, 'Edm.String'>;
  address?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
}

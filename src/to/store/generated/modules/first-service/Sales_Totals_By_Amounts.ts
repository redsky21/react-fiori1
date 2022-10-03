/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';

/**
 * This class represents the entity "Sales_Totals_by_Amounts" of service "first".
 */
export class Sales_Totals_By_Amounts<T extends DeSerializers = DefaultDeSerializers> extends Entity implements Sales_Totals_By_AmountsType<T> {
  /**
   * Technical entity name for Sales_Totals_By_Amounts.
   */
  static _entityName = 'Sales_Totals_by_Amounts';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Sales_Totals_By_Amounts entity
   */
  static _keys = ['OrderID', 'CompanyName'];
  /**
   * Sale Amount.
   * @nullable
   */
  saleAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Order Id.
   */
  orderId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  companyName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipped Date.
   * @nullable
   */
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}

export interface Sales_Totals_By_AmountsType<T extends DeSerializers = DefaultDeSerializers> {
  saleAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  orderId: DeserializedType<T, 'Edm.Int32'>;
  companyName: DeserializedType<T, 'Edm.String'>;
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}

/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { Customers, CustomersType } from './Customers';

/**
 * This class represents the entity "CustomerDemographics" of service "first".
 */
export class CustomerDemographics<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerDemographicsType<T> {
  /**
   * Technical entity name for CustomerDemographics.
   */
  static _entityName = 'CustomerDemographics';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the CustomerDemographics entity
   */
  static _keys = ['CustomerTypeID'];
  /**
   * Customer Type Id.
   * Maximum length: 10.
   */
  customerTypeId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Desc.
   * Maximum length: Max.
   * @nullable
   */
  customerDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Customers} entity.
   */
  customers!: Customers<T>[];
}

export interface CustomerDemographicsType<T extends DeSerializers = DefaultDeSerializers> {
  customerTypeId: DeserializedType<T, 'Edm.String'>;
  customerDesc?: DeserializedType<T, 'Edm.String'> | null;
  customers: CustomersType<T>[];
}

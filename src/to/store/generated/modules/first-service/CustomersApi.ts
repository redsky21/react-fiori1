/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Customers } from './Customers';
import { CustomersRequestBuilder } from './CustomersRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { CustomerDemographicsApi } from './CustomerDemographicsApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export class CustomersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Customers<
        DeSerializersT
      >, 
      DeSerializersT
    > {
  public deSerializers: DeSerializersT;

  constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
      /**
       * Static representation of the one-to-many navigation property {@link orders} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ORDERS: Link<
            Customers<DeSerializersT>,
            DeSerializersT,
            OrdersApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-many navigation property {@link customerDemographics} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      CUSTOMER_DEMOGRAPHICS: Link<
            Customers<DeSerializersT>,
            DeSerializersT,
            CustomerDemographicsApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        OrdersApi<DeSerializersT>,CustomerDemographicsApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          ORDERS: new Link(
              'Orders',
              this,
              linkedApis[0]
            ),
          CUSTOMER_DEMOGRAPHICS: new Link(
              'CustomerDemographics',
              this,
              linkedApis[1]
            )
        };
        return this;
      }
  
  entityConstructor = Customers;
  
  requestBuilder(): CustomersRequestBuilder<
    DeSerializersT
  > {
    return new CustomersRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Customers<
      DeSerializersT
    >,
    DeSerializersT
  > {
    return entityBuilder(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
  Customers<
      DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Customers, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Customers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUSTOMER_ID: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
COMPANY_NAME: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
CONTACT_NAME: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CONTACT_TITLE: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
ADDRESS: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
CITY: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
REGION: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
POSTAL_CODE: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
COUNTRY: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PHONE: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
FAX: OrderableEdmTypeField<Customers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-many navigation property {@link orders} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ORDERS: Link<
      Customers<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-many navigation property {@link customerDemographics} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CUSTOMER_DEMOGRAPHICS: Link<
      Customers<DeSerializersT>,
      DeSerializersT,
      CustomerDemographicsApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<Customers<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link customerId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CUSTOMER_ID: fieldBuilder.buildEdmTypeField('CustomerID', 'Edm.String', false),
/**
 * Static representation of the {@link companyName} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COMPANY_NAME: fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', false),
/**
 * Static representation of the {@link contactName} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CONTACT_NAME: fieldBuilder.buildEdmTypeField('ContactName', 'Edm.String', true),
/**
 * Static representation of the {@link contactTitle} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CONTACT_TITLE: fieldBuilder.buildEdmTypeField('ContactTitle', 'Edm.String', true),
/**
 * Static representation of the {@link address} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
/**
 * Static representation of the {@link city} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
/**
 * Static representation of the {@link region} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
/**
 * Static representation of the {@link postalCode} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
/**
 * Static representation of the {@link country} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
/**
 * Static representation of the {@link phone} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
/**
 * Static representation of the {@link fax} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Customers) 
  };
    }
  
    return this._schema;
  }
}

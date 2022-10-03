/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Shippers } from './Shippers';
import { ShippersRequestBuilder } from './ShippersRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export class ShippersApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Shippers<
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
            Shippers<DeSerializersT>,
            DeSerializersT,
            OrdersApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        OrdersApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          ORDERS: new Link(
              'Orders',
              this,
              linkedApis[0]
            )
        };
        return this;
      }
  
  entityConstructor = Shippers;
  
  requestBuilder(): ShippersRequestBuilder<
    DeSerializersT
  > {
    return new ShippersRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Shippers<
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
  Shippers<
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

  private _fieldBuilder?: FieldBuilder<typeof Shippers, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Shippers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SHIPPER_ID: OrderableEdmTypeField<Shippers<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
COMPANY_NAME: OrderableEdmTypeField<Shippers<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
PHONE: OrderableEdmTypeField<Shippers<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
/**
 * Static representation of the one-to-many navigation property {@link orders} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ORDERS: Link<
      Shippers<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<Shippers<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link shipperId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SHIPPER_ID: fieldBuilder.buildEdmTypeField('ShipperID', 'Edm.Int32', false),
/**
 * Static representation of the {@link companyName} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
COMPANY_NAME: fieldBuilder.buildEdmTypeField('CompanyName', 'Edm.String', false),
/**
 * Static representation of the {@link phone} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Shippers) 
  };
    }
  
    return this._schema;
  }
}

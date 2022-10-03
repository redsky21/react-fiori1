/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Summary_Of_Sales_By_Years } from './Summary_Of_Sales_By_Years';
import { Summary_Of_Sales_By_YearsRequestBuilder } from './Summary_Of_Sales_By_YearsRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class Summary_Of_Sales_By_YearsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Summary_Of_Sales_By_Years<
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
      
    };

  _addNavigationProperties(
      linkedApis: [
        
      ]): this {
        this.navigationPropertyFields = {
          
        };
        return this;
      }
  
  entityConstructor = Summary_Of_Sales_By_Years;
  
  requestBuilder(): Summary_Of_Sales_By_YearsRequestBuilder<
    DeSerializersT
  > {
    return new Summary_Of_Sales_By_YearsRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Summary_Of_Sales_By_Years<
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
  Summary_Of_Sales_By_Years<
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

  private _fieldBuilder?: FieldBuilder<typeof Summary_Of_Sales_By_Years, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Summary_Of_Sales_By_Years, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SHIPPED_DATE: OrderableEdmTypeField<Summary_Of_Sales_By_Years<DeSerializers>, DeSerializersT, 'Edm.DateTime', true, true>,
ORDER_ID: OrderableEdmTypeField<Summary_Of_Sales_By_Years<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
SUBTOTAL: OrderableEdmTypeField<Summary_Of_Sales_By_Years<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
ALL_FIELDS: AllFields<Summary_Of_Sales_By_Years<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link shippedDate} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SHIPPED_DATE: fieldBuilder.buildEdmTypeField('ShippedDate', 'Edm.DateTime', true),
/**
 * Static representation of the {@link orderId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.Int32', false),
/**
 * Static representation of the {@link subtotal} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
SUBTOTAL: fieldBuilder.buildEdmTypeField('Subtotal', 'Edm.Decimal', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Summary_Of_Sales_By_Years) 
  };
    }
  
    return this._schema;
  }
}

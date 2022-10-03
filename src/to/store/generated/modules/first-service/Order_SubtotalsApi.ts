/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Order_Subtotals } from './Order_Subtotals';
import { Order_SubtotalsRequestBuilder } from './Order_SubtotalsRequestBuilder';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export class Order_SubtotalsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Order_Subtotals<
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
  
  entityConstructor = Order_Subtotals;
  
  requestBuilder(): Order_SubtotalsRequestBuilder<
    DeSerializersT
  > {
    return new Order_SubtotalsRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Order_Subtotals<
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
  Order_Subtotals<
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

  private _fieldBuilder?: FieldBuilder<typeof Order_Subtotals, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Order_Subtotals, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORDER_ID: OrderableEdmTypeField<Order_Subtotals<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
SUBTOTAL: OrderableEdmTypeField<Order_Subtotals<DeSerializers>, DeSerializersT, 'Edm.Decimal', true, true>,
ALL_FIELDS: AllFields<Order_Subtotals<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
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
ALL_FIELDS: new AllFields('*', Order_Subtotals) 
  };
    }
  
    return this._schema;
  }
}

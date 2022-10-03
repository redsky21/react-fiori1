/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Order_Details } from './Order_Details';
import { Order_DetailsRequestBuilder } from './Order_DetailsRequestBuilder';
import { OrdersApi } from './OrdersApi';
import { ProductsApi } from './ProductsApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export class Order_DetailsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Order_Details<
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
       * Static representation of the one-to-one navigation property {@link order} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      ORDER: OneToOneLink<
            Order_Details<DeSerializersT>,
            DeSerializersT,
            OrdersApi<DeSerializersT>
          >,
      /**
       * Static representation of the one-to-one navigation property {@link product} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      PRODUCT: OneToOneLink<
            Order_Details<DeSerializersT>,
            DeSerializersT,
            ProductsApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        OrdersApi<DeSerializersT>,ProductsApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          ORDER: new OneToOneLink(
              'Order',
              this,
              linkedApis[0]
            ),
          PRODUCT: new OneToOneLink(
              'Product',
              this,
              linkedApis[1]
            )
        };
        return this;
      }
  
  entityConstructor = Order_Details;
  
  requestBuilder(): Order_DetailsRequestBuilder<
    DeSerializersT
  > {
    return new Order_DetailsRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Order_Details<
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
  Order_Details<
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

  private _fieldBuilder?: FieldBuilder<typeof Order_Details, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Order_Details, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORDER_ID: OrderableEdmTypeField<Order_Details<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
PRODUCT_ID: OrderableEdmTypeField<Order_Details<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
UNIT_PRICE: OrderableEdmTypeField<Order_Details<DeSerializers>, DeSerializersT, 'Edm.Decimal', false, true>,
QUANTITY: OrderableEdmTypeField<Order_Details<DeSerializers>, DeSerializersT, 'Edm.Int16', false, true>,
DISCOUNT: OrderableEdmTypeField<Order_Details<DeSerializers>, DeSerializersT, 'Edm.Single', false, true>,
/**
 * Static representation of the one-to-one navigation property {@link order} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
ORDER: OneToOneLink<
      Order_Details<DeSerializersT>,
      DeSerializersT,
      OrdersApi<DeSerializersT>
    >,
/**
 * Static representation of the one-to-one navigation property {@link product} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PRODUCT: OneToOneLink<
      Order_Details<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<Order_Details<DeSerializers>>
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
 * Static representation of the {@link productId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PRODUCT_ID: fieldBuilder.buildEdmTypeField('ProductID', 'Edm.Int32', false),
/**
 * Static representation of the {@link unitPrice} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
UNIT_PRICE: fieldBuilder.buildEdmTypeField('UnitPrice', 'Edm.Decimal', false),
/**
 * Static representation of the {@link quantity} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
QUANTITY: fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Int16', false),
/**
 * Static representation of the {@link discount} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DISCOUNT: fieldBuilder.buildEdmTypeField('Discount', 'Edm.Single', false),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Order_Details) 
  };
    }
  
    return this._schema;
  }
}

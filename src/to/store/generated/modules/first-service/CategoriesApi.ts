/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Categories } from './Categories';
import { CategoriesRequestBuilder } from './CategoriesRequestBuilder';
import { ProductsApi } from './ProductsApi';
import { CustomField, defaultDeSerializers, DefaultDeSerializers, DeSerializers, AllFields, entityBuilder, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, EdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export class CategoriesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements 
    EntityApi<
      Categories<
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
       * Static representation of the one-to-many navigation property {@link products} for query construction.
       * Use to reference this property in query operations such as 'select' in the fluent request API.
       */
      PRODUCTS: Link<
            Categories<DeSerializersT>,
            DeSerializersT,
            ProductsApi<DeSerializersT>
          >
    };

  _addNavigationProperties(
      linkedApis: [
        ProductsApi<DeSerializersT>
      ]): this {
        this.navigationPropertyFields = {
          PRODUCTS: new Link(
              'Products',
              this,
              linkedApis[0]
            )
        };
        return this;
      }
  
  entityConstructor = Categories;
  
  requestBuilder(): CategoriesRequestBuilder<
    DeSerializersT
  > {
    return new CategoriesRequestBuilder<DeSerializersT>(this);
  }
  
  entityBuilder(): EntityBuilderType<
    Categories<
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
  Categories<
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

  private _fieldBuilder?: FieldBuilder<typeof Categories, DeSerializersT>;
  get fieldBuilder() {
    if(!this._fieldBuilder){
      this._fieldBuilder = new FieldBuilder(Categories, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_ID: OrderableEdmTypeField<Categories<DeSerializers>, DeSerializersT, 'Edm.Int32', false, true>,
CATEGORY_NAME: OrderableEdmTypeField<Categories<DeSerializers>, DeSerializersT, 'Edm.String', false, true>,
DESCRIPTION: OrderableEdmTypeField<Categories<DeSerializers>, DeSerializersT, 'Edm.String', true, true>,
PICTURE: EdmTypeField<Categories<DeSerializers>, DeSerializersT, 'Edm.Binary', true, true>,
/**
 * Static representation of the one-to-many navigation property {@link products} for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PRODUCTS: Link<
      Categories<DeSerializersT>,
      DeSerializersT,
      ProductsApi<DeSerializersT>
    >,
ALL_FIELDS: AllFields<Categories<DeSerializers>>
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = { 
    /**
 * Static representation of the {@link categoryId} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CATEGORY_ID: fieldBuilder.buildEdmTypeField('CategoryID', 'Edm.Int32', false),
/**
 * Static representation of the {@link categoryName} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
CATEGORY_NAME: fieldBuilder.buildEdmTypeField('CategoryName', 'Edm.String', false),
/**
 * Static representation of the {@link description} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
DESCRIPTION: fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true),
/**
 * Static representation of the {@link picture} property for query construction.
 * Use to reference this property in query operations such as 'select' in the fluent request API.
 */
PICTURE: fieldBuilder.buildEdmTypeField('Picture', 'Edm.Binary', true),
...this.navigationPropertyFields,
/**
 * 
 * All fields selector.
 */
ALL_FIELDS: new AllFields('*', Categories) 
  };
    }
  
    return this._schema;
  }
}

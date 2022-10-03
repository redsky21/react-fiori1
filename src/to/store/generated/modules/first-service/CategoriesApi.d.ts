import { Categories } from './Categories';
import { CategoriesRequestBuilder } from './CategoriesRequestBuilder';
import { ProductsApi } from './ProductsApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, EdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class CategoriesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Categories<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        ProductsApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Categories;
    requestBuilder(): CategoriesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Categories<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Categories<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Categories, DeSerializersT>;
    private _schema?;
    get schema(): {
        CATEGORY_ID: OrderableEdmTypeField<Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        CATEGORY_NAME: OrderableEdmTypeField<Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DESCRIPTION: OrderableEdmTypeField<Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PICTURE: EdmTypeField<Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Binary", true, true>;
        /**
         * Static representation of the one-to-many navigation property {@link products} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTS: Link<Categories<DeSerializersT>, DeSerializersT, ProductsApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=CategoriesApi.d.ts.map
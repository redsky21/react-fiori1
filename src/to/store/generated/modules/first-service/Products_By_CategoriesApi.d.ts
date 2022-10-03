import { Products_By_Categories } from './Products_By_Categories';
import { Products_By_CategoriesRequestBuilder } from './Products_By_CategoriesRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Products_By_CategoriesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Products_By_Categories<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Products_By_Categories;
    requestBuilder(): Products_By_CategoriesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Products_By_Categories<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Products_By_Categories<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Products_By_Categories, DeSerializersT>;
    private _schema?;
    get schema(): {
        CATEGORY_NAME: OrderableEdmTypeField<Products_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PRODUCT_NAME: OrderableEdmTypeField<Products_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        QUANTITY_PER_UNIT: OrderableEdmTypeField<Products_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        UNITS_IN_STOCK: OrderableEdmTypeField<Products_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int16", true, true>;
        DISCONTINUED: OrderableEdmTypeField<Products_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", false, true>;
        ALL_FIELDS: AllFields<Products_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Products_By_CategoriesApi.d.ts.map
import { Sales_By_Categories } from './Sales_By_Categories';
import { Sales_By_CategoriesRequestBuilder } from './Sales_By_CategoriesRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Sales_By_CategoriesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Sales_By_Categories<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Sales_By_Categories;
    requestBuilder(): Sales_By_CategoriesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Sales_By_Categories<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Sales_By_Categories<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Sales_By_Categories, DeSerializersT>;
    private _schema?;
    get schema(): {
        CATEGORY_ID: OrderableEdmTypeField<Sales_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        CATEGORY_NAME: OrderableEdmTypeField<Sales_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PRODUCT_NAME: OrderableEdmTypeField<Sales_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PRODUCT_SALES: OrderableEdmTypeField<Sales_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Sales_By_Categories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Sales_By_CategoriesApi.d.ts.map
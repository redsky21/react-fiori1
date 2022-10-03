import { Product_Sales_For_1997 } from './Product_Sales_For_1997';
import { Product_Sales_For_1997RequestBuilder } from './Product_Sales_For_1997RequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class Product_Sales_For_1997Api<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Product_Sales_For_1997<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
    ]): this;
    entityConstructor: typeof Product_Sales_For_1997;
    requestBuilder(): Product_Sales_For_1997RequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Product_Sales_For_1997<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Product_Sales_For_1997<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Product_Sales_For_1997, DeSerializersT>;
    private _schema?;
    get schema(): {
        CATEGORY_NAME: OrderableEdmTypeField<Product_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PRODUCT_NAME: OrderableEdmTypeField<Product_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PRODUCT_SALES: OrderableEdmTypeField<Product_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        ALL_FIELDS: AllFields<Product_Sales_For_1997<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=Product_Sales_For_1997Api.d.ts.map
import { Regions } from './Regions';
import { RegionsRequestBuilder } from './RegionsRequestBuilder';
import { TerritoriesApi } from './TerritoriesApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link } from '@sap-cloud-sdk/odata-v2';
export declare class RegionsApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Regions<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        TerritoriesApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Regions;
    requestBuilder(): RegionsRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Regions<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Regions<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Regions, DeSerializersT>;
    private _schema?;
    get schema(): {
        REGION_ID: OrderableEdmTypeField<Regions<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        REGION_DESCRIPTION: OrderableEdmTypeField<Regions<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        /**
         * Static representation of the one-to-many navigation property {@link territories} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORIES: Link<Regions<DeSerializersT>, DeSerializersT, TerritoriesApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Regions<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=RegionsApi.d.ts.map
import { Territories } from './Territories';
import { TerritoriesRequestBuilder } from './TerritoriesRequestBuilder';
import { RegionsApi } from './RegionsApi';
import { EmployeesApi } from './EmployeesApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink, Link } from '@sap-cloud-sdk/odata-v2';
export declare class TerritoriesApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<Territories<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    constructor(deSerializers?: DeSerializersT);
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        RegionsApi<DeSerializersT>,
        EmployeesApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof Territories;
    requestBuilder(): TerritoriesRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<Territories<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<Territories<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof Territories, DeSerializersT>;
    private _schema?;
    get schema(): {
        TERRITORY_ID: OrderableEdmTypeField<Territories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        TERRITORY_DESCRIPTION: OrderableEdmTypeField<Territories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        REGION_ID: OrderableEdmTypeField<Territories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Int32", false, true>;
        /**
         * Static representation of the one-to-one navigation property {@link region} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION: OneToOneLink<Territories<DeSerializersT>, DeSerializersT, RegionsApi<DeSerializersT>>;
        /**
         * Static representation of the one-to-many navigation property {@link employees} for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEES: Link<Territories<DeSerializersT>, DeSerializersT, EmployeesApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<Territories<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
//# sourceMappingURL=TerritoriesApi.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerritoriesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Territories_1 = require("./Territories");
const TerritoriesRequestBuilder_1 = require("./TerritoriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TerritoriesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Territories_1.Territories;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            REGION: new odata_v2_1.OneToOneLink('Region', this, linkedApis[0]),
            EMPLOYEES: new odata_v2_1.Link('Employees', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new TerritoriesRequestBuilder_1.TerritoriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Territories_1.Territories, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
             * Static representation of the {@link territoryId} property for query construction.
             * Use to reference this property in query operations such as 'select' in the fluent request API.
             */
                TERRITORY_ID: fieldBuilder.buildEdmTypeField('TerritoryID', 'Edm.String', false),
                /**
                 * Static representation of the {@link territoryDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TERRITORY_DESCRIPTION: fieldBuilder.buildEdmTypeField('TerritoryDescription', 'Edm.String', false),
                /**
                 * Static representation of the {@link regionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION_ID: fieldBuilder.buildEdmTypeField('RegionID', 'Edm.Int32', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Territories_1.Territories)
            };
        }
        return this._schema;
    }
}
exports.TerritoriesApi = TerritoriesApi;
//# sourceMappingURL=TerritoriesApi.js.map
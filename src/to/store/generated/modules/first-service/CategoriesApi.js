"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Categories_1 = require("./Categories");
const CategoriesRequestBuilder_1 = require("./CategoriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CategoriesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Categories_1.Categories;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCTS: new odata_v2_1.Link('Products', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new CategoriesRequestBuilder_1.CategoriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Categories_1.Categories, this.deSerializers);
        }
        return this._fieldBuilder;
    }
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', Categories_1.Categories)
            };
        }
        return this._schema;
    }
}
exports.CategoriesApi = CategoriesApi;
//# sourceMappingURL=CategoriesApi.js.map
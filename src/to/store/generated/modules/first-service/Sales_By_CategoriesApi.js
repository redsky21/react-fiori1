"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_By_CategoriesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Sales_By_Categories_1 = require("./Sales_By_Categories");
const Sales_By_CategoriesRequestBuilder_1 = require("./Sales_By_CategoriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Sales_By_CategoriesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Sales_By_Categories_1.Sales_By_Categories;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Sales_By_CategoriesRequestBuilder_1.Sales_By_CategoriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Sales_By_Categories_1.Sales_By_Categories, this.deSerializers);
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
                 * Static representation of the {@link productName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_NAME: fieldBuilder.buildEdmTypeField('ProductName', 'Edm.String', false),
                /**
                 * Static representation of the {@link productSales} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SALES: fieldBuilder.buildEdmTypeField('ProductSales', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Sales_By_Categories_1.Sales_By_Categories)
            };
        }
        return this._schema;
    }
}
exports.Sales_By_CategoriesApi = Sales_By_CategoriesApi;
//# sourceMappingURL=Sales_By_CategoriesApi.js.map
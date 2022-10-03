"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Sales_For_1997Api = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Product_Sales_For_1997_1 = require("./Product_Sales_For_1997");
const Product_Sales_For_1997RequestBuilder_1 = require("./Product_Sales_For_1997RequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Product_Sales_For_1997Api {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Product_Sales_For_1997_1.Product_Sales_For_1997;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Product_Sales_For_1997RequestBuilder_1.Product_Sales_For_1997RequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Product_Sales_For_1997_1.Product_Sales_For_1997, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', Product_Sales_For_1997_1.Product_Sales_For_1997)
            };
        }
        return this._schema;
    }
}
exports.Product_Sales_For_1997Api = Product_Sales_For_1997Api;
//# sourceMappingURL=Product_Sales_For_1997Api.js.map
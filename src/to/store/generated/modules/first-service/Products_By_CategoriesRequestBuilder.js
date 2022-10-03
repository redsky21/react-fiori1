"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products_By_CategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Products_By_Categories_1 = require("./Products_By_Categories");
/**
 * Request builder class for operations supported on the {@link Products_By_Categories} entity.
 */
class Products_By_CategoriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Products_By_Categories` entity based on its keys.
     * @param categoryName Key property. See {@link Products_By_Categories.categoryName}.
     * @param productName Key property. See {@link Products_By_Categories.productName}.
     * @param discontinued Key property. See {@link Products_By_Categories.discontinued}.
     * @returns A request builder for creating requests to retrieve one `Products_By_Categories` entity based on its keys.
     */
    getByKey(categoryName, productName, discontinued) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            CategoryName: categoryName,
            ProductName: productName,
            Discontinued: discontinued
        });
    }
    /**
     * Returns a request builder for querying all `Products_By_Categories` entities.
     * @returns A request builder for creating requests to retrieve all `Products_By_Categories` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Products_By_Categories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Products_By_Categories`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Products_By_Categories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Products_By_Categories`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(categoryNameOrEntity, productName, discontinued) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, categoryNameOrEntity instanceof Products_By_Categories_1.Products_By_Categories ? categoryNameOrEntity : {
            CategoryName: categoryNameOrEntity,
            ProductName: productName,
            Discontinued: discontinued
        });
    }
}
exports.Products_By_CategoriesRequestBuilder = Products_By_CategoriesRequestBuilder;
//# sourceMappingURL=Products_By_CategoriesRequestBuilder.js.map
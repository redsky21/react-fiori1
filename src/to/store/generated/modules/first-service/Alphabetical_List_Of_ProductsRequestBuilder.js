"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alphabetical_List_Of_ProductsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Alphabetical_List_Of_Products_1 = require("./Alphabetical_List_Of_Products");
/**
 * Request builder class for operations supported on the {@link Alphabetical_List_Of_Products} entity.
 */
class Alphabetical_List_Of_ProductsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Alphabetical_List_Of_Products` entity based on its keys.
     * @param productId Key property. See {@link Alphabetical_List_Of_Products.productId}.
     * @param productName Key property. See {@link Alphabetical_List_Of_Products.productName}.
     * @param discontinued Key property. See {@link Alphabetical_List_Of_Products.discontinued}.
     * @param categoryName Key property. See {@link Alphabetical_List_Of_Products.categoryName}.
     * @returns A request builder for creating requests to retrieve one `Alphabetical_List_Of_Products` entity based on its keys.
     */
    getByKey(productId, productName, discontinued, categoryName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ProductID: productId,
            ProductName: productName,
            Discontinued: discontinued,
            CategoryName: categoryName
        });
    }
    /**
     * Returns a request builder for querying all `Alphabetical_List_Of_Products` entities.
     * @returns A request builder for creating requests to retrieve all `Alphabetical_List_Of_Products` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Alphabetical_List_Of_Products` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Alphabetical_List_Of_Products`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Alphabetical_List_Of_Products`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Alphabetical_List_Of_Products`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productIdOrEntity, productName, discontinued, categoryName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, productIdOrEntity instanceof Alphabetical_List_Of_Products_1.Alphabetical_List_Of_Products ? productIdOrEntity : {
            ProductID: productIdOrEntity,
            ProductName: productName,
            Discontinued: discontinued,
            CategoryName: categoryName
        });
    }
}
exports.Alphabetical_List_Of_ProductsRequestBuilder = Alphabetical_List_Of_ProductsRequestBuilder;
//# sourceMappingURL=Alphabetical_List_Of_ProductsRequestBuilder.js.map
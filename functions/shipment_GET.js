// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    // Data can be extracted from the request as follows:

    // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
    const {id} = query;

    // Headers, e.g. {"Content-Type": ["application/json"]}
    const contentTypes = headers["Content-Type"];

    const dbname = context.values.get("shipment_db");
    const collname = context.values.get("shipment_coll");
    const result = context.services.get("mongodb-atlas").db(dbname).collection(collname).findOne({_id: {$oid: id}});
    return result;

};

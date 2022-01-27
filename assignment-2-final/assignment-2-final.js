exports.handler = (event, context, callback) => {
    const income = event.income;
    callback(null, income / 10);
};
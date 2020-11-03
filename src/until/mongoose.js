module.exports = {
    convertListToObject: function (list) {
        return list.map((item) => item.toObject());
    },
    convertItemToObject: function (item) {
        return item ? item.toObject() : item;
    },
};

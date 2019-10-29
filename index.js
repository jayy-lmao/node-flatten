module.exports = function flatten(list, depth) {
    const res = [];
    const parsedDepth = typeof depth === "number" ? depth + 1 : Infinity;
    function _flatten(nested, d) {
        if (!Array.isArray(nested) || !d) {
            res.push(nested);
            return;
        }
        for (let i = 0; i < nested.length; i++) {
            _flatten(nested[i], d - 1);
        }
    }
    _flatten(list, parsedDepth);
    return res;
}

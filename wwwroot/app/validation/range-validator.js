System.register([], function(exports_1) {
    var RangeValidator;
    return {
        setters:[],
        execute: function() {
            RangeValidator = (function () {
                function RangeValidator() {
                }
                RangeValidator.create = function (min, max) {
                    return function (c) {
                        if (!c.value)
                            return {};
                        var value = Number(c.value);
                        if (isNaN(value))
                            return { 'range': true };
                        if (value >= min && value <= max)
                            return {};
                        return { 'range': true };
                    };
                };
                return RangeValidator;
            })();
            exports_1("RangeValidator", RangeValidator);
        }
    }
});
//# sourceMappingURL=range-validator.js.map
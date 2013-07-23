'use strict';

describe("ns.js", function() {
    var fixture = {};

    it("should be accesible globally", function () {
        expect(ns).not.toBeUndefined();
    });

    it("parses a path", function () {
        var obj = ns("ns");
        expect(obj).not.toBeUndefined();
    });

    it("if path does not exists returns undefined", function () {
        var obj = ns("some.namespace");
        expect(obj).toBeUndefined();
    });

    it("second paramter is path's value", function () {
        var obj = ns("some.namespace", 1);
        expect(obj).toMatch(1);
    });

});






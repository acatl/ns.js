'use strict';

describe("ns.js", function() {
    var fixture = {};

    it("should be accesible globally", function () {
        expect(ns).not.toBeUndefined();
    });

    it("parses a path by default global (window attched)", function () {
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

    it("if first parameter true then object will be attached to window.___ namespace", function () {
        var obj = ns(true, "obscured.namespace", 1);
        expect(window.obscured).toBeUndefined();
        expect(window.___.obscured).not.toBeUndefined();
        expect(obj).toMatch(1);
    });

    it("if first parameter false then use default window placeholder", function () {
        var obj = ns(false, "notobscured.namespace", 1);
        expect(window.notobscured).not.toBeUndefined();
        expect(window.___.notobscured).toBeUndefined();
        expect(obj).toMatch(1);
    });

    it("if first parameter is an object then use default window placeholder", function () {
        var custom = {};

        var obj = ns(custom, "customobscured.namespace", 1);
        expect(window.customobscured).toBeUndefined();
        expect(custom.customobscured).not.toBeUndefined();
        expect(obj).toMatch(1);
    });


});






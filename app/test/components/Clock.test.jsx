var React = require("react");
var ReactDom = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var Clock = require("Clock");

var $ = require("jQuery");

describe("Clock", () => {
	it("should exist", () => {
		expect(Clock).toExist();
	});

	describe("formatSeconds", () => {
		it("should return 10:15 when passed 615", () =>{
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			expect(clock.formatSeconds(615)).toBe("10:15");
		});

		it("should return 01:01 when passed 61", () =>{
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			expect(clock.formatSeconds(61)).toBe("01:01");
		});

		it("should return 00:00 when passed 0", () =>{
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			expect(clock.formatSeconds(0)).toBe("00:00");
		});

		it("should render 10:15 when passed 615", () => {
			var clock = TestUtils.renderIntoDocument(<Clock seconds= '615' />);
			var el = $(ReactDom.findDOMNode(clock));
			expect(el.find('.clockText').text()).toBe("10:15");
		});
	});
});
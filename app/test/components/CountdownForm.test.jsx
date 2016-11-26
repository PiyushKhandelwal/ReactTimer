var React = require("react");
var ReactDom = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var CountdownForm = require("CountdownForm");

var $ = require("jQuery");

describe("CountdownForm", () => {
	it("should exists", () =>{
		expect(CountdownForm).toExist();
	});

	describe("onStartAction", () => {
	it("should get called when passed valid seconds", ()=>{
		var spy = expect.createSpy();
		var action = {onStartAction: spy, startEnabled: true, stopEnabled: false}
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm action={action}/>);
		var el = $(ReactDom.findDOMNode(countdownForm));
		countdownForm.refs.secondsInput.value = "615";
		TestUtils.Simulate.click(el.find('button.btn')[0]);
		expect(spy).toHaveBeenCalledWith(615);
	});

	it("should not get called when passed invalid seconds", ()=>{
		var spy = expect.createSpy();
		var action = {onStartAction: spy, startEnabled: true, stopEnabled: false}
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm action={action}/>);
		var el = $(ReactDom.findDOMNode(countdownForm));
		countdownForm.refs.secondsInput.value = "6A15";
		TestUtils.Simulate.click(el.find('button.btn')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
	});
});
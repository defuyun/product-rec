import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/ui/body.js';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  counter_inc() {
  	var old = Template.instance().counter.get();
  	var newv = old + 1;
  	instance.counter.set(newv);
  },
  counter_dec() {
  	var old = Template.instance().counter.get();
  	var newv = old - 1;
  	instance.counter.set(newv);
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    counter_inc();
  },
});

Template.another.events({
	'click button'(event, instance) {
		Template.instance().counter.set(Template.instance().counter.get() - 1);
	},
})
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
import './task.js';

Template.body.helpers({
	tasks() {
		return Tasks.find({}, { sort : { 'createdAt' : -1 }});
	},
});

Template.body.events({
	'submit .new-task'(event) {
		event.preventDefault();

		const target = event.target;
		const input_text = target.text.value;

		Tasks.insert({
			'text' : input_text,
			'createdAt' : new Date(),
		});

		target.text.value = '';
	},
});


Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

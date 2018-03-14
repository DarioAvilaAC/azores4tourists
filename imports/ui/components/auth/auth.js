import './auth.html';


Template.Auth.helpers({

    image: function () {
        if (!Meteor.user()) return null;

        //"http://graph.facebook.com/\" + user.services.facebook.id + \"/picture/?type=medium"
        return `<img src="${Meteor.user().profile.picture}" alt="userPic" id="login-buttons-dropdown-align-" />`;
    },


});

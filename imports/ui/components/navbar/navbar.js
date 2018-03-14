import './navbar.html';

Template.nav.onCreated(function () {
  console.log("started");
});

Template.nav.helpers({
  sayHello() {
    console.log("hello");
  },
});

Template.nav.events({
  'click img'(event) {

    let islandId = event.target.id;
    FlowRouter.go('/' + islandId);

  },

});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

var data = []

var reviews = []

function addData(name, description, users, cost, notes, size, missing){
  var item = $('<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">')
  var content = $('<div class="resume-content">')
  var header = $('<h2 class="mb-0">')
  header.append(name)
  var subheader = $('<div class="subheading text-primary">')
  subheader.append(description)
  var button = $('<a target="_blank" class="card-link btn btn-outline-info">')
  button.attr("href", link)
  button.append("Website")
  var users_h = $('<div class="h3 mb-3 text-secondary">')
  users_h.append("What educators use this platform?")
  var users_p = $("<p>")
  users_p.append(what)
  var cost_h = $('<div class="h3 mb-3 text-secondary">')
  cost_h.append("What is the cost?")
  var cost_p = $("<p>")
  cost_p.append(age)
  var notes_h = $('<div class="h3 mb-3 text-secondary">')
  notes_h.append("Other Notes")
  var notes_p = $("<p>")
  notes_p.append(tech)
  var size_h = $('<div class="h3 mb-3 text-secondary">')
  size_h.append("How big are classes")
  var size_p = $("<p>")
  size_p.append(time)
  var missing_h = $('<div class="h3 mb-3 text-secondary">')
  missing_h.append("What is missing?")
  var missing_p = $("<p>")
  missing_p.append(educators)
  var reviews_h = $('<div class="h3 mb-3 text-secondary">')
  reviews_h.append("Reviews")
  var reviews_p = $('<div>')
  for (i in reviews){
    dict = reviews[i]
    if (dict["name"] == name) {
      var review_btn = $('<a target="_blank" class="card-link btn btn-outline-secondary">')
      button.attr("href", dict["link"])
      button.append(dict["website"])
    }
  }
  content.append(header, subheader, "<br>", button, "<br>", "<br>", users_h, users_p, cost_h, cost_p, size_h, size_p, notes_h, notes_p, missing_h, missing_p, reviews_h, reviews_p)
  item.append(content)
  $("#data-with").append(item)
}



function parseData(){
  for (i in data){
    var dict = data[i]
    var name = dict["name"]
    var link = dict["link"]
    var description = dict["description"]
    var users = dict["users"]
    var cost = dict["cost"]
    var notes = dict["notes"]
    var size = dict["size"]
    var missing = dict["missing"]
    addData(name, description, users, cost, notes, size, missing)
  }
}


$(document).ready(function() {
  parseData()
})

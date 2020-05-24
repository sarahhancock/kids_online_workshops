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

var data = [{"name":"Outschool","link":"https://outschool.com/#abkafq92gv","description":"This is the site that comes up the most when you search for ","users":"Although many instructors have teaching credentials, that's not required to teach a course on the site. But Outschool does vet their instructors to make sure they're capable of delivering content correctly.","cost":"Outschool classes start at $5 and are sold for an average of $18. 10-week semester-long classes can be anywhere from $100 to $600. Teachers set their own prices and the prices vary by subject, age range, content, and time.","notes":"Outschool classes are live and through Zoom. Students are encouraged to interact with other people.","size":"Classes usually cap at around 12 students.","missing":"Looking at the list of courses, it really seems like everything is covered. It would likely be easy for most children to find a subject that they like. The only complaint that comes up in reviews is "},
{"name":"Kidpass","link":"https://kidpass.com/","description":"Before COVID-19, Kidpass was the leading platform to discover and book the best kids activities at members-only prices. Families could choose from thousands of partners including indoor play spaces, sports, music, museums. On April 8th of 2020, they transitioned to online classes hosted on Zoom or on other platforms decided by the instructor. It is still a ","users":"There is no cost to get started as a teacher on KidPass—however, you must apply and be approved to become a teacher and to specifically offer online classes. It seems like most teachers are independent teachers, but there are some organizations like camps also hosting classes (no museums, though!).","cost":"There are several different membership packages ranging from $19 per month to $189 per month. It is unclear exactly how much each class costs because of the ","notes":"Kidpass's online platform is new, so there are not as many reviews about the platform.","size":"A maximum class size is not listed, and each course only shows the number of spots left.","missing":"Because of the membership system and monthly fee, someone not already on Kidpass might be less incentivized to attend a virtual class hosted there. The online classes are new to Kidpass so there is, in general, less information about the prices and what exactly is offered. Still, it seems like they have a large offering of classes and  "},
{"name":"Care.com","link":"https://www.care.com/explore/online?category=online&utm_source=googlesem&utm_campaign=online_classes&utm_source=google&utm_campaign=9794668228&utm_adgroup={adroupid}&utm_keyword=%2Bonline%20%2Bclasses%20%2Bfor%20%2Bkids&gclid=EAIaIQobChMIpfTw4p7L6QIVnx6tBh37qAJzEAAYAiAAEgIbdPD_BwE","description":"","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"Varsity Tutors","link":"varsitytutors.com/group-classes-catalog?f_grade_ranges=kindergarten&f_grade_ranges=grades-1-5&f_grade_ranges=grades-6-8&f_grade_ranges=grades-9-12&f_subjects=art&f_subjects=computer-science&f_subjects=elementary-school-reading&f_subjects=languages&f_subjects=math&f_subjects=science","description":"Varsity Tutors offers private and group tutoring, classes, test prep, and virtual learning for all students and professionals. It seems like it is primarily a test prep site that has recently started offering live, onliine group classes. It comes up frequently when searching for online classes for kids, and while it is not a platform designed for educators who are not associated with Varsity Tutors, it is being included in this review because it provides insight as to how an online-learning model might work without something like Outschool or Kidpass. ","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"Activity Hero","link":"https://www.activityhero.com/online-classes","description":"This is another one of the most popular sites for online classes for kids.","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"Skillshare","link":"https://www.skillshare.com/browse/kids","description":"x","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"DIY","link":"https://diy.org/","description":"x","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"Bluprint","link":"https://shop.mybluprint.com/a/shop/all-online-classes?tvodForward=false&filters=%7B%22selectedFilters%22%3A%5B%22%7B%5C%22filterSetId%5C%22%3A288%2C%5C%22facetName%5C%22%3A%5C%22categoryFilter%5C%22%2C%5C%22filterOptionId%5C%22%3A%5C%223185%5C%22%7D%22%5D%2C%22selectedSearchScopes%22%3A%5B%5D%2C%22sortBy%22%3A%22relevant%22%2C%22page%22%3A1%7D&showEnrolledClasses=false","description":"x","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"Udemy","link":"https://www.udemy.com/topic/art-for-kids/","description":"x","users":"x","cost":"x","notes":"x","size":"x","missing":"x"},
{"name":"Beanstalk","link":"https://beanstalk.co/","description":"x","users":"x","cost":"x","notes":"x","size":"x","missing":"x"}]

var reviews = [{"name":"Outschool","link":"https://careerkarma.com/blog/outschool/","title":"Career Karma"},
{"name":"Outschool","link":"https://www.commonsensemedia.org/website-reviews/outschool","title":"Common Sense Media"},
{"name":"Outschool","link":"https://www.reviewed.com/parenting/features/outschool-review-are-these-online-classes-the-easiest-way-to-homeschool","title":"Reviewed.com"},
{"name":"Kidpass","link":"https://www.wfmz.com/news/pr_newswire/pr_newswire_technology/kidpass-launches-nationally-with-online-classes-100-000-grant-for-families/article_5ccac967-a339-520a-9fa6-480a21c11fbf.html","title":"WFMZ News"}]

function addData(name, link, description, users, cost, notes, size, missing){
  var item = $('<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">')
  var content = $('<div class="resume-content">')
  var header = $('<h2 class="mb-0">')
  header.append(name)
  var subheader = $('<div>')
  subheader.append(description)
  var button = $('<a target="_blank" class="card-link btn btn-outline-info">')
  button.attr("href", link)
  button.append("Website")
  var users_h = $('<div class="h3 mb-3 text-secondary">')
  users_h.append("What educators use this platform?")
  var users_p = $("<p>")
  users_p.append(users)
  var cost_h = $('<div class="h3 mb-3 text-secondary">')
  cost_h.append("What is the cost?")
  var cost_p = $("<p>")
  cost_p.append(cost)
  var notes_h = $('<div class="h3 mb-3 text-secondary">')
  notes_h.append("Other Notes")
  var notes_p = $("<p>")
  notes_p.append(notes)
  var size_h = $('<div class="h3 mb-3 text-secondary">')
  size_h.append("How big are classes")
  var size_p = $("<p>")
  size_p.append(size)
  var missing_h = $('<div class="h3 mb-3 text-secondary">')
  missing_h.append("What is missing?")
  var missing_p = $("<p>")
  missing_p.append(missing)
  var reviews_h = $('<div class="h3 mb-3 text-secondary">')
  reviews_h.append("Reviews")
  var reviews_p = $('<div>')
  for (i in reviews){
    dict = reviews[i]
    if (dict["name"] == name) {
      var review_btn = $('<a target="_blank" class="card-link btn btn-outline-secondary">')
      review_btn.attr("href", dict["link"])
      review_btn.append(dict["title"])
      reviews_p.append(review_btn)
    }
  }
  content.append(header, subheader, "<br>", button, "<br>", "<br>", users_h, users_p, cost_h, cost_p, size_h, size_p, notes_h, notes_p, missing_h, missing_p, reviews_h, reviews_p)
  item.append(content)
  $("#data").append(item)
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
    addData(name, link, description, users, cost, notes, size, missing)
  }
}


$(document).ready(function() {
  parseData()
})

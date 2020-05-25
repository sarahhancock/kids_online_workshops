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

var data = [{"name":"Outschool","link":"https://outschool.com/#abkafq92gv","description":"This is the site that comes up the most when you search for online classes for kids. They have live online classes for ages 3-18 about everything from art to Harry Potter to math to managing emotions.","users":"Although many instructors have teaching credentials, that's not required to teach a course on the site. But Outschool does vet their instructors to make sure they're capable of delivering content correctly.","cost":"Outschool classes start at $5 and are sold for an average of $18. 10-week semester-long classes can be anywhere from $100 to $600. Teachers set their own prices and the prices vary by subject, age range, content, and time.","notes":"Outschool classes are live and through Zoom. Students are encouraged to interact with other people.","size":"Classes usually cap at around 12 students.","missing":"Looking at the list of courses, it really seems like everything is covered. It would likely be easy for most children to find a subject that they like. The only complaint that comes up in reviews is inconsistent course quality because the courses on Outschool can be made by any vetted instructor and are not standardized in any way. Although there are some courses specifically designed for students with learning disabilities and special needs, there was one review that stated that teachers were not accomodating for a student with high-functioning autism that wanted to take classes outside their age range. Many parts of Outschool are up to the discretion of the individual teacher. Another potential issue is that class age ranges are not permitted to exceed 5 years."},
{"name":"Kidpass","link":"https://kidpass.com/","description":"Before COVID-19, Kidpass was the leading platform to discover and book the best kids activities at members-only prices. Families could choose from thousands of partners including indoor play spaces, sports, music, museums. On April 8th of 2020, they transitioned to online classes hosted on Zoom or on other platforms decided by the instructor. It is still a membership system, where members pay a monthly fee and recieve credits to take classes.","users":"There is no cost to get started as a teacher on KidPass. However, you must apply and be approved to become a teacher and to specifically offer online classes. It seems like most teachers are independent teachers, but there are some organizations like camps also hosting classes (no museums, though!).","cost":"Before COVID-19, Kidpass was the leading platform to discover and book the best kids activities at members-only prices. Families could choose from thousands of partners including indoor play spaces, sports, music, museums. On April 8th of 2020, they transitioned to online classes hosted on Zoom or on other platforms decided by the instructor. It is still a membership system, where members pay a monthly fee and recieve credits to take classes.","notes":"Kidpass's online platform is new, so there are not as many reviews about the platform.","size":"A maximum class size is not listed, and each course only shows the number of spots left.","missing":"Because of the membership system and monthly fee, someone not already on Kidpass might be less incentivized to attend a virtual class hosted there. The online classes are new to Kidpass so there is, in general, less information about the prices and what exactly is offered. Still, it seems like they have a large offering of classes and lots of members that have transitioned from the in-person format of Kidspace."},
{"name":"Care.com","link":"https://www.care.com/explore/online?category=online&utm_source=googlesem&utm_campaign=online_classes&utm_source=google&utm_campaign=9794668228&utm_adgroup={adroupid}&utm_keyword=%2Bonline%20%2Bclasses%20%2Bfor%20%2Bkids&gclid=EAIaIQobChMIpfTw4p7L6QIVnx6tBh37qAJzEAAYAiAAEgIbdPD_BwE","description":"Care.com is primarily a site that connects families to child care, senior care, special needs care, tutoring, pet care, and housekeeping. It now offers hundreds of online classes and activities for kids.","users":"There appears to be more organizations (as opposed to individual teachers) using care.com to host classes than other platforms. For example, Gymboree Play & Music and the New York Society of Play are both hosting classes on Care.com. All the classes that appear on the first page are from organizations instead of individuals.","cost":"Many classes are 'pay-what-you-can' with a recommended price, but other than those, prices generally range from $5 per class to around $200 for camps. There is very little information about how much care.com charges course providers, other than that it is 'free to list' and you 'pay only when a family enrolls'.","notes":"There are several reports of unauthorized billing from the site from babysitters and caretakers, but there is not much information about the online courses. Care.com itself has several rave reviews for businesses that are using it to host online courses, but it is not clear how legitimate this business is.","size":"It is not clear how large each class is.","missing":"While care.com clearly caters towards organizations, it is not clear about costs, class-size, and other important information for those creating courses. It still clearly has some appeal for organizations which might lie in its professional-looking website and organization-oriented marketing approach."},
{"name":"Varsity Tutors","link":"varsitytutors.com/group-classes-catalog?f_grade_ranges=kindergarten&f_grade_ranges=grades-1-5&f_grade_ranges=grades-6-8&f_grade_ranges=grades-9-12&f_subjects=art&f_subjects=computer-science&f_subjects=elementary-school-reading&f_subjects=languages&f_subjects=math&f_subjects=science","description":"Varsity Tutors offers private and group tutoring, classes, test prep, and virtual learning for all students and professionals. It seems like it is primarily a test prep site that has recently started offering live, onliine group classes. It comes up frequently when searching for online classes for kids, and while it is not a platform designed for educators who are not associated with Varsity Tutors, it is being included in this review because it provides insight as to how an online-learning model might work without something like Outschool or Kidpass. ","users":"There are only 27 small group classes total, and they are all taught by 'expert instructors' from Varsity Tutors. ","cost":"These courses seem similar to 'camps' on other platforms in that they cost $100-$200 but take place over the course of 4-5 days. ","notes":"Varsity Tutors also has a selection of free, live online classes but they do not appear to be interactive, so they are not relevant to this particular survey. Also, Varsity Tutors has its own live video conferencing tool that is also compatible with mobile apps.","size":"According to the Varsity Tutors website, their classes offer '10 hours of live instruction with an expert instructor in a limited size class', but they do not specify exactly how large the class is.","missing":"Obviously, there is a limited course selection since they are not outsourcing teachers, but it is a good example of a site offering live online courses that does not rely on a different platform."},
{"name":"ActivityHero","link":"https://www.activityhero.com/online-classes","description":"This is another one of the most popular sites for online classes for kids. ActivityHero is an online marketplace where you can shop for camps, after school classes, workshops, and kids' nights out. Before COVID, it was centered on in-person activities to get the kids out of the house, but right now, it has over 1,000 listings for interactive online classes and camps.","users":"Activity Hero seems to be used primarily by summer camp organizations like Camp EDMO and Discover Science Center.","cost":"Costs of courses vary; there are several $20 courses and $100 or $200 camps. ActivityHero does not have an upfront charge, but they charge a fee when you get a booking. It is not clear what exactly this fee is.","notes":"There are few recent reviews of ActivityHero, and its primary purpose inn the past was for booking in-person summer camps and activities for kids.","size":"Class sizes are not disclosed.","missing":"Activity Hero is more camp-oriented than the other platforms, and it does not do a good job at providing important information such as the cut of the profits they take or the size of their classes. Their camps seem more traditional and generic than courses on Outschool, for example, so maybe they could benefit from some more niche listings."},
{"name":"Skillshare","link":"https://www.skillshare.com/browse/kids","description":"Skillshare is an online learning community for people who want to learn from educational videos. The courses, which are not accredited, are available through subscription. The majority of courses focus on interaction rather than lecturing, with the primary goal of learning by completing a project. Skillshare is primarily geared toward adults, but they have a selection of classes for kids as well.","users":"Anyone can become a teacher on Skillshare, so the quality of classes can vary dramatically.","cost":"A Premium membership to Skillshare costs $15 per month or $99 per year. It removes ads, unlocks the entire catalog of courses, and lets you download classes to the Skillshare mobile app to watch offline. The money earned by teachers on Skillshare depends on the minutes of their content watched by paying Premium users. ","notes":"These classes are not designed as live courses, but they are definitely designed to be interactive. Skillshare courses offer a different model for online learning: a hybrid between the live, interactive classes used on other platforms and the recorded content that can be used again and again.","size":"Class sizes do not apply, since the classes do not have a live instructor.","missing":"Most of the activities on Skillshare for kids are art-oriented, and there aren't very many, so there is definitely room for filling in gaps here, especially when considering that parents might have a subscription to Skillshare already that kids can use."},
{"name":"DIY","link":"https://diy.org/","description":"Imagine if Netflix made kids smarter and YouTube was safe – DIY is it.' is the tagline on DIY's homepage. DIY is a virtual treasure trove of craft, activity, and practical (or sometimes impractically fun) skill-building ideas. Kids watch inspiring videos, do creative projects, and make their own videos on DIY which gives them amazing opportunities to both learn and inspire other kids. Moderators ensure that the online community stays kid-friendly and 'kind'.","users":"Initial video lessons are made by DIY staff, but for the most part, the kids are the creators, and the content is managed by moderators. ","cost":"DIY is a subscription-based platform. The cost is equivalent to $15-25/month depending on the number of kids in your family and whether you want to be billed monthly or annually.","notes":"Again, this is not a platform for live, interactive classes, but it illustrates at important part of learning: allowing the kids to share their creation. Some kids might feel a lot more comfortable sharing in this sort of environment than in a live zoom class.","size":"Class sizes do not apply, since the classes do not have a live instructor.","missing":"DIY is missing the live interaction that comes with a Zoom class, and it has a limited selection of activities, but it brings a different form of virtual interaction and engagement to kids."},
{"name":"Udemy","link":"https://www.udemy.com/topic/art-for-kids/","description":"Udemy is an American online learning platform aimed at professional adults and students. As of Jan 2020, the platform has more than 50 million students and 57,000 instructors teaching courses in over 65 languages. Like Skillshare, it is a platform marketed toward adults, but it has a selection of classes for kids.","users":"Anyone can teach on Udemy about anything, no teaching experience necessary. While the platform has a fairly extensive review, rating and course ranking program, and has a quality checklist for courses, this doesn’t guarantee course quality, consistency or instructor support. The kids classes are generally taught by independent teachers.","cost":"Udemy classes for kids typically range from between $10 and $15. There is no fee to be an instructor on Udemy. Instructors are paid according to a revenue share model.","notes":"Udemy also offers some classes for kids in different languages.","size":"Class sizes do not apply, since the classes do not have a live instructor.","missing":"The site generally has poor reviews because of inconsistent course quality. Also, it is missing the live interaction aspect of virtual classes. Still, there are not many offerings for kids on this platform yet and, like Skillshare, it could be popular if parents already use the platform."}]

var reviews = [{"name":"Outschool","link":"https://careerkarma.com/blog/outschool/","title":"Career Karma"},
{"name":"Outschool","link":"https://www.commonsensemedia.org/website-reviews/outschool","title":"Common Sense Media"},
{"name":"Outschool","link":"https://www.reviewed.com/parenting/features/outschool-review-are-these-online-classes-the-easiest-way-to-homeschool","title":"Reviewed.com"},
{"name":"Kidpass","link":"https://www.wfmz.com/news/pr_newswire/pr_newswire_technology/kidpass-launches-nationally-with-online-classes-100-000-grant-for-families/article_5ccac967-a339-520a-9fa6-480a21c11fbf.html","title":"WFMZ News"},
{"name":"Varsity Tutors","link":"https://www.varsitytutors.com/clientplatformuserguide.pdf","title":"Varsity Tutors User Guide"},
{"name":"Care.com","link":"https://www.sitejabber.com/reviews/care.com","title":"SiteJabber"},
{"name":"ActivityHero","link":"https://venturebeat.com/2014/08/25/activityhero-raises-2-2m-for-summer-camp-shopping-site/","title":"Venture Beat"},
{"name":"Skillshare","link":"https://www.bitdegree.org/online-learning-platforms/skillshare-review","title":"BitDegree"},
{"name":"Skillshare","link":"https://www.pcmag.com/reviews/skillshare?test_uuid=03GdTca9yYczB0udADO47Ac&test_variant=b","title":"PC Magazine"},
{"name":"DIY","link":"https://www.commonsense.org/education/app/diyorg-creative-challenges","title":"Common Sense Media"},
{"name":"Outschool","link":"https://www.forbes.com/sites/danabrownlee/2020/05/05/could-virtual-camp-be-the-answer-for-working-parents-this-summer/#2387a8c63d4e","title":"Forbes"},
{"name":"Varsity Tutors","link":"https://www.forbes.com/sites/danabrownlee/2020/05/05/could-virtual-camp-be-the-answer-for-working-parents-this-summer/#2387a8c63d4e","title":"Forbes"},
{"name":"ActivityHero","link":"https://www.forbes.com/sites/danabrownlee/2020/05/05/could-virtual-camp-be-the-answer-for-working-parents-this-summer/#2387a8c63d4e","title":"Forbes"},
{"name":"Udemy","link":"https://blog.teachinguide.com/udemy-review-is-it-worth-it/","title":"Teaching Guide Blog"},
{"name":"Udemy","link":"https://support.udemy.com/hc/en-us/articles/360003469994-How-to-Become-an-Instructor-FAQ","title":"Udemy Support"},
{"name":"Beanstalk","link":"https://coloradosun.com/2020/05/08/colorado-entrepreneurs-startup-coronavirus-small-business/","title":"Colorado Sun"}]

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
  size_h.append("How big are classes?")
  var size_p = $("<p>")
  size_p.append(size)
  var missing_h = $('<div class="h3 mb-3 text-secondary">')
  missing_h.append("What is missing?")
  var missing_p = $("<p>")
  missing_p.append(missing)
  var reviews_h = $('<div class="h3 mb-3 text-secondary">')
  reviews_h.append("Sources and Reviews")
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
  content.append(header, subheader, "<br>", button, "<br>", "<br>", users_h, users_p, cost_h, cost_p, size_h, size_p, notes_h, notes_p, missing_h, missing_p, reviews_h, reviews_p, "<br><br>")
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

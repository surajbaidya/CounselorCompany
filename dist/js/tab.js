function home_display() {
  document.getElementById("home-txt").style.display = "block";
  document.getElementById("blog-txt").style.display = "none";
  document.getElementById("code-txt").style.display = "none";
  document.getElementById("project-txt").style.display = "none";
  document.getElementById("about-txt").style.display = "none";
  document.getElementById("personal-txt").style.display = "none";

  document.getElementById("home-lb").style.background = "#589167";
  document.getElementById("home-lb").style.borderRadius = "5px";
  document.getElementById("blog-lb").style.background = "none";
  document.getElementById("code-lb").style.background = "none";
  document.getElementById("project-lb").style.background = "none";
  document.getElementById("about-lb").style.background = "none";
  document.getElementById("personal-lb").style.background = "none";
}

function blog_display() {
  document.getElementById("home-txt").style.display = "none";
  document.getElementById("blog-txt").style.display = "block";
  document.getElementById("code-txt").style.display = "none";
  document.getElementById("project-txt").style.display = "none";
  document.getElementById("about-txt").style.display = "none";
  document.getElementById("personal-txt").style.display = "none";

  document.getElementById("home-lb").style.background = "none";
  document.getElementById("blog-lb").style.background = "#589167";

  document.getElementById("code-lb").style.background = "none";
  document.getElementById("project-lb").style.background = "none";
  document.getElementById("about-lb").style.background = "none";
  document.getElementById("personal-lb").style.background = "none";
}

function code_display() {
  document.getElementById("home-txt").style.display = "none";
  document.getElementById("blog-txt").style.display = "none";
  document.getElementById("code-txt").style.display = "block";
  document.getElementById("project-txt").style.display = "none";
  document.getElementById("about-txt").style.display = "none";
  document.getElementById("personal-txt").style.display = "none";

  document.getElementById("home-lb").style.background = "none";
  document.getElementById("blog-lb").style.background = "none";
  document.getElementById("code-lb").style.background = "#589167";
  document.getElementById("project-lb").style.background = "none";
  document.getElementById("about-lb").style.background = "none";
  document.getElementById("personal-lb").style.background = "none";
}

function project_display() {
  document.getElementById("home-txt").style.display = "none";
  document.getElementById("blog-txt").style.display = "none";
  document.getElementById("code-txt").style.display = "none";
  document.getElementById("project-txt").style.display = "block";
  document.getElementById("about-txt").style.display = "none";
  document.getElementById("personal-txt").style.display = "none";

  document.getElementById("home-lb").style.background = "none";
  document.getElementById("blog-lb").style.background = "none";
  document.getElementById("code-lb").style.background = "none";
  document.getElementById("project-lb").style.background = "#589167";
  document.getElementById("about-lb").style.background = "none";
  document.getElementById("personal-lb").style.background = "none";
}

function about_display() {
  document.getElementById("home-txt").style.display = "none";
  document.getElementById("blog-txt").style.display = "none";
  document.getElementById("code-txt").style.display = "none";
  document.getElementById("project-txt").style.display = "none";
  document.getElementById("about-txt").style.display = "block";
  document.getElementById("personal-txt").style.display = "none";

  document.getElementById("home-lb").style.background = "none";
  document.getElementById("blog-lb").style.background = "none";
  document.getElementById("code-lb").style.background = "none";
  document.getElementById("project-lb").style.background = "none";
  document.getElementById("about-lb").style.background = "#589167";
  document.getElementById("personal-lb").style.background = "none";
}

function personal_display() {
  document.getElementById("home-txt").style.display = "none";
  document.getElementById("blog-txt").style.display = "none";
  document.getElementById("code-txt").style.display = "none";
  document.getElementById("project-txt").style.display = "none";
  document.getElementById("about-txt").style.display = "none";
  document.getElementById("personal-txt").style.display = "block";

  document.getElementById("home-lb").style.background = "none";
  document.getElementById("blog-lb").style.background = "none";
  document.getElementById("code-lb").style.background = "none";
  document.getElementById("project-lb").style.background = "none";
  document.getElementById("about-lb").style.background = "none";
  document.getElementById("personal-lb").style.background = "#589167";
}

"use strict";

document.addEventListener("DOMContentLoaded", function () {

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
if (!menuToggle || !navLinks) return;

navLinks.classList.remove("is-open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open navigation menu");

}

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

}

const currentYear = document.getElementById("currentYear");

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
contactForm.addEventListener("submit", function (event) {
event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    if (formStatus) {
      formStatus.textContent = "Please complete all fields.";
    }
    return;
  }

  const emailSubject = encodeURIComponent(subject);
  const emailBody = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  const mailtoLink =
    "mailto:mr.an.rough@gmail.com" +
    "?subject=" + emailSubject +
    "&body=" + emailBody;

  if (formStatus) {
    formStatus.textContent =
      "Opening your email application. Please review and send your message there.";
  }

  window.location.href = mailtoLink;
});

}

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(
'.nav-links a[href^="#"]'
);

if ("IntersectionObserver" in window && sections.length > 0) {
const sectionObserver = new IntersectionObserver(
function (entries) {
entries.forEach(function (entry) {
if (!entry.isIntersecting) return;

      const sectionId = entry.target.id;

      navigationLinks.forEach(function (link) {
        const isActive = link.getAttribute("href") === "#" + sectionId;

        if (isActive) {
          link.classList.add("active");
          link.setAttribute("aria-current", "location");
        } else {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  {
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  }
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

}

console.log("Anwar Portfolio initialized successfully.");
});

document.addEventListener("DOMContentLoaded", () => {
const revealElements = document.querySelectorAll(
".section-heading, .about-content, .skill-card, .project-card, .education-card, .timeline-item, .contact-card"
);

revealElements.forEach((element) => {
element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver(
(entries, observer) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("active");
observer.unobserve(entry.target);
}
});
},
{ threshold: 0.12 }
);

revealElements.forEach((element) => observer.observe(element));

} else {
revealElements.forEach((element) => {
element.classList.add("active");
});
}
});

document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.querySelector(".menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

if (!menuToggle || !navbarLinks) return;

menuToggle.addEventListener("click", () => {
const isOpen = navbarLinks.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", String(isOpen));
menuToggle.setAttribute(
  "aria-label",
  isOpen ? "Close navigation" : "Toggle navigation"
);

});

navbarLinks.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
navbarLinks.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Toggle navigation");
});
});

document.addEventListener("click", (event) => {
if (
!menuToggle.contains(event.target) &&
!navbarLinks.contains(event.target)
) {
navbarLinks.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Toggle navigation");
}
});
});
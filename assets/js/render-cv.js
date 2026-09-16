/**
 * Renders CV (see assets/data/cv.js) into the section containers on cv.html.
 */

function cvEntryHtml(entry) {
  return `
        <div class="cv-entry">
            <div class="cv-entry-date">${entry.date}</div>
            <div class="cv-entry-body">
                <div class="cv-entry-title">${entry.title}</div>
                <div class="cv-entry-org">${entry.org}${entry.location ? ` &middot; ${entry.location}` : ""}</div>
                ${entry.detail ? `<p class="cv-entry-detail">${entry.detail}</p>` : ""}
            </div>
        </div>`;
}

function cvPublicationHtml(pub) {
  const titleHtml = pub.pdf
    ? `<a href="${pub.pdf}">${pub.title}</a>`
    : pub.title;

  const extraLinks = (pub.links || [])
    .map((link) => ` &middot; <a href="${link.href}" target="_blank">${link.label}</a>`)
    .join("");

  return `
        <div class="cv-pub-entry">
            <div class="cv-pub-code">${pub.code}<br>${pub.year}</div>
            <div class="cv-pub-body">
                <div class="cv-pub-title">${titleHtml}</div>
                <div class="cv-pub-authors">${pub.authors}</div>
                <div class="cv-pub-venue">${pub.venue}${extraLinks}</div>
            </div>
        </div>`;
}

function cvTeachingHtml(entry) {
  const items = (entry.items || [])
    .map((item) => `<p class="cv-entry-detail">${item}</p>`)
    .join("");
  return `
        <div class="cv-entry">
            <div class="cv-entry-date">${entry.date}</div>
            <div class="cv-entry-body">
                <div class="cv-entry-title">${entry.title}</div>
                <div class="cv-entry-org">${entry.org}</div>
                ${items}
            </div>
        </div>`;
}

function cvAwardHtml(award) {
  return `
        <div class="cv-award">
            <div class="cv-award-name">${award.name}</div>
            <div class="cv-award-year">${award.year}</div>
        </div>`;
}

function cvWorkshopOrganizerHtml(ws) {
  return `
        <div class="cv-entry">
            <div class="cv-entry-date">${ws.location}</div>
            <div class="cv-entry-body">
                <div class="cv-entry-title"><a href="${ws.href}" target="_blank">${ws.title}</a></div>
                <div class="cv-entry-org">${ws.subtitle}</div>
                <p class="cv-entry-detail">${ws.cochairs}</p>
            </div>
        </div>`;
}

function fillSection(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CV === "undefined") return;

  fillSection(
    "cv-profile",
    `<p class="cv-profile-keywords"><b>Keywords:</b> ${CV.profile.keywords}</p><p>${CV.profile.summary}</p>`
  );

  fillSection("cv-education", CV.education.map(cvEntryHtml).join("\n"));
  fillSection("cv-experience", CV.experience.map(cvEntryHtml).join("\n"));

  fillSection("cv-publications-journal", CV.publications.journal.map(cvPublicationHtml).join("\n"));
  fillSection("cv-publications-conference", CV.publications.conference.map(cvPublicationHtml).join("\n"));
  fillSection("cv-publications-workshop", CV.publications.workshop.map(cvPublicationHtml).join("\n"));

  fillSection("cv-honors", CV.honors.map(cvAwardHtml).join("\n"));

  fillSection("cv-teaching", CV.teaching.map(cvTeachingHtml).join("\n"));

  fillSection("cv-service-organizer", CV.service.workshopOrganizer.map(cvWorkshopOrganizerHtml).join("\n"));
  fillSection(
    "cv-service-reviewing",
    `<p class="p-small"><span class="reviewer-tag">Journal</span>${CV.service.reviewing.journal}</p>
     <p class="p-small"><span class="reviewer-tag">Conference</span>${CV.service.reviewing.conference}</p>
     <p class="p-small"><span class="reviewer-tag">Workshop</span>${CV.service.reviewing.workshop}</p>`
  );
  fillSection(
    "cv-service-outreach",
    CV.service.outreach.map((item) => `<p class="cv-entry-detail">${item}</p>`).join("\n")
  );
});

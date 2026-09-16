/**
 * Renders PUBLICATIONS (see assets/data/publications.js) into the
 * "#publications-list" container, and wires up the Highlights/Full toggle
 * above it. Highlighted papers get a pink card + star badge in both tabs.
 */

function githubRepoFromUrl(url) {
  const match = /^https?:\/\/github\.com\/([^/]+)\/([^/#?]+)/.exec(url || "");
  return match ? { owner: match[1], repo: match[2] } : null;
}

function renderPublicationCard(pub) {
  const hasPdf = Boolean(pub.pdf);
  const isHighlight = Boolean(pub.highlight);

  const thumbnail = `<img src="${pub.image}" alt=""/>`;
  const thumbnailHtml = hasPdf
    ? `<a href="${pub.pdf}">${thumbnail}</a>`
    : thumbnail;

  const starBadge = isHighlight
    ? `<span class="pub-star-badge" title="Highlighted"><i class="fa-solid fa-star"></i></span>`
    : "";

  const titleHtml = hasPdf
    ? `<a href="${pub.pdf}" class="pub-title-link">${pub.title}</a>`
    : `<span class="pub-title-link">${pub.title}</span>`;

  const extraLinks = (pub.links || [])
    .map((link) => {
      const target = link.external ? ' target="_blank"' : "";
      const anchor = `<a href="${link.href}"${target}><i class="${link.icon}"></i> ${link.label}</a>`;
      const repo = link.showStars ? githubRepoFromUrl(link.href) : null;
      if (!repo) return anchor;
      const stars = `<span class="pub-github-stars"><i class="fa-solid fa-star pub-github-star-icon"></i><img class="pub-github-badge" src="https://img.shields.io/github/stars/${repo.owner}/${repo.repo}?style=flat-square&label=&color=b56f7e&labelColor=fdf3f5" alt="${repo.owner}/${repo.repo} GitHub stars"/></span>`;
      return `<span class="pub-link-group">${anchor}${stars}</span>`;
    })
    .join("\n");

  const linksHtml = extraLinks
    ? `\n                        <span class="pub-links">\n                            ${extraLinks}\n                        </span>`
    : "";

  const notesHtml = pub.notes
    ? `\n                    <p class="p-condense pub-notes">${pub.notes}</p>`
    : "";

  const cardClass = isHighlight
    ? "card card-body add-margin pub-highlight-card"
    : "card card-body add-margin";

  return `
                <div class="blog classic-view py-md-2">
                    <div class="${cardClass}">
                        <div class="row align-items-center">
                            <div class="col-md-3 py-md-2 add-padding">
                                <figure class="hover-scale rounded">
                                    ${starBadge}${thumbnailHtml}
                                </figure>
                            </div>
                            <div class="col-md-9 add-padding">
                                <h6>${titleHtml}</h6>
                                <p class="p-condense">${pub.authors}</p>
                                <div class="p-condense pub-meta">
                                    <b>${pub.venue}</b>${linksHtml}
                                </div>${notesHtml}
                            </div>
                        </div>
                    </div>
                </div>`;
}

function getShownPublications() {
  return PUBLICATIONS.filter((pub) => pub.visible !== false);
}

function renderPublications(tab) {
  const container = document.getElementById("publications-list");
  if (!container) return;
  const all = getShownPublications();
  const list = tab === "full" ? all : all.filter((pub) => pub.highlight);
  container.innerHTML = list.map(renderPublicationCard).join("\n");
}

function initPublicationTabs() {
  const toggle = document.querySelector(".pub-tab-toggle");
  if (!toggle) return;

  const all = getShownPublications();
  const highlightCount = all.filter((pub) => pub.highlight).length;
  const fullCount = all.length;

  const highlightBtn = toggle.querySelector('[data-pub-tab="highlight"]');
  const fullBtn = toggle.querySelector('[data-pub-tab="full"]');
  highlightBtn.querySelector(".pub-tab-count").textContent = `(${highlightCount})`;
  fullBtn.querySelector(".pub-tab-count").textContent = `(${fullCount})`;

  const buttons = [highlightBtn, fullBtn];
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPublications(btn.dataset.pubTab);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PUBLICATIONS === "undefined") return;
  initPublicationTabs();
  renderPublications("highlight");
});

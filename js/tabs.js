/** Navigation par onglets (traces + bilan) sur les pages domaine */
function initPageTabs(root = document) {
  root.querySelectorAll('[data-tabs]').forEach((tabsRoot) => {
    const group = tabsRoot.dataset.tabs;
    const triggers = tabsRoot.querySelectorAll(`[data-tab-trigger="${group}"]`);
    const panels = tabsRoot.querySelectorAll(`[data-tab-panel="${group}"]`);

    function activate(id) {
      triggers.forEach((btn) => {
        const on = btn.dataset.tabId === id;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach((panel) => {
        const on = panel.dataset.tabId === id;
        panel.classList.toggle('active', on);
        panel.hidden = !on;
      });
      if (location.hash && location.hash.slice(1) === id) {
        history.replaceState(null, '', `#${id}`);
      }
    }

    triggers.forEach((btn) => {
      btn.addEventListener('click', () => {
        activate(btn.dataset.tabId);
        history.replaceState(null, '', `#${btn.dataset.tabId}`);
      });
    });

    const hash = location.hash.slice(1);
    const ids = [...triggers].map((b) => b.dataset.tabId);
    activate(ids.includes(hash) ? hash : triggers[0]?.dataset.tabId);
  });
}

function initTraceImages(root = document) {
  root.querySelectorAll('.trace-frame img').forEach((img) => {
    const placeholder = img.nextElementSibling;
    const showPlaceholder = () => {
      img.style.display = 'none';
      if (placeholder?.classList.contains('trace-placeholder')) {
        placeholder.style.display = 'flex';
      }
    };
    const showImage = () => {
      if (img.naturalWidth > 0) {
        img.style.display = 'block';
        if (placeholder?.classList.contains('trace-placeholder')) {
          placeholder.style.display = 'none';
        }
      } else {
        showPlaceholder();
      }
    };
    img.addEventListener('error', showPlaceholder);
    img.addEventListener('load', showImage);
    if (img.complete) showImage();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPageTabs();
  initTraceImages();
});

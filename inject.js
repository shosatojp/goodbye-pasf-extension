(() => {
    const e = document.createElement('style');
    e.textContent = `
    [id^=ed_]{
        display: none;
    }
    `;
    window.addEventListener('DOMContentLoaded', () => {
        window.document.body.appendChild(e);
    });
})();

(() => {
    const e = document.createElement('style');
    e.textContent = `
    [id^=ed_],[id^=eob_]{
        display: none;
    }
    `;
    document.body.appendChild(e);
})();

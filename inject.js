(() => {
    const e = document.createElement('style');
    e.textContent = `
    [id^=ed_]{
        display: none;
    }
    `;
    document.body.appendChild(e);
})();

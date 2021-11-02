function progreset(id) {
    /* RESET OTHER CSS*/
    $('.progresInner').css('height', '0%');
    $('.liHeader').css('color', '#5f6368');
    /*LOOP FOR PROGRESS BAR */
    $(`#liHeader${id}`).css('color', 'var(--gmail-blue)')
    const progressWho = `progresInner${id}`
    document.getElementById(progressWho).style.height = `0%`;
    for (i = 0; i < 100; i++) {
        setTimeout(function () {
            document.getElementById(progressWho).style.height = `${i}%`;
        }, 10)
    }
}
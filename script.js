function progreset(id) {
    /* RESET OTHER CSS*/
    $('.progresInner').css('height', '0%');
    $('.liHeader').css('color', '#5f6368');
    $(`.liImages ul li`).removeClass();
    $(`.liImages ul li`).hide('500');

    /*LOOP FOR PROGRESS BAR */
    $(`.liImages ul li:nth-child(${id})`).show('500');
    $(`#liHeader${id}`).css('color', 'var(--gmail-blue)')
    const progressWho = `progresInner${id}`
    document.getElementById(progressWho).style.height = `0%`;
    for (i = 0; i < 100; i++) {
        setTimeout(function () {
            document.getElementById(progressWho).style.height = `${i}%`;
        }, 10)
    }
}
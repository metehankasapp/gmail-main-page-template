var x = window.matchMedia("(max-width: 992px)")


function progreset(id) {
    /* RESET OTHER CSS*/
    $('#progress1').css('background-color', 'rgba(0, 0, 0, 0.16)')
    $('.progresInner').css('height', '0%');
    $('.liHeader').css('color', '#5f6368');
    $(`.liImages ul li`).removeClass();
    $(`.liImages ul li`).hide('100');

    if (x.matches) {
        $(`.ss3-ul:nth-child(1) img`).each(function (index) {
            $($(`.ss3-ul:nth-child(1) img`)[index]).removeClass('d-inline-block');
            $($(`.ss3-ul:nth-child(1) img`)[index]).addClass('d-none');

        });
        const curImg = $(`.ss3-ul:nth-child(1) img`)[id - 1];
        $(curImg).removeClass('d-none');
        $(curImg).addClass('d-inline-block');
    } else {}



    /*LOOP FOR PROGRESS BAR */
    $(`.liImages ul li:nth-child(${id})`).show('100');
    $(`#liHeader${id}`).css('color', 'var(--gmail-blue)')
    const progressWho = `progresInner${id}`
    document.getElementById(progressWho).style.height = `0%`;
    for (i = 0; i < 100; i++) {
        setTimeout(function () {
            document.getElementById(progressWho).style.height = `${i}%`;
        }, 10)
    }
}
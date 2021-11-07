var x = window.matchMedia("(max-width: 992px)");

function progreset(id) {
    /*MOBİLE IMAGE */
    $('.ss .mobil-image').each(function (element) {
        $($('.ss .mobil-image')[element]).css('display', 'none');
    })

    $($(`.ss #liHeader${id}`).find($('.mobil-image'))).fadeIn(300);


    /* RESET OTHER CSS*/
    $(".ss #progress1").css("background-color", "#f1f3f4");
    $(".ss .progresInner").css("height", "0%");
    $(".ss .liHeader").css("color", "#5f6368");
    $(`.ss .liImages ul li`).removeClass();
    $(`.ss .liImages ul li`).css('display', 'none');

    if (x.matches) {
        $(`.ss .ss3-ul:nth-child(1) img`).each(function (index) {
            $($(`.ss .ss3-ul:nth-child(1) img`)[index]).removeClass("d-inline-block");
            $($(`.ss .ss3-ul:nth-child(1) img`)[index]).addClass("d-none");
        });
        const curImg = $(`.ss .ss3-ul:nth-child(1) img`)[id - 1];
        $(curImg).removeClass("d-none");
        $(curImg).addClass("d-inline-block");
    } else {}

    /*LOOP FOR PROGRESS BAR */
    $(`.ss .liImages ul li:nth-child(${id})`).fadeIn(300);
    $(`.ss #liHeader${id}`).css("color", "var(--gmail-blue)");
    const progressWho = `progresInner${id}`;
    document.getElementById(progressWho).style.height = `0%`;
    for (i = 0; i < 100; i++) {
        setTimeout(function () {
            document.getElementById(progressWho).style.height = `${i}%`;
        }, 10);
    }
}

function progreset2(id) {


    /*MOBİLE IMAGE */
    $('.ss-t .mobil-image').each(function (element) {
        $($('.ss-t .mobil-image')[element]).css('display', 'none');
    })

    $($(`.ss-t #liHeader${id}-t`).find($('.mobil-image'))).fadeIn(300);

    /* RESET OTHER CSS*/
    $(".ss-t #progress1-t").css("background-color", "#f1f3f4");
    $(".ss-t .progresInner").css("height", "0%");
    $(".ss-t .liHeader").css("color", "#5f6368");
    $(`.ss-t .liImages ul li`).removeClass();
    $(`.ss-t .liImages ul li`).css('display', 'none');

    if (x.matches) {
        console.log($(`.ss3-t-ul img`));
        $(`.ss3-t-ul img`).each(function (index) {
            $($(`.ss3-t-ul img`)[index]).removeClass("d-inline-block");
            $($(`.ss3-t-ul img`)[index]).addClass("d-none");
        });
        const curImg = $(`.ss3-t-ul img`)[id - 1];
        $(curImg).removeClass("d-none");
        $(curImg).addClass("d-inline-block");
    } else {}

    /*LOOP FOR PROGRESS BAR */
    $(`.ss-t .liImages ul li:nth-child(${id})`).fadeIn(300);
    $(`.ss-t #liHeader${id}-t`).css("color", "var(--gmail-blue)");
    const progressWho = `progresInner${id}-t`;
    document.getElementById(progressWho).style.height = `0%`;
    for (i = 0; i < 100; i++) {
        setTimeout(function () {
            document.getElementById(progressWho).style.height = `${i}%`;
        }, 10);
    }
}

$(".accordion-item-ggl").click(function () {
    const arrow = $($(this)[0]).find($("i"));
    const accrInner = $($(this)[0]).find($(".accordion-item-inner"));

    /*RESET*/



    if (arrow.hasClass('fa-angle-down')) {
        arrow.removeClass("fa-angle-down");
        arrow.addClass("fa-angle-up");
    } else {
        arrow.addClass("fa-angle-down");
        arrow.removeClass("fa-angle-up");
    }



    /*SET ARROW */

    accrInner.fadeToggle(300);
});
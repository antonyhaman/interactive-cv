const htmlElements = {
    workplaceDiv: '<div class="col-sm-6 col-xs-12 job"></div>',
    jobDetailsDiv: '<div class="col-sm-6 col-xs-12 job-details"></div>',
    responsibilitiesList: '<ol style="list-style-type:disc"></ol>',
    responsibilitiesListElement: '<li class="small"></li>',
    paragraph: '<p class="small"></p>',
    strong: '<strong></strong>'
}

$(function() {
    $(".myname").typed({
        strings: ["Anton Haman"],
        typeSpeed: 100,
        showCursor: false,
    });
});

$(function() {
    $('#scroll a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 400, 'linear');
    });
});

$(function() {
    $(document).ready(function() {
        $.getJSON("json/getCareersData", function(response) {
            renderCareers(response);
        })
    });
})

function renderCareers(response) {
    $(document).ready(function() {
        let jobs = [];
        response.forEach(function(respElem) {
            let divWork = $(htmlElements.workplaceDiv);
            let divDetails = $(htmlElements.jobDetailsDiv);

            $(htmlElements.strong).text(respElem.workplace).appendTo(divWork);
            $(htmlElements.paragraph).text(respElem.date).appendTo(divWork);
            $(htmlElements.strong).text(respElem.position).appendTo(divDetails);
            $(htmlElements.paragraph).text(respElem.description).appendTo(divDetails);


            if (respElem.subtopic != undefined) {
     			let responsibilitiesList = $(htmlElements.responsibilitiesList);
                $(htmlElements.paragraph).text(respElem.subtopic).appendTo(divDetails);
                respElem.responsibilities.forEach(function(elem) {

                    $(htmlElements.responsibilitiesListElement).text(elem).appendTo(responsibilitiesList);
                })
                divDetails.append(responsibilitiesList);
            }

            jobs.push(divWork);
            jobs.push(divDetails);
        })

        jobs.forEach(function(elem) {
            $('#careers .row').append(elem);
        })
    });
}
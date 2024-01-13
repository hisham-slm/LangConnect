$(document).ready(function () {
    $('#speakingAnimation').css({
        'display': 'none',
        'justify-content': 'center',
        'align-items': 'center'
    });

    $('.notification').css({
        'display': 'none',
        'justify-content': 'center',
        'align-items': 'center'
});

$('#translationForm').submit(function (event) {
    event.preventDefault()

    var formData = $(this).serialize()
    var translatingTo = $('#translatingTo').val()
    var translatingFrom = $('#translatingFrom').val()




    formData += '&translatingTo=' + translatingTo;
    formData += '&translatingFrom=' + translatingFrom

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/translate",
        data: formData,
        beforeSend: function () {
            $('#loader').css('display', 'flex')
        }
        ,
        success: function (response) {
            $('#loader').css('display', 'none')

            $('#translationResult').html(response.translation);
            $('#speakingButton').prop('disabled', false);
            $('#copyButton').prop('disabled', false);
        },
        error: function (xhr, errmsg, err) {
            console.log(errmsg);
        }
    });
})

$('#pronounciation').submit(function (event) {
    event.preventDefault()


    var formData = $(this).serialize()
    var word = $('#translationResult').val()
    var language = $('#translatingTo').val()


    formData += '&language=' + language
    formData += '&word=' + word;


    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:8000/read_out",
        data: formData,
        beforeSend: function () {
            $('#speakingAnimation').css('display', 'flex')
        },
        success: function (response) {
            $('#speakingAnimation').css('display', 'none')


        },
        error: function (xhr, errmsg, err) {
            console.log(errmsg);
            $('#speakingAnimation').css('display', 'none')

        }
    });


})
$('#copyButton').click(function (event) {
    event.preventDefault()
    navigator.clipboard.writeText($('#translationResult').val())

    var notification = $('#notification');
    notification.css('display','flex');

    setTimeout(function () {
        notification.hide();
    }, 1000);


})


if ($('#translatingWord').val() == '') {
    console.log('empty')
    $('#translateButton').prop('disabled', true)
    $('#speakingButton').prop('disabled', true);
    $('#copyButton').prop('disabled', true);
}

$('#translatingWord').on('input', function () {
    if ($('#translatingWord').val() == '') {
        $('#translateButton').prop('disabled', true)
    } else {
        $('#translateButton').prop('disabled', false)
    }
})
    })
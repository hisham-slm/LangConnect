// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
// script.type = 'text/javascript';



// script.onload = function(){
    
//     $(document).ready(function () {
//     $('#translationForm').submit(function (event) {
//         event.preventDefault()

//         var formData = $(this).serialize()
//         var translatingTo = $('#translatingTo').val()
//         var translatingFrom = $('#translatingFrom').val()

//         formData += '&translatingTo=' + translatingTo;
//         formData += '&translatingFrom=' + translatingFrom

//         $.ajax({
//             type: 'POST',
//             url: "{% url 'home:translate' %}",
//             data: formData,
//             beforeSend: function () {
//                 $('#loader').css('display', 'flex')
//             }
//             ,
//             success: function (response) {
//                 $('#loader').css('display', 'none')

//                 $('#translationResult').html(response.translation);
//                 console.log(formData)
//             },
//             error: function (xhr, errmsg, err) {
//                 console.log(errmsg);
//             }
//         });
//     })

//     $('#pronounciation').submit(function (event) {
//         event.preventDefault()


//         var formData = $(this).serialize()
//         var word = $('#translationResult').val()
//         var language = $('#translatingTo').val()


//         formData += '&language=' + language
//         formData += '&word=' + word;

//         console.log(formData)

//         $.ajax({
//             type: 'POST',
//             url: "{% url 'home:read_out' %}",
//             data: formData,
//             success: function (response) {
//                 console.log(formData)

//                 console.log('working')
//             },
//             error: function (xhr, errmsg, err) {
//                 console.log(errmsg);
//             }
//         });
//     })
// })
// }

console.log('loaded')
$(document).ready( () => {
    // $('button').click( () => {
    //     $.get(' https://akademia108.pl/api/ajax/get-post.php', {
    //         method: 'POST'
    //     })
    //     .done((res) => {
    //         console.log(res);
    //         $('#my-div').html('');

    //         for (element in res) {
    //             $('#my-div').append(`<h1>${element}: ${res[element]}</h1>`);
    //         }
    //     })
    //     .fail( (error) => {
    //         console.error(error);
    //     })
    // })

    $('button').click( () => {
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done((res) => {
            $('#my-div').html('');

            for(element in res){
                $('#my-div').append(`<h1>${element}: ${res[element]}</h1>`)
            }
        })
        .fail( (error) => {
            console.error(error);
        })
    })
})




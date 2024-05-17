$(document).ready(function () {
    const Id = {};
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop('checked') === true) {
            Id[$(this).data('id')] = $(this).data('name');
        } else if ($(this).prop('checked') === false) {
            delete Id[$(this).attr('data-id')];
        }
        $('div.amenities H4').text(Object.values(Id).join(', '));
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === 'OK') {
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });

    const dObj = {};

    $('button').click(() => {
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            data: '{}',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                for (let k = 0; k < data.length; k++) {
                    const placeData = data[k];
                    $('.places ').append('<article><h2>' + placeData.name + '</h2><div class="price_by_night"><p>$' + placeData.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + placeData.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + placeData.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + placeData.number_bathrooms + '</p></div></div><div class="description"><p>' + placeData.description + '</p></div></article>');
                }
            }
        });
    });
});
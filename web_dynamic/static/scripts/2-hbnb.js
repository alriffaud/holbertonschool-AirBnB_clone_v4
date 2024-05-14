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
});

$('#graph-bars-touchpad').hide();

$('#lines-touchpad').on('click', function (e) {
    $('#bars-touchpad').removeClass('active');
    $('#graph-bars-touchpad').fadeOut();
    $(this).addClass('active');
    $('#graph-lines-touchpad').fadeIn();
    e.preventDefault();
});

$('#bars-touchpad').on('click', function (e) {
    $('#lines-touchpad').removeClass('active');
    $('#graph-lines-touchpad').fadeOut();
    $(this).addClass('active');
    $('#graph-bars-touchpad').fadeIn().removeClass('hidden');
    e.preventDefault();
});

function showTooltip(x, y, contents) {
    $(' <div id="tooltip">' + contents + '</div>').css({
    top: y - 16,
    left: x + 20
}).appendTo('body').fadeIn();
}

var previousPoint = null;

$('#graph-lines-touchpad, #graph-bars-touchpad').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
            showTooltip(item.pageX, item.pageY, y + ' visitors at ' + x + '.00h');
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
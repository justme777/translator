function analyzeText(text) {
    var allWords = text.split(/\s+/);
    t = allWords;
    fillTable(allWords);
}

function fillTable(arr) {
    var html = '';
    for (var i = 0; i < arr.length; i++)
    {
        html += '<tr><td>' + arr[i] +
            '</td><td>' + 'frequency' + '</td><td>'+'translation'+'</td></tr>';
    }
    $('#results tr').first().after(html);
    setFormVisibility(false);
}

function setFormVisibility(isVisible) {
    if (isVisible) {
        $('#textBlock').show();
        $('#lnkShowForm').css('display', 'none');
        $('#results').css('display', 'none');
    } else {
        $('#textBlock').hide();
        $("#results tbody").empty();
        $('#lnkShowForm').css('display', 'block');
        $('#results').css('display', 'block');
    }
}
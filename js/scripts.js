function analyzeText(text) {
    var allWords = text.split(/\s+/);
    var str = "a,in,the,but,on,to,into,onto";
    var excludedWords = str.split(',');
    res = [];
    for (var i = 0; i < allWords.length; i++) {
        if ($.inArray(allWords[i], excludedWords) == -1) {
            //alert(allWords[i]);
            k = $.inArray(allWords[i], res); 
            if (k == -1) {
                var obj = {};
                obj.Name = allWords[i];
                obj.Translation = allWords[i];
                obj.Frequency = 1;
                res.push(obj);
            } else {
                res[k].Frequency = res[k].Frequency + 1;
            }
        }
    }

    fillTable(res);
}

function fillTable(arr) {
    var html = '';
    for (var i = 0; i < arr.length; i++)
    {
        html += '<tr><td>' + arr[i].Name +
            '</td><td>' + arr[i].Frequency + '</td><td>' + arr[i].Translation + '</td></tr>';
    }
    $("#results tbody").append(html);
    setFormVisibility(false);
}

function setFormVisibility(isVisible) {
    if (isVisible) {
        $('#textBlock').show();
        $('#lnkShowForm').css('display', 'none');
        $('#results').css('display', 'none');
        $("#results tbody").empty();
    } else {
        $('#textBlock').hide();
        $('#lnkShowForm').css('display', 'block');
        $('#results').css('display', 'block');
    }
}
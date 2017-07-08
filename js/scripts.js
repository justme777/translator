function analyzeText(text) {
    var allWords = text.split(/\s+/);
    $('#spWordsCount').text(allWords.length);
    var excludedWords = excludedWordsStr.split(',');
    res = [];
    resWords = [];
    for (var i = 0; i < allWords.length; i++) {
        var word = allWords[i].toLowerCase();
        if ($.inArray(word, excludedWords) == -1) {
            k = $.inArray(word, resWords);
            console.log("k=" + k + " word=" + word);
            if (k == -1) {
                var obj = {};
                obj.Name = word;
                obj.Translation = word;
                obj.Frequency = 1;
                res.push(obj);
                resWords.push(word);
            } else {
                res[k].Frequency = res[k].Frequency + 1;
            }
        }
    }
    delete allWords;
    delete excludedWords;
    delete resWords;
    res =_.orderBy(res, ['Frequency'], ['desc']);
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
        $('#resultsBlock').css('display','none');
        $('#lnkShowForm').css('display', 'none');
        $("#results tbody").empty();
    } else {
        $('#textBlock').hide();
        $('#lnkShowForm').css('display', 'block');
        $('#resultsBlock').css('display', 'block');
    }
}

var excludedWordsStr = "a,in,the,but,on,to,into,onto,and,of,with,when,has,was,is,were," +
    "this,its,it,by,will,as,for,have,an,some,many,that,out,can,at,from,"
    + "not,if,which,"
    +"one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve";
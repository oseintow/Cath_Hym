/**
 * Created with JetBrains WebStorm.
 * User: jean
 * Date: 12/24/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
/*
    $.getJSON('document.json', function(data) {
        var output="<p>";
        for (var i in data.hymns) {
            output+="<p>"+ data.hymns[i].verse +"</p>";
        }

        output+="</p>";
        document.getElementById("content").innerHTML=output;
    });*/
$('#search-2').textinput({

create:

    $.getJSON('document.json', function(data) {
        var output="<p>";


        var i=Number($('#search-2').val()) + 1;

            output+="<p>"+ data.hymns[i].verse +"</p>";


        output+="</p>";
        document.getElementById("content").innerHTML=output;
    })
});







});
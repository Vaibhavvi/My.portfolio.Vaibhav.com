var text = ["I'm a Web Developer","I'm a UI/UX Designer","I'm a Web Designer","I'm a Logo Designer"];
var start =0;

function h1changetext()
{
    document.getElementById("h1").innerHTML = text[start];
    start++;

    if(start==text.length)
    {
        start=0;
    }

    setTimeout( h1changetext, 1000);
}
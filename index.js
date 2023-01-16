// When using jQuery, document.querySelectorAll[i] can be shortened by using the keyword jQuery("") or the dollar sign $("")

$("h1").css("color", "red"); // This equals document.querySelectorAll("h1")[i].style.color = "red"; When using the css property, the first parameter is what we want to change, and the second parameter what we want it to change to. If you only use one parameter, that will equal the value

//However, despite how easy DOM might be, it is recommended to keep the stylesheet and javascript separated

$("button").addClass("btn"); //The removeClass method is also useful for animation

$("button").text("Buttons"); //This changes the innerHTML of the buttons from Click Me to Buttons

$("a").attr("href", "https://www.google.com/?client=safari"); //Similar to the css property, when using attr, the first parameter is the value we want to change, and the second what we want it to become

$("button").click(function () {
    $('h1').css("color", "blue")
}); //This is the replacement of an eventListener inside a for loop with jQuery.

$('button').on('click', function () {
    $('h1').slideToggle(); //There are a lot more forms of animation which are described at https://api.jquery.com/category/effects/
})

$("input").keypress(function (event) { //If I changed input to document or body, it would log whatever key I was pressing whether or not it were in the text area
    console.log(event.key)
}); //This eventListener targets keypress in the input box and logs the key that was pressed


$(document).keypress(function (event) {
    $('h1').text(event.key)
}); //This function changes the h1 text to whatever key is being pressed

$("h1").on("mouseover", function () {
    $('h1').css('color', 'purple')
}); //The on method is another neat way of using eventListeners, just that the first parameter is the event and the second the callback

$('h1').before('<h3>This is Before</h3>'); //The before, after, append, and prepend methods add HTML content through Javascript
//$('h1').prepend('<h3>This is Prepend</h3>'); //The issue with these two is that they are placed after or before the h1 text but in the h1 tag, so they will acquire the h1 properties
//$('h1').append('<h3>This is Append</h3>');
$('h1').after('<h3>This is After</h3>');

//$('button').remove(); //This will remove all the buttons

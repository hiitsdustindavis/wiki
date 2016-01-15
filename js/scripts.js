$(document).ready(function() {
  $("form.wiki").submit(function(event) {

    // Call a function on the wiki form upon a submit or .click... //

    // Declaring our variable array for our list of topics "var = topics"//

    var topics = ["Markdown", "Block-elements", "Inline-elements", "CSS", "Bootstrap", "Divs-and-spans", "Floats", "Box-model", "C-scading-styles", "Grid-system", "Responsive-design", "JavaScript-JS-arithmetic", "JS-variables", "JS-methods", "JS-strings", "JS-functions", "jQuery", "DOM-manipulation-and-traversal", "Forms", "Attributes", "Branching", "Arrays", "Looping"];

    // Set up a For loop / set index to zero /  set condition to run length of array /adding one until condition is met//
    var concept = $("select.concept").val();


  for (var index = 0; index <= concept; index += 1) {
      location.href = './pages/' + topics[index] + '.html';
    }

    topics.forEach(function (item, index, array) {
      console.log(item, index);

    });
// upon a true conditon of the intial submit we want to stop the loop / possibly by idenfitying the particular index integer corellated with the input string

    event.preventDefault();
  });

});



// var concept = $("select.concept").val();
// location.href="./pages/" + concept + ".html";

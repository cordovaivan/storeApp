// Code here handles what happens when a user submits a new pet on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
$(document).ready(() => {
    // when user clicks add-btn
    $("#add-btn").on("click", event => {
      event.preventDefault();
  
      // make a clothing obj
      const newClothing = {
        // name from name input
        name: $("#name")
          .val()
          .trim(),
        // description from description input
        description: $('#description')
          .val()
          .trim(),
        // brand from brand input
        breed: $("#brand")
          .val()
          .trim(),
        // location from location input
        location: $("#location")
          .val()
          .trim(),
        // Contact Email Address
        email: $('#email')
          .val()
          .trim()
      };
  
      // send an AJAX POST-request with jQuery
      $.post("/api/new", newClothing)
        // on success, run this callback
        .then(data => {
          // log the data we found
          console.log(data);
          // tell the user we're adding a character with an alert window
          alert("Adding photo...");
        });
  
      // empty each input box by replacing the value with an empty string
      $("#name").val("");
      $("#body").val("");
      $("#description").val("");
      $("#brand").val("");
      $("#location").val("");
      $("#email").val("");
  
      // redirect to /homepage
      $.get("homepage", isAuthenticated, (req, res) => {
        res.render("homepage", {});
      });
    });
  });
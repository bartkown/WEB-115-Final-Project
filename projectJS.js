document.getElementById("submitButton").addEventListener('click', myWindow);
function myWindow() {
    event.preventDefault();
    var username = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return;
    }


    breakfast1 = document.getElementById("Breakfast1").value;
    breakfast2 = document.getElementById("Breakfast2").value;
    breakfast3 = document.getElementById("Breakfast3").value;
    breakfast4 = document.getElementById("Breakfast4").value;
    breakfast5 = document.getElementById("Breakfast5").value;
    breakfast6 = document.getElementById("Breakfast6").value;
    breakfast7 = document.getElementById("Breakfast7").value;

    mSnack1 = document.getElementById("mSnack1").value;
    mSnack2 = document.getElementById("mSnack2").value;
    mSnack3 = document.getElementById("mSnack3").value;
    mSnack4 = document.getElementById("mSnack4").value;
    mSnack5 = document.getElementById("mSnack5").value;
    mSnack6 = document.getElementById("mSnack6").value;
    mSnack7 = document.getElementById("mSnack7").value;
    
    lunch1 = document.getElementById("Lunch1").value;
    lunch2 = document.getElementById("Lunch2").value;
    lunch3 = document.getElementById("Lunch3").value;
    lunch4 = document.getElementById("Lunch4").value;
    lunch5 = document.getElementById("Lunch5").value;
    lunch6 = document.getElementById("Lunch6").value;
    lunch7 = document.getElementById("Lunch7").value;

    eSnack1 = document.getElementById("eSnack1").value;
    eSnack2 = document.getElementById("eSnack2").value;
    eSnack3 = document.getElementById("eSnack3").value;
    eSnack4 = document.getElementById("eSnack4").value;
    eSnack5 = document.getElementById("eSnack5").value;
    eSnack6 = document.getElementById("eSnack6").value;
    eSnack7 = document.getElementById("eSnack7").value;

    dinner1 = document.getElementById("Dinner1").value;
    dinner2 = document.getElementById("Dinner2").value;
    dinner3 = document.getElementById("Dinner3").value;
    dinner4 = document.getElementById("Dinner4").value;
    dinner5 = document.getElementById("Dinner5").value;
    dinner6 = document.getElementById("Dinner6").value;
    dinner7 = document.getElementById("Dinner7").value;

    myText = ("<html>\n<head>\n<title>" + username +"'s Weekly Meal Plan</title>\n</head>\n<body>\n");
    myText += ("<h3>Hello " + username + ", this is your weekly meal plan!</h3>");

    myText += ("<br><h3>Monday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast1 + "</p>\n");
    myText += ("<p>Snack: " + mSnack1 + "</p>\n");
    myText += ("<p>Lunch: " + lunch1 + "</p>\n");
    myText += ("<p>Snack: " + eSnack1 + "</p>\n");
    myText += ("<p>Dinner: " + dinner1 + "</p>\n");

    myText += ("<br><h3>Tuesday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast2 + "</p>\n");
    myText += ("<p>Snack: " + mSnack2 + "</p>\n");
    myText += ("<p>Lunch: " + lunch2 + "</p>\n");
    myText += ("<p>Snack: " + eSnack2 + "</p>\n");
    myText += ("<p>Dinner: " + dinner2 + "</p>\n");

    myText += ("<br><h3>Wednesday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast3 + "</p>\n");
    myText += ("<p>Snack: " + mSnack3 + "</p>\n");
    myText += ("<p>Lunch: " + lunch3 + "</p>\n");
    myText += ("<p>Snack: " + eSnack3 + "</p>\n");
    myText += ("<p>Dinner: " + dinner3 + "</p>\n");

    myText += ("<br><h3>Thursday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast4 + "</p>\n");
    myText += ("<p>Snack: " + mSnack4 + "</p>\n");
    myText += ("<p>Lunch: " + lunch4 + "</p>\n");
    myText += ("<p>Snack: " + eSnack4 + "</p>\n");
    myText += ("<p>Dinner: " + dinner4 + "</p>\n");

    myText += ("<br><h3>Friday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast5 + "</p>\n");
    myText += ("<p>Snack: " + mSnack5 + "</p>\n");
    myText += ("<p>Lunch: " + lunch5 + "</p>\n");
    myText += ("<p>Snack: " + eSnack5 + "</p>\n");
    myText += ("<p>Dinner: " + dinner5 + "</p>\n");

    myText += ("<br><h3>Saturday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast6 + "</p>\n");
    myText += ("<p>Snack: " + mSnack6 + "</p>\n");
    myText += ("<p>Lunch: " + lunch6 + "</p>\n");
    myText += ("<p>Snack: " + eSnack6 + "</p>\n");
    myText += ("<p>Dinner: " + dinner6 + "</p>\n");

    myText += ("<br><h3>Sunday</h3>\n");
    myText += ("<p>Breakfast: " + breakfast7 + "</p>\n");
    myText += ("<p>Snack: " + mSnack7 + "</p>\n");
    myText += ("<p>Lunch: " + lunch7 + "</p>\n");
    myText += ("<p>Snack: " + eSnack7 + "</p>\n");
    myText += ("<p>Dinner: " + dinner7 + "</p>\n");

    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=700,height=400,left=200,top=200');
    flyWindow.document.write(myText);    

}


document.getElementById("clearButton").addEventListener('click', clearForm);
function clearForm() {
    var form = document.getElementById("mealPlan");
    form.reset();
}
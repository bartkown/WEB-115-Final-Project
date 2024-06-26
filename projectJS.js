// Add an event listener that calls the myWindow function once the "submitButton" is clicked.

document.getElementById("submitButton").addEventListener('click', myWindow);


// Create the myWindow function, which creates a styled popup window with the meal plan form inputs.

function myWindow() {

    // Prevent the default form submission event.

    event.preventDefault();

    // Collect the username and email.

    const username = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    // Create the regex code for an email for validation.

    var emailRegex = /^\S+@\S+\.\S+$/;

    // If the regex email code does not match the inputted email,
    // prevent the form submission, alert the user, and focus on the email input,
    // then return nothing for the function and handler.

    if (!emailRegex.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return;
    }

    // Collect the goal input.

    const goal = document.getElementById("goal").value;

    // Create regex code to check if this input has commas.
    // (This is to ensure that the goal is not separated in the CSV file)

    var commaRegex = /,/;

    // If the goal has commas, prevent the form submission, alert the user
    // focus on the goal input box, and return nothing for the function.

    if (commaRegex.test(goal)) {
        event.preventDefault();
        alert("Commas cannot be included in the goal field.");
        document.getElementById("goal").focus();
        return;
    }

    // Get all the inputs from the Meal Plan table form.
    // Make sure commas do not split inputs for the CSV

    let breakfast1 = document.getElementById("Breakfast1").value;
    if (breakfast1.includes(',')) {
        breakfast1 = `"${breakfast1}"`;
    }
    let breakfast2 = document.getElementById("Breakfast2").value;
    if (breakfast2.includes(',')) {
        breakfast2 = `"${breakfast2}"`;
    }
    let breakfast3 = document.getElementById("Breakfast3").value;
    if (breakfast3.includes(',')) {
        breakfast3 = `"${breakfast3}"`;
    }
    let breakfast4 = document.getElementById("Breakfast4").value;
    if (breakfast4.includes(',')) {
        breakfast4 = `"${breakfast4}"`;
    }
    let breakfast5 = document.getElementById("Breakfast5").value;
    if (breakfast5.includes(',')) {
        breakfast5 = `"${breakfast5}"`;
    }
    let breakfast6 = document.getElementById("Breakfast6").value;
    if (breakfast6.includes(',')) {
        breakfast6 = `"${breakfast6}"`;
    }
    let breakfast7 = document.getElementById("Breakfast7").value;
    if (breakfast7.includes(',')) {
        breakfast7 = `"${breakfast7}"`;
    }

    let mSnack1 = document.getElementById("mSnack1").value;
    if (mSnack1.includes(',')) {
        mSnack1 = `"${mSnack1}"`;
    }
    let mSnack2 = document.getElementById("mSnack2").value;
    if (mSnack2.includes(',')) {
        mSnack2 = `"${mSnack2}"`;
    }
    let mSnack3 = document.getElementById("mSnack3").value;
    if (mSnack3.includes(',')) {
        mSnack3 = `"${mSnack3}"`;
    }
    let mSnack4 = document.getElementById("mSnack4").value;
    if (mSnack4.includes(',')) {
        mSnack4 = `"${mSnack4}"`;
    }
    let mSnack5 = document.getElementById("mSnack5").value;
    if (mSnack5.includes(',')) {
        mSnack5 = `"${mSnack5}"`;
    }
    let mSnack6 = document.getElementById("mSnack6").value;
    if (mSnack6.includes(',')) {
        mSnack6 = `"${mSnack6}"`;
    }
    let mSnack7 = document.getElementById("mSnack7").value;
    if (mSnack7.includes(',')) {
        mSnack7 = `"${mSnack7}"`;
    }
    
    let lunch1 = document.getElementById("Lunch1").value;
    if (lunch1.includes(',')) {
        lunch1 = `"${lunch1}"`;
    }
    let lunch2 = document.getElementById("Lunch2").value;
    if (lunch2.includes(',')) {
        lunch2 = `"${lunch2}"`;
    }
    let lunch3 = document.getElementById("Lunch3").value;
    if (lunch3.includes(',')) {
        lunch3 = `"${lunch3}"`;
    }
    let lunch4 = document.getElementById("Lunch4").value;
    if (lunch4.includes(',')) {
        lunch4 = `"${lunch4}"`;
    }
    let lunch5 = document.getElementById("Lunch5").value;
    if (lunch5.includes(',')) {
        lunch5 = `"${lunch5}"`;
    }
    let lunch6 = document.getElementById("Lunch6").value;
    if (lunch6.includes(',')) {
        lunch6 = `"${lunch6}"`;
    }
    let lunch7 = document.getElementById("Lunch7").value;
    if (lunch7.includes(',')) {
        lunch7 = `"${lunch7}"`;
    }

    let eSnack1 = document.getElementById("eSnack1").value;
    if (eSnack1.includes(',')) {
        eSnack1 = `"${eSnack1}"`;
    }
    let eSnack2 = document.getElementById("eSnack2").value;
    if (eSnack2.includes(',')) {
        eSnack2 = `"${eSnack2}"`;
    }
    let eSnack3 = document.getElementById("eSnack3").value;
    if (eSnack3.includes(',')) {
        eSnack3 = `"${eSnack3}"`;
    }
    let eSnack4 = document.getElementById("eSnack4").value;
    if (eSnack4.includes(',')) {
        eSnack4 = `"${eSnack4}"`;
    }
    let eSnack5 = document.getElementById("eSnack5").value;
    if (eSnack5.includes(',')) {
        eSnack5 = `"${eSnack5}"`;
    }
    let eSnack6 = document.getElementById("eSnack6").value;
    if (eSnack6.includes(',')) {
        eSnack6 = `"${eSnack6}"`;
    }
    let eSnack7 = document.getElementById("eSnack7").value;
    if (eSnack7.includes(',')) {
        eSnack7 = `"${eSnack7}"`;
    }

    let dinner1 = document.getElementById("Dinner1").value;
    if (dinner1.includes(',')) {
        dinner1 = `"${dinner1}"`;
    }
    let dinner2 = document.getElementById("Dinner2").value;
    if (dinner2.includes(',')) {
        dinner2 = `"${dinner2}"`;
    }
    let dinner3 = document.getElementById("Dinner3").value;
    if (dinner3.includes(',')) {
        dinner3 = `"${dinner3}"`;
    }
    let dinner4 = document.getElementById("Dinner4").value;
    if (dinner4.includes(',')) {
        dinner4 = `"${dinner4}"`;
    }
    let dinner5 = document.getElementById("Dinner5").value;
    if (dinner5.includes(',')) {
        dinner5 = `"${dinner5}"`;
    }
    let dinner6 = document.getElementById("Dinner6").value;
    if (dinner6.includes(',')) {
        dinner6 = `"${dinner6}"`;
    }
    let dinner7 = document.getElementById("Dinner7").value;
    if (dinner7.includes(',')) {
        dinner7 = `"${dinner7}"`;
    }

    // Use all inputs to create a comma-separated string.
    // (This will be used to create a CSV file for download)

    let csvContent = "Name" + "," + username + "\n";
    csvContent += "Email" + "," + email + "\n";
    csvContent += "Weekly Goal" + "," + goal + "\n";
    csvContent += ",Breakfast,Snack,Lunch,Snack,Dinner\n";
    csvContent += "Sunday," + breakfast1 + "," + mSnack1 + "," + lunch1 + "," + eSnack1 + "," + dinner1 + "\n";
    csvContent += "Monday," + breakfast2 + "," + mSnack2 + "," + lunch2 + "," + eSnack2 + "," + dinner2 + "\n";
    csvContent += "Tuesday," + breakfast3 + "," + mSnack3 + "," + lunch3 + "," + eSnack3 + "," + dinner3 + "\n";
    csvContent += "Wednesday," + breakfast4 + "," + mSnack4 + "," + lunch4 + "," + eSnack4 + "," + dinner4 + "\n";
    csvContent += "Thursday," + breakfast5 + "," + mSnack5 + "," + lunch5 + "," + eSnack5 + "," + dinner5 + "\n";
    csvContent += "Friday," + breakfast6 + "," + mSnack6 + "," + lunch6 + "," + eSnack6 + "," + dinner6 + "\n";
    csvContent += "Saturday," + breakfast7 + "," + mSnack7 + "," + lunch7 + "," + eSnack7 + "," + dinner7 + "\n";

    // Construct a Blob object to allow download using the csvContent string. Specify text/csv as the MIME type.
    let csvMealPlanBlob = new Blob([csvContent], { type: 'text/csv' });

    // Generate a URL (DOMString) for the Blob.
    let csvMealPlanURL = URL.createObjectURL(csvMealPlanBlob);

    // Create HTML code text strings
    // (This will be used to create the popup window)

    // Title the page "[username]'s Weekly Meal Plan"

    myText = ("<html>\n<head>\n<title>" + username +"'s Weekly Meal Plan</title>\n");

    // Create CSS that matches the first page.
    myText += ("<style>\n");
    myText += ("body { background-color: #b4d5d2; color: navy; word-wrap: break-word; }\n");
    myText += (".name-container { background-color: #FFD3EC; padding: 4px 10px; margin-bottom: 20px; }\n");
    myText += (".day-container { background-color: white; padding: 4px 10px; margin-bottom: 20px; }\n");
    myText += (".download-button {background-color: #ededf2; text-decoration: none; font-family: 'Times New Roman', Times, serif; font-size: medium; color:#02049B; padding: 2.5px 6px; border: .5px solid gray; border-radius: 3px;}\n");
    myText += ("button {font-family: 'Times New Roman', Times, serif; font-size: medium; color:#02049B;}\n");
    myText += ("</style>\n");

    // In the body, greet the user and print the collected information.

    myText += ("</head>\n<body>\n");

    myText += ("<div class='name-container'>");
    myText += ("<h3>Hello " + username + ", this is your weekly meal plan!</h3>");
    myText += ("</div>");
    myText += ("<h4>Email: " + email + "</h4>");
    myText += ("<h4>Weekly Goal: " + goal + "</h4>");

    // Add the collected inputs for each day of the week.

    myText += ("<div class='day-container'>");
    myText += ("<h3>Sunday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast1 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack1 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch1 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack1 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner1 + "</p>\n");
    myText += ("</div>");

    myText += ("<div class='day-container'>");
    myText += ("<h3>Monday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast2 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack2 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch2 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack2 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner2 + "</p>\n");
    myText += ("</div>");

    myText += ("<div class='day-container'>");
    myText += ("<h3>Tuesday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast3 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack3 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch3 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack3 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner3 + "</p>\n");
    myText += ("</div>");

    myText += ("<div class='day-container'>");
    myText += ("<h3>Wednesday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast4 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack4 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch4 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack4 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner4 + "</p>\n");
    myText += ("</div>");

    myText += ("<div class='day-container'>");
    myText += ("<h3>Thursday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast5 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack5 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch5 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack5 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner5 + "</p>\n");
    myText += ("</div>");

    myText += ("<div class='day-container'>");
    myText += ("<h3>Friday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast6 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack6 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch6 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack6 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner6 + "</p>\n");
    myText += ("</div>");

    myText += ("<div class='day-container'>");
    myText += ("<h3>Saturday</h3>\n");
    myText += ("<p>Breakfast: <br>&ensp;" + breakfast7 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + mSnack7 + "</p>\n");
    myText += ("<p>Lunch: <br>&ensp;" + lunch7 + "</p>\n");
    myText += ("<p>Snack: <br>&ensp;" + eSnack7 + "</p>\n");
    myText += ("<p>Dinner: <br>&ensp;" + dinner7 + "</p>\n");
    myText += ("</div>");

    // At the bottom of the page, create a button that uses onclick to trigger the window.print() method.
    // This will allow the user to print the popup page.

    myText += ("<button onclick='window.print()'>Print</button>\n");

    // Create a download link that allows the user to download the CSV meal plan content using the Blob DOMString.

    myText += "<a class='download-button' href='" + csvMealPlanURL + "' download='Meal_Plan.csv'>Download CSV</a>\n";

    myText += ("</body>\n</html>");

    // Use the window.open() method to open a new window.

    flyWindow = window.open('about:blank','myPop','width=700,height=1000,left=200,top=200');

    // Use document.write() to write the HTML string into the new window.

    flyWindow.document.write(myText);

}

// Create an event listener that calls the clearForm function if the clearButton is clicked.

document.getElementById("clearButton").addEventListener('click', clearForm);

// Create the clearForm function, which gets the form and then uses the .reset() form method to clear all inputs.

function clearForm() {
    var mealform = document.getElementById("mealPlan");
    mealform.reset();
}
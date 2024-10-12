
// JavaScript code to generate email formats based on user input

function generateEmailFormats(firstname, lastname) {
    const domain = "domain.com"; // Replace with the desired domain
    const formats = [
        `${firstname}.${lastname}@${domain}`,
        `${firstname}_${lastname}@${domain}`,
        `${firstname[0]}.${lastname}@${domain}`,
        `${firstname[0]}_${lastname}@${domain}`,
        `${firstname}.${lastname[0]}@${domain}`,
        `${firstname}-${lastname}@${domain}`,
        `${lastname}.${firstname}@${domain}`,
        `${lastname}_${firstname[0]}@${domain}`,
        `${lastname}.${firstname[0]}@${domain}`,
        `${lastname}_${firstname}@${domain}`,
        `${firstname}123@${domain}`,
        `${firstname}${lastname}@${domain}`,
        `${firstname[0]}${lastname}@${domain}`,
        `${firstname[0]}.${lastname[0]}@${domain}`,
        `${firstname}.${lastname}1@${domain}`,
        `${firstname[0]}.${lastname}1@${domain}`,
        `${firstname}_${lastname[0]}@${domain}`,
        `${firstname[0]}_${lastname}@${domain}`,
        `${firstname}_${lastname}@${domain}`,
        `${firstname}.${lastname}@${domain}`,
        `${firstname}-${lastname}@${domain}`,
        `${lastname}.${firstname}123@${domain}`,
        `${lastname}_${firstname}@${domain}`,
        `${firstname}.${lastname}123@${domain}`,
        `${firstname[0]}${lastname[0]}@${domain}`,
        `${lastname[0]}_${firstname}@${domain}`,
        `${lastname}.${firstname[0]}1@${domain}`,
        `${firstname}.${lastname}@mail.${domain}`,
        `${firstname}-${lastname}@mail.${domain}`,
        `${firstname}${lastname[0]}@${domain}`,
        `${lastname}${firstname}@${domain}`,
        `${lastname[0]}.${firstname}@${domain}`,
        `${firstname}-${lastname[0]}@${domain}`,
        `${firstname[0]}.${lastname}@mail.${domain}`,
        `${lastname[0]}${firstname[0]}@${domain}`,
        `${firstname}.${lastname}@corp.${domain}`,
        `${firstname}.${lastname}@company.${domain}`,
        `${firstname}-${lastname}@company.${domain}`,
        `${firstname[0]}${lastname[0]}@company.${domain}`,
        `${firstname[0]}${lastname}@corp.${domain}`,
        `${lastname}.${firstname}@corp.${domain}`
    ];

    return formats;
}

function displayEmailFormats() {
    // Get the user's first and last name from input fields
    const firstname = document.getElementById("firstname").value.toLowerCase();
    const lastname = document.getElementById("lastname").value.toLowerCase();

    // Generate email formats based on the user's input
    const emails = generateEmailFormats(firstname, lastname);

    // Display the generated emails in the HTML
    let emailList = document.getElementById("emailList");
    emailList.innerHTML = ""; // Clear existing content

    emails.forEach(function(email) {
        let listItem = document.createElement("li");
        listItem.textContent = email;
        emailList.appendChild(listItem);
    });
}

// Event listener for button click
document.getElementById("generateButton").addEventListener("click", displayEmailFormats);


// Handle email generation
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting by default

    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const domain = document.getElementById("domain").value;

    const emails = generateTop40EmailFormats({ firstName, middleName, lastName, domain });
    document.getElementById("email-output").textContent = emails.join("\n");
});

// Function to generate top 40 email formats
function generateTop40EmailFormats({ firstName, middleName = '', lastName, domain }) {
    const f = firstName.toLowerCase();
    const m = middleName.toLowerCase();
    const l = lastName.toLowerCase();
    const emailDomain = `@${domain.toLowerCase()}`;

    const fi = f.charAt(0);
    const mi = m.charAt(0);
    const li = l.charAt(0);

    const emailFormats = [
        \`\${f}.\${l}\${emailDomain}\`,                     // FirstName.LastName
        \`\${fi}.\${l}\${emailDomain}\`,                    // FirstInitial.LastName
        \`\${f}\${emailDomain}\`,                          // FirstName
        \`\${f}\${l}\${emailDomain}\`,                      // FirstNameLastName
        \`\${l}\${emailDomain}\`,                          // LastName
        \`\${l}.\${fi}\${emailDomain}\`,                    // LastName.FirstInitial
        \`\${fi}\${l}\${emailDomain}\`,                     // FirstInitialLastName
        \`\${fi}.\${li}\${emailDomain}\`,                   // FirstInitial.LastInitial
        \`\${f}.\${li}\${emailDomain}\`,                    // FirstName.LastInitial
        \`\${fi}\${mi}\${l}\${emailDomain}\`,               // FirstInitialMiddleInitialLastName
        \`\${f}.\${l}\${emailDomain}\`,                     // FirstName.LastName.Department
        \`\${f}.\${mi}.\${l}\${emailDomain}\`,              // FirstName.MiddleInitial.LastName
        \`\${f}_\${l}\${emailDomain}\`,                     // FirstName_LastName
        \`\${f}.\${m}.\${l}\${emailDomain}\`,               // FirstName.MiddleName.LastName
        \`\${f}-\${l}\${emailDomain}\`,                     // FirstName-LastName
        \`\${fi}.\${mi}.\${l}\${emailDomain}\`,             // FirstInitial.MiddleInitial.LastName
        \`\${f}\${li}\${emailDomain}\`,                     // FirstNameLastNameInitial
        \`\${fi}.\${mi}.\${li}\${emailDomain}\`,            // FirstInitial.MiddleInitial.LastInitial
        \`\${f}.\${mi}.\${li}\${emailDomain}\`,             // FirstName.MiddleInitial.LastInitial
        \`\${f}_\${li}\${emailDomain}\`,                    // FirstName_LastInitial
        \`\${fi}-\${l}\${emailDomain}\`,                    // FirstInitial-LastName
        \`\${f}.\${l}.01\${emailDomain}\`,                  // FirstName.LastName.01
        \`\${f}_\${l}_01\${emailDomain}\`,                  // FirstName_LastName_01
        \`\${fi}\${l}01\${emailDomain}\`,                   // FirstInitialLastName01
        \`\${fi}.\${li}01\${emailDomain}\`,                 // FirstInitial.LastInitial.01
        \`\${f}.\${l}.1990\${emailDomain}\`,                // FirstName.LastName.Year
        \`\${f}.\${l}.02\${emailDomain}\`,                  // FirstName.LastName.02
        \`\${f}_\${l}_02\${emailDomain}\`,                  // FirstName_LastName_02
        \`\${fi}\${l}02\${emailDomain}\`,                   // FirstInitialLastName02
        \`\${fi}.\${li}02\${emailDomain}\`,                 // FirstInitial.LastInitial.02
        \`\${f}-\${l}-1990\${emailDomain}\`,                // FirstName-LastName-Year
        \`\${f}\${l}1990\${emailDomain}\`,                  // FirstNameLastName1990
        \`\${l}.\${f}\${emailDomain}\`,                     // LastName.FirstName
        \`\${l}\${f}\${emailDomain}\`,                      // LastNameFirstName
        \`\${l}.\${fi}\${emailDomain}\`,                    // LastName.FirstInitial
        \`\${l}\${fi}\${emailDomain}\`,                     // LastNameFirstInitial
        \`\${fi}.\${l}.dept\${emailDomain}\`,               // FirstInitial.LastName.Department
        \`\${f}.\${l}.\${domain}\${emailDomain}\`,           // FirstName.LastName.Domain
        \`\${f}_\${li}.\${domain}\${emailDomain}\`,          // FirstName_LastInitial.Domain
        \`\${fi}.\${l}.\${domain}\${emailDomain}\`,          // FirstInitial.LastName.Domain
        \`\${f}.\${m}.\${l}.01\${emailDomain}\`              // FirstName.MiddleName.LastName.01
    ];

    return emailFormats;
}

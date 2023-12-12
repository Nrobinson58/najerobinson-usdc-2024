/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 
    
    




/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */


// 1. Searching Function
function findSearchTermInBooks(searchTerm, books) {
    const results = [];
    books.forEach(book => {
        book.Content.forEach(content => {
            if (content.Text.includes(searchTerm)) {
                results.push({
                    Title: book.Title,
                    ISBN: book.ISBN,
                    Page: content.Page,
                    Line: content.Line,
                    Text: content.Text
                });
            }
        });
    });
    return results;
}

// 2. Unit Tests

// Function to Perform and Log the Test Results
function test(description, fn) {
    try {
        fn();
        console.log('[PASS]', description);
    } catch (error) {
        console.error('[FAIL]', description);
        console.error(error);
    }
}

// Unit tests for using Harry Potter as Sample2
const books = [
    {
        Title: "Harry Potter and the Sorcerer's Stone",
        ISBN: "978-0590353427",
        Content: [
            { Page: 1, Line: 1, Text: "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much." },
            { Page: 2, Line: 1, Text: "They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense." }
        ]
    },
    {
        Title: "Harry Potter and the Chamber of Secrets",
        ISBN: "978-0439064873",
        Content: [
            { Page: 3, Line: 1, Text: "Harry Potter was a highly unusual boy in many ways." },
            { Page: 4, Line: 1, Text: "For one thing, he hated the summer holidays more than any other time of year." }
        ]
    },

];

// Positive Test
test("It should find the search term 'Harry'", () => {
    const results = findSearchTermInBooks("Harry", books);
    if (results.length === 0 || !results.some(result => result.Text.includes("Harry"))) {
        throw new Error("Test failed: Term 'Harry' was not found.");
    }
});

// Negative Test
test("It should not find a non-existing term", () => {
    const results = findSearchTermInBooks("NonExistingTerm", books);
    if (results.length !== 0) {
        throw new Error("Test failed: Non-existing term was found.");
    }
});

// Case-Sensitive Test
test("It should not find the term 'harry' when searching for 'Harry'", () => {
    const results = findSearchTermInBooks("Harry", books);
    if (results.some(result => result.Text.includes("harry"))) {
        throw new Error("Test failed: Found 'harry' when searching for 'Harry'.");
    }
});



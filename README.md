# Phone Details Viewer

## Overview

The Phone Details Viewer is a web application designed to display detailed information about various phones. It allows users to search for phones, view detailed information by clicking on phone cards, and navigate through the available phone data using pagination. Additionally, users can view all available phone data at once.

## Features

### User Interface Design

The application is designed to be visually appealing and user-friendly. The UI includes a search bar, phone cards section, and pagination buttons.

### Search Functionality

Users can search for phones by entering the phone name in the search bar and clicking the search button. Relevant results are displayed based on the input.

### Phone Details

Clicking on a phone card displays detailed information about the phone, including its name, brand, and main features.

### Pagination

Users can navigate through the available phones using "Next" and "Previous" buttons.

### Show All

Users can view all available phone data by clicking the "Show All" button.

## Implementation Details

### HTML

The basic structure of the application includes a search bar, phone cards section, and pagination buttons.

### CSS

The UI is visually appealing and responsive using CSS Flexbox and Grid. Styling is added for buttons, cards, and modal for phone details.

### JavaScript

#### Event Listeners

The application initializes with `DOMContentLoaded` and attaches event listeners to buttons.

#### Fetch API

The Fetch API is used to get phone data from the provided API endpoints.

#### Search Functionality

A search function is implemented to fetch and display relevant phone data based on user input.

#### Display Phones

A function is created to display phone cards and handle the UI update.

#### Phone Details Modal

Functionality is implemented to show detailed information in a modal when a phone card is clicked.

#### Pagination

"Next" and "Previous" buttons are added to navigate through phone data.

#### Show All

A button is implemented to display all available phone data.

### JavaScript Functions

#### `fetchDefaultPhones`

Fetches default phone data and shuffles it.

#### `fetchPhones`

Fetches phone data based on search input.

#### `fetchMorePhones`

Fetches more phone data for pagination.

#### `displayPhones`

Displays phone cards on the UI.

#### `showDetailsHandler`

Fetches and displays detailed information about a phone in a modal.

#### `hideModal`

Hides the phone details modal.

#### `getPhonesForCurrentPage`

Returns phones for the current page for pagination.

#### `showPreviousPhones`

Displays the previous set of phone data.

#### `showNextPhones`

Displays the next set of phone data.

#### `showAllPhones`

Displays all available phone data.

## How to Use

1. **Search Phones**: Enter the phone name in the search bar and click the search button. Relevant results will be displayed.
2. **View Details**: Click on a phone card to view detailed information about the phone.
3. **Pagination**: Use the "Next" and "Previous" buttons to navigate through the phone data.
4. **Show All**: Click the "Show All" button to view all available phones and their details.

## References

- [1] [Live Demo](#) (https://ganesh-patel.github.io/Phone-Hunting-test4/new.html)
- [2] [GitHub Repository](#) (https://github.com/Ganesh-Patel/Phone-Hunting-test4/)
- [3] [Stack Overflow](https://stackoverflow.com/questions/41758419/test-javascript-in-mobile-browser)
- [4] [YouTube Tutorial](https://www.youtube.com/watch?v=uRYHX4EwYYA)
- [5] [FreeCodeCamp Forum](https://forum.freecodecamp.org/t/whats-a-simple-way-to-test-code-written-locally-for-mobile-devices/96890)
- [6] [BrowserStack Guide](https://www.browserstack.com/guide/how-to-test-javascript-in-browsers)

## License

This project is licensed under the MIT License.

https://ganesh-patel.github.io/Phone-Hunting-test4/new.html

# Phone Details Viewer

This project is a Phone Details Viewer web application. It allows users to search for phone details, view detailed information by clicking on phone cards, and navigate through the available phone data using pagination. Additionally, users can view all available phone data at once.

## Features

- **User Interface Design**: The application is designed to be visually appealing and user-friendly.
- **Search Functionality**: Users can search for phones, and relevant results are displayed based on the input.
- **Phone Details**: Clicking on a phone card displays detailed information about the phone.
- **Pagination**: Users can navigate through the available phones using "Next" and "Previous" buttons.
- **Show All**: Users can view all available phone data by clicking the "Show All" button.

## Project Demo

- [Live Demo](#) (https://ganesh-patel.github.io/Phone-Hunting-test4/new.html)
- [GitHub Repository](#) (https://github.com/Ganesh-Patel/Phone-Hunting-test4/)

## Overview

<img width="1276" alt="Screenshot 2024-06-02 at 2 08 19 AM" src="https://github.com/Ganesh-Patel/Phone-Hunting-test4/assets/148999574/1b8cad23-d363-4108-970c-1daee233050f">
<img width="1260" alt="Screenshot 2024-06-02 at 2 08 34 AM" src="https://github.com/Ganesh-Patel/Phone-Hunting-test4/assets/148999574/a74f46a3-3475-41f4-bc77-87c908d5c805">
<img width="1264" alt="Screenshot 2024-06-02 at 2 08 53 AM" src="https://github.com/Ganesh-Patel/Phone-Hunting-test4/assets/148999574/7bda3beb-caf6-4b36-8aef-f4af5b15a3f5">




## How to Use

1. **Search Phones**: Enter the phone name in the search bar and click the search button. Relevant results will be displayed.
2. **View Details**: Click on a phone card to view detailed information about the phone.
3. **Pagination**: Use the "Next" and "Previous" buttons to navigate through the phone data.
4. **Show All**: Click the "Show All" button to view all available phones and their details.

## Implementation Details

### HTML

- Basic structure with a search bar, phone cards section, and pagination buttons.

### CSS

- Ensured the UI is visually appealing and responsive using CSS Flexbox and Grid.
- Added styling for buttons, cards, and modal for phone details.

### JavaScript

- **Event Listeners**: Used `DOMContentLoaded` to initialize the app and attach event listeners to buttons.
- **Fetch API**: Utilized Fetch API to get phone data from the provided API endpoints.
- **Search Functionality**: Implemented a search function to fetch and display relevant phone data based on user input.
- **Display Phones**: Created a function to display phone cards and handle the UI update.
- **Phone Details Modal**: Implemented functionality to show detailed information in a modal when a phone card is clicked.
- **Pagination**: Added "Next" and "Previous" buttons to navigate through phone data.
- **Show All**: Implemented a button to display all available phone data.

### JavaScript Functions

- **fetchDefaultPhones**: Fetches default phone data and shuffles it.
- **fetchPhones**: Fetches phone data based on search input.
- **fetchMorePhones**: Fetches more phone data for pagination.
- **displayPhones**: Displays phone cards on the UI.
- **showDetailsHandler**: Fetches and displays detailed information about a phone in a modal.
- **hideModal**: Hides the phone details modal.
- **getPhonesForCurrentPage**: Returns phones for the current page for pagination.
- **showPreviousPhones**: Displays the previous set of phone data.
- **showNextPhones**: Displays the next set of phone data.
- **showAllPhones**: Displays all available phone data.



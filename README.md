# Ticketly
Ticketly is a single-page web application for browsing and reserving tickets for various events. It demonstrates a multi-step booking process built with vanilla JavaScript, HTML, and Tailwind CSS. The interface guides users from event selection to entering participant details, all on a single page.

## Features

*   **Event Showcase:** Displays a grid of available events with details like date, location, available seats, and price.
*   **Multi-Step Booking Flow:** A seamless, step-by-step process for booking tickets.
    1.  Select an event from the main page.
    2.  Specify the number of tickets required.
    3.  Enter participant details for each ticket.
*   **Dynamic UI:** The page content changes dynamically to guide the user through the booking stages without page reloads.
*   **Client-Side Validation:** The participant information form includes input validation for names, phone numbers, and email addresses using regular expressions.
*   **Participant Summary:** Before finalizing, users can review and manage the list of participants they have entered.

## Tech Stack

*   **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript

## How It Works

The application's logic is self-contained within `index.html` and `script.js`. The UI is divided into several `<section>` elements that are shown or hidden to create a single-page application experience.

1.  **Event Browsing (`section1`):** The initial view loads a grid of event cards. Each card has a "Reserver votre place" (Book your place) button.
2.  **Ticket Quantity Selection (`section2`):** Clicking the booking button hides the event grid and displays a detailed view of the selected event. Here, the user can increase or decrease the number of tickets they wish to purchase.
3.  **Participant Information (`section3`):** Upon proceeding, the user is presented with a form to enter the name, phone number, and email for each participant. The number of times the form must be submitted corresponds to the number of tickets selected. Each submitted entry is displayed in a summary list, and users can remove an entry if needed.
## Setup and Usage

To run this project locally, follow these steps:

1.  Clone the repository:
    ```sh
    git clone https://github.com/Abdellah-Moukarrame/Ticketly.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Ticketly
    ```
3.  Open the `index.html` file in your web browser. For the best experience and to ensure all assets load correctly, it is recommended to use a live server extension in your code editor (like Live Server for VS Code).

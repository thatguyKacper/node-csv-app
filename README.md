## CSV Contact Saver

This application is a command-line tool built with Node.js. It allows you to rapidly input contact information (Name, Phone Number, and Email) and automatically saves it into a generic spreadsheet format (CSV) on your computer.

### Prerequisites

Before running the application, ensure you have Node.js installed on your machine and that the application code is saved in a file named `index.js`.

### How to Run the Application

Follow these steps to start saving contacts:

1. **Launch the Application** Open your terminal or command prompt. Navigate to the folder containing your file and run the following command:

```Bash
  node index.js
```

2. **Enter Contact Details** The application will prompt you for information one field at a time. Type the requested information and press **Enter** after each entry:

- **Contact Name:** (e.g., John Doe)

- **Contact Number** (e.g., 666-666-666)

- **Contact Email** (e.g., johndoe@example.com)

3. Confirm Saving Once you enter the email, the application will display a confirmation message (e.g., `John Doe Saved!`). This indicates the data has been securely written to the file.

4. Continue or Exit You will be asked: `Continue? [y to continue]:`.

- Type `y` and press **Enter** to add another contact immediately.

- Type any other key (or nothing) and press **Enter** to close the application.

### Locating Your Data

The application creates a file named `contacts.csv` in the same folder where you ran the script.

- **File Format:** CSV (Comma Separated Values).

- **How to Open:** You can view this file using any text editor (like Notepad) or spreadsheet software (like Microsoft Excel, Google Sheets, or Apple Numbers).
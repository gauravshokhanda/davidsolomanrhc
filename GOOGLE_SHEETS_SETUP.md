# Google Sheets Contact Form Integration Setup

This guide will help you set up a free Google Sheets integration for your contact form submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" or similar
4. Set up the following column headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Subject`
   - E1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);

    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.subject,
      data.message,
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy the Script as a Web App

1. Click the "Deploy" button in the top right
2. Choose "New deployment"
3. Click the gear icon next to "Type" and select "Web app"
4. Set the following configuration:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click "Deploy"
6. **Important**: Copy the Web App URL that appears - you'll need this!

## Step 4: Update Your Contact Form

1. Open `app/contact/page.tsx`
2. Find the line with `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`
3. Replace it with your Web App URL from Step 3

Example:

```javascript
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

https://script.google.com/macros/s/AKfycbzTdC5-3-xksKOO15cafsKQdz-N0o7rwyuZduOuhXm8Eks5s1QRva_oam1_Fzf17eic/exec

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your Google Sheet - the submission should appear as a new row

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure the Apps Script is deployed with "Anyone" access
2. **Permission Denied**: Re-deploy the script and ensure you grant necessary permissions
3. **Data Not Appearing**: Check the Apps Script logs in the Google Apps Script editor

### Viewing Logs:

1. Go to your Apps Script project
2. Click "Executions" in the left sidebar
3. View any error messages or execution details

## Security Considerations

- The webhook URL is public but only accepts POST requests
- Consider adding basic validation in the Apps Script
- Monitor your sheet for spam submissions
- You can add email notifications when new submissions arrive

## Optional Enhancements

### Email Notifications

Add this to your Apps Script to get email notifications:

```javascript
// Add this after sheet.appendRow(...)
GmailApp.sendEmail(
  "your-email@example.com",
  "New Contact Form Submission",
  `New submission from ${data.name} (${data.email}):\n\n${data.message}`
);
```

### Data Validation

Add validation to prevent spam:

```javascript
// Add this before sheet.appendRow(...)
if (!data.name || !data.email || !data.message) {
  throw new Error("Missing required fields");
}

if (data.message.length > 1000) {
  throw new Error("Message too long");
}
```

## Cost

This solution is completely free and includes:

- Google Sheets storage (15GB free with Google account)
- Google Apps Script execution (generous free tier)
- No monthly fees or subscription costs

Your contact form submissions will now be automatically saved to your Google Sheet!

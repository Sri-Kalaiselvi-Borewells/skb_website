/**
 * Deploy: Extensions > Apps Script (in the target Google Sheet) > paste this file's
 * contents > Deploy > New deployment > type "Web app" > Execute as: Me >
 * Who has access: Anyone > Deploy > copy the Web app URL into index.html's
 * SHEET_WEBAPP_URL constant.
 */
function doPost(e) {
  var SHEET_NAME = 'Enquiries';
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Location', 'Service', 'Message']);
  }

  var params = e.parameter;
  sheet.appendRow([
    new Date(),
    params.name || '',
    params.phone || '',
    params.location || '',
    params.service || '',
    params.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

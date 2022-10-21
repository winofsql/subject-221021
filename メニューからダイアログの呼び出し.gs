function GetUIbyHTML1() {

  console.log("一つ目");
  
  var html = HtmlService.createHtmlOutputFromFile('myUI01.html')
      .setWidth(1920)
      .setHeight(1080);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'ダイアログ表示1');


}

function GetUIbyHTML2() {

  console.log("二つ目");
  
  var html = HtmlService.createHtmlOutputFromFile('myUI02.html')
      .setWidth(750)
      .setHeight(480);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'ダイアログ表示2');

}

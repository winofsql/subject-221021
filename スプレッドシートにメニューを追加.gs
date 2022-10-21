// ************************************
// メニューの追加
// ************************************
function onOpen(e) {

  var cur_ui = SpreadsheetApp.getUi();
  cur_ui.createMenu('GAS の LOG テスト')
     .addItem('ダイアログ表示', 'GetUIbyHTML')
     .addToUi();
  
}

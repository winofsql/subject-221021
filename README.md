# subject-221021

```javascript

function myFunction() {

  // アドレスバーより ID を取得して使用( マイドライブ/app/google22 )
  var folder = DriveApp.getFolderById("1BOMeruf2uCW2AkI1HP8-MQNWmzpjihYf");

  // 新規でスプレッドシートを作成
  var spread_sheet = SpreadsheetApp.create("subject-221021");

  // スプレッドシートの ID を取得
  var id = spread_sheet.getId();

  console.log(id);

  // id より ファイルオブジェクトを取得
  var file = DriveApp.getFileById(id) 

  // ファイルオブジェクトのメソッドで 最初に取得したフォルダーに移動
  file.moveTo(folder);  
  
}
```

```javascript
function myFunction() {

  clearAll();

  var spreadsheet1 = SpreadsheetApp.openById("1hVrcSoHXizJ6zsFLLkyVr5yH5IgkAUCVFrDAcVj9aVE");
  var sheet1 = spreadsheet1.getSheetByName("社員マスタ");

  var spreadsheet2 = SpreadsheetApp.openById("1ZrHyeQK7Dlfkd8hsz5nBDbXAw3Pz_6_kBYHBdn4KSGs");
  var sheet2 = spreadsheet2.getSheetByName("転送先");

  // 書式無しテキスト
  sheet2.getRange('A:A').setNumberFormat('@');
  sheet2.getRange('D:D').setNumberFormat('@');
  sheet2.getRange('J:J').setNumberFormat('@');
  
  var i = 1;
  while( true ) {

    var range1 = sheet1.getRange("A" + i);
    var data = range1.getDisplayValue();
    if ( data == "" ) {
      break;
    }

    console.log(data);

    var range2 = sheet2.getRange("A" + i);
    range2.setValue(data);

    range2 = sheet2.getRange("B" + i);
    range2.setValue( sheet1.getRange("B" + i).getDisplayValue() );

    range2 = sheet2.getRange("C" + i);
    range2.setValue( sheet1.getRange("C" + i).getDisplayValue() );

    range2 = sheet2.getRange("D" + i);
    range2.setValue( sheet1.getRange("D" + i).getDisplayValue() );

    range2 = sheet2.getRange("E" + i);
    range2.setValue( sheet1.getRange("E" + i).getDisplayValue() );

    range2 = sheet2.getRange("F" + i);
    range2.setValue( sheet1.getRange("F" + i).getDisplayValue() );

    range2 = sheet2.getRange("G" + i);
    range2.setValue( sheet1.getRange("G" + i).getDisplayValue() );

    range2 = sheet2.getRange("H" + i);
    range2.setValue( sheet1.getRange("H" + i).getDisplayValue() );

    range2 = sheet2.getRange("I" + i);
    range2.setValue( sheet1.getRange("I" + i).getDisplayValue() );

    range2 = sheet2.getRange("J" + i);
    range2.setValue( sheet1.getRange("J" + i).getDisplayValue() );

    range2 = sheet2.getRange("K" + i);
    range2.setValue( sheet1.getRange("K" + i).getDisplayValue() );

    i++;
  }
  
}

function clearAll() {

  // Excel で言うところの Book を取得
  var spreadsheet = SpreadsheetApp.openById("1ZrHyeQK7Dlfkd8hsz5nBDbXAw3Pz_6_kBYHBdn4KSGs");

  // 現在操作中の シートを取得( Excel では worksheet )
  var sheet = spreadsheet.getSheetByName("転送先");

  // getRange で対象範囲を指定する( 左上のクリックの処理 )
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();

  // セル内の対象範囲のデータをすべて削除
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  
}
```

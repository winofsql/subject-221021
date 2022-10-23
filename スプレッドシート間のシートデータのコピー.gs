function myFunction() {

  clearAll();

  var spreadsheet1 = SpreadsheetApp.openById("1hVrcSoHXizJ6zsFLLkyVr5yH5IgkAUCVFrDAcVj9aVE");
  var sheet1 = spreadsheet1.getSheetByName("社員マスタ");

  var spreadsheet2 = SpreadsheetApp.openById("1ZrHyeQK7Dlfkd8hsz5nBDbXAw3Pz_6_kBYHBdn4KSGs");
  var sheet2 = spreadsheet2.getSheetByName("転送先");

  // 書式無しテキスト

  // 出力の場合、性別名を使用して管理者名をセット
  var cn = {
    "社員コード" : ["A:A","A"],
    "性別" : ["E:E","E"],
    "性別名" : ["L:L","L"],
    "管理者" : ["J:J","J"],
    "管理者名to" : ["L:L","L"],
    "管理者名from" : ["M:M","M"],
    "給与" : ["H:H","H"]
  };

  console.log( cn.社員コード[0] );
  console.log( cn["給与"][0] );
  console.log( cn.社員コード[1] );
  console.log( cn["給与"][1] );

  sheet2.getRange( cn.社員コード[0] ).setNumberFormat('@');
  sheet2.getRange('D:D').setNumberFormat('@');
  sheet2.getRange('J:J').setNumberFormat('@');
  sheet2.getRange('F:F').setNumberFormat('yyyy/MM/dd H:mm:ss');
  sheet2.getRange('G:G').setNumberFormat('yyyy/MM/dd H:mm:ss');
  sheet2.getRange( cn["給与"][0] ).setNumberFormat('#,##0');
  sheet2.getRange('I:I').setNumberFormat('#,##0');
  sheet2.getRange('K:K').setNumberFormat('yyyy/MM/dd');

  var i = 1;
  while( true ) {

    var range1 = sheet1.getRange("A" + i);
    var data = range1.getDisplayValue();
    if ( data == "" ) {
      break;
    }

    console.log(data);

    var range2 = sheet2.getRange(cn.社員コード[1] + i);
    range2.setValue(data);

    // 氏名
    range2 = sheet2.getRange("B" + i);
    range2.setValue( sheet1.getRange("B" + i).getDisplayValue() );

    // フリガナ
    range2 = sheet2.getRange("C" + i);
    range2.setValue( sheet1.getRange("C" + i).getDisplayValue() );

    // 所属
    range2 = sheet2.getRange("D" + i);
    range2.setValue( sheet1.getRange("D" + i).getDisplayValue() );

    // 性別の列(E) に 性別名(L)の値を転送する
    range2 = sheet2.getRange(cn["性別"][1] + i);
    range2.setValue( sheet1.getRange(cn["性別名"][1] + i).getDisplayValue() );

    // 作成日
    range2 = sheet2.getRange("F" + i);
    range2.setValue( sheet1.getRange("F" + i).getDisplayValue() );

    // 更新日
    range2 = sheet2.getRange("G" + i);
    range2.setValue( sheet1.getRange("G" + i).getDisplayValue() );

    range2 = sheet2.getRange(cn["給与"][1] + i);
    range2.setValue( sheet1.getRange(cn["給与"][1] + i).getDisplayValue() );

    // 手当
    range2 = sheet2.getRange("I" + i);
    range2.setValue( sheet1.getRange("I" + i).getDisplayValue() );

    // 管理者
    range2 = sheet2.getRange("J" + i);
    range2.setValue( sheet1.getRange("J" + i).getDisplayValue() );

    // 生年月日    
    range2 = sheet2.getRange("K" + i);
    range2.setValue( sheet1.getRange("K" + i).getDisplayValue() );

    // 管理者名
    range2 = sheet2.getRange(cn["管理者名to"][1] + i);
    range2.setValue( sheet1.getRange(cn["管理者名from"][1] + i).getDisplayValue() );


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

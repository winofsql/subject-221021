### Excel VLOOKUP の エラーあり
```vb
=IFERROR(VLOOKUP([@管理者],社員マスタ[[社員コード]:[氏名]],2,FALSE),"")
```

### スプレッドシートへ変換
```
=IFERROR(VLOOKUP('社員マスタ'!$J2,'社員マスタ'!$A$2:$B$51,2,FALSE),"")
```

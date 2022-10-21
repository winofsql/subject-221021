function sendMyMail(to, subject, body) {

  console.log("HTML から サーバ側のスクリプトが呼び出されました");
  console.log(`${to} : ${subject} : ${body}`);

  GmailApp.sendEmail(to, subject, body );

}

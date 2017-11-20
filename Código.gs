function myFunction() {
  var arr = []
  c = Logger;
  m = Browser;
  rango = SpreadsheetApp.getActiveSheet().getRange("B2:B29").getValues();
  for (e in rango){
    arr.pop(rango[e])
  }
  c.log(arr);
}

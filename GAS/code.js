function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}



function processForm1(formObject) {
  var formBlob = formObject.myFile;
  var folderID='1C-W0RlRIm6ireWiHOVXZ-4hsMGDUkkMS';
  var uploadFolder = DriveApp.getFolderById(folderID);
  var driveFile = uploadFolder.createFile(formBlob);//アップロード
  var fileName = driveFile.getName();
  var sheet = SpreadsheetApp.openById('1cxOrT9bEdgObI69cG04YwobZmwqQpTbktAp5AyeNmkA');
  var sheetman = sheet.getSheetByName("シート1");
  var files = uploadFolder.getFilesByName(fileName);
  while (files.hasNext()) {
    csvFile = files.next().getBlob().getDataAsString("UTF-8"); 
    
    csvData = Utilities.parseCsv(csvFile);

    var array = [];

    for(var i = 1;i< csvData.length;i++){

      var tempArray = [];

      tempArray.push(csvData[i][0]);
      tempArray.push(csvData[i][2]);
      tempArray.push(csvData[i][3]);
      tempArray.push(csvData[i][4]);
      tempArray.push(csvData[i][6]);



      array.push(tempArray);
    }
    
    var endrow = Number(sheetman.getLastRow()) + 1;
    var lastColumn = array[0].length;　　
    var lastRow = array.length;  　　　　

    sheetman.getRange(endrow,1,lastRow,lastColumn).setValues(array);
    
  };
  return driveFile.getUrl();
}

  function processForm2(formObject) {
  var formBlob = formObject.myFile;
  var folderID='1Cem-uyoKnqoUdPQqU1ciJCV1ZlJYvZ3O';
  var uploadFolder = DriveApp.getFolderById(folderID);
  var driveFile = uploadFolder.createFile(formBlob);//アップロード
  var fileName = driveFile.getName();
  var sheet = SpreadsheetApp.openById('1a63znejgPlJRI9uaeXynW9V0DgWWwKKUs2ERWUyXAXg');
  var sheetman = sheet.getSheetByName("シート1");
  var files = uploadFolder.getFilesByName(fileName);
  while (files.hasNext()) {
    csvFile = files.next().getBlob().getDataAsString("UTF-8"); 
    
    csvData = Utilities.parseCsv(csvFile);

    var array = [];

    for(var i = 1;i< csvData.length;i++){

      var tempArray = [];

      tempArray.push(csvData[i][0]);
      tempArray.push(csvData[i][2]);
      tempArray.push(csvData[i][3]);
      tempArray.push(csvData[i][9]);
      tempArray.push(csvData[i][14]);
      if(csvData[i][14] <= -130 || csvData[i][14] == "-"){
        tempArray.push(0);
      }else if(csvData[i][14] <= -107){
        tempArray.push(1);
      }else if(csvData[i][14] <= -99){
        tempArray.push(2);
      }else if(csvData[i][14] <= -88){
        tempArray.push(3);
      }else if(csvData[i][14] <= -78){
        tempArray.push(4);
      }else{
        tempArray.push(5);
      }



      array.push(tempArray);
    }
    
    var endrow = Number(sheetman.getLastRow()) + 1;
    var lastColumn = array[0].length;　　
    var lastRow = array.length;  　　　　

    sheetman.getRange(endrow,1,lastRow,lastColumn).setValues(array);
    
  };
  return driveFile.getUrl();
}

  function processForm3(formObject) {
  var formBlob = formObject.myFile;
  var folderID='163a4uJej5m7huOW_wSw9xAHnJmzGOicY';
  var uploadFolder = DriveApp.getFolderById(folderID);
  var driveFile = uploadFolder.createFile(formBlob);//アップロード
  var fileName = driveFile.getName();
  var sheet = SpreadsheetApp.openById('1GtajnzeR__01UGBCH4BPa342J2EWT05X956I-jqSjWo');
  var sheetman = sheet.getSheetByName("シート1");
  var files = uploadFolder.getFilesByName(fileName);
  while (files.hasNext()) {
    csvFile = files.next().getBlob().getDataAsString("UTF-8"); 
    
    csvData = Utilities.parseCsv(csvFile);

    var array = [];

    for(var i = 1;i< csvData.length;i++){

      var tempArray = [];

      tempArray.push(csvData[i][0]);
      tempArray.push(csvData[i][2]);
      tempArray.push(csvData[i][3]);
      tempArray.push(csvData[i][4]);
      tempArray.push(csvData[i][6]);



      array.push(tempArray);
    }
    
    var endrow = Number(sheetman.getLastRow()) + 1;
    var lastColumn = array[0].length;　　
    var lastRow = array.length;  　　　　

    sheetman.getRange(endrow,1,lastRow,lastColumn).setValues(array);
    
  };
  return driveFile.getUrl();
}

  function processForm4(formObject) {
  var formBlob = formObject.myFile;
  var folderID='1NXqLxFUlOJURdEI5S2d7_kUBdQJiMFHw';
  var uploadFolder = DriveApp.getFolderById(folderID);
  var driveFile = uploadFolder.createFile(formBlob);//アップロード
  var fileName = driveFile.getName();
  var sheet = SpreadsheetApp.openById('1gr_TM7IDSCKwtWjBGDJffXIB9zWXeC4jyZZP5Njh9aE');
  var sheetman = sheet.getSheetByName("シート1");
  var files = uploadFolder.getFilesByName(fileName);
  while (files.hasNext()) {
    csvFile = files.next().getBlob().getDataAsString("UTF-8"); 
    
    csvData = Utilities.parseCsv(csvFile);

    var array = [];

    for(var i = 1;i< csvData.length;i++){

      var tempArray = [];

      tempArray.push(csvData[i][0]);
      tempArray.push(csvData[i][2]);
      tempArray.push(csvData[i][3]);
      tempArray.push(csvData[i][9]);
      tempArray.push(csvData[i][14]);
      if(csvData[i][14] <= -130 || csvData[i][14] == "-"){
        tempArray.push(0);
      }else if(csvData[i][14] <= -107){
        tempArray.push(1);
      }else if(csvData[i][14] <= -99){
        tempArray.push(2);
      }else if(csvData[i][14] <= -88){
        tempArray.push(3);
      }else if(csvData[i][14] <= -78){
        tempArray.push(4);
      }else{
        tempArray.push(5);
      }


      array.push(tempArray);
    }
    
    var endrow = Number(sheetman.getLastRow()) + 1;
    var lastColumn = array[0].length;　　
    var lastRow = array.length;  　　　　

    sheetman.getRange(endrow,1,lastRow,lastColumn).setValues(array);
    
  };
  return driveFile.getUrl();
}

  function processForm5(formObject) {
  var formBlob = formObject.myFile;
  var folderID='1u1m7Jgm7MpkrxH1lhp3gcyaQHhcEq4ap';
  var uploadFolder = DriveApp.getFolderById(folderID);
  var driveFile = uploadFolder.createFile(formBlob);//アップロード
  var fileName = driveFile.getName();
  var sheet = SpreadsheetApp.openById('19CHNejHZ2U4F4N7McYu097F1GPC9Oe8Ztwxo4bOER_s');
  var sheetman = sheet.getSheetByName("シート1");
  var files = uploadFolder.getFilesByName(fileName);
  while (files.hasNext()) {
    csvFile = files.next().getBlob().getDataAsString("UTF-8");;  
    
    csvData = Utilities.parseCsv(csvFile);

    var array = [];

    for(var i = 1;i< csvData.length;i++){

      var tempArray = [];

      tempArray.push(csvData[i][0]);
      tempArray.push(csvData[i][2]);
      tempArray.push(csvData[i][3]);
      tempArray.push(csvData[i][4]);
      tempArray.push(csvData[i][6]);



      array.push(tempArray);
    }
    
    var endrow = Number(sheetman.getLastRow()) + 1;
    var lastColumn = array[0].length;　　
    var lastRow = array.length;  　　　　

    sheetman.getRange(endrow,1,lastRow,lastColumn).setValues(array);
    
  };
  return driveFile.getUrl();
}

  function processForm6(formObject) {
  var formBlob = formObject.myFile;
  var folderID='14Y4pSnbcO77VBKHs6I1HuNeDfVFEbFfr';
  var uploadFolder = DriveApp.getFolderById(folderID);
  var driveFile = uploadFolder.createFile(formBlob);//アップロード
  var fileName = driveFile.getName();
  var sheet = SpreadsheetApp.openById('18Lc0kUs0gbM_XfgMRqcTHzudI6OrdfwACGMiZp9Qqf8');
  var sheetman = sheet.getSheetByName("シート1");
  var files = uploadFolder.getFilesByName(fileName);
  while (files.hasNext()) {
    csvFile = files.next().getBlob().getDataAsString("UTF-8"); 
    
    csvData = Utilities.parseCsv(csvFile);

    var array = [];

    for(var i = 1;i< csvData.length;i++){

      var tempArray = [];

      tempArray.push(csvData[i][0]);
      tempArray.push(csvData[i][2]);
      tempArray.push(csvData[i][3]);
      tempArray.push(csvData[i][9]);
      tempArray.push(csvData[i][14]);
      if(csvData[i][14] <= -130 || csvData[i][14] == "-"){
        tempArray.push(0);
      }else if(csvData[i][14] <= -107){
        tempArray.push(1);
      }else if(csvData[i][14] <= -99){
        tempArray.push(2);
      }else if(csvData[i][14] <= -88){
        tempArray.push(3);
      }else if(csvData[i][14] <= -78){
        tempArray.push(4);
      }else{
        tempArray.push(5);
      }


      array.push(tempArray);
    }
    
    var endrow = Number(sheetman.getLastRow()) + 1;
    var lastColumn = array[0].length;　　
    var lastRow = array.length;  　　　　

    sheetman.getRange(endrow,1,lastRow,lastColumn).setValues(array);
    
  };
  return driveFile.getUrl();
}
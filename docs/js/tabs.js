var textMap = new Map();

function setear() {
  var editor = CodeMirror.fromTextArea(document.getElementById("code_mm1"),{
      lineNumbers : true,
      mode: "modo",
      theme : "base16-dark",
  });
  editor.setSize(null,300);
  textMap.set("code_mm1",editor);

  var editor = CodeMirror.fromTextArea(document.getElementById("code_mmk"),{
      lineNumbers : true,
      mode: "modo",
      theme : "base16-dark",
  });
  editor.setSize(null,300);
  textMap.set("code_mmk",editor);

  var editor = CodeMirror.fromTextArea(document.getElementById("code_mg1"),{
      lineNumbers : true,
      mode: "modo",
      theme : "base16-dark",
  });
  editor.setSize(null,300);
  textMap.set("code_mg1",editor);

  var editor = CodeMirror.fromTextArea(document.getElementById("code_mmm1_f"),{
      lineNumbers : true,
      mode: "modo",
      theme : "base16-dark",
  });
  editor.setSize(null,300);
  textMap.set("code_mmm1_f",editor);

  
}


function mostarPestaniaR(evt, tabId) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontentR");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinksR");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
  
}
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
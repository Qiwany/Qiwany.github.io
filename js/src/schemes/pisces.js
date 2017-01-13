$(document).ready(function () {
  var sidebarTop = $('.header-inner').height() + 52;//本来是+10，经研究改为+50
  $('#sidebar').css({ 'margin-top': sidebarTop }).show();
});

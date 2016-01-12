var d = document.getElementsByName('contentFrame')[0].contentWindow.document;
var wall = d.getElementById('paywall-container');
var wall2 = d.getElementsByClassName('paywall-content')[0];
var blur = d.getElementById('paywall-container').previousSibling;
wall.style.display = 'none';
wall2.style.height = 'auto';
blur.style.height = 'auto';

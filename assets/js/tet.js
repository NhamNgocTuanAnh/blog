// var no = 20;
// if (matchMedia('only screen and (max-width: 767px)').matches) {
//     no = 10        }
// let img_url = '/assets/images/hoadao-anonyviet.com.png';
// var hidesnowtime = 0;
// var color_snow  = '#fff';
// var snowdistance = 'windowheight'; // windowheight or pageheight;
// var ie4up = (document.all) ? 1 : 0;
// var ns6up = (document.getElementById && !document.all) ? 1 : 0;
// function iecompattest() {
//     return (document.compatMode && document.compatMode != 'BackCompat') ? document.documentElement : document.body
// }
// var dx, xp, yp;
// var am, stx, sty;
// var i, doc_width = 800, doc_height = 600;
// if (ns6up) {
//     doc_width = self.innerWidth;
//     doc_height = self.innerHeight
// } else if (ie4up) {
//     doc_width = iecompattest().clientWidth;
//     doc_height = iecompattest().clientHeight
// }
// dx = new Array();
// xp = new Array();
// yp = new Array();
// am = new Array();
// stx = new Array();
// sty = new Array();
// for (i = 0; i < no; ++i) {
//     dx[i] = 0;
//     xp[i] = Math.random() * (doc_width - 50);
//     yp[i] = Math.random() * doc_height;
//     am[i] = Math.random() * 20;
//     stx[i] = 0.02 + Math.random() / 10;
//     sty[i] = 0.7 + Math.random();
//     if (ie4up || ns6up) {
//         if(document.getElementById('content')){
//             document.getElementById('content').innerHTML =('<div id="dot'+i+'" style="POSITION:fixed;Z-INDEX:'+(99+i)+';VISIBILITY:visible;TOP:15px;LEFT:15px;pointer-events: none;width:15px"><span style="font-size:18px;color:'+color_snow+'"><img src="'+img_url+'" alt=""></span></div>');
//         }
//     }
// }
// function snowIE_NS6() {
//     for (i = 0; i < 10; i++) {
//     doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
//     doc_height = (window.innerHeight && snowdistance == 'windowheight') ? window.innerHeight : (ie4up && snowdistance == 'windowheight') ? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance == 'pageheight') ? iecompattest().scrollHeight : iecompattest().offsetHeight;
//     for (i = 0; i < no; ++i) {
//         yp[i] += sty[i];
//         if (yp[i] > doc_height - 50) {
//             xp[i] = Math.random() * (doc_width - am[i] - 30);
//             yp[i] = 0;
//             stx[i] = 0.02 + Math.random() / 10;
//             sty[i] = 0.7 + Math.random()
//         }
//         dx[i] += stx[i];
//         if( document.getElementById('dot' + i)){
//         document.getElementById('dot' + i).style.top = yp[i] + 'px';
//         document.getElementById('dot' + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + 'px'
//         }
//     }
//     snowtimer = setTimeout('snowIE_NS6()', 10)}
// }
// function hidesnow() {
//     if (window.snowtimer) {
//         clearTimeout(snowtimer)
//     }
//     for (i = 0; i < no; i++){
//         if(document.getElementById('dot' + i)){
// document.getElementById('dot' + i).style.visibility = 'hidden'
//         }
//     }

// }
// if (ie4up || ns6up) {
//     for (i = 0; i < 10; i++) {
//     snowIE_NS6();
//     if (hidesnowtime > 0) setTimeout('hidesnow()', hidesnowtime * 10)}
// }

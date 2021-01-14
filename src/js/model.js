var nbOptions = 8;
var angleStart = -360;

// jquery rotate animation
function rotate(li, d) {
    $({
        d: angleStart
    }).animate({
        d: d
    }, {
        step: function (now) {
            $(li)
                .css({
                    transform: 'rotate(' + now + 'deg)'
                })
                .find('label')
                .css({
                    transform: 'rotate(' + (-now) + 'deg)'
                });
        },
        duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
    for (var i = 0; i < li.length; i++) {
        var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
    }
}

$('.selector img').click(function (e) {
    toggleOptions($(this).parent());
});

setTimeout(function () {
    toggleOptions('.selector');
}, 100); //@ sourceURL=pen.js
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var sejarah = document.getElementById("sejarah");
var visimisi = document.getElementById("visimisi");
var geografis = document.getElementById("geografis");
var apbd = document.getElementById("apbd");
var muspida = document.getElementById("muspida");
var bupatidanwakilbupati = document.getElementById("bupatidanwakilbupati");
var pejabateksekutif = document.getElementById("pejabateksekutif");
var pejabatlegislatif = document.getElementById("pejabatlegislatif");
var instasivertikal = document.getElementById("instasivertikal");
// var perangkatdaerah = document.getElementById("perangkatdaerah");
var desa = document.getElementById("desa");
var infopublik = document.getElementById("infopublik");
var websiteterkait = document.getElementById("websiteterkait");
var layanan = document.getElementById("layanan");
var sisteminformasi = document.getElementById("sisteminformasi");
var sakip = document.getElementById("sakip");
var emergency = document.getElementById("emergency");

// Get the button that opens the modal
var btn = document.getElementById("c1");
var btn2 = document.getElementById("c7");
var c2 = document.getElementById("c2");
var btn3 = document.getElementById("keluar");
var keluarpemerintahan = document.getElementById("keluarpemerintahan");
var keluarinfopublik = document.getElementById("keluarinfopublik");
var keluarlayanan = document.getElementById("keluarlayanan");
var keluarsisteminformasi = document.getElementById("keluarsisteminformasi");
var keluarsakip = document.getElementById("keluarsakip");
// var navprofil = document.getElementById("navprofil");
var btnsejarah = document.getElementById("btnsejarah");
var btnvisimisi = document.getElementById("btnvisimisi");
var btngeografis = document.getElementById("btngeografis");
var btnapbd = document.getElementById("btnapbd");
var btnmuspida = document.getElementById("btnmuspida");
var btnbupatidanwakilbupati = document.getElementById("btnbupatidanwakilbupati");
var btnpejabatekskutif = document.getElementById("btnpejabatekskutif");
var btnpejabatlegislatif = document.getElementById("btnpejabatlegislatif");
var btninstasivertikal = document.getElementById("btninstasivertikal");
// var btnperangkatdaerah = document.getElementById("btnperangkatdaerah");
var btndesa = document.getElementById("btndesa");
var btnwebsiteterkait = document.getElementById("btnwebsiteterkait");
var c5 = document.getElementById("c5");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var btnemergency = document.getElementById("btnemergency");




// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span8 = document.getElementsByClassName("close")[6];
var span9 = document.getElementsByClassName("close")[7];
var span10 = document.getElementsByClassName("close")[8];
var span11 = document.getElementsByClassName("close")[9];
var span12 = document.getElementsByClassName("close")[10];
// var span13 = document.getElementsByClassName("close")[11];
var span14 = document.getElementsByClassName("close")[11];
var span15 = document.getElementsByClassName("close")[12];
var span16 = document.getElementsByClassName("close")[13];
var span17 = document.getElementsByClassName("close")[14];
var span18 = document.getElementsByClassName("close")[15];
var span19 = document.getElementsByClassName("close")[16];
var span20 = document.getElementsByClassName("close")[17];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
// navprofil.onclick = function() {
//     modal2.style.display = "block";
// }
btnsejarah.onclick = function () {
    sejarah.style.display = "block";
}
btnvisimisi.onclick = function () {
    visimisi.style.display = "block";
}
btngeografis.onclick = function () {
    geografis.style.display = "block";
}
btnapbd.onclick = function () {
    apbd.style.display = "block";
}
btnmuspida.onclick = function () {
    muspida.style.display = "block";
}
btnbupatidanwakilbupati.onclick = function () {
    bupatidanwakilbupati.style.display = "block";
}
btnpejabatekskutif.onclick = function () {
    pejabateksekutif.style.display = "block";
}
btnpejabatlegislatif.onclick = function () {
    pejabatlegislatif.style.display = "block";
}
btninstasivertikal.onclick = function () {
    instasivertikal.style.display = "block";
}
// btnperangkatdaerah.onclick = function() {
//     perangkatdaerah.style.display = "block";
// }
btndesa.onclick = function () {
    desa.style.display = "block";
}
c2.onclick = function () {
    infopublik.style.display = "block";
}
btnwebsiteterkait.onclick = function () {
    websiteterkait.style.display = "block";
}
c5.onclick = function () {
    layanan.style.display = "block";
}
c3.onclick = function () {
    sisteminformasi.style.display = "block";
}
c4.onclick = function () {
    sakip.style.display = "block";
}
btnemergency.onclick = function () {
    emergency.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    sejarah.style.display = "none";
}
btn3.onclick = function () {
    modal2.style.display = "none";
}
keluarpemerintahan.onclick = function () {
    modal.style.display = "none";
}
keluarinfopublik.onclick = function () {
    infopublik.style.display = "none";
}
keluarlayanan.onclick = function () {
    layanan.style.display = "none";
}
keluarsisteminformasi.onclick = function () {
    sisteminformasi.style.display = "none";
}
keluarsakip.onclick = function () {
    sakip.style.display = "none";
}
span4.onclick = function () {
    visimisi.style.display = "none";
}
span5.onclick = function () {
    geografis.style.display = "none";
}
span6.onclick = function () {
    apbd.style.display = "none";
}
span8.onclick = function () {
    muspida.style.display = "none";
}
span9.onclick = function () {
    bupatidanwakilbupati.style.display = "none";
}
span10.onclick = function () {
    pejabateksekutif.style.display = "none";
}
span11.onclick = function () {
    pejabatlegislatif.style.display = "none";
}
span12.onclick = function () {
    instasivertikal.style.display = "none";
}
// span13.onclick = function() {
//     perangkatdaerah.style.display = "none";
// }
span14.onclick = function () {
    desa.style.display = "none";
}
span15.onclick = function () {
    infopublik.style.display = "none";
}
span16.onclick = function () {
    websiteterkait.style.display = "none";
}
span17.onclick = function () {
    layanan.style.display = "none";
}
span18.onclick = function () {
    sisteminformasi.style.display = "none";
}
span19.onclick = function () {
    sakip.style.display = "none";
}
span20.onclick = function () {
    emergency.style.display = "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == sejarah) {
        sejarah.style.display = "none";
    }
    if (event.target == visimisi) {
        visimisi.style.display = "none";
    }
    if (event.target == geografis) {
        geografis.style.display = "none";
    }
    if (event.target == apbd) {
        apbd.style.display = "none";
    }
    if (event.target == muspida) {
        muspida.style.display = "none";
    }
    if (event.target == bupatidanwakilbupati) {
        bupatidanwakilbupati.style.display = "none";
    }
    if (event.target == pejabateksekutif) {
        pejabateksekutif.style.display = "none";
    }
    if (event.target == pejabatlegislatif) {
        pejabatlegislatif.style.display = "none";
    }
    if (event.target == instasivertikal) {
        instasivertikal.style.display = "none";
    }
    // if (event.target == perangkatdaerah) {
    //     perangkatdaerah.style.display = "none";
    // }
    if (event.target == desa) {
        desa.style.display = "none";
    }
    if (event.target == infopublik) {
        infopublik.style.display = "none";
    }
    if (event.target == websiteterkait) {
        websiteterkait.style.display = "none";
    }
    if (event.target == layanan) {
        layanan.style.display = "none";
    }
    if (event.target == sisteminformasi) {
        sisteminformasi.style.display = "none";
    }
    if (event.target == sakip) {
        sakip.style.display = "none";
    }
    if (event.target == emergency) {
        emergency.style.display = "none";
    }
}
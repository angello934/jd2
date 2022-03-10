// Variable para mencionar el video
var playback = document.getElementById("playback");

var bg_sound = document.getElementById("bg-sound");



    function start(){
        playback.play();
        document.getElementById("prvw").classList.add ("hidden");
        bg_sound.pause();
        document.getElementById("hud").classList.remove ("hidden_hud");
    };

    function millscnd(){

        var playback = document.getElementById("playback").currentTime;
        var milli_seconds = parseInt(playback * 1000);

        var pContador = document.getElementById('contador');

        // pContador.textContent = milli_seconds;

        // console.log(milli_seconds);
        
        return milli_seconds
    };


    var intervalo = setInterval(millscnd,10);



var delay = 2000;

// function pictoStar(Pctstar, pictocod){
//         var Pictoxx = document.getElementById(pictocod);
//         var pictodelay = Pctstar - delay;
//         if(pictodelay< millscnd() && pictodelay + 2000 > millscnd() ){Pictoxx.style.animation = "pictoAnimate linear 2s";setTimeout(function(){Pictoxx.style.removeProperty('animation')},2000)};
// };


//picto 1 - 10
// var PictoStar001 = 6650;
//     Picto001 = "pct15";



// function pictocompi(){
//     pictoStar(PictoStar001, Picto001);

// }

function pictoStar(pctf){
    var pictocod = pctf[1];
    var pictodelay = pctf[0] - delay;
    var Pictoxx = document.getElementById(pictocod);

    if(pictodelay< millscnd() && pictodelay + 1000 > millscnd() ){Pictoxx.style.animation = "pictoAnimate linear 2s";setTimeout(function(){Pictoxx.style.removeProperty('animation')},2000)};
};


var pctf001= [6128, "pct15"];
var pctf002= [8005, "pct08"];
var pctf003= [9946, "pct14"];
var pctf004= [11813, "pct07"];
var pctf005= [13840, "pct15"];
var pctf006= [15642, "pct08"];
var pctf007= [17637, "pct14"];
var pctf008= [19579, "pct07"];
var pctf009= [21509, "pct34"];
var pctf010= [21903, "pct35"];
var pctf011= [23174, "pct36"];
var pctf012= [25242, "pct34"];
var pctf013= [25754, "pct35"];
var pctf014= [26939, "pct36"];
var pctf015= [29103, "pct34"];
var pctf016= [29595, "pct35"];
var pctf017= [30778, "pct36"];
var pctf018= [32932, "pct34"];
var pctf019= [33466, "pct35"];
var pctf020= [34692, "pct36"];
var pctf021= [37348, "pct30"];
var pctf022= [38214, "pct29"];
var pctf023= [44944, "pct30"];
var pctf024= [48859, "pct06"];
var pctf025= [49776, "pct03"];
var pctf026= [52164, "pct37"];
var pctf027= [52698, "pct01"];
var pctf028= [54074, "pct18"];
var pctf029= [54576, "pct20"];
var pctf030= [55066, "pct19"];
var pctf031= [55536, "pct02"];
var pctf032= [56068, "pct37"];
var pctf033= [56549, "pct01"];
var pctf034= [57892, "pct18"];
var pctf035= [58438, "pct20"];
var pctf036= [58948, "pct19"];
var pctf037= [59824, "pct37"];
var pctf038= [60367, "pct01"];
var pctf039= [61733, "pct18"];
var pctf040= [62181, "pct20"];
var pctf041= [62723, "pct19"];
var pctf042= [63098, "pct02"];
var pctf043= [63652, "pct24"];
var pctf044= [64858, "pct12"];
var pctf045= [67461, "pct21"];
var pctf046= [69647, "pct23"];
var pctf047= [71300, "pct21"];
var pctf048= [73541, "pct23"];
var pctf049= [75065, "pct21"];
var pctf050= [77381, "pct23"];
var pctf051= [78948, "pct21"];
var pctf052= [80880, "pct09"];
var pctf053= [82928, "pct15"];
var pctf054= [84805, "pct08"];
var pctf055= [86746, "pct14"];
var pctf056= [88613, "pct07"];
var pctf057= [90640, "pct15"];
var pctf058= [92442, "pct08"];
var pctf059= [94437, "pct14"];
var pctf060= [96379, "pct07"];
var pctf061= [98309, "pct34"];
var pctf062= [98703, "pct35"];
var pctf063= [99974, "pct36"];
var pctf064= [102042, "pct34"];
var pctf065= [102554, "pct35"];
var pctf066= [103739, "pct36"];
var pctf067= [105903, "pct34"];
var pctf068= [106395, "pct35"];
var pctf069= [107578, "pct36"];
var pctf070= [109732, "pct34"];
var pctf071= [110266, "pct35"];
var pctf072= [111492, "pct36"];
var pctf073= [114148, "pct30"];
var pctf074= [115014, "pct29"];
var pctf075= [121744, "pct30"];
var pctf076= [125659, "pct06"];
var pctf077= [126576, "pct03"];
var pctf078= [128964, "pct37"];
var pctf079= [129498, "pct01"];
var pctf080= [130874, "pct18"];
var pctf081= [131376, "pct20"];
var pctf082= [131866, "pct19"];
var pctf083= [132336, "pct02"];
var pctf084= [132868, "pct37"];
var pctf085= [133349, "pct01"];
var pctf086= [134692, "pct18"];
var pctf087= [135238, "pct20"];
var pctf088= [135748, "pct19"];
var pctf089= [136624, "pct37"];
var pctf090= [137167, "pct01"];
var pctf091= [138533, "pct18"];
var pctf092= [138981, "pct20"];
var pctf093= [139523, "pct19"];
var pctf094= [139898, "pct02"];
var pctf095= [140452, "pct24"];
var pctf096= [141658, "pct12"];
var pctf097= [144261, "pct21"];
var pctf098= [146447, "pct23"];
var pctf099= [148100, "pct21"];
var pctf100= [150341, "pct23"];
var pctf101= [151865, "pct21"];
var pctf102= [154181, "pct23"];
var pctf103= [155748, "pct21"];
var pctf104= [157680, "pct09"];
var pctf105= [159758, "pct15"];
var pctf106= [161635, "pct08"];
var pctf107= [163576, "pct14"];
var pctf108= [165443, "pct07"];
var pctf109= [167470, "pct15"];
var pctf110= [169272, "pct08"];
var pctf111= [171267, "pct14"];
var pctf112= [173209, "pct07"];
var pctf113= [175524, "pct28"];
var pctf114= [176506, "pct26"];
var pctf115= [179322, "pct27"];
var pctf116= [180344, "pct25"];
var pctf117= [182692, "pct24"];
var pctf118= [184590, "pct33"];
var pctf119= [186532, "pct32"];
var pctf120= [188067, "pct33"];
var pctf121= [189615, "pct22"];
var pctf122= [190426, "pct37"];
var pctf123= [190960, "pct01"];
var pctf124= [192336, "pct18"];
var pctf125= [192838, "pct20"];
var pctf126= [193328, "pct19"];
var pctf127= [193798, "pct02"];
var pctf128= [194330, "pct37"];
var pctf129= [194811, "pct01"];
var pctf130= [196154, "pct18"];
var pctf131= [196700, "pct20"];
var pctf132= [197210, "pct19"];
var pctf133= [198086, "pct37"];
var pctf134= [198629, "pct01"];
var pctf135= [199995, "pct18"];
var pctf136= [200443, "pct20"];
var pctf137= [200985, "pct19"];
var pctf138= [201360, "pct02"];
var pctf139= [201914, "pct24"];
var pctf140= [203120, "pct12"];
var pctf141= [205723, "pct21"];
var pctf142= [207909, "pct23"];
var pctf143= [209562, "pct21"];
var pctf144= [211803, "pct23"];
var pctf145= [213327, "pct21"];
var pctf146= [215643, "pct23"];
var pctf147= [217210, "pct21"];
var pctf148= [219142, "pct09"];
var pctf149= [221092, "pct11"];
var pctf150= [223012, "pct16"];
var pctf151= [224954, "pct00"];
var pctf152= [226883, "pct17"];
var pctf153= [228867, "pct11"];
var pctf154= [230724, "pct16"];
var pctf155= [232644, "pct00"];
var pctf156= [234692, "pct17"];


function pictocompi(){

    pictoStar(pctf001);
    pictoStar(pctf002);
    pictoStar(pctf003);
    pictoStar(pctf004);
    pictoStar(pctf005);
    pictoStar(pctf006);
    pictoStar(pctf007);
    pictoStar(pctf008);
    pictoStar(pctf009);
    pictoStar(pctf010);
    pictoStar(pctf011);
    pictoStar(pctf012);
    pictoStar(pctf013);
    pictoStar(pctf014);
    pictoStar(pctf015);
    pictoStar(pctf016);
    pictoStar(pctf017);
    pictoStar(pctf018);
    pictoStar(pctf019);
    pictoStar(pctf020);
    pictoStar(pctf021);
    pictoStar(pctf022);
    pictoStar(pctf023);
    pictoStar(pctf024);
    pictoStar(pctf025);
    pictoStar(pctf026);
    pictoStar(pctf027);
    pictoStar(pctf028);
    pictoStar(pctf029);
    pictoStar(pctf030);
    pictoStar(pctf031);
    pictoStar(pctf032);
    pictoStar(pctf033);
    pictoStar(pctf034);
    pictoStar(pctf035);
    pictoStar(pctf036);
    pictoStar(pctf037);
    pictoStar(pctf038);
    pictoStar(pctf039);
    pictoStar(pctf040);
    pictoStar(pctf041);
    pictoStar(pctf042);
    pictoStar(pctf043);
    pictoStar(pctf044);
    pictoStar(pctf045);
    pictoStar(pctf046);
    pictoStar(pctf047);
    pictoStar(pctf048);
    pictoStar(pctf049);
    pictoStar(pctf050);
    pictoStar(pctf051);
    pictoStar(pctf052);
    pictoStar(pctf053);
    pictoStar(pctf054);
    pictoStar(pctf055);
    pictoStar(pctf056);
    pictoStar(pctf057);
    pictoStar(pctf058);
    pictoStar(pctf059);
    pictoStar(pctf060);
    pictoStar(pctf061);
    pictoStar(pctf062);
    pictoStar(pctf063);
    pictoStar(pctf064);
    pictoStar(pctf065);
    pictoStar(pctf066);
    pictoStar(pctf067);
    pictoStar(pctf068);
    pictoStar(pctf069);
    pictoStar(pctf070);
    pictoStar(pctf071);
    pictoStar(pctf072);
    pictoStar(pctf073);
    pictoStar(pctf074);
    pictoStar(pctf075);
    pictoStar(pctf076);
    pictoStar(pctf077);
    pictoStar(pctf078);
    pictoStar(pctf079);
    pictoStar(pctf080);
    pictoStar(pctf081);
    pictoStar(pctf082);
    pictoStar(pctf083);
    pictoStar(pctf084);
    pictoStar(pctf085);
    pictoStar(pctf086);
    pictoStar(pctf087);
    pictoStar(pctf088);
    pictoStar(pctf089);
    pictoStar(pctf090);
    pictoStar(pctf091);
    pictoStar(pctf092);
    pictoStar(pctf093);
    pictoStar(pctf094);
    pictoStar(pctf095);
    pictoStar(pctf096);
    pictoStar(pctf097);
    pictoStar(pctf098);
    pictoStar(pctf099);
    pictoStar(pctf100);
    pictoStar(pctf101);
    pictoStar(pctf102);
    pictoStar(pctf103);
    pictoStar(pctf104);
    pictoStar(pctf105);
    pictoStar(pctf106);
    pictoStar(pctf107);
    pictoStar(pctf108);
    pictoStar(pctf109);
    pictoStar(pctf110);
    pictoStar(pctf111);
    pictoStar(pctf112);
    pictoStar(pctf113);
    pictoStar(pctf114);
    pictoStar(pctf115);
    pictoStar(pctf116);
    pictoStar(pctf117);
    pictoStar(pctf118);
    pictoStar(pctf119);
    pictoStar(pctf120);
    pictoStar(pctf121);
    pictoStar(pctf122);
    pictoStar(pctf123);
    pictoStar(pctf124);
    pictoStar(pctf125);
    pictoStar(pctf126);
    pictoStar(pctf127);
    pictoStar(pctf128);
    pictoStar(pctf129);
    pictoStar(pctf130);
    pictoStar(pctf131);
    pictoStar(pctf132);
    pictoStar(pctf133);
    pictoStar(pctf134);
    pictoStar(pctf135);
    pictoStar(pctf136);
    pictoStar(pctf137);
    pictoStar(pctf138);
    pictoStar(pctf139);
    pictoStar(pctf140);
    pictoStar(pctf141);
    pictoStar(pctf142);
    pictoStar(pctf143);
    pictoStar(pctf144);
    pictoStar(pctf145);
    pictoStar(pctf146);
    pictoStar(pctf147);
    pictoStar(pctf148);
    pictoStar(pctf149);
    pictoStar(pctf150);
    pictoStar(pctf151);
    pictoStar(pctf152);
    pictoStar(pctf153);
    pictoStar(pctf154);
    pictoStar(pctf155);
    pictoStar(pctf156);
    pictoStar(pctf157);
    pictoStar(pctf158);
    pictoStar(pctf159);
    pictoStar(pctf160);
    pictoStar(pctf161);
    pictoStar(pctf162);
    pictoStar(pctf163);
    pictoStar(pctf164);
    pictoStar(pctf165);
    pictoStar(pctf166);
    pictoStar(pctf167);
    pictoStar(pctf168);
    pictoStar(pctf169);
    pictoStar(pctf170);
    pictoStar(pctf171);
    pictoStar(pctf172);
    pictoStar(pctf173);
    pictoStar(pctf174);
    pictoStar(pctf175);
    pictoStar(pctf176);
    pictoStar(pctf177);
    pictoStar(pctf178);
    pictoStar(pctf179);
    pictoStar(pctf180);
    pictoStar(pctf181);
    pictoStar(pctf182);
    pictoStar(pctf183);
    pictoStar(pctf184);
    pictoStar(pctf185);
    pictoStar(pctf186);
    pictoStar(pctf187);
    pictoStar(pctf188);
    pictoStar(pctf189);
    pictoStar(pctf190);
    pictoStar(pctf191);
    pictoStar(pctf192);
    pictoStar(pctf193);
    pictoStar(pctf194);
    pictoStar(pctf195);
    pictoStar(pctf196);
    pictoStar(pctf197);
    pictoStar(pctf198);
    pictoStar(pctf199);
    pictoStar(pctf200);
    pictoStar(pctf201);
    pictoStar(pctf202);
    pictoStar(pctf203);
    pictoStar(pctf204);
    pictoStar(pctf205);
    pictoStar(pctf206);
    pictoStar(pctf207);
    pictoStar(pctf208);
    pictoStar(pctf209);
    pictoStar(pctf210);
    pictoStar(pctf211);
    pictoStar(pctf212);
    pictoStar(pctf213);
    pictoStar(pctf214);
    pictoStar(pctf215);
    pictoStar(pctf216);
    pictoStar(pctf217);
    pictoStar(pctf218);
    pictoStar(pctf219);
    pictoStar(pctf220);
    pictoStar(pctf221);
    pictoStar(pctf222);
    pictoStar(pctf223);
    pictoStar(pctf224);
    pictoStar(pctf225);
    pictoStar(pctf226);
    pictoStar(pctf227);
    pictoStar(pctf228);
    pictoStar(pctf229);
    pictoStar(pctf230);
    pictoStar(pctf231);
    pictoStar(pctf232);
    pictoStar(pctf233);
    pictoStar(pctf234);
    pictoStar(pctf235);
    pictoStar(pctf236);
    pictoStar(pctf237);
    pictoStar(pctf238);
    pictoStar(pctf239);
    pictoStar(pctf240);
    pictoStar(pctf241);
    pictoStar(pctf242);
    pictoStar(pctf243);
    pictoStar(pctf244);
    pictoStar(pctf245);
    pictoStar(pctf246);
    pictoStar(pctf247);
    pictoStar(pctf248);
    pictoStar(pctf249);
    pictoStar(pctf250);
    pictoStar(pctf251);
    pictoStar(pctf252);
    pictoStar(pctf253);
    pictoStar(pctf254);
    pictoStar(pctf255);
    pictoStar(pctf256);
    pictoStar(pctf257);
    pictoStar(pctf258);
    pictoStar(pctf259);
    pictoStar(pctf260);
    pictoStar(pctf261);
    pictoStar(pctf262);
    pictoStar(pctf263);
    pictoStar(pctf264);
    pictoStar(pctf265);
    pictoStar(pctf266);
    pictoStar(pctf267);
    pictoStar(pctf268);
    pictoStar(pctf269);
    pictoStar(pctf270);
    pictoStar(pctf271);
    pictoStar(pctf272);
    pictoStar(pctf273);
    pictoStar(pctf274);
    pictoStar(pctf275);
    pictoStar(pctf276);
    pictoStar(pctf277);
    pictoStar(pctf278);
    pictoStar(pctf279);
    pictoStar(pctf280);
    pictoStar(pctf281);
    pictoStar(pctf282);
    pictoStar(pctf283);
    pictoStar(pctf284);
    pictoStar(pctf285);
    pictoStar(pctf286);
    pictoStar(pctf287);
    pictoStar(pctf288);
    pictoStar(pctf289);
    pictoStar(pctf290);
    pictoStar(pctf291);
    pictoStar(pctf292);
    pictoStar(pctf293);
    pictoStar(pctf294);
    pictoStar(pctf295);
    pictoStar(pctf296);
    pictoStar(pctf297);
    pictoStar(pctf298);
    pictoStar(pctf299);
    pictoStar(pctf300);
    pictoStar(pctf301);
    pictoStar(pctf302);
    pictoStar(pctf303);
    pictoStar(pctf304);
    pictoStar(pctf305);
    pictoStar(pctf306);
    pictoStar(pctf307);
    pictoStar(pctf308);
    pictoStar(pctf309);
    pictoStar(pctf310);
    pictoStar(pctf311);
    pictoStar(pctf312);
    pictoStar(pctf313);
    pictoStar(pctf314);
    pictoStar(pctf315);
    pictoStar(pctf316);
    pictoStar(pctf317);
    pictoStar(pctf318);
    pictoStar(pctf319);
    pictoStar(pctf320);
    pictoStar(pctf321);
    pictoStar(pctf322);
    pictoStar(pctf323);
    pictoStar(pctf324);
    pictoStar(pctf325);
    pictoStar(pctf326);
    pictoStar(pctf327);
    pictoStar(pctf328);
    pictoStar(pctf329);
    pictoStar(pctf330);
    pictoStar(pctf331);
    pictoStar(pctf332);
    pictoStar(pctf333);
    pictoStar(pctf334);
    pictoStar(pctf335);
    pictoStar(pctf336);
    pictoStar(pctf337);
    pictoStar(pctf338);
    pictoStar(pctf339);
    pictoStar(pctf340);
    pictoStar(pctf341);
    pictoStar(pctf342);
    pictoStar(pctf343);
    pictoStar(pctf344);
    pictoStar(pctf345);
    pictoStar(pctf346);
    pictoStar(pctf347);
    pictoStar(pctf348);
    pictoStar(pctf349);
    pictoStar(pctf350);
    pictoStar(pctf351);
    pictoStar(pctf352);
    pictoStar(pctf353);
    pictoStar(pctf354);
    pictoStar(pctf355);
    pictoStar(pctf356);
    pictoStar(pctf357);
    pictoStar(pctf358);
    pictoStar(pctf359);
    pictoStar(pctf360);
    pictoStar(pctf361);
    pictoStar(pctf362);
    pictoStar(pctf363);
    pictoStar(pctf364);
    pictoStar(pctf365);
    pictoStar(pctf366);
    pictoStar(pctf367);
    pictoStar(pctf368);
    pictoStar(pctf369);
    pictoStar(pctf370);
    pictoStar(pctf371);
    pictoStar(pctf372);
    pictoStar(pctf373);
    pictoStar(pctf374);
    pictoStar(pctf375);
    pictoStar(pctf376);
    pictoStar(pctf377);
    pictoStar(pctf378);
    pictoStar(pctf379);
    pictoStar(pctf380);
    pictoStar(pctf381);
    pictoStar(pctf382);
    pictoStar(pctf383);
    pictoStar(pctf384);
    pictoStar(pctf385);
    pictoStar(pctf386);
    pictoStar(pctf387);
    pictoStar(pctf388);
    pictoStar(pctf389);
    pictoStar(pctf390);
    pictoStar(pctf391);
    pictoStar(pctf392);
    pictoStar(pctf393);
    pictoStar(pctf394);
    pictoStar(pctf395);
    pictoStar(pctf396);
    pictoStar(pctf397);
    pictoStar(pctf398);
    pictoStar(pctf399);
    pictoStar(pctf400);
 
}









var ani = setInterval(pictocompi,100);







//     //picto 1 - 10
// var PictoStar001 = 6650 - delay
//     Picto001 = document.getElementById("pct15");
// var PictoStar002 = 8600 - delay;
//     Picto002 = document.getElementById("pct08");
// var PictoStar003 = 10569 - delay;
//     Picto003 = document.getElementById("pct14");
// var PictoStar004 = 12200 - delay;
//     Picto004 = document.getElementById("pct07");
// var PictoStar005 = 14000 - delay;
//     Picto005 = document.getElementById("pct15");
// var PictoStar006 = 16000 - delay;
//     Picto006 = document.getElementById("pct08");
// var PictoStar007 = 18000 - delay;
//     Picto007 = document.getElementById("pct14");
// var PictoStar008 = 20000 - delay;
//     Picto008 = document.getElementById("pct07");






















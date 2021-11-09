
var sorov = prompt(" Xush kelibsiz! Bizda bir qancha o'yin-masala-loyihalar mavjud! Xohlaganingizni tanlab tekshirib baho bering. Tashakkur!" + " " + "\n" + 
1 + ".Toq Yoki Juft?" + "\n" + 
2 + ".To'g'ri to'rtburchakning yuzini aniqlang." + "\n" + 
3 + ".Uchburchakning yuzini aniqlang." + "\n" + 
4 + ".Doiraning yuzini aniqlang." + "\n" + 
5 + ".Aylananing uzunligini aniqlang.");
if (sorov == 1) {
var a = prompt("1ta son kiriting:")
if(a % 2 == 0) {
alert("Bu juft son")
} else{
alert("Bu toq son")
}
} else if (sorov == 2) {
var c = prompt("To'g'ri to'rtburchakning 1-tomoni uzunligini kiriting:")
var d = prompt("To'g'ri to'rtburchakning 2-tomoni uzunligini kiriting:")
function findSquareSurface(c,d) {
return c * d
}
alert(findSquareSurface(c, d))
console.log(findSquareSurface(c, d))
} else if (sorov == 3) {
var e = prompt("Uchburchakning 1 tomoni uzunligini kiriting:")
var f = prompt("Uchburchakning siz kiritgan tomonga tushirilgan balandligini kiriting:")
function findSurface(e, f) {
return e * f / 2
}
alert(findSurface(e, f))
console.log(findSurface(e, f))
} else if (sorov == 4) {
var h = prompt("Doiraning radiusini kiriting:")
function findCircleSurface(h) {
return 3.14 * (h ** 2)
}
alert(findCircleSurface(h))
console.log(findCircleSurface(h))
} else if (sorov == 5) {
var u = prompt("Aylananing radiusini kiriting:")
function findCircleLine(u) {
return 2 * 3.14 * u
}
alert(findCircleLine(u))
console.log(findCircleLine(u))
} else {
alert("Bizda hozircha faqat 5ta loyiha mavjud!")
}

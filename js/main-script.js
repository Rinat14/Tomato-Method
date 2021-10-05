const upBtn = document.querySelector('.btn-plus');
const upBtn2 = document.querySelector('.btn-plus-2');
const upBtn3 = document.querySelector('.btn-plus-3');
const upBtn4 = document.querySelector('.btn-plus-4');
const upBtn5 = document.querySelector('.btn-plus-5');
const unorder = document.querySelectorAll('.unorder-list');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const modeBtn = document.querySelector('.mode-btn');
const timeEl = document.querySelectorAll('#time');
const timeBtn = document.querySelectorAll('.time-btn');
const innerLeftTime = document.querySelectorAll('#left-time');
const audioBlock = document.querySelectorAll('.audio-block');
const song = document.querySelectorAll('.audio-btn');
const startingMinutes = 25;
let time = startingMinutes * 60;
const startingMinutes2 = 25;
let time2 = startingMinutes2 * 60;
const startingMinutes3 = 25;
let time3 = startingMinutes3 * 60;
const startingMinutes4 = 25;
let time4 = startingMinutes4 * 60;
const startingMinutes5 = 25;
let time5 = startingMinutes5 * 60;
const startingMinutes6 = 25;
let time6 = startingMinutes6 * 60;
const startingMinutes7 = 25;
let time7 = startingMinutes7 * 60;
const startingMinutes8 = 25;
let time8 = startingMinutes8 * 60;
const startingMinutes9 = 25;
let time9 = startingMinutes9 * 60;
const startingMinutes10 = 25;
let time10 = startingMinutes10 * 60;
const startingMinutes11 = 25;
let time11 = startingMinutes11 * 60;
const startingMinutes12 = 25;
let time12 = startingMinutes12 * 60;
const startingMinutes13 = 25;
let time13 = startingMinutes13 * 60;
const startingMinutes14 = 25;
let time14 = startingMinutes14 * 60;
const startingMinutes15 = 25;
let time15 = startingMinutes15 * 60;
const startingMinutes16 = 25;
let time16 = startingMinutes16 * 60;
const startingMinutes17 = 25;
let time17 = startingMinutes17 * 60;
const startingMinutes18 = 25;
let time18 = startingMinutes18 * 60;
const startingMinutes19 = 25;
let time19 = startingMinutes19 * 60;
const startingMinutes20 = 25;
let time20 = startingMinutes20 * 60;
upBtn.addEventListener('click', ()=> {
	if(unorder[0].classList.contains('up')){
		unorder[0].classList.remove('up');
		unorder[0].classList.add('down');
	}else{
		unorder[0].classList.remove('down');
		unorder[0].classList.add('up');
	}
});
upBtn2.addEventListener('click', ()=> {
	if(unorder[1].classList.contains('up')){
		unorder[1].classList.remove('up');
		unorder[1].classList.add('down');
	}else{
		unorder[1].classList.remove('down');
		unorder[1].classList.add('up');
	}
});
upBtn3.addEventListener('click', ()=> {
	if(unorder[2].classList.contains('up')){
		unorder[2].classList.remove('up');
		unorder[2].classList.add('down');
	}else{
		unorder[2].classList.remove('down');
		unorder[2].classList.add('up');
	}
});
upBtn4.addEventListener('click', ()=> {
	if(unorder[3].classList.contains('up')){
		unorder[3].classList.remove('up');
		unorder[3].classList.add('down');
	}else{
		unorder[3].classList.remove('down');
		unorder[3].classList.add('up');
	}
});
upBtn5.addEventListener('click', ()=> {
	if(unorder[4].classList.contains('up')){
		unorder[4].classList.remove('up');
		unorder[4].classList.add('down');
	}else{
		unorder[4].classList.remove('down');
		unorder[4].classList.add('up');
	}
});
modeBtn.addEventListener('click', () => {
	body.classList.toggle('dark');
	footer.classList.toggle('dark-footer');
	if(body.classList.contains('dark') && footer.classList.contains('dark-footer')){
		modeBtn.style.transform = `translateX(30px)`;
	}else{
		modeBtn.style.transform = `translateX(0)`;
	}
});
timeBtn[0].addEventListener('click', () => {
	addClass(0, 'start');
	setInterval(updateCountdown, 1000);
	timeBtn[0].classList.add('hide');
});
timeBtn[1].addEventListener('click', () => {
	addClass(1, 'start2');
	removeClass(0, 'start');
	setInterval(updateCountdown2, 1000);
	timeBtn[1].classList.add('hide');
});
timeBtn[2].addEventListener('click', () => {
	addClass(2, 'start3');
	removeClass(1, 'start2');
	setInterval(updateCountdown3, 1000);
	timeBtn[2].classList.add('hide');
});
timeBtn[3].addEventListener('click', () => {
	addClass(3, 'start4');
	removeClass(2, 'start3');
	setInterval(updateCountdown4, 1000);
	timeBtn[3].classList.add('hide');
});
timeBtn[4].addEventListener('click', () => {
	addClass(4, 'start5');
	removeClass(3, 'start4');
	setInterval(updateCountdown5, 1000);
	timeBtn[4].classList.add('hide');
});
timeBtn[5].addEventListener('click', () => {
	addClass(5, 'start6');
	removeClass(4, 'start5');
	setInterval(updateCountdown6, 1000);
	timeBtn[5].classList.add('hide');
});
timeBtn[6].addEventListener('click', () => {
	addClass(6, 'start7');
	removeClass(5, 'start6');
	setInterval(updateCountdown7, 1000);
	timeBtn[6].classList.add('hide');
});
timeBtn[7].addEventListener('click', () => {
	addClass(7, 'start8');
	removeClass(6, 'start7');
	setInterval(updateCountdown8, 1000);
	timeBtn[7].classList.add('hide');
});
timeBtn[8].addEventListener('click', () => {
	addClass(8, 'start9');
	removeClass(7, 'start8');
	setInterval(updateCountdown9, 1000);
	timeBtn[8].classList.add('hide');
});
timeBtn[9].addEventListener('click', () => {
	addClass(9, 'start10');
	removeClass(8, 'start9');
	setInterval(updateCountdown10, 1000);
	timeBtn[9].classList.add('hide');
});
timeBtn[10].addEventListener('click', () => {
	addClass(10, 'start11');
	removeClass(9, 'start10');
	setInterval(updateCountdown11, 1000);
	timeBtn[10].classList.add('hide');
});
timeBtn[11].addEventListener('click', () => {
	addClass(11, 'start12');
	removeClass(10, 'start11');
	setInterval(updateCountdown12, 1000);
	timeBtn[11].classList.add('hide');
});
timeBtn[12].addEventListener('click', () => {
	addClass(12, 'start13');
	removeClass(11, 'start12');
	setInterval(updateCountdown13, 1000);
	timeBtn[12].classList.add('hide');
});
timeBtn[13].addEventListener('click', () => {
	addClass(13, 'start14');
	removeClass(12, 'start13');
	setInterval(updateCountdown14, 1000);
	timeBtn[13].classList.add('hide');
});
timeBtn[14].addEventListener('click', () => {
	addClass(14, 'start15');
	removeClass(13, 'start14');
	setInterval(updateCountdown15, 1000);
	timeBtn[14].classList.add('hide');
});
timeBtn[15].addEventListener('click', () => {
	addClass(15, 'start16');
	removeClass(14, 'start15');
	setInterval(updateCountdown16, 1000);
	timeBtn[15].classList.add('hide');
});
timeBtn[16].addEventListener('click', () => {
	addClass(16, 'start17');
	removeClass(15, 'start16');
	setInterval(updateCountdown17, 1000);
	timeBtn[16].classList.add('hide');
});
timeBtn[17].addEventListener('click', () => {
	addClass(17, 'start18');
	removeClass(16, 'start17');
	setInterval(updateCountdown18, 1000);
	timeBtn[17].classList.add('hide');
});
timeBtn[18].addEventListener('click', () => {
	addClass(18, 'start19');
	removeClass(17, 'start18');
	setInterval(updateCountdown19, 1000);
	timeBtn[18].classList.add('hide');
});
timeBtn[19].addEventListener('click', () => {
	addClass(19, 'start20');
	removeClass(18, 'start19');
	setInterval(updateCountdown20, 1000);
	timeBtn[19].classList.add('hide');
});
function updateCountdown() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start = document.querySelector('.start');
	start.innerHTML = `${minutes}:${seconds}`;
	time--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[0].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn">Off</button></span>`;
		const offBtn = document.querySelector('.off-btn');
		offBtn.addEventListener('click', () => {
			audioBlock[0].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn.classList.add('hide');
		});
		song[0].play();
	}
}
function updateCountdown2() {
	const minutes = Math.floor(time2 / 60);
	let seconds = time2 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start2 = document.querySelector('.start2');
	start2.innerHTML = `${minutes}:${seconds}`;
	time2--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[1].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-2">Off</button></span>`;
		const offBtn2 = document.querySelector('.off-btn-2');
		offBtn2.addEventListener('click', () => {
			audioBlock[1].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn2.classList.add('hide');
		});
		song[1].play();
	}	
}
function updateCountdown3() {
	const minutes = Math.floor(time3 / 60);
	let seconds = time3 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start3 = document.querySelector('.start3');
	start3.innerHTML = `${minutes}:${seconds}`;
	time3--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[2].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-3">Off</button></span>`;
		const offBtn3 = document.querySelector('.off-btn-3');
		offBtn3.addEventListener('click', () => {
			audioBlock[2].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn3.classList.add('hide');
		});
		song[2].play();
	}
}
function updateCountdown4() {
	const minutes = Math.floor(time4 / 60);
	let seconds = time4 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start4 = document.querySelector('.start4');
	start4.innerHTML = `${minutes}:${seconds}`;
	time4--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[3].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-4">Off</button></span>`;
		const offBtn4 = document.querySelector('.off-btn-4');
		offBtn4.addEventListener('click', () => {
			audioBlock[3].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn4.classList.add('hide');
		});
		song[3].play();
	}
}
function updateCountdown5() {
	const minutes = Math.floor(time5 / 60);
	let seconds = time5 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start5 = document.querySelector('.start5');
	start5.innerHTML = `${minutes}:${seconds}`;
	time5--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[4].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-5">Off</button></span>`;
		const offBtn5 = document.querySelector('.off-btn-5');
		offBtn5.addEventListener('click', () => {
			audioBlock[4].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn5.classList.add('hide');
		});
		song[4].play();
	}
}
function updateCountdown6() {
	const minutes = Math.floor(time6 / 60);
	let seconds = time6 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start6 = document.querySelector('.start6');
	start6.innerHTML = `${minutes}:${seconds}`;
	time6--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[5].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-6">Off</button></span>`;
		const offBtn6 = document.querySelector('.off-btn-6');
		offBtn6.addEventListener('click', () => {
			audioBlock[5].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn6.classList.add('hide');
		});
		song[5].play();
	}
}
function updateCountdown7() {
	const minutes = Math.floor(time7 / 60);
	let seconds = time7 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start7 = document.querySelector('.start7');
	start7.innerHTML = `${minutes}:${seconds}`;
	time7--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[6].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-7">Off</button></span>`;
		const offBtn7 = document.querySelector('.off-btn-7');
		offBtn7.addEventListener('click', () => {
			audioBlock[6].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn7.classList.add('hide');
		});
		song[6].play();
	}
}
function updateCountdown8() {
	const minutes = Math.floor(time8 / 60);
	let seconds = time8 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start8 = document.querySelector('.start8');
	start8.innerHTML = `${minutes}:${seconds}`;
	time8--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[7].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-8">Off</button></span>`;
		const offBtn8 = document.querySelector('.off-btn-8');
		offBtn8.addEventListener('click', () => {
			audioBlock[7].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn8.classList.add('hide');
		});
		song[7].play();
	}
}
function updateCountdown9() {
	const minutes = Math.floor(time9 / 60);
	let seconds = time9 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start9 = document.querySelector('.start9');
	start9.innerHTML = `${minutes}:${seconds}`;
	time9--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[8].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-9">Off</button></span>`;
		const offBtn9 = document.querySelector('.off-btn-9');
		offBtn9.addEventListener('click', () => {
			audioBlock[8].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn9.classList.add('hide');
		});
		song[8].play();
	}
}
function updateCountdown10() {
	const minutes = Math.floor(time10 / 60);
	let seconds = time10 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start10 = document.querySelector('.start10');
	start10.innerHTML = `${minutes}:${seconds}`;
	time10--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[9].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-10">Off</button></span>`;
		const offBtn10 = document.querySelector('.off-btn-10');
		offBtn10.addEventListener('click', () => {
			audioBlock[9].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn10.classList.add('hide');
		});
		song[9].play();
	}
}
function updateCountdown11() {
	const minutes = Math.floor(time11 / 60);
	let seconds = time11 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start11 = document.querySelector('.start11');
	start11.innerHTML = `${minutes}:${seconds}`;
	time11--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[10].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-11">Off</button></span>`;
		const offBtn11 = document.querySelector('.off-btn-11');
		offBtn11.addEventListener('click', () => {
			audioBlock[10].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn11.classList.add('hide');
		});
		song[10].play();
	}
}
function updateCountdown12() {
	const minutes = Math.floor(time12 / 60);
	let seconds = time12 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start12 = document.querySelector('.start12');
	start12.innerHTML = `${minutes}:${seconds}`;
	time12--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[11].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-12">Off</button></span>`;
		const offBtn12 = document.querySelector('.off-btn-12');
		offBtn12.addEventListener('click', () => {
			audioBlock[11].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn12.classList.add('hide');
		});
		song[11].play();
	}
}
function updateCountdown13() {
	const minutes = Math.floor(time13 / 60);
	let seconds = time13 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start13 = document.querySelector('.start13');
	start13.innerHTML = `${minutes}:${seconds}`;
	time13--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[12].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-13">Off</button></span>`;
		const offBtn13 = document.querySelector('.off-btn-13');
		offBtn13.addEventListener('click', () => {
			audioBlock[12].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn13.classList.add('hide');
		});
		song[12].play();
	}
}
function updateCountdown14() {
	const minutes = Math.floor(time14 / 60);
	let seconds = time14 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start14 = document.querySelector('.start14');
	start14.innerHTML = `${minutes}:${seconds}`;
	time14--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[13].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-14">Off</button></span>`;
		const offBtn14 = document.querySelector('.off-btn-14');
		offBtn14.addEventListener('click', () => {
			audioBlock[13].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn14.classList.add('hide');
		});
		song[13].play();
	}
}
function updateCountdown15() {
	const minutes = Math.floor(time15 / 60);
	let seconds = time15 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start15 = document.querySelector('.start15');
	start15.innerHTML = `${minutes}:${seconds}`;
	time15--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[14].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-15">Off</button></span>`;
		const offBtn15 = document.querySelector('.off-btn-15');
		offBtn15.addEventListener('click', () => {
			audioBlock[14].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn15.classList.add('hide');
		});
		song[14].play();
	}
}
function updateCountdown16() {
	const minutes = Math.floor(time16 / 60);
	let seconds = time16 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start16 = document.querySelector('.start16');
	start16.innerHTML = `${minutes}:${seconds}`;
	time16--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[15].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-16">Off</button></span>`;
		const offBtn16 = document.querySelector('.off-btn-16');
		offBtn16.addEventListener('click', () => {
			audioBlock[15].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn16.classList.add('hide');
		});
		song[15].play();
	}
}
function updateCountdown17() {
	const minutes = Math.floor(time17 / 60);
	let seconds = time17 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start17 = document.querySelector('.start17');
	start17.innerHTML = `${minutes}:${seconds}`;
	time17--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[16].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-17">Off</button></span>`;
		const offBtn17 = document.querySelector('.off-btn-17');
		offBtn17.addEventListener('click', () => {
			audioBlock[16].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn17.classList.add('hide');
		});
		song[16].play();
	}
}
function updateCountdown18() {
	const minutes = Math.floor(time18 / 60);
	let seconds = time18 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start18 = document.querySelector('.start18');
	start18.innerHTML = `${minutes}:${seconds}`;
	time18--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[17].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-18">Off</button></span>`;
		const offBtn18 = document.querySelector('.off-btn-18');
		offBtn18.addEventListener('click', () => {
			audioBlock[17].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn18.classList.add('hide');
		});
		song[17].play();
	}
}
function updateCountdown19() {
	const minutes = Math.floor(time19 / 60);
	let seconds = time19 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start19 = document.querySelector('.start19');
	start19.innerHTML = `${minutes}:${seconds}`;
	time19--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[18].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-19">Off</button></span>`;
		const offBtn19 = document.querySelector('.off-btn-19');
		offBtn19.addEventListener('click', () => {
			audioBlock[18].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn19.classList.add('hide');
		});
		song[18].play();
	}
}
function updateCountdown20() {
	const minutes = Math.floor(time20 / 60);
	let seconds = time20 % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	const start20 = document.querySelector('.start20');
	start20.innerHTML = `${minutes}:${seconds}`;
	time20--;
	if(minutes == 0 && seconds == 0){
		innerLeftTime[19].innerHTML = `<span class="title-of-inner-html">Done <i class="far fa-check-circle"></i></span><span><button class="off-btn-20">Off</button></span>`;
		const offBtn20 = document.querySelector('.off-btn-20');
		offBtn20.addEventListener('click', () => {
			audioBlock[19].innerHTML = `<span style="opacity: 0; visibility: hidden; position: absolute; top: 0; left: 0;""></span>`
			offBtn20.classList.add('hide');
		});
		song[19].play();
	}
}
function addClass(num, name){
	timeEl[num].classList.add(name);
}
function removeClass(num, name){
	timeEl[num].classList.remove(name);
}
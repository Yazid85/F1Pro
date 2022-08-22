/* Music Tracker */
let updateTimer, TrackI = document.querySelector(".TrackI"),
    TrackN = document.querySelector(".TrackN"),
    TrackL = document.querySelector(".TrackA"),
    PlPsT = document.querySelector(".PpTrack"),
    nBtn = document.querySelector(".nTrack"),
    pBtn = document.querySelector(".pTrack"),
    pRc = document.querySelector(".pR"),
    pRb = document.querySelector(".pRb"),
    pRh = document.querySelector(".pRh"),
    cRt = document.querySelector(".cTm"),
    tD = document.querySelector(".tDr"),
    cTr = document.createElement("audio"),
    track_index = 0,
    isPlyng = !1,
    isRndm = !1;

function loadTrack(t) {
    clearInterval(updateTimer), reset(), cTr.src = PlayerTrack[t].music, cTr.load(), TrackI.style.backgroundImage = "url(" + PlayerTrack[t].image + ")", TrackN.textContent = PlayerTrack[t].name, TrackL.textContent = PlayerTrack[t].artist, updateTimer = setInterval(setUpdate, 1e3), cTr.addEventListener("ended", nextTrack)
}

function reset() {
    cRt.textContent = "00:00", tD.textContent = "00:00", pRb.value = 0
}

function playpauseTrack() {
    isPlyng ? pauseTrack() : playTrack()
}

function playTrack() {
    cTr.play(), isPlyng = !0, PlPsT.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><g><path d='M437.02,74.982C388.667,26.628,324.38,0,256,0S123.333,26.628,74.98,74.982C26.628,123.333,0,187.619,0,256s26.628,132.667,74.98,181.019C123.333,485.372,187.62,512,256,512s132.667-26.628,181.02-74.981C485.372,388.667,512,324.381,512,256S485.372,123.333,437.02,74.982z M256,491.602c-129.911,0-235.602-105.69-235.602-235.602S126.089,20.398,256,20.398S491.602,126.089,491.602,256S385.911,491.602,256,491.602z'/></g><g><path d='M230.502,110.172h-62.215c-5.633,0-10.199,4.567-10.199,10.199v271.258c0,5.632,4.566,10.199,10.199,10.199h62.215c5.633,0,10.199-4.566,10.199-10.199V120.371C240.701,114.739,236.135,110.172,230.502,110.172z M220.303,381.43h-41.817V130.57h41.817V381.43z'/></g><g><path d='M343.713,110.172h-62.215c-5.633,0-10.199,4.567-10.199,10.199v271.258c0,5.632,4.566,10.199,10.199,10.199h62.215c5.633,0,10.199-4.566,10.199-10.199V120.371C353.912,114.739,349.346,110.172,343.713,110.172z M333.514,381.43h-41.817V130.57h41.817V381.43z'/></g><g><path d='M410.058,394.699c-3.996-3.971-10.453-3.95-14.424,0.046c-37.229,37.467-86.82,58.1-139.634,58.1c-5.633,0-10.199,4.567-10.199,10.199c0,5.632,4.566,10.199,10.199,10.199c58.287,0,113.016-22.772,154.103-64.119C414.074,405.128,414.053,398.671,410.058,394.699z'/></g><g><path d='M440.18,351.218c-4.869-2.835-11.112-1.186-13.945,3.684c-1.405,2.414-2.89,4.843-4.413,7.217c-3.04,4.742-1.662,11.051,3.079,14.091c1.704,1.092,3.612,1.615,5.496,1.615c3.359,0,6.647-1.657,8.595-4.693c1.681-2.621,3.32-5.302,4.872-7.969C446.698,360.295,445.048,354.051,440.18,351.218z'/></g></svg>"
}

function pauseTrack() {
    cTr.pause(), isPlyng = !1, PlPsT.innerHTML = "<svg viewBox='0 0 502 502' xmlns='http://www.w3.org/2000/svg'><g><path d='M251,502c-67.045,0-130.076-26.108-177.483-73.516C26.108,381.076,0,318.044,0,251S26.108,120.924,73.517,73.516C120.924,26.108,183.955,0,251,0s130.076,26.108,177.483,73.516C475.892,120.924,502,183.956,502,251s-26.108,130.076-73.517,177.484C381.076,475.892,318.045,502,251,502z M251,20C123.626,20,20,123.626,20,251s103.626,231,231,231s231-103.626,231-231S378.374,20,251,20z'/></g><g><path d='M194.134,401c-5.627,0-11.23-1.394-16.204-4.03c-11.344-6.015-18.391-17.728-18.391-30.567V135.597c0-12.839,7.047-24.552,18.39-30.566c11.343-6.013,24.992-5.276,35.62,1.93L383.78,222.363c9.508,6.445,15.184,17.151,15.184,28.637c0,11.485-5.676,22.191-15.184,28.637L213.549,395.04C207.799,398.939,201.085,401,194.134,401z M194.138,120.995c-2.341,0-4.688,0.564-6.84,1.706c-4.786,2.538-7.759,7.479-7.759,12.896v230.806c0,5.417,2.973,10.359,7.759,12.896c2.099,1.112,4.463,1.701,6.836,1.701c2.934,0,5.766-0.869,8.191-2.514l170.232-115.403c4.011-2.72,6.406-7.236,6.406-12.083s-2.395-9.363-6.406-12.082L202.326,123.515C199.858,121.842,197.004,120.995,194.138,120.995z'/></g><g><path d='M286.012,63.038c-0.574,0-1.156-0.049-1.741-0.152c-21.184-3.718-43.425-3.829-64.641-0.324c-5.453,0.903-10.597-2.787-11.496-8.236c-0.9-5.449,2.787-10.596,8.236-11.496c23.431-3.871,47.965-3.75,71.359,0.358c5.439,0.955,9.075,6.139,8.12,11.579C294.997,59.621,290.776,63.038,286.012,63.038z'/></g><g><path d='M439.844,192.001c-4.08,0-7.911-2.516-9.394-6.57c-16.37-44.791-48.719-81.657-91.086-103.808c-4.895-2.559-6.788-8.601-4.229-13.495c2.56-4.895,8.601-6.788,13.495-4.229c46.792,24.464,82.521,65.186,100.605,114.666c1.896,5.187-0.772,10.929-5.96,12.825C442.143,191.804,440.983,192.001,439.844,192.001z'/></g></svg>"
}

function nextTrack() {
    if (track_index < PlayerTrack.length - 1 && !1 === isRndm) track_index += 1;
    else if (track_index < PlayerTrack.length - 1 && !0 === isRndm) {
        let t = Number.parseInt(Math.random() * PlayerTrack.length);
        track_index = t
    } else track_index = 0;
    barWidth = 0, pRb.style.width = `${barWidth}%`, pRh.style.setProperty("left", `${barWidth}%`), loadTrack(track_index), playTrack()
}

function prevTrack() {
    track_index > 0 ? track_index -= 1 : track_index = PlayerTrack.length - 1, loadTrack(track_index), playTrack()
}

function setUpdate() {
    if (!isNaN(cTr.duration)) {
        barWidth = 100 / cTr.duration * cTr.currentTime;
        let t = Math.floor(cTr.currentTime / 60),
            e = Math.floor(cTr.currentTime - 60 * t),
            c = Math.floor(cTr.duration / 60),
            r = Math.floor(cTr.duration - 60 * c);
        e < 10 && (e = "0" + e), r < 10 && (r = "0" + r), t < 10 && (t = "0" + t), c < 10 && (c = "0" + c), cRt.textContent = t + ":" + e, tD.textContent = c + ":" + c, pRb.style.width = `${barWidth}%`, pRh.style.setProperty("left", `${barWidth}%`)
    }
}
loadTrack(track_index), pRc.addEventListener("click", (t => {
    let e = cTr.duration,
        c = 100 * (t.pageX - pRc.offsetLeft) / pRc.offsetWidth;
    c > 100 && (c = 100), c < 0 && (c = 0), barWidth = c + "%", cTr.currentTime = e * c / 100, pRb.style.width = `${barWidth}%`, pRh.style.setProperty("left", `${barWidth}%`)
}));


setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;
    formattedHours = htime.toString().padStart(2, '0');
    formattedMinutes = mtime.toString().padStart(2, '0');
    formattedSeconds = stime.toString().padStart(2, '0');
    document.getElementById('digitalClock').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    year = d.getFullYear();
    month = (d.getMonth() + 1).toString().padStart(2, '0');
    day = d.getDate().toString().padStart(2, '0');
    document.getElementById('dateDisplay').innerHTML = `${year}-${month}-${day}`;
}, 1000);
    

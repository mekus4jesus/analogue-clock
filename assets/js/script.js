let hr = document.getElementById('hour'),
    min = document.getElementById('min'),
    sec = document.getElementById('sec')

    function displaceTime(){
   let date = new Date()
   //Getting hour, mins and sec from date
   let hh = date.getHours(),
       mm = date.getMinutes(),
       ss =date.getSeconds()
       
       let hRotation = 30*hh+mm/2,
           mRotation = 6*mm,
           sRotation = 6*ss

           hr.style.transform = `rotate(${hRotation}deg)`
           min.style.transform = `rotate(${mRotation}deg)`
           sec.style.transform = `rotate(${sRotation}deg)`

    }
    setInterval(displaceTime,1000)
        
// Variables
const main = document.querySelector('.gridbox-main')
const btns = document.querySelectorAll('.choose-stat')
let stat = 'daily'

// Imitating of getting data
setTimeout(() => {
  let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  // Animate
  function animate(num, el) {
    let val = 0
    let duration = 500 / num
    if (num === 0) {
      el.textContent = 0
    } else {
      const interval = setInterval(() => {
        if (val < num && num !== 0) {
          val += 1
          el.textContent = val
        } else {
          clearInterval(interval)
        }
      }, duration)
    }
  }

  // Render
  function render() {
    // Putting data inside boxes
    data.map(el => {
      const box = `.gridbox-${el.title.split(' ').join('-').toLowerCase()}`
      const hrs = document.querySelector(`${box} .valHrs`)
      const hrsLastWeek = document.querySelector(`${box} .valLastWeek`)
      
      animate(
        (stat === 'monthly') ? el.timeframes.monthly.current
          : (stat === 'weekly') ? el.timeframes.weekly.current
          : (stat === 'daily') ? el.timeframes.daily.current : 0
      , hrs)

      animate(
        (stat === 'monthly') ? el.timeframes.monthly.previous
          : (stat === 'weekly') ? el.timeframes.weekly.previous
          : (stat === 'daily') ? el.timeframes.daily.previous : 0
      , hrsLastWeek)
    })
  }

  render()

  // Choosing stat
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()
      btns.forEach(a => a.classList.remove('active'))
      stat = e.target.textContent.toLowerCase()
      e.target.classList.add('active')
      render()
    })
  })
  
}, 300)



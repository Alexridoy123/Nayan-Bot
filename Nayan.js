module.exports = async ({ api, event }) => {
  const logger = require('./Nayan/catalogs/Nayanc.js')
  
  const configCustom = {
    autosetbio: {
      status: false,
      bio: `prefix : ${global.config.PREFIX}`,
      note: 'automatically change the bot bio.'
    },
    notification: {
      status: false,
      time: 39, // 39 minutes
      note: 'bot will update you on his informations like all users, all groups, all operators, all admins every 30 minutes'
    },
    greetings: {
      status: false,
      morning: `goodmorning everyone, have a nice day.`,
      afternoon: `goodafternoon everyone, don't forget to eat your lunch.`,
      evening: `goodevening everyone, don't forget to eat.`,
      sleep: `goodnight everyone, time to sleep.`,
      note: 'greetings every morning, afternoon and evening. the timezone is located in Asia/Dhaka'
    },
    reminder: {
      status: false,
      time: 40, // 40 minutes
      msg: 'reminder test',
      note: 'this is a reminder for 40 minutes, you can disabled it by setting the status to false'
    },
    autoDeleteCache: {
      status: true,
      time: 10, // 10 minutes
      note: 'auto delete caches, kindly set the status to true, if you dont want to delete caches, set the status to false.'
    },
    autoRestart: {
      status: true,
      time: 40, // 40 minutes
      note: 'to avoid problems, enable periodic bot restarts, set the status to false if you want to disable auto restart function.'
    },
    accpetPending: {
      status: false,
      time: 10, // 10 minutes
      note: 'approve waiting messages after a certain time, set the status to false if you want to disable auto accept message request.'
    }
  }

  function autosetbio(config) {
    if (config.status) {
      try {
        api.changeBio(config.bio, (err) => {
          if (err) {
            logger(`having some unexpected error : ${err}`, 'setbio')
          }; return logger(`changed the bot bio into : ${config.bio}`, 'setbio')
        })
      } catch (error) {
        logger(`having some unexpected error : ${error}`, 'setbio')
      }
    }
  }
  function notification(config) {
    if (config.status) {
      setInterval(async () => {
        const operator = global.config.OPERATOR[0];
        api.sendMessage(`bot information\n\nusers : ${global.data.allUserID.length}\ngroups : ${global.data.allThreadID.length}\noperators : ${global.config.OPERATOR.length}\nadmins : ${global.config.ADMINBOT.length}`, operator)
      }, config.time * 60 * 1000)
    }
  }
  function greetings(config) {
    if (config.status) {
      try {
      const nam = [
        {
          timer: '6:00:00 AM',
          message: [`${config.morning}`]
        },
        {
          timer: '12:00:00 AM',
          message: [`${config.afternoon}`]
        },
        {
          timer: '6:00:00 PM',
          message: [`${config.evening}`]
        },
        {
          timer: '10:00:00 PM',
          message: [`${config.sleep}`]
        }
      ];
        setInterval(() => {
const r = a => a[Math.floor(Math.random()*a.length)];
if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => api.sendMessage(r(á.message), i));
}, 1000);
      } catch (error) {
        logger(`having some unexpected error : ${error}`, 'greetings')
      }
    }
  }
  function reminder(config) {
    if (config.status) {
      setInterval(async () => {
        let allThread = global.data.allThreadID || [];
        await new Promise(resolve => {
          allThread.forEach((each) => {
            try {
              api.sendMessage(config.msg, each, (err, info) => {
                if (err) {
                  logger(`having some unexpected error : ${err}`, 'reminder')
                }
              })
            } catch (error) {
              logger(`having some unexpected error : ${error}`, 'reminder')
            }
          })
        })
      }, config.time * 60 * 1000)
    }
  }
  function autoDeleteCache(config) {
    if(config.status) {
      setInterval(async () => {
        const { exec } = require('child_process');
        exec('rm -rf ../../scripts/commands/cache && mkdir -p ../../scripts/commands/cache && rm -rf ../../scripts/events/cache && mkdir -p ../../scripts/events/cache', (error, stdout, stderr) => {
        if (error) {
          logger(`error : ${error}`, "cache")
          return;
        }
        if (stderr) {
          logger(`stderr : ${stderr}`, "cache")
          return;
        }
        return logger(`successfully deleted caches`, "cache")
        })
      }, config.time * 60 * 1000)
    }
  }
[
    {
        "key": "dbln",
        "value": "%7B%2261567541723932%22%3A%22CjgpG4V9%22%7D",
        "domain": "facebook.com",
        "path": "/login/device-based/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.898Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "datr",
        "value": "bfIRZ0tngrzuVe-6OqlMa4ko",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "sb",
        "value": "bfIRZ5-SfLjAg9zTGgiy3EPF",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "vpd",
        "value": "v1%3B785x393x2.75",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "ps_l",
        "value": "1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "ps_n",
        "value": "1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "wd",
        "value": "393x785",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "c_user",
        "value": "61567541723932",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "fr",
        "value": "0DxcfU0MkEzkmjTjx.AWXHYUn8otNocrijqiTZpuSvqCE.BnEfJt..AAA.0.0.BnGwvK.AWWMQiqmikQ",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.906Z",
        "lastAccessed": "2024-10-25T06:25:30.906Z"
    },
    {
        "key": "xs",
        "value": "23%3A0ZP17eHd2UwVcQ%3A2%3A1729825738%3A-1%3A-1",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.907Z",
        "lastAccessed": "2024-10-25T06:25:30.907Z"
    },
    {
        "key": "fbl_st",
        "value": "101422100%3BT%3A28830429",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.907Z",
        "lastAccessed": "2024-10-25T06:25:30.907Z"
    },
    {
        "key": "wl_cbv",
        "value": "v2%3Bclient_version%3A2655%3Btimestamp%3A1729825740",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-10-25T06:25:30.907Z",
        "lastAccessed": "2024-10-25T06:25:30.907Z"
    }
]

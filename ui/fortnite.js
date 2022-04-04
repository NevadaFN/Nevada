const path = require('path');
var configFile = path.join('../managers/config.json');
var config = require(configFile);
var newsfile = path.join('../managers/news.json');
var news = require(newsfile);
module.exports = {
  
    _title: 'Fortnite Game',
    _activeDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    _locale: 'en-US',
    loginmessage: {
        _title: 'LoginMessage',
        loginmessage: {
            _type: 'CommonUI Simple Message',
            message: {
                _type: 'CommonUI Simple Message Base',
                title: 'Nevada',
                body: '1.0.0 version'
            }
        },
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },   
    battleroyalenews: {
        news: {
            platform_messages: [],
            _type: 'Battle Royale News',
            messages: [
                {
                    image: '',
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: 'Saturn = storm skid',
                    title: 'Best private sevrer',
                    body: 'Nevada',
                    spotlight: false
                },
                {
                    image: '',
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: 'GAY!',
                    title: 'Project Nevada Beta',
                    body: 'Enjoy Nevada',
                    spotlight: false
                },
                {
                    image: '',
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: 'Discord',
                    title: 'Join our discord',
                    body: 'Discord',
                    spotlight: false
                }
            ]
        },
        _title: 'battleroyalenews',
        header: '',
        style: 'SpecialEvent',
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
    emergencynotice: {
        news: {
            platform_messages: [],
            _type: 'Battle Royale News',
            messages: [
                {
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    subgame: 'br',
                    title: 'Project Nevada Beta',
                    body: config.announcement,
                    spotlight: true
                }
            ]
        },
        _title: 'emergencynotice',
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
}

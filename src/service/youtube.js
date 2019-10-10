const ytdl = require('ytdl-core');

module.exports.download = function (url, res) {
    res.header('Content-Disposition', 'attachment; filename="music.mp3"');

    ytdl(url, {
        format: 'mp3',
        filter: 'audioonly',
        quality: 'lowestaudio',
    }).pipe(res);
};
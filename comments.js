// Create a web server
// Import the modules
const http = require('http');
const fs = require('fs');
const path = require('path');
// Create a server object
http.createServer(function (req, res) {
    // Get the URL
    let url = req.url;
    // Get the file name
    let fileName = path.basename(url);
    // Get the extension
    let extName = path.extname(fileName);
    // Get the local path
    let localPath = __dirname;
    // Set the default local path
    let defaultPath = localPath + '/index.html';
    // Set the path for the comments page
    let commentsPath = localPath + '/comments.html';
    // Set the path for the member page
    let memberPath = localPath + '/member.html';
    // Set the path for the skills page
    let skillsPath = localPath + '/skills.html';
    // Set the path for the comments.js file
    let commentsJSPath = localPath + '/comments.js';
    // Set the path for the member.js file
    let memberJSPath = localPath + '/member.js';
    // Set the path for the skills.js file
    let skillsJSPath = localPath + '/skills.js';
    // Set the path for the comments.css file
    let commentsCSSPath = localPath + '/comments.css';
    // Set the path for the member.css file
    let memberCSSPath = localPath + '/member.css';
    // Set the path for the skills.css file
    let skillsCSSPath = localPath + '/skills.css';
    // Set the path for the comments.jpg file
    let commentsJPGPath = localPath + '/comments.jpg';
    // Set the path for the member.jpg file
    let memberJPGPath = localPath + '/member.jpg';
    // Set the path for the skills.jpg file
    let skillsJPGPath = localPath + '/skills.jpg';
    // Set the path for the comments.png file
    let commentsPNGPath = localPath + '/comments.png';
    // Set the path for the member.png file
    let memberPNGPath = localPath + '/member.png';
    // Set the path for the skills.png file
    let skillsPNGPath = localPath + '/skills.png';
    // Set the path for the comments.gif file
    let commentsGIFPath = localPath + '/comments.gif';
    // Set the path for the member.gif file
    let memberGIFPath = localPath + '/member.gif';
});




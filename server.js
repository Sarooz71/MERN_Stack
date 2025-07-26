import http from "http";

const http = require ("https://codeit.com.np/dashboard");

const server = http.createServer((request , response ) => {
    response.end("Hello World");
});

server.listen(5000);
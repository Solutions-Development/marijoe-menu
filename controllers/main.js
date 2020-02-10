const path = require("path");

exports.root = async (req, reply) => { reply.render("index") };
exports.web = async (req, reply) => { reply.render("web") };
exports.mobile = async (req, reply) => { reply.render("mobile") };
exports.image = async (req, reply) => { reply.sendFile(path.resolve('./app/controllers/image.jpg')) };
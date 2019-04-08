'use strict';

const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const path = require('path');
const chalk = require("chalk");
const yosay = require("yosay");

var destination;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  path() {
    this.sourceRoot(path.join(__dirname, '..', 'templates'));
  }

  async writing() {
    this.destinationRoot("./");

    await this.fs.copy(
      this.templatePath("public/scripts/controllers/main.js"),
      this.destinationPath("public/scripts/controllers/main.js")
    );

    await this.fs.copy(
      this.templatePath("public/scripts/app-router.js"),
      this.destinationPath("public/scripts/app.js")
    );

    mkdirp.sync(path.join(this.destinationPath(),'public/scripts/services'));

    await this.fs.copy(
      this.templatePath("public/views/main.html"),
      this.destinationPath("public/views/main.html")
    );

  }
  
};
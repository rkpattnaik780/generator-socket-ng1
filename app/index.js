'use strict';

const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const path = require('path');
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log(
      yosay(
        `Welcome to ${chalk.green(
          "generator-socket-ng1"
        )} !! :)`
      )
    );
  }

  async prompting() {
    this.answers = await this.prompt([
       {
        type    : 'input',
        name    : 'name',
        message : 'Enter a name for the project (ex: MyApp): ',
        deafult : 'SampleApp'
        },
        {
        type: 'list',
        name: 'style',
        message: 'Which style template you want?',
        choices: [ "css","scss","less" ],
        defult: "css"
        },
        {
        type    : 'input',
        name    : 'author',
        message : 'Enter your name: ',
        default : ""
        },
        {
        type    : 'input',
        name    : 'description',
        message : 'Brief description of project: ',
        deafult : "Enter description"
        }
    ]);
  }
  async writing() {
    const destination = this.answers.name || "AngularSocketApp";
    this.destinationRoot(destination);
    mkdirp.sync(path.join(this.destinationPath(),'test'))
    await this.fs.copy(
        this.templatePath("app.js"),
        this.destinationPath("app.js")
    );
    await this.fs.copy(
        this.templatePath(".gitignore"),
        this.destinationPath(".gitignore")
    );
    await this.fs.copyTpl(
        this.templatePath("README.md"),
        this.destinationPath("README.md"),
        { title : this.answers.name,
          author : this.answers.author,
          description : this.answers.description }
    );
    await this.fs.copyTpl(
        this.templatePath("package.json"),
        this.destinationPath("package.json"),
        { title : this.answers.name,
          author : this.answers.author,
          description : this.answers.description }
    );
    await this.fs.copyTpl(
        this.templatePath("LICENSE.md"),
        this.destinationPath("LICENSE.md"),
        { author : this.answers.author }
    );
    await this.fs.copy(
        this.templatePath("public/images"),
        this.destinationPath("public/images")
    );
    await this.fs.copy(
        this.templatePath("public/scripts"),
        this.destinationPath("public/scripts")
    );
    await this.fs.copy(
        this.templatePath("public/styles/app.css"),
        this.destinationPath("public/styles/app." + this.answers.style)
    );
    mkdirp.sync(path.join(this.destinationPath(),'public/views'))
    await this.fs.copyTpl(
        this.templatePath("public/index.html"),
        this.destinationPath("public/index.html"),
        { title : this.answers.name }
    );
  }

  async install(){
      await this.npmInstall();
  }

  end(){
      this.log(" *** Installed successfully ***")
  }
  
};
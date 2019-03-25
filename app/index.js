'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }

  async prompting() {
    this.answers = await this.prompt([
       {
        type    : 'input',
        name    : 'name',
        message : 'Enter a name for the project (ex: MyApp): '
        },
        {
        type    : 'input',
        name    : 'author',
        message : 'Enter your name: '
        },
        {
        type    : 'input',
        name    : 'description',
        message : 'Brief description of project: '
        }
    ]);
  }
  async writing() {
    this.destinationRoot(this.answers.name);
    await this.fs.copyTpl(
        this.templatePath(),
        this.destinationPath("./"),
        { title : this.answers.name,
          author : this.answers.author,
          description : this.answers.description }
    );
  }

  async install(){
      await this.npmInstall();
  }

  end(){
      this.log(" *** Installed successfully ***")
  }
  
};
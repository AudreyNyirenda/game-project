# A simple website-starter

## Preparation
**You might need to [add your SSH-Key to gitlab](https://gitlab.com/profile/keys)**

1. Copy your local public key `$ cat ~/.ssh/id_rsa.pub|pbcopy`
1. Add it to [gitlab](https://gitlab.com/profile/keys)

## Installation

1. Clone this project `$ git clone git@gitlab.com:neuefische/web-students/website-starter.git`
> If this does not work, see Preparation
1. Rename project as you wish: `$ mv website-starter my-project`
1. Change into the newly created project: `$ cd my-project`
1. Remove the original `.git`-Folder: `$ rm -fr .git`
1. Initialize a new repository: `$ git init`
1. Install all dependencies `$ npm install`
1. Run `$ npm start` to start the development server

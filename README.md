applause.js
===========

applause.js takes care of your configuration mess. Multiple servers? Multiple environments? Multiple configurations? applause.js handles them all.

The idea is simple: everything can be configured in its own `applause.json` configuration file. What is not configured is derived from the next-higher level (up until the base `applause.json`). This makes managing multiple configurations a bless.

getting started
---------------

install `applause.js` into your project

    npm install applause

create your base `applause.json` file (that should be used if everything else fails)

    {
    	"host": "your.dev.server",
    	"port": "1337"
    }

configure multiple versions with their own `applause.json`

    // configuration 1
    {
    	"host": "your.production.server"
    	// port is inherited from the base
    }
    // configuration 2
    {
    	"host": "your.other.server",
    	"port": "8000"
    }

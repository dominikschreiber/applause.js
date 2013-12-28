# applause.js

applause.js takes care of your configuration mess. Multiple servers? Multiple environments? Multiple configurations? applause.js handles them all.

The idea is simple: everything can be configured in its own `applause.json` configuration file. What is not configured is derived from the next-higher level (up until the base `applause.json`). This makes managing multiple configurations a bless.

## getting started

install `applause.js` into your project

    npm install applause

create your base `applause.json` file (that should be used if everything else fails)

    {
    	"host": "your.dev.server",
    	"port": "1337"
    }

configure multiple versions with their own `applause.json`

    {
    	"host": "your.production.server"
    	// port is inherited from the base
    }

    {
    	"host": "your.other.server",
    	"port": "8000"
    }

## license

Copyright (c) 2013 Dominik Schreiber

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
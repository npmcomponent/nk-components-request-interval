*This repository is a mirror of the [component](http://component.io) module [nk-components/request-interval](http://github.com/nk-components/request-interval). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/nk-components-request-interval`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# request-interval

  Like setInterval() but with requestAnimationFrame().  

  You can also find `requestTimeout` component [here](https://github.com/nk-components/request-timeout).

## Installation

  Install with [component(1)](http://component.io):

    $ component install nk-components/request-interval

## API

    var requestInterval = require('request-interval');

    var id = requestInterval(300, function() {
      // do something
    });

    // [...]
    // stop
    requestInterval.clear(id);

## License

  MIT

  Inspired by [Joe Lambert's Gist](https://gist.github.com/joelambert/1002116#file-requestinterval-js).

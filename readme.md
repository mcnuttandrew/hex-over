# HexOver

Have you ever needed to synthetically compute an over operator on hex values? Then look no farther. This package provides a single function to enable exactly that functionality.


### Usage

This function takes three arguments, the foreground color, the background color, and the opacity.

** *hexOver* **(color, background, alpha)     
**color** - hexString  the foreground color    
**background** - hexString  the background color    
**alpha** - number  the opacity value associated with the foreground color    
returns hexString the simulated over value    


Here's some example usage:
```js
import hexOver from 'hex-over';

hexOver('#ff0000', '#000000', 0.004); // yields '#010000'
```

# webpack-remove-block-loader

Remove the specific comment block at build

Forked from [huanz/webpack-strip-block](https://github.com/huanz/webpack-strip-block)

## Example

When used default seting. remove the comment block below

```javascript
// webpack.config.js
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "webpack-remove-block-loader"
        }
    ]
}


// index.js
const x = 2;

/* devblock:start */
console.log(x);
/* devblock:end */

const y = 5;
```

<br>
If you will remove HTML comment tags. set options property stert and end.

```javascript
// webpack.config.js
{
    test: /\.html$/,
    use: [
        {
            loader: "webpack-remove-block-loader",
            // custom remove block <!-- devblock:start -->
            options: {
                start: "<!--",
                end: "-->"
            }
        }
    ]
}


// index.html
<html>
<head>
    <!-- devblock:start -->
    <link href="css/dev.css" rel="stylesheet">
    <!-- devblock:end -->
</head>
<body>
    <!-- devblock:start -->
    <div class="dev"></div>
    <!-- devblock:end -->
</body>
</html>
```

<br>

## Remove the comment block on or off

Options property active is the "webpack-remove-block-loader" on or off


```javascript

// webpack4

// Cli command. remove the comment block
webpack --mode production

// Cli command. not remove the comment block
webpack --mode development

// webpack.config.js
module.exports = function(env, argv) {
    return [{
         // ...
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "webpack-remove-block-loader",
                options: {
                    active: (argv.mode === "production"),
                }
            }
        ]
    }];
};
```


```javascript

// webpack3

// Cli command. remove the comment block
webpack --env.prod

// Cli command. not remove the comment block
webpack

// webpack.config.js
module.exports = function(env) {
    return [{
         // ...
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "webpack-remove-block-loader",
                options: {
                    active: (env && env.prod) || false,
                }
            }
        ]
    }];
};
```

## options

```javascript
// default
options: {
    active: true, // Boolean. loader on or off
    start: "/*", // String.
    end: "*/", // String.
    blocks: ["devblock"], // Array.
 }
```

## License

MIT

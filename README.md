# webpack-remove-block-loader

Remove the specific comment block at build

Forked from [huanz/webpack-strip-block](https://github.com/huanz/webpack-strip-block)

### Example

When used default seting. remove the comment block below

```javascript
// webpack.config
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

If you will remove HTML comment tags. set options property stert and end.

```javascript
// webpack.config
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
    <link href="css/dev.css" rel="stylesheet">>
    <!-- devblock:end -->
</head>
<body>
    <!-- devblock:start -->
    <div class="dev"></div>
    <!-- devblock:end -->
</body>
</html>
```

### Example2

Options property "active" is the "webpack-remove-block-loader" on or off

```javascript
// Cli command. remove the comment block
webpack --env.prod

// Cli command. not remove the comment block
webpack

// webpack.config
module.exports = env => [
    // ...
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "webpack-remove-block-loader",
                options: {
                    active: env && env.prod,
                }
            }
        ]
    }
];
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

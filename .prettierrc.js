module.exports = {
    semi: false,
    overrides: [
        {
            files: ['*.js', '*.json', '*.css'],
            options: {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
            },
        },

        {
            files: ['*.html'],
            options: {
                printWidth: 1000,
                tabWidth: 4,
                htmlWhitespaceSensitivity: 'ignore',
                proseWrap: 'never',
            },
        },
    ],
};

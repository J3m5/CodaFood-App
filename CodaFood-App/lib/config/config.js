AccountsTemplates.addField({
        _id: 'codepostal',
        type: 'text',
        displayName: "Code postal",
        placeholder: "Code postal",
        minLength: 5,
        maxLength: 5,
        errStr: 'Must be at least 5 numbers.'
    },
    {
        _id: 'adresse',
        type: 'text',
        required: true,
        displayName: "Adresse",
        placeholder: {
            signUp: "Adresse"
        },
    minLength: 5,
    maxLength: 25
// errStr: 'Must be at least 5 numbers.'
});
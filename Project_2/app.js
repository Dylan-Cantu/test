let data = [
    {
        name: 'Mastero',
        age: '30',
    },
    {
        name: 'Naruto',
        age: '33',
    },
    {
        name: 'Sasuke',
        age: '33',
    },
    {
        name: 'Goku',
        age: '49',
    },
    {
        name: 'Vegeta',
        age: '46',
    },
    {
        name: 'Master Roshi',
        age: '1000',
    }
];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    )
})

info.innerHTML = details.join('\n')
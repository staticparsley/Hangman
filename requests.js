const getPuzzle = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    })
}


    request.open('GET', `//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
});
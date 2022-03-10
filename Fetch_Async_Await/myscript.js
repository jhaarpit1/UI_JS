async function getData() {
    const res = await fetch('https://reqres.in/api/users?page=2');
    // console.log(res);
    return res.json();
}

getGithubData().then(jsonData => {
    console.log(jsonData)
})
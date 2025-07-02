const $api = axios.create({
    baseURL: "https://merakisinergia.com/inventoryrendaayu/php/api.php",
    timeout: 5000
})

/*

if (typeof halamanLogin === "undefined") {
    var token = localStorage.getItem("token")
    if (!token) {
        window.location.assign("login.html")
    } else {
        $api.post('', {
            cekToken: true,
            token: token
        }).then((respon) => {
            if (respon.data.status == false) {
                window.location.assign("login.html")
            }
        })
    }
}

*/
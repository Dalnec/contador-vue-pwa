if ("serviceWorker" in navigator) { //pregunta al navegador
    navigator.serviceWorker.register("./sw.js")
    .then(
        reg => console.log("Risgistro Existoso")
    ).catch (
        err => console.log(err)
    )
}
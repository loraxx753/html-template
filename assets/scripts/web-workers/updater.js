if (typeof(Worker) === "undefined") console.error`This brower doesn't seem to support Web Workers :(`

export const Updater = () => {
    if (typeof(w) == "undefined") {
        w = new Worker("demo_workers.js");
    }    
}
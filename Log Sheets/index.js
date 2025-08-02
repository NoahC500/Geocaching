document.getElementById('submit').addEventListener("click", () => (
    window.location = `/log.html?GC=${document.getElementById("GC").value}&OK=${document.getElementById("OK").value}&Name=${document.getElementById("Name").value}&Date=${document.getElementById("Date").value}`
));

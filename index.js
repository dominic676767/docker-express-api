const http = require("http")
const PORT = 8080
const HOSTNAME = "0.0.0.0"
const date = new Date().toTimeString()
const epoch = new Date().valueOf()

const server = http.createServer(async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(`Hello World @ ${date}`)
  }

  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(`Health check @ ${epoch}`)
  } else {
    res.writeHead(404, { "Content-Type": "application/json" })
    return res.end(JSON.stringify({ message: "Route not found" }))
  }
})

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const tickets = []

app.post("/api/tickets", (req, res) => {
  const ticket = {
    id: tickets.length + 1,
    issueType: "Bug",
    project: "STLC",
    summary: req.body.summary || "No summary provided",
    description: req.body.description || "No description",
    status: "Open",
    createdAt: new Date().toISOString(),
  }
  tickets.push(ticket)
  console.log("Created mock JIRA ticket:", ticket)
  res.status(201).json(ticket)
})

app.get("/api/tickets", (req, res) => {
  res.json(tickets)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Mock JIRA server running at http://localhost:${port}`)
})

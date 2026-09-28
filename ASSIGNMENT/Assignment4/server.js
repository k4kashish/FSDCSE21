import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const file = "requests.json";

// GET all requests
app.get("/api/requests", (req, res) => {
    const data = fs.readFileSync(file, "utf8");
    res.json(JSON.parse(data));
});

// GET request by ID
app.get("/api/requests/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));

    const request = data.find(r => r.id == req.params.id);

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    res.json(request);
});

// POST new request
app.post("/api/requests", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));

    const newRequest = {
        id: Date.now(),
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    data.push(newRequest);

    fs.writeFileSync(
        file,
        JSON.stringify(data, null, 2)
    );

    res.status(201).json(newRequest);
});

// PUT update request
app.put("/api/requests/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));

    const index = data.findIndex(
        r => r.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    data[index] = {
        ...data[index],
        ...req.body
    };

    fs.writeFileSync(
        file,
        JSON.stringify(data, null, 2)
    );

    res.json(data[index]);
});

// DELETE request
app.delete("/api/requests/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));

    const newData = data.filter(
        r => r.id != req.params.id
    );

    if (newData.length === data.length) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    fs.writeFileSync(
        file,
        JSON.stringify(newData, null, 2)
    );

    res.json({
        message: "Request deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('src'));
app.use('/_data', express.static(path.join(__dirname, 'src', '_data')));

// Serve admin panel
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'admin.html'));
});

// Get homepage data
app.get('/api/homepage', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'homepage.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save homepage data
app.post('/api/homepage', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'homepage.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Homepage data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get packages data
app.get('/api/packages', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'packages.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save packages data
app.post('/api/packages', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'packages.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Packages data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get furniture data
app.get('/api/furniture', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'furniture.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save furniture data
app.post('/api/furniture', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'furniture.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Furniture data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Admin server running at http://localhost:${PORT}/admin`);
    console.log(`📝 Access the admin panel at http://localhost:${PORT}/admin`);
});


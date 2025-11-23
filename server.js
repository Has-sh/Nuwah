const { spawn } = require('child_process');
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Serve static files from Eleventy output
app.use(express.static('_site'));

// API Routes for Admin Panel
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

// Get products data
app.get('/api/products', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'products.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save products data
app.post('/api/products', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'products.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Products data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get projects data
app.get('/api/projects', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'projects.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save projects data
app.post('/api/projects', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'projects.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Projects data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve _data directory for direct file access
app.use('/_data', express.static(path.join(__dirname, 'src', '_data')));

// Build Eleventy first, then start server
async function startServer() {
    console.log('🔨 Building Eleventy site...');
    
    // Build Eleventy
    const buildProcess = spawn('npx', ['eleventy'], {
        stdio: 'inherit',
        shell: true,
        cwd: __dirname
    });

    buildProcess.on('close', (code) => {
        if (code !== 0) {
            console.error('❌ Eleventy build failed');
            process.exit(1);
        }

        console.log('✅ Eleventy build complete');
        console.log(`🚀 Server running at http://localhost:${PORT}`);
        console.log(`📝 Admin panel: http://localhost:${PORT}/admin/`);
        console.log(`📦 API endpoints: http://localhost:${PORT}/api/*`);
        console.log(`\n💡 The server will automatically rebuild when you save changes to data files.`);
        
        // Start watching for changes in watch mode (non-blocking)
        const watchProcess = spawn('npx', ['eleventy', '--watch'], {
        stdio: ['ignore', 'pipe', 'pipe'],
            shell: true,
            cwd: __dirname,
            detached: false
        });

        watchProcess.stdout.on('data', (data) => {
            const output = data.toString();
            if (output.includes('Watching…') || output.includes('Rebuilt')) {
                console.log('🔄 ' + output.trim());
            }
        });

        watchProcess.stderr.on('data', (data) => {
            console.error('Eleventy watch error:', data.toString());
        });

        watchProcess.on('error', (err) => {
            console.error('Watch process error:', err);
        });
    });
}

// Start the server
app.listen(PORT, () => {
    startServer();
});


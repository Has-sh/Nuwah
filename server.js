const { spawn } = require('child_process');
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const https = require('https');

// Load environment variables
try {
    require('dotenv').config();
} catch (e) {
    console.log('dotenv not installed, skipping .env file loading');
}

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

app.put('/api/homepage', async (req, res) => {
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

// Get design-services data
app.get('/api/design-services', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'designServices.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save design-services data
app.post('/api/design-services', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'designServices.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Design services data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get contact data
app.get('/api/contact', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'contact.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save contact data
app.post('/api/contact', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'src', '_data', 'contact.json');
        await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Contact data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Google Maps reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const placeId = process.env.GOOGLE_PLACE_ID || 'YOUR_PLACE_ID_HERE';
        const apiKey = process.env.GOOGLE_API_KEY || 'YOUR_API_KEY_HERE';
        
        if (!placeId || !apiKey || placeId === 'YOUR_PLACE_ID_HERE' || apiKey === 'YOUR_API_KEY_HERE') {
            return res.status(500).json({ 
                error: 'Google Places API not configured. Please set GOOGLE_PLACE_ID and GOOGLE_API_KEY environment variables.',
                reviews: [] // Return empty array so frontend can use fallback
            });
        }

        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
        
        https.get(url, (apiRes) => {
            let data = '';
            
            apiRes.on('data', (chunk) => {
                data += chunk;
            });
            
            apiRes.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    
                    if (result.status === 'OK' && result.result && result.result.reviews) {
                        // Transform Google reviews to match your format
                        const reviews = result.result.reviews.map(review => ({
                            author_name: review.author_name,
                            profile_photo_url: review.profile_photo_url || 'https://via.placeholder.com/50',
                            rating: review.rating,
                            time: review.time,
                            text: review.text,
                            relative_time_description: review.relative_time_description
                        }));
                        
                        res.json({ reviews });
                    } else {
                        res.status(500).json({ 
                            error: result.error_message || 'Failed to fetch reviews',
                            status: result.status,
                            reviews: [] // Return empty array so frontend can use fallback
                        });
                    }
                } catch (error) {
                    res.status(500).json({ 
                        error: 'Failed to parse API response',
                        reviews: [] // Return empty array so frontend can use fallback
                    });
                }
            });
        }).on('error', (error) => {
            res.status(500).json({ 
                error: 'Failed to fetch reviews from Google API',
                reviews: [] // Return empty array so frontend can use fallback
            });
        });
    } catch (error) {
        res.status(500).json({ 
            error: error.message,
            reviews: [] // Return empty array so frontend can use fallback
        });
    }
});

// Serve _data directory for direct file access
app.use('/_data', express.static(path.join(__dirname, 'src', '_data')));

// Determine the command based on platform
const isWindows = process.platform === 'win32';

// Build Eleventy first, then start server
async function startServer() {
    console.log('🔨 Building Eleventy site...');
    
    // Build Eleventy - use different approach for Windows
    let buildProcess;
    if (isWindows) {
        // On Windows, use npm with shell: true
        buildProcess = spawn('npm', ['run', 'build'], {
            stdio: 'inherit',
            shell: true,
            cwd: __dirname
        });
    } else {
        // On Unix-like systems, use npx directly
        buildProcess = spawn('npx', ['eleventy'], {
            stdio: 'inherit',
            shell: false,
            cwd: __dirname
        });
    }

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
        let watchProcess;
        if (isWindows) {
            // On Windows, use npx with shell: true
            watchProcess = spawn('npx', ['eleventy', '--watch'], {
                stdio: ['ignore', 'pipe', 'pipe'],
                shell: true,
                cwd: __dirname,
                detached: false
            });
        } else {
            // On Unix-like systems, use npx directly
            watchProcess = spawn('npx', ['eleventy', '--watch'], {
                stdio: ['ignore', 'pipe', 'pipe'],
                shell: false,
                cwd: __dirname,
                detached: false
            });
        }

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


module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        }

        const bodyBuffer = Buffer.concat(chunks);
        const contentType = req.headers['content-type'];
        const pythonApiBase = (process.env.PYTHON_API_URL || 'http://32.236.141.146:8000').replace(/\/+$/g, '');
        const pythonApiUrl = pythonApiBase.endsWith('/api/detect')
            ? pythonApiBase
            : `${pythonApiBase}/api/detect`;

        const response = await fetch(pythonApiUrl, {
            method: 'POST',
            headers: {
                ...(contentType ? { 'content-type': contentType } : {}),
            },
            body: bodyBuffer,
        });

        const responseText = await response.text();
        const responseContentType = response.headers.get('content-type') || 'application/json';

        res.status(response.status);
        res.setHeader('content-type', responseContentType);
        res.send(responseText);
    } catch (error) {
        console.error('Vercel proxy error:', error?.message || error);
        res.status(500).json({ error: error?.message || 'Proxy error' });
    }
};

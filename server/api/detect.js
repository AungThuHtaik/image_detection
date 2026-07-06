export const config = {
    api: {
        bodyParser: false,
    },
};

const streamToBuffer = async (stream) => {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const bodyBuffer = await streamToBuffer(req);
        const contentType = req.headers['content-type'];
        const pythonApiBase = (process.env.PYTHON_API_URL || 'http://localhost:8000')
            .replace(/\/+$/g, '');
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
        const contentTypeResponse = response.headers.get('content-type') || 'application/json';

        res.status(response.status);
        res.setHeader('content-type', contentTypeResponse);
        res.send(responseText);
    } catch (error) {
        console.error('Vercel proxy error:', error?.message || error);
        res.status(500).json({ error: error?.message || 'Proxy error' });
    }
}

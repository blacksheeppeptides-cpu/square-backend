export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://blacksheeppeptides.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    console.log('Incoming checkout payload:', body);

    // TEMP TEST RESPONSE
    // Replace this later with real Square API logic
    return res.status(200).json({
      checkoutUrl: 'https://square.link/u/test-link'
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Checkout creation failed'
    });
  }
}

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const brand = {
  name: 'Capn Cook',
  tagline: 'Heat. Hustle. Hospitality.',
  subtitle: 'A neon-soaked, antihero-inspired culinary concept blending late-night fire, premium ingredients, and cinematic swagger.',
  heroLabel: 'Desert district operation',
  heroButtonPrimary: 'Book the crew',
  heroButtonSecondary: 'View the menu',
  location: 'Albuquerque, NM',
  phone: '+1 (505) 555-COOK',
  email: 'hello@capncook.co',
  instagram: '@capncooklab',
  status: 'Open for private drops',
  accent: 'Neon ember / acid pink / steel smoke'
};

const menu = [
  {
    id: 'smoke-burner',
    title: 'Smoke Burner Stack',
    price: '$24',
    category: 'Signature',
    description: 'Charred steak, ember potatoes, pepper glaze, and a bright hot-sauce finish.',
    tag: 'Most wanted'
  },
  {
    id: 'pink-haze',
    title: 'Pink Haze Tacos',
    price: '$18',
    category: 'Street Eats',
    description: 'Crisp tortillas, slow-cooked pork, tequila lime slaw, and pink pickled onion.',
    tag: 'Crowd favorite'
  },
  {
    id: 'midnight-lab',
    title: 'Midnight Lab Bowl',
    price: '$21',
    category: 'Chef Special',
    description: 'Fire-roasted vegetables, herbed rice, smoked chili vinaigrette, and citrus butter.',
    tag: 'Clean move'
  },
  {
    id: 'reactor-rib',
    title: 'Reactor Rib Plate',
    price: '$29',
    category: 'Heavy Hit',
    description: 'Dry-rubbed short rib, sweet heat glaze, blistered greens, and crispy shallots.',
    tag: 'Heavy hitter'
  }
];

const gallery = [
  {
    title: 'Late-night prep',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
    caption: 'Kitchen crew under full neon pressure.'
  },
  {
    title: 'Backroom lab',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    caption: 'Ingredients mixed to order, no shortcuts.'
  },
  {
    title: 'Street scene',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
    caption: 'The kind of crowd that never sleeps.'
  },
  {
    title: 'Private drop',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    caption: 'Private service for wild nights and bigger plans.'
  }
];

const testimonials = [
  {
    quote: 'Capn Cook feels like the kind of place you hear about from the wrong crowd and then end up missing when it closes.',
    name: 'Mia K.',
    role: 'Private event client'
  },
  {
    quote: 'The energy is clean, the menu is bold, and the whole room feels like a movie scene with better snacks.',
    name: 'Darius T.',
    role: 'Nightlife curator'
  },
  {
    quote: 'This is the rare combo of premium ingredients and chaos-meets-craft that actually works.',
    name: 'Rae L.',
    role: 'Chef and tastemaker'
  }
];

const stats = [
  { label: 'Private events hosted', value: '120+' },
  { label: 'Signature recipes', value: '18' },
  { label: 'Average guest rating', value: '4.9/5' },
  { label: 'Response time', value: '< 1 day' }
];

const performance = {
  uptime: '99.97%',
  queue: '12 live drops',
  response: '0.38s',
  conversion: '28%'
};

const leads = [];

app.get('/api/brand', (req, res) => {
  res.json(brand);
});

app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.get('/api/gallery', (req, res) => {
  res.json(gallery);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.get('/api/performance', (req, res) => {
  res.json(performance);
});

app.get('/api/leads', (req, res) => {
  res.json(leads);
});

app.post('/api/contact', (req, res) => {
  const { name, email, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const record = {
    id: `lead-${Date.now()}`,
    name,
    email,
    service: service || 'General inquiry',
    message,
    createdAt: new Date().toISOString()
  };

  leads.push(record);
  res.status(201).json({ success: true, message: 'Inquiry received. The Capn Cook crew will follow up shortly.', record });
});

app.post('/api/booking', (req, res) => {
  const { eventType, guests, date, notes } = req.body || {};

  if (!eventType || !guests || !date) {
    return res.status(400).json({ success: false, error: 'Event type, guest count, and date are required.' });
  }

  const record = {
    id: `booking-${Date.now()}`,
    eventType,
    guests,
    date,
    notes: notes || 'No extra notes',
    createdAt: new Date().toISOString()
  };

  leads.push(record);
  res.status(201).json({ success: true, message: 'Booking request queued. A crew member will contact you.', record });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Capn Cook server live on http://localhost:${PORT}`);
});

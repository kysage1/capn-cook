<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Capn Cook Admin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@500;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css" />
    <style>
      body {
        padding-bottom: 40px;
      }
      .admin-shell {
        width: min(1200px, calc(100% - 28px));
        margin: 56px auto 0;
      }
      .admin-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 28px;
      }
      .admin-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
      .lead-list {
        display: grid;
        gap: 14px;
      }
      .lead-item {
        padding: 16px 18px;
        border-radius: 18px;
        background: rgba(17, 23, 31, 0.8);
        border: 1px solid var(--line);
      }
      .lead-item strong {
        display: block;
        margin-bottom: 8px;
      }
      .lead-item small {
        display: block;
        color: var(--muted);
        margin-top: 8px;
      }
      @media (max-width: 760px) {
        .admin-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <div class="admin-shell">
      <header class="admin-header">
        <div class="brand-block">
          <div class="brand-mark">CC</div>
          <div>
            <p class="eyebrow">Admin view</p>
            <h1>Capn Cook</h1>
          </div>
        </div>
        <a class="btn secondary" href="/">Back to site</a>
      </header>

      <div class="admin-grid">
        <section class="glass-panel form-panel">
          <p class="eyebrow glow">System status</p>
          <h3>Live backend data</h3>
          <div id="admin-performance" class="mini-metrics"></div>
        </section>

        <section class="glass-panel form-panel">
          <p class="eyebrow glow">Sales pulse</p>
          <h3>Lead stream</h3>
          <div id="lead-list" class="lead-list"></div>
        </section>
      </div>
    </div>

    <script>
      async function fetchJson(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load data');
        return response.json();
      }

      async function initAdmin() {
        try {
          const [performance, leads] = await Promise.all([
            fetchJson('/api/performance'),
            fetchJson('/api/leads')
          ]);

          const metrics = [
            { label: 'Uptime', value: performance.uptime },
            { label: 'Queue', value: performance.queue },
            { label: 'Latency', value: performance.response },
            { label: 'Conversion', value: performance.conversion }
          ];

          document.getElementById('admin-performance').innerHTML = metrics
            .map(
              (item) => `
                <div class="metric-box">
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                </div>
              `
            )
            .join('');

          const leadList = document.getElementById('lead-list');
          if (!leads.length) {
            leadList.innerHTML = '<div class="lead-item"><strong>No leads yet.</strong><span>Waiting for the next burner drop.</span></div>';
            return;
          }

          leadList.innerHTML = leads
            .slice()
            .reverse()
            .map(
              (lead) => `
                <div class="lead-item">
                  <strong>${lead.name || 'Unnamed lead'}</strong>
                  <div>${lead.eventType || lead.service || 'General inquiry'}</div>
                  <div>${lead.email || 'No email'} ${lead.guests ? `• ${lead.guests} guests` : ''}</div>
                  <small>${new Date(lead.createdAt).toLocaleString()}</small>
                </div>
              `
            )
            .join('');
        } catch (error) {
          document.getElementById('lead-list').innerHTML = '<div class="lead-item"><strong>Data unavailable</strong><span>Check the backend and refresh.</span></div>';
        }
      }

      initAdmin();
    </script>
  </body>
</html>

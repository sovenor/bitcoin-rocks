# GitHub Actions Setup Guide

This project uses a GitHub Action to automatically update the USD M1 Money Supply chart on the `/inflation` page once per month. The chart image is downloaded from the [Federal Reserve Economic Data (FRED)](https://fred.stlouisfed.org/series/M1SL) API.

---

## How It Works

1. On the **1st of every month** at 10:00 AM UTC, a GitHub Action runs automatically
2. It downloads the latest M1 Money Supply chart from FRED as a PNG image
3. If the chart has changed, it commits and pushes the updated image to the repo
4. The image is saved as `img/inflation/usd-money-supply.png` — the same file the inflation page already references

No changes to the HTML are needed. The chart just stays up to date automatically.

---

## One-Time Setup

After merging the workflow file (`.github/workflows/update-fred-chart.yml`) to your `main` branch, you need to make sure GitHub Actions has permission to push commits:

### Step 1: Enable GitHub Actions

1. Go to your repository on GitHub: **github.com/sovenor/bitcoin-rocks**
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Actions** → **General**
4. Under **Actions permissions**, make sure "Allow all actions and reusable workflows" is selected
5. Click **Save**

### Step 2: Enable Write Permissions

On the same page (Settings → Actions → General):

1. Scroll down to **Workflow permissions**
2. Select **"Read and write permissions"**
3. Click **Save**

That's it! The Action will now run automatically on the 1st of each month.

---

## How to Run It Manually

### From GitHub (no code needed)

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. In the left sidebar, click **"Update FRED M1 Money Supply Chart"**
4. Click the **"Run workflow"** button (dropdown on the right)
5. Select the `main` branch and click **"Run workflow"**
6. Wait ~30 seconds, then refresh — you'll see the run complete
7. Check `img/inflation/usd-money-supply.png` for the updated chart

### From Your Computer (locally)

If you want to update the chart image on your local machine:

```bash
bash scripts/update-fred-chart.sh
```

This downloads the latest chart and saves it to `img/inflation/usd-money-supply.png`. You can then commit and push the change yourself.

---

## Customizing the Chart

The chart appearance is controlled by URL parameters in the FRED Graph API. You can tweak these in both:
- `.github/workflows/update-fred-chart.yml`
- `scripts/update-fred-chart.sh`

Key parameters you might want to change:

| Parameter | Current Value | Description |
|-----------|--------------|-------------|
| `bgcolor` | `%23060610` | Page background color (#060610) |
| `graph_bgcolor` | `%23060610` | Chart area background color |
| `txtcolor` | `%23ffffff` | Text/label color (white) |
| `line_color` | `%23ff9500` | Chart line color (Bitcoin orange) |
| `width` | `600` | Image width in pixels |
| `height` | `450` | Image height in pixels |
| `cosd` | `1959-01-01` | Chart start date |
| `id` | `M1SL` | FRED data series ID |

To preview changes, paste the full URL into your browser — FRED returns a PNG image you can see immediately.

---

## Troubleshooting

**The Action ran but didn't commit anything:**
This is normal! If the chart data hasn't changed since the last run, there's nothing to commit. The Action only pushes when the image actually changes.

**The Action failed:**
Check the Actions tab on GitHub for error logs. The most common issue is FRED being temporarily unavailable. The Action will try again next month automatically.

**I want to change the schedule:**
Edit the `cron` line in `.github/workflows/update-fred-chart.yml`. The format is `minute hour day month weekday`. For example:
- `'0 10 1 * *'` = 1st of every month at 10:00 UTC (current)
- `'0 10 1,15 * *'` = 1st and 15th of every month
- `'0 10 * * 1'` = every Monday at 10:00 UTC

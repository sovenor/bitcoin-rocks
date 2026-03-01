#!/bin/bash
# ============================================================
# Update USD M1 Money Supply chart from FRED
# 
# Usage: bash scripts/update-fred-chart.sh
#
# This downloads the latest M1SL (M1 Money Supply) chart from
# the Federal Reserve Economic Data (FRED) API and saves it
# as img/inflation/usd-money-supply.png
#
# The GitHub Action runs this automatically on the 1st of
# every month, but you can also run it locally anytime.
# ============================================================

# Navigate to the project root (in case script is run from elsewhere)
cd "$(dirname "$0")/.." || exit 1

echo "Downloading latest FRED M1 Money Supply chart..."

curl -L -o img/inflation/usd-money-supply.png \
  "https://fred.stlouisfed.org/graph/fredgraph.png?bgcolor=%23060610&chart_type=line&drp=0&fo=open+sans&graph_bgcolor=%23060610&height=450&mode=fred&recession_bars=off&txtcolor=%23ffffff&ts=12&tts=12&width=600&nt=0&thu=0&trc=0&show_legend=yes&show_axis_titles=yes&id=M1SL&scale=left&cosd=1959-01-01&line_color=%23ff9500&link_values=false&line_style=solid&mark_type=none&mw=3&lw=2&fml=a&fq=Monthly&fam=avg&fgst=lin&transformation=lin"

if [ $? -eq 0 ]; then
  echo "✅ Chart updated successfully: img/inflation/usd-money-supply.png"
else
  echo "❌ Failed to download chart from FRED"
  exit 1
fi

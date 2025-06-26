const { chromium } = require('playwright');

(async () => {
  const city = 'Delhi';

  const getDate = (offset) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().split('T')[0];
  };

  const checkIn = getDate(30);
  const checkOut = getDate(35);

  const url = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&checkin_year_month_monthday=${checkIn}&checkout_year_month_monthday=${checkOut}&group_adults=2&group_children=1&age=1&no_rooms=1&selected_currency=INR`;

  const browser = await chromium.launch({ headless: false }); // set to false to see the browser
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);

  // Try applying 5-star filter
  try {
    const starFilter = await page.$('input[name="class=5"]');
    if (starFilter) {
      await starFilter.click();
      await page.waitForTimeout(5000);
    }
  } catch (e) {
    console.warn("5-star filter not found.");
  }

  // Sort by top rated
  try {
    await page.click('[data-testid="sorters-dropdown-trigger"]');
    await page.waitForSelector('[data-id="review_score"]');
    await page.click('[data-id="review_score"]');
    await page.waitForTimeout(5000);
  } catch (e) {
    console.warn("Rating sort not applied.");
  }

  // Try grabbing the first hotel
  let hotelName = 'Not found';
  let priceINR = 'Unavailable';

  try {
    await page.waitForSelector('[data-testid="property-card"]', { timeout: 15000 });
    const hotel = await page.$('[data-testid="property-card"]');

    if (hotel) {
      hotelName = await hotel.$eval('[data-testid="title"]', el => el.innerText.trim());

      // Some hotels use different price spans
      const priceEl = await hotel.$('[data-testid="price-and-discounted-price"], [data-testid="price-and-discounted-price"] span');
      if (priceEl) {
        const priceText = await priceEl.textContent();
        priceINR = '₹' + priceText.replace(/[^\d]/g, '');
      }
    }
  } catch (e) {
    console.error('Could not extract hotel info:', e.message);
  }

  console.log('\n🧾 Result:');
  console.log(`City: ${city}`);
  console.log(`Check-in: ${checkIn}`);
  console.log(`Check-out: ${checkOut}`);
  console.log(`Hotel: ${hotelName}`);
  console.log(`Price (INR): ${priceINR}`);

  await browser.close();
})();

Title:No email conformation link received after sign up
Environment:Chrome 114.0.5735.199 on macOS
Severity:High
Priority:Urgent
type:functional bug

Steps to Reproduce:
1.go to sign up page  
2.fill in the sign up form
3.click on the sighup button
4.check your email inbox for the confirmation link
5.did not receive any email.

Expected Result:Either receive a confirmation email or see an error message indicating that the email could not be sent.
Actual Result:No email received and no error message displayed.

Title:the text box is not scrolling when the content exceeds the box size
Environment:Brave 112.0 on macOS
Severity:medium
Priority:normal
type:UI bug

Steps to Reproduce:
1.go to the text box page
2.let the content exceed the box size
3.try to scroll the text box
4.the text box does not scroll

Expected Result:the text box should scroll when the content exceeds the box size
Actual Result:whole page scrolls instead of the text box

Title:empty form submission does not show any error message
Environment:Firefox 112.0 on Windows 10
Severity:high
Priority:urgent
type:validation bug

Steps to Reproduce:
1.go to the form page
2.dont add any input in the form fields
3.clock on the submit button
4.no error message is displayed indicating that the fields are required

Expected Result:error messages should be displayed for each required field when the form is submitted empty
Actual Result:no any response when submitting an empty form

---

---

DAY 2 — Advanced Test Case Writing + Severity/Priority + Negative Testing

✅ Positive test cases
✅ Negative test cases
✅ Boundary value testing
✅ Severity vs Priority (real interview topic)
✅ Writing 20 test cases for Login
✅ Writing 5 professional bug reports

Tasks: 4. MAIN TASK OF DAY 2 — 20 Login Page Test Cases

You're going to write these today.

To help you, I’ll give you a proper breakdown that QA teams use:

🔹 A. Positive Test Cases (8)

Login with valid email + valid password

Login with valid phone number + valid password

Login with correct credentials using Enter key

Login after resetting password

Login with “Remember Me” checked

Login with 2FA enabled

Login using Google

Login using Apple ID

🔹 B. Negative Test Cases (10)

Login with invalid email format

Login with incorrect password

Login with unregistered email

Login with empty fields

Login with password less than minimum length

Login with password greater than max length

Login with SQL injection (' OR 1=1 --)

Login with special characters in email

Login with spaces before/after email

Login using expired password

🔹 C. Boundary Test Cases (2)

Email max length (e.g., 254 chars)

Password min/max length boundary values

---

Title: “Day 2 – Login Test Cases (20 Cases)”

Test Case ID:UTC_001
Title:Login with valid email and valid password
Module:Login
Preconditions:User is registered and on the login page
Priority:high
Type:functional
Steps:
1.Enter the valid email in the email field
2.Enter the valid password in the password field
Expected Result:user should be logged in successfully and redirected to the dashboard
Status:Pass

Test Case ID:TC_002
Title:Login with valid phone number + valid password
Module:Login
Preconditions:User must be registered with phone number and on the login page
Priority:high
Type:functional
Steps:
1.Enter the valid email on the email field
2.Enter the valid phone number on the phone number field
Expected Result:User should be logged in successfully and redirected to the dashboard
Status:Pass

Test Case ID:TC_003
Title:Login with correct credentials using Enter key
Module:Login
Preconditions:user is registered and on the login page
Priority:High
Type:Functional
Steps:

1. Enter the valid email and password
2. Press the Enter key instead of clicking the login button
   Expected Result:User should be logged in successfully and redirected to the dashboard
   Status:Pass

Test Case ID:TC_004
Title:Login after resetting password
Module:Login
Preconditions:User has reset their password and is on the login page
Priority:High
Type:Functional
Steps:
1.Enter the valid email
2.Enter the new password
3.Click login button or press enter key.
Expected Result:User should be logged in successfully and redirected to the dashboard
Status:Pass

Test Case ID:Test_005
Title:Login with “Remember Me” checked
Module:Login
Preconditions:User has enter valid credentials and is on the login page
Priority:Medium
Type:Functional
Steps:
1.Enter the valid credentials
2.Check the “Remember Me” checkbox
3.Click the login button
Expected Result:The user should be logged in successfully and the session should persist after closing and reopening the browser
Status:Pass

Test Case ID:TC_006
Title:Login with 2FA enabled
Module:Login
Preconditions:User has 2FA enabled and is on the login page
Priority:High
Type:Functional
Steps:
1.Enter the valid credentials
2.Click the login button
3.Submit the 2FA code sent to the user's registered email or phone number. 4. Click the verify button
Expected Result:User should be logged in successfully and redirected to the dashboard
Status:Pass

Test Case ID:TC_007
Title:Login using Google
Module:Login
Preconditions:User has a Google account and is on the login page
Priority:Medium
Type:Functional
Steps:
1.Click the "Login with Google" button
2.Select the Google account to use for login
Expected Result:User should be logged in successfully and redirected to the dashboard
Status:Pass

Test Case ID:TC_008
Title:Login using Apple ID
Module:Login
Preconditions:User has an Apple ID and is on the login page
Priority:Medium
Type:Functional
Steps:
1.Click the "Login with Apple ID" button
2.Sign in with Apple ID credentials
Expected Result:User should be logged in successfully and redirected to the dashboard
Status:Pass

NEGATIVE TEST CASES

Test Case ID:TC_009
Title:Login with invalid email format
Module:Login
Preconditions:User is on the login page
Priority:High
Type:Functional
Steps:
1.Enter an invalid email format in the email field (e.g., user@domain)
2.Enter a valid password in the password field
3.Click the login button
Expected Result:An error message should be displayed indicating invalid email format
Status:Pass

Test Case ID:TC_010
Title:Login with incorrect password
Module:Login
Preconditions:User is registered and on the login page
Priority:High
Type:Functional
Steps:
1.Enter the valid email in the email field
2.Enter an incorrect password in the password field
3.Click the login button
Expected Result:An error message should be displayed indicating incorrect password
Status:Pass

Test Case ID:TC_011
Title:Login with unregistered email
Module:Login
Preconditions:User is on the login page
Priority:High
Type:Functional
Steps:
1.Enter an unregistered email in the email field
2.Enter a valid password in the password field
3.Click the login button
Expected Result:An error message should be displayed indicating unregistered email
Status:Pass

Test Case ID:TC_012
Title:Login with empty fields
Module:Login
Preconditions:User is on the login page
Priority:High
Type:Functional
Steps:
1.Leave the email and password fields empty
2.Click the login button
Expected Result:Error messages should be displayed indicating that the fields are required
Status:Pass

Test Case ID:TC_013  
Title:Login with password less than minimum length
Module:Login
Preconditions:User is on the login page
Priority:Medium
Type:Functional
Steps:
1.Enter a valid email in the email field
2.Enter a password that is less than the minimum length requirement
3.Click the login button
Expected Result:An error message should be displayed indicating that the password is too short
Status:Pass

Test Case ID:TC_014
Title:Login with password greater than max length
Module:Login
Preconditions:User is on the login page
Priority:Medium
Type:Functional
Steps:
1.Enter a valid email in the email field
2.Enter a password that exceeds the maximum length requirement
3.Click the login button
Expected Result:An error message should be displayed indicating that the password is too long and password length suggestions should be shown
Status:Pass

Test Case ID:TC_015
Title:Login with SQL injection (' OR 1=1 --)
Module:Login
Preconditions:User is on the login page
Priority:High
Type:Security
Steps:
1.Enter the SQL injection string (' OR 1=1 --) in the email field
2.Enter any password in the password field
3.Click the login button
Expected Result:An error message should be displayed indicating invalid credentials and the system should not allow login
Status:Pass

Test Case ID:TC_016
Title:Login with special characters in email
Module:Login
Preconditions:User is on the login page
Priority:Medium
Type:Functional
Steps:
1.Enter an email with special characters e.g.,  
2.Enter a valid password in the password field
3.Click the login button
Expected Result:An error message should be displayed indicating invalid email format
Status:Pass

Test Case ID:TC_017
Title:Login with spaces before/after email
Module:Login
Preconditions:User is on the login page
Priority:High
Type:Functional
Steps:
1.Enter an email with leading or trailing spaces in the email field 2. Enter the valid password
3.Click Login Button
Expected Result:An error message should be displayed indicating invalid email format
Status:Pass

Test Case ID:TC_018
Title:Login using expired password
Module:Login
Preconditions:User's password has expired and is on the login page
Priority:High
Type:Functional
Steps:
1.Enter the valid email in the email field
2.Enter the expired password in the password field
3.Click the login button
Expected Result:An error message should be displayed indicating that the password has expired and prompt the user to reset their password
Status:Pass

BOUNDARY TEST CASES
Test Case ID:TC_019
Title:Email max length (e.g., 254 chars)
Module:Login
Preconditions:User is on the login page
Priority:Medium
Type:Functional
Steps:
1.Enter an email address that is exactly 254 characters long in the email field
2.Enter a valid password in the password field
3.Click the login button  
Expected Result:User should be logged in successfully and redirected to the dashboard
Status:Pass

Test Case ID:TC_020
Title:Password min/max length boundary values
Module:Login
Preconditions:User is on the login page
Priority:Medium
Type:Functional
Steps:
1.Enter a valid email in the email field
2.Enter a password that is exactly at the minimum length requirement
3.Click the login button
4.Logout and repeat steps 1-3 with a password that is exactly at the maximum length requirement
Expected Result:User should be logged in successfully and redirected to the dashboard for both minimum and maximum length passwords
Status:Pass

---

---

5. Second Task — Write 5 Bug Reports

Write bug reports for these fake login issues:

Bug Scenarios:

“Incorrect password” error is not shown

Login button stays disabled even with valid inputs

Password field does not mask characters (shows plain text)

“Remember Me” checkbox does not save session

Clicking Login twice submits the form twice

Bug Report 1
Title: No “incorrect password” error
Environment:Chrome 114.0.5735.199 on Windows 10
Severity:High
Priority:Urgent
Type:Functional Bug
Steps to Reproduce:
1.Go to the login page
2.Enter a valid email in the email field
3.Enter an incorrect password in the password field
4.Click the login button
Expected Result:An error message should be displayed indicating incorrect password
Actual Result:No error message is displayed and the user remains on the login page

Bug Report 2
Title: Login button stays disabled with valid inputs
Environment:Chrome on Linux
severity:High
Priority:Urgent
Type:UI Bug
Steps to Reproduce:
1.Go to the login page
2.Enter the valid credentials
3.Observe the login button
Expected Result:Login button should be enables when entered the valid credentials
Actual Result:Login button remains disabled even with valid inputs

Bug Report 3
Title:Password field is not masking the password
Environment:Chrome 114.0.5735.199 on macOS
Severity:High
Priority:Urgent
Type:UI Bug

Steps to Reproduce:
1.Go to the login page
2.Enter the password in the password field
3.Observe the password field

Expected Result:Password field should make the characters (as asterisks or dots)
Actual Result:Password field show plain entered characters

Bug Report 4
Title:“Remember Me” checkbox does not save session
Environment:Firefox 112.0 on Windows 10
Severity:Medium
Priority:Normal
Type:Functional Bug
Steps to Reproduce:
1.Go to the login page
2.Enter the valid credentials
3.Check the “Remember Me” checkbox
4.Click the login button
5.Close and reopen the browser
Expected Result:User should remain logged in after reopening the browser
Actual Result:User is logged out and prompted to log in again

Bug Report 5
Title:Clicking Login twice submits the form twice
Environment:Brave 112.0 on macOS
Severity:High
Priority:Urgent
Type:Functional Bug
Steps to Reproduce:
1.Go to the login page
2.Enter the valid credentials
3.Click the login button twice rapidly
Expected Result:Form should be submitted only once and user should be logged in successfully
Actual Result:Form is submitted twice, potentially causing duplicate login attempts or errors

---

#Web App Testing (UI + Functional + Responsive + Validation)

1.WHAT YOU WILL MASTER TODAY

✔ UI Testing
✔ Functional Testing
✔ Form Testing
✔ Field Validation Testing
✔ Navigation Testing
✔ Responsive/Mobile Testing
✔ Browser Compatibility Basics
✔ Error Message Verification
✔ Using Chrome DevTools to detect issues
✔ Writing REAL test cases from a real website

2. FIRST — CHOOSE A REAL WEBSITE TO TEST
   Choose any real website with forms, navigation, and multiple pages.
   website:https://www.amazon.com/

Your Day 3 Tasks
You will perform the following on the website you choose:
1️⃣ Write 20 UI Test Cases
(UI = look, feel, alignment, colors, font, layout)
2️⃣ Write 10 Functional Test Cases
(buttons, links, interactions, navigation, forms)
3️⃣ Find minimum 5 bugs
They can be:

UI bug

Functional bug

Text bug

Broken links

Alignment issues

Mobile view issues

4️⃣ Use Chrome DevTools
To check:

Console errors

Network failures

Layout issues

Device responsiveness

🧑‍💻 3. HOW TO PERFORM DAY 3 TESTING PROPERLY
A. UI Test Checks (20 examples you will create yourself)
Check things like:

Logo alignment

Font sizes

Buttons consistent

Hover states

Images loading

Spacing & margins

Text alignment

Color contrast

Dark/light mode

Mobile responsiveness

Broken icons

Overlapping elements

Button states (active/disabled)

B. Functional Testing Checks (10 test cases you create)
Check:

Navigation links

Buttons

Search bar

Filters

Sorting

Login/Signup

Form submissions

Dropdowns

Carousels

Page redirection

Error messages

Back button

C. Bug Hunting (5+ bugs)
Find issues such as:

Misspelled words

Incorrect UI

Unresponsive buttons

Broken images

Slow loading pages

Overlapping elements in mobile view

Inconsistent design

Console errors

Wrong colors

Accessibility violations

📄 4. SHEET STRUCTURE FOR DAY 3
✔ Page 1 → “UI Test Cases (20)”
Use same Day 1 test case format.
✔ Page 2 → “Functional Test Cases (10)”
✔ Page 3 → “Bug Report (5+)”

⭐ BEFORE YOU START — TELL ME THIS:
👉 Which website do you want to test today?
(Choose from the list or give your own.)
Example:
“I will test Amazon”
or
“I will test Todoist”
or
“I choose Canva”
Once you tell me the website, I’ll guide you EXACTLY what UI and functional areas to test for that specific website.

Lets get STARTed!

I will test Amazon.

---

---

⭐ DAY 3 ON AMAZON — WHAT YOU WILL TEST
Today you will produce:
✔ 20 UI Test Cases
✔ 10 Functional Test Cases
✔ 5 Bug Reports (real issues you find on Amazon)
I’ll tell you EXACTLY where to look and what to test.

🧠 1. AREAS TO TEST ON AMAZON
To make your test cases professional, we divide the site into modules:
Module 1 — Homepage
Things to test:

Search bar

Logo

Navigation menu

Footer

Country selector

Language selector

Delivery address box

Deals banners

Product cards

Images

Hover effects

Module 2 — Search
Test:

Search suggestions

Autocomplete

Search results

Sorting

Filtering

Pagination

Product images

Product titles

Module 3 — Product Page
Test:

Images & zoom

Price display

Reviews

Add to cart

Quantity selection

Size/color dropdown

Buy Now

Delivery options

Description

Module 4 — Cart
Test:

Add item

Remove item

Quantity update

Price update

Saved items section

Module 5 — Login/Signup
Test:

Email validation

Password validation

OTP

Account errors

🔥 2. NOW I GIVE YOU (COPY-READY) TEMPLATES YOU CAN USE
You will copy these into your Google Sheet.

✅ PAGE 1 — 20 UI TEST CASES (TEMPLATE LIST)
Use these titles to write your 20 UI test cases (you already know the format).
UI Test Case Titles (Copy this list):

Verify Amazon logo visibility and alignment

Verify search bar size, alignment, and placeholder text

Verify navigation bar alignment and hover states

Verify “Account & Lists” hover dropdown UI

Verify color contrast of header text

Verify product cards alignment on homepage

Verify product images load correctly (no broken images)

Verify “Add to Cart” button UI on product listing page

Verify footer links alignment

Verify spacing/padding around search results items

Verify rating stars alignment under product names

Verify deals banner image quality and scaling

Verify mobile responsiveness of homepage

Verify search results grid layout on mobile view

Verify product description text formatting

Verify size/color selection UI on product page

Verify cart icon updates visually when item is added

Verify consistent font usage across homepage

Verify loading spinner visibility when switching pages

Verify error message UI when search returns no results

Write these 20 test cases using your Day 1 format.

✅ PAGE 2 — 10 FUNCTIONAL TEST CASES (TEMPLATE LIST)
Functional Test Case Titles:

Verify user can search for a product

Verify autocomplete suggestions appear on typing

Verify user can open a product page from search results

Verify user can add product to cart

Verify user can remove product from cart

Verify quantity update works properly (1 → 2 → 3)

Verify applying filters updates the search results correctly

Verify sorting by price (low-to-high) works

Verify “Deliver to” location updates product availability

Verify clicking “Buy Now” redirects to sign-in (if not logged in)

These are the 10 required functional cases.

⭐ PAGE 3 — 5 BUG REPORTS (WHAT TO LOOK FOR)
Here are REAL bugs Amazon often shows (you will find more):
Bug Ideas:

Misaligned elements in mobile view

Thumbnail images not loading

Product titles overlapping or wrapping incorrectly

Delayed hover dropdown

Search suggestions covering the search button

Filters not resetting properly

Slight UI shifts when loading ads

Footer sections overlapping on small screens

Add-to-cart sometimes delays (Network > 400ms)

You must find at least 5 real bugs.
Write them using Day 2’s improved bug report template.

📌 WHAT YOU MUST DO NOW
👉 Task 1: Write 20 UI test cases using the titles I gave.
👉 Task 2: Write 10 functional test cases.
👉 Task 3: Find 5 bugs and write bug reports.
When you're done, send:
“Here are my 20 UI test cases.”
(We will review UI test cases first)
💬 I will check them, correct them, and upgrade them professionally.

lets get STARTed!

Module 1 — Homepage
Things to test:

20 UI Test Cases
Test Case ID: UI_01
Title: Verify Amazon logo visibility and alignment
Module: Homepage
Preconditions: User is on Amazon homepage on desktop browser
Priority: Medium
Type: UI
Steps:

Open Amazon homepage.

Observe the Amazon logo in the header on the left side.

Resize the browser window to different widths.
Expected Result:
The Amazon logo is clearly visible, not cropped, and remains properly aligned in the header across all tested viewport widths.

Test Case ID: UI_02
Title: Verify search bar size, alignment, and placeholder text
Module: Homepage
Preconditions: User is on Amazon homepage
Priority: High
Type: UI
Steps:

Open Amazon homepage.

Observe the search bar in the header.

Check the placeholder text.

Resize the window and verify search bar alignment.
Expected Result:
The search bar is centrally aligned in the header, has appropriate width, and displays the correct placeholder text consistently across viewports.

Test Case ID: UI_03
Title: Verify navigation bar alignment and hover states
Module: Homepage
Preconditions: User is on Amazon homepage on desktop
Priority: Medium
Type: UI
Steps:

Open Amazon homepage.

Observe all items in the main navigation bar.

Hover over each navigation item.
Expected Result:
All navigation items are evenly aligned and show a clear hover state (such as color change or underline) without shifting layout.

Test Case ID: UI_04
Title: Verify “Account & Lists” hover dropdown UI
Module: Homepage / Header
Preconditions: User is not logged in; using desktop
Priority: High
Type: UI
Steps:

Open Amazon homepage.

Move the cursor over “Account & Lists”.

Observe the dropdown panel appearance, fonts, and spacing.
Expected Result:
The dropdown appears quickly, is properly aligned to the trigger, and all text and links are readable with proper spacing.

Test Case ID: UI_05
Title: Verify color contrast of header text
Module: Homepage / Header
Preconditions: User is on Amazon homepage
Priority: Medium
Type: UI / Accessibility
Steps:

Open Amazon homepage.

Review header text (navigation items, account links, cart label).

Compare text color vs header background visually.
Expected Result:
All header text has sufficient contrast against the background, making it clearly readable, including on low-brightness screens.

Test Case ID: UI_06
Title: Verify product cards alignment on homepage
Module: Homepage
Preconditions: Homepage fully loaded with product sections
Priority: Medium
Type: UI
Steps:

Open Amazon homepage.

Scroll to product recommendation sections.

Observe the alignment of product cards in each row.
Expected Result:
All product cards in a row are aligned consistently with equal spacing and no overlap or misalignment.

Test Case ID: UI_07
Title: Verify product images load correctly (no broken images)
Module: Homepage / Search Results
Preconditions: Stable internet connection
Priority: High
Type: UI
Steps:

Open Amazon homepage and scroll through product sections.

Search for a common product and view search results.

Check whether all product images load.
Expected Result:
Every product image loads successfully without broken icons or missing images across homepage and search results.

Test Case ID: UI_08
Title: Verify “Add to Cart” button UI on product listing page
Module: Search Results / Listing
Preconditions: Search results page displayed
Priority: High
Type: UI
Steps:

Search for any product.

Scroll and identify items with “Add to Cart” buttons.

Observe button size, color, label, and position.
Expected Result:
“Add to Cart” buttons are consistently styled, clearly visible, have readable labels, and are aligned under the respective product details.

Test Case ID: UI_09
Title: Verify footer links alignment
Module: Footer
Preconditions: User is on any Amazon page with footer visible
Priority: Low
Type: UI
Steps:

Open Amazon homepage.

Scroll to the footer.

Review the alignment and spacing of all footer link columns.
Expected Result:
Footer links are properly grouped in columns, evenly spaced, and show no overlapping or truncation.

Test Case ID: UI_10
Title: Verify spacing/padding around search results items
Module: Search Results
Preconditions: Search results page loaded
Priority: Medium
Type: UI
Steps:

Search for a generic term returning many results.

Inspect each search result item (image, title, price, rating).

Check spacing between consecutive results.
Expected Result:
Each search result has sufficient padding and margin, ensuring elements are not cramped or touching adjacent items.

Test Case ID: UI_11
Title: Verify rating stars alignment under product names
Module: Search Results / Product Cards
Preconditions: Search results page loaded with rated products
Priority: Low
Type: UI
Steps:

Search for a product category with many rated items.

For multiple results, observe the position of rating stars relative to product names.
Expected Result:
Rating stars appear consistently below product names and are horizontally aligned across the list.

Test Case ID: UI_12
Title: Verify deals banner image quality and scaling
Module: Homepage / Deals Section
Preconditions: Homepage with deals banners loaded
Priority: Medium
Type: UI
Steps:

Open Amazon homepage.

Locate any deals or promotion banners.

Resize browser window and observe banner scaling.
Expected Result:
Banner images remain sharp, not pixelated, and scale proportionally without distortion or cropping across screen sizes.

Test Case ID: UI_13
Title: Verify mobile responsiveness of homepage
Module: Homepage
Preconditions: Mobile device or responsive mode enabled
Priority: High
Type: UI / Responsive
Steps:

Open Amazon homepage on a mobile device or small viewport.

Scroll through all sections.

Observe layout, text wrapping, and element stacking.
Expected Result:
Homepage elements adapt to mobile layout without overlap; menus, banners, and cards are readable and properly stacked.

Test Case ID: UI_14
Title: Verify search results grid layout on mobile view
Module: Search Results
Preconditions: Mobile device or responsive mode
Priority: Medium
Type: UI / Responsive
Steps:

On mobile, search for a product with many results.

Scroll through the results list/grid.

Observe how product cards are arranged.
Expected Result:
Search results maintain a clean single- or two-column layout on mobile with well-aligned images and text.

Test Case ID: UI_15
Title: Verify product description text formatting
Module: Product Page
Preconditions: Product page opened
Priority: Low
Type: UI
Steps:

Open any product detail page.

Scroll to the product description section.

Review fonts, line spacing, bullet points, and paragraph breaks.
Expected Result:
Product description is formatted consistently with readable font size, proper line spacing, and no broken or overlapping text.

Test Case ID: UI_16
Title: Verify size/color selection UI on product page
Module: Product Page
Preconditions: Product with multiple sizes/colors
Priority: High
Type: UI
Steps:

Open a product that has multiple size/color options.

Observe the UI controls for selecting size/color.

Click different options and observe visual changes.
Expected Result:
Size/color options are clearly visible, evenly spaced, and show an active/selected state when chosen.

Test Case ID: UI_17
Title: Verify cart icon updates visually when item is added
Module: Header / Cart
Preconditions: User is on any product or search page
Priority: High
Type: UI
Steps:

Note the cart icon and item count in the header.

Add a product to the cart.

Observe the cart icon immediately after adding.
Expected Result:
Cart icon visually updates (e.g., item count increases or badge appears) without needing a full page reload.

Test Case ID: UI_18
Title: Verify consistent font usage across homepage
Module: Homepage
Preconditions: Homepage fully loaded
Priority: Low
Type: UI
Steps:

Open Amazon homepage.

Inspect various sections (header, deals, product carousels, footer).

Compare font family and size for similar types of text.
Expected Result:
The homepage uses consistent fonts and sizes for titles, subtitles, and body text of the same type.

Test Case ID: UI_19
Title: Verify loading spinner visibility when switching pages
Module: Global / Navigation
Preconditions: User navigates between pages with standard connection
Priority: Medium
Type: UI
Steps:

From homepage, click into a product page.

Navigate back to search results and to another section.

Observe whether a loading spinner or progress indicator appears.
Expected Result:
A loading indicator is displayed during content loading and disappears once the new page is fully loaded.

Test Case ID: UI_20
Title: Verify error message UI when search returns no results
Module: Search
Preconditions: User on search page
Priority: Medium
Type: UI
Steps:

Enter a nonsensical keyword that returns no products.

Run the search.

Observe the error/empty state message and layout.
Expected Result:
A clear, well-styled message is shown indicating no results, with no overlapping elements and with suggested actions or links where applicable.

10 Functional Test Cases
Test Case ID: FN_01
Title: Verify user can search for a product
Module: Search
Preconditions: User is on homepage; site is available
Priority: Critical
Type: Functional
Steps:

Open Amazon homepage.

Enter a valid product name (e.g., “headphones”) in the search bar.

Click the search icon or press Enter.
Expected Result:
User is redirected to a search results page listing products relevant to the entered keyword.

Test Case ID: FN_02
Title: Verify autocomplete suggestions appear on typing
Module: Search
Preconditions: User is on homepage; JavaScript enabled
Priority: High
Type: Functional
Steps:

Click on the search bar.

Type at least 3 characters of a popular product term.

Observe the dropdown suggestions.
Expected Result:
Relevant autocomplete suggestions appear below the search bar and update as more characters are typed.

Test Case ID: FN_03
Title: Verify user can open a product page from search results
Module: Search Results / Product Page
Preconditions: Search results page displayed
Priority: High
Type: Functional
Steps:

Perform a search that returns multiple results.

Click on any product title or image in the results.

Wait for the new page to load.
Expected Result:
The corresponding product detail page opens and displays information specific to the selected product.

Test Case ID: FN_04
Title: Verify user can add product to cart
Module: Product Page / Cart
Preconditions: User on a product page; product in stock
Priority: Critical
Type: Functional
Steps:

Open a product detail page for an in-stock item.

Select required options (size/color) if applicable.

Click the “Add to Cart” button.
Expected Result:
The item is successfully added to the cart, and a confirmation message or side panel indicates the addition.

Test Case ID: FN_05
Title: Verify user can remove product from cart
Module: Cart
Preconditions: User has at least one item in cart
Priority: High
Type: Functional
Steps:

Go to the cart page.

Identify an item in the cart.

Click the “Delete” or “Remove” option for that item.
Expected Result:
The selected item is removed from the cart, and cart total and item count are updated correctly.

Test Case ID: FN_06
Title: Verify quantity update works properly (1 → 2 → 3)
Module: Cart
Preconditions: Cart contains at least one item; product supports quantity > 1
Priority: High
Type: Functional
Steps:

Open the cart page.

For an item, change quantity from 1 to 2.

Then change quantity from 2 to 3.

Observe price and subtotal after each change.
Expected Result:
Quantity updates to the selected values, and subtotal and total amounts recalculate correctly without errors.

Test Case ID: FN_07
Title: Verify applying filters updates the search results correctly
Module: Search Results
Preconditions: Search results page with multiple products and filters available
Priority: High
Type: Functional
Steps:

Perform a product search that returns many results.

Apply a filter (e.g., brand or price range).

Observe the updated results list.
Expected Result:
Search results refresh to show only products matching the selected filters, and filter chips/indicators reflect active filters.

Test Case ID: FN_08
Title: Verify sorting by price (low-to-high) works
Module: Search Results
Preconditions: Search results page has items with different prices
Priority: Medium
Type: Functional
Steps:

Perform a search that returns multiple products with varying prices.

Choose the “Price: Low to High” sorting option.

Review the order of the displayed products.
Expected Result:
Products are sorted so that items with the lowest prices appear first and prices increase progressively down the list.

Test Case ID: FN_09
Title: Verify “Deliver to” location updates product availability
Module: Homepage / Search Results / Product Page
Preconditions: User is not restricted by geo-blocking; deliver-to selector visible
Priority: Medium
Type: Functional
Steps:

Note the current “Deliver to” location.

Change the “Deliver to” address to a different valid region or postcode.

View availability status on search results and product pages.
Expected Result:
Product availability messages (e.g., “Deliverable to your location”) update according to the selected address, and some products may change availability.

Test Case ID: FN_10
Title: Verify clicking “Buy Now” redirects to sign-in (if not logged in)
Module: Product Page / Login
Preconditions: User is logged out; product page open with “Buy Now” button
Priority: Critical
Type: Functional
Steps:

Open a product detail page while not logged in.
Click the “Buy Now” button.
Observe the page redirection.
Expected Result:
User is redirected to the sign-in page (or authentication flow such as OTP) before proceeding to checkout; after login, checkout continues for that product.

5 Bug Reports

Bug Report 1  
Title:Footer sections not clearly visible on small screens
Environment:Amazon Desktop on chrome on 490px width and 750px height
Severity:Normal
Priority:Low
Type:Functional
Steps to Reproduce:
1.Open Amazon homepage on the desktop browser
2.Resize the browser indow to 490px width and 750px height
3.Scroll down to the footer section
4.Observe the footer sections
Expected Result:all footer sections should be clearly visible and properly aligned
Actual Result:Footer sections are overlapping and not clearly visible

Bug Report 2
Title:Thumbnail images not loading in search results
Environment:Amazon on Firefox 112.0 on Windows 10
Severity:High
Priority:Urgent
Type:Functional Bug
Steps to Reproduce:
1.Go to Amazon homepage
2.Search for any product (e.g., "laptop")
3.Scroll through the search results
Expected Result:All product thumbnail images should load correctly
Actual Result:Some product thumbnail images are broken and do not load

Bug Report 3
Title:Product titles overlapping on search results page
Environment:Amazon on Brave 112.0 on macOS  
Severity:Medium
Priority:Normal
Type:UI Bug
Steps to Reproduce:
1.Go to Amazon homepage
2.Search for a product with a long title (e.g., "wireless noise cancelling headphones")
3.Observe the product titles in the search results
Expected Result:Product titles should be fully visible without overlap
Actual Result:Some product titles are overlapping with other elements or getting cut off

Bug Report 4
Title:Delayed hover dropdown for "Account & Lists"
Environment:Amazon on Chrome 114.0.5735.199 on Windows 10
Severity:Low  
Priority:Normal
Type:UI Bug
Steps to Reproduce:
1.Go to Amazon homepage
2.Hover over the "Account & Lists" menu in the header
3.Observe the dropdown panel appearance
Expected Result:The dropdown should appear immediately upon hover
Actual Result:There is a noticeable delay before the dropdown appears after hovering

Bug Report 5
Title:Search suggestions covering the search button
Environment:Amazon on Chrome 114.0.5735.199 on macOS
Severity:Medium
Priority:Normal
Type:UI Bug
Steps to Reproduce:
1.Go to Amazon homepage
2.Click on the search bar
3.Type at least 3 characters (e.g., "head")
4.Observe the autocomplete suggestions dropdown
Expected Result:Autocomplete suggestions should appear below the search bar without covering the search button
Actual Result:Autocomplete suggestions dropdown overlaps and covers the search button making it unclickable
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\specs\login.spec.ts >> Login Page Tests >> Positive Tests >> should show success message with correct username
- Location: tests\web\specs\login.spec.ts:48:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "nagarjun"
Received string:    ""
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - heading "Automation Practice Hub" [level=1] [ref=e5]
        - generic [ref=e6]:
          - link "✉ nagarjun.sdet@gmail.com" [ref=e7] [cursor=pointer]:
            - /url: mailto:nagarjun.sdet@gmail.com
            - generic [ref=e8]: ✉
            - text: nagarjun.sdet@gmail.com
          - link "📞 +91 9030086420" [ref=e9] [cursor=pointer]:
            - /url: tel:+919030086420
            - generic [ref=e10]: 📞
            - text: +91 9030086420
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "🏠 Home" [ref=e13] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e14]: 🏠
            - text: Home
        - listitem [ref=e15]:
          - link "🔒 Login" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 🔒
            - text: Login
        - listitem [ref=e18]:
          - link "📝 Register" [ref=e19] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e20]: 📝
            - text: Register
        - listitem [ref=e21]:
          - link "☑ Checkboxes" [ref=e22] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e23]: ☑
            - text: Checkboxes
        - listitem [ref=e24]:
          - link "📊 Webtables" [ref=e25] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e26]: 📊
            - text: Webtables
        - listitem [ref=e27]:
          - link "🧮 Calculator" [ref=e28] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e29]: 🧮
            - text: Calculator
        - listitem [ref=e30]:
          - link "🛒 KMart" [ref=e31] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e32]: 🛒
            - text: KMart
        - listitem [ref=e33]:
          - link "🔽 Dropdowns" [ref=e34] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e35]: 🔽
            - text: Dropdowns
        - listitem [ref=e36]:
          - link "📤 Upload" [ref=e37] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e38]: 📤
            - text: Upload
        - listitem [ref=e39]:
          - link "⚡ Interactions" [ref=e40] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e41]: ⚡
            - text: Interactions
  - main [ref=e43]:
    - generic [ref=e44]:
      - heading "🔒 Login" [level=2] [ref=e45]:
        - generic [ref=e46]: 🔒
        - text: Login
      - generic [ref=e47]:
        - heading "🔑 Default Credentials" [level=4] [ref=e48]
        - paragraph [ref=e49]:
          - text: "Username:"
          - code [ref=e50]: nagarjun
        - paragraph [ref=e51]:
          - text: "Password:"
          - code [ref=e52]: Test@123
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]: Username
          - textbox "Username" [ref=e56]:
            - /placeholder: Enter username
            - text: Test@123
        - generic [ref=e57]:
          - generic [ref=e58]: Password
          - textbox "Password" [active] [ref=e59]:
            - /placeholder: Enter password
        - generic [ref=e60]:
          - generic [ref=e61]: Username Description
          - textbox "Username Description" [ref=e62]:
            - /placeholder: Description for username
        - button "Login" [ref=e63] [cursor=pointer]
```

# Test source

```ts
  1   | /**
  2   |  * Login Page Test Suite
  3   |  * =====================
  4   |  *   ✅  Positive tests — valid credentials, UI elements
  5   |  *   ❌  Negative tests — wrong password, empty fields, SQL injection
  6   |  *   🔀  Edge tests    — whitespace, special characters, field clearing
  7   |  */
  8   | 
  9   | import { test, expect } from '../fixtures/test-fixtures';
  10  | 
  11  | test.describe('Login Page Tests', () => {
  12  | 
  13  |   test.beforeEach(async ({ loginPage }) => {
  14  |     await loginPage.open();
  15  |   });
  16  | 
  17  |   // ── UI Validation ───────────────────────────────────
  18  | 
  19  |   test.describe('UI Validation', () => {
  20  | 
  21  |     test('should display the login form heading', async ({ page }) => {
  22  |       // Positive: Verify Login heading is visible
  23  |       await expect(page.locator('#page-login h2')).toContainText('Login');
  24  |     });
  25  | 
  26  |     test('should display credential hint box', async ({ loginPage }) => {
  27  |       // Positive: Credential hint box is visible
  28  |       await loginPage.expectCredentialHintVisible();
  29  |     });
  30  | 
  31  |     test('should have username and password as required fields', async ({ loginPage }) => {
  32  |       // Positive: HTML required attribute on mandatory fields
  33  |       expect(await loginPage.isUsernameRequired()).toBeTruthy();
  34  |       expect(await loginPage.isPasswordRequired()).toBeTruthy();
  35  |     });
  36  |   });
  37  | 
  38  |   // ── Positive Tests ──────────────────────────────────
  39  | 
  40  |   test.describe('Positive Tests', () => {
  41  | 
  42  |     test('should login successfully with valid credentials', async ({ loginPage }) => {
  43  |       // Positive: Default credentials from the hint box
  44  |       await loginPage.login('nagarjun', 'Test@123');
  45  |       await loginPage.expectSuccessMessage('nagarjun');
  46  |     });
  47  | 
  48  |     test('should show success message with correct username', async ({ loginPage }) => {
  49  |       // Positive: Verify personalised welcome message
  50  |       await loginPage.login('nagarjun', 'Test@123');
  51  |       const msg = await loginPage.getMessageText();
> 52  |       expect(msg).toContain('nagarjun');
      |                   ^ Error: expect(received).toContain(expected) // indexOf
  53  |     });
  54  | 
  55  |     test('should accept username description as optional field', async ({ loginPage }) => {
  56  |       // Positive: Optional field does not block login
  57  |       await loginPage.fillUsername('nagarjun');
  58  |       await loginPage.fillPassword('Test@123');
  59  |       await loginPage.fillUserDescription('Admin user test');
  60  |       await loginPage.clickLogin();
  61  |       await loginPage.expectSuccessMessage('nagarjun');
  62  |     });
  63  |   });
  64  | 
  65  |   // ── Negative Tests ──────────────────────────────────
  66  | 
  67  |   test.describe('Negative Tests', () => {
  68  | 
  69  |     test('should show error for invalid username', async ({ loginPage }) => {
  70  |       // Negative: Wrong username
  71  |       await loginPage.login('invaliduser', 'Test@123');
  72  |       await loginPage.expectErrorMessage('Invalid username or password');
  73  |     });
  74  | 
  75  |     test('should show error for invalid password', async ({ loginPage }) => {
  76  |       // Negative: Wrong password
  77  |       await loginPage.login('nagarjun', 'WrongPass');
  78  |       await loginPage.expectErrorMessage('Invalid username or password');
  79  |     });
  80  | 
  81  |     test('should show error for both invalid credentials', async ({ loginPage }) => {
  82  |       // Negative: Both fields wrong
  83  |       await loginPage.login('wrong', 'wrong');
  84  |       await loginPage.expectErrorMessage('Invalid username or password');
  85  |     });
  86  | 
  87  |     test('should not login with empty username (HTML validation)', async ({ loginPage, page }) => {
  88  |       // Negative: Empty username — browser prevents form submission via required attribute
  89  |       await loginPage.fillPassword('Test@123');
  90  |       await loginPage.clickLogin();
  91  |       // The form should NOT submit; loginMsg should remain empty
  92  |       const msgText = await loginPage.getMessageText();
  93  |       expect(msgText).toBe('');
  94  |     });
  95  | 
  96  |     test('should not login with empty password (HTML validation)', async ({ loginPage }) => {
  97  |       // Negative: Empty password — HTML required prevents submission
  98  |       await loginPage.fillUsername('nagarjun');
  99  |       await loginPage.clickLogin();
  100 |       const msgText = await loginPage.getMessageText();
  101 |       expect(msgText).toBe('');
  102 |     });
  103 | 
  104 |     test('should show error for case-sensitive username', async ({ loginPage }) => {
  105 |       // Negative: Username is case-sensitive (Nagarjun vs nagarjun)
  106 |       await loginPage.login('Nagarjun', 'Test@123');
  107 |       await loginPage.expectErrorMessage('Invalid username or password');
  108 |     });
  109 | 
  110 |     test('should show error for case-sensitive password', async ({ loginPage }) => {
  111 |       // Negative: Password is case-sensitive
  112 |       await loginPage.login('nagarjun', 'test@123');
  113 |       await loginPage.expectErrorMessage('Invalid username or password');
  114 |     });
  115 |   });
  116 | 
  117 |   // ── Edge Tests ──────────────────────────────────────
  118 | 
  119 |   test.describe('Edge Tests', () => {
  120 | 
  121 |     test('should handle username with leading/trailing spaces', async ({ loginPage }) => {
  122 |       // Edge: Spaces are trimmed by the app — " nagarjun " should still fail or pass
  123 |       // The app trims input values, so "nagarjun " → "nagarjun" should succeed
  124 |       await loginPage.login('nagarjun ', 'Test@123');
  125 |       await loginPage.expectSuccessMessage('nagarjun');
  126 |     });
  127 | 
  128 |     test('should handle password with leading/trailing spaces', async ({ loginPage }) => {
  129 |       // Edge: Password with spaces — the app trims, so "Test@123 " → "Test@123"
  130 |       await loginPage.login('nagarjun', 'Test@123 ');
  131 |       await loginPage.expectSuccessMessage('nagarjun');
  132 |     });
  133 | 
  134 |     test('should handle special characters in username', async ({ loginPage }) => {
  135 |       // Edge: SQL injection attempt
  136 |       await loginPage.login("' OR 1=1 --", 'Test@123');
  137 |       await loginPage.expectErrorMessage('Invalid username or password');
  138 |     });
  139 | 
  140 |     test('should handle XSS attempt in username', async ({ loginPage }) => {
  141 |       // Edge: XSS payload
  142 |       await loginPage.login('<script>alert("xss")</script>', 'Test@123');
  143 |       await loginPage.expectErrorMessage('Invalid username or password');
  144 |     });
  145 | 
  146 |     test('should handle very long username input', async ({ loginPage }) => {
  147 |       // Edge: Extremely long input
  148 |       const longUser = 'a'.repeat(1000);
  149 |       await loginPage.login(longUser, 'Test@123');
  150 |       await loginPage.expectErrorMessage('Invalid username or password');
  151 |     });
  152 | 
```
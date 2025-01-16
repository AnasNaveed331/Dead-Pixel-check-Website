# Dead Pixel Checker

Dead Pixel Checker is a simple and interactive web application to help you quickly identify dead or stuck pixels on your screen. With an easy-to-use interface, this tool allows you to test your display's clarity and ensure every pixel is functioning as expected.

---

## Features

- **Understand Dead Pixels**: Learn about dead pixels and their impact on your display.
- **Interactive Test**: Cycle through different colors to identify dead or stuck pixels visually.
- **Full-Screen Support**: Automatically switches to full-screen mode for a seamless testing experience.
- **Color Toggle**: Easily switch between blue, black, and white backgrounds with a click.
- **Keyboard Shortcuts**:
  - Press **Escape** to exit the test and return to the main page.
  - Use **Left Mouse Click** to change test screen colors.

---

## How to Use

1. **Access the App**: Open the `index.html` file in your web browser.
2. **Learn about Dead Pixels**: Read the provided information about dead pixels on the main page.
3. **Start Testing**:
   - Click on the "Test" button to begin.
   - Ensure your screen is clean before starting the test.
   - If the browser doesn't switch to full-screen mode automatically, press **F11**.
4. **Identify Issues**:
   - Observe the screen carefully as the color changes to detect any unlit or stuck pixels.
   - Use the **Escape key** to return to the main page.

---

## Files Overview

### HTML Files
- **`index.html`**: Main page with information about dead pixels and a call-to-action to start the test.
- **`color-change.html`**: Interactive testing page where the screen color changes on each click.

### CSS Files
- **`style.css`**: Styles for the main page, including headers, sections, and buttons.

### JavaScript Files
- **`script.js`**: Handles interactive features such as color toggling, toast messages, and keyboard shortcuts.

---

## Key Components

1. **Main Page (`index.html`)**:
   - Provides an overview of dead pixels.
   - Includes a button to start the pixel test.

2. **Testing Page (`color-change.html`)**:
   - Changes screen background color to blue, black, or white on click.
   - Displays a toast message for feedback on each color change.
   - Supports the Escape key to navigate back to the main page.

3. **Script (`script.js`)**:
   - Implements dynamic color changes.
   - Provides user feedback via toast messages.
   - Ensures smooth navigation with global keyboard event listeners.

---
## Contrbuting


Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.


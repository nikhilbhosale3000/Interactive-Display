import React from "react";

export const contentData = [
  {
    id: 1, // Unique ID for this item
    label: "Info Section 1", // Text that appears on the button
    // JSX content to display when this button is active
    content: (
      <div>
        <h2>Content for Section 1</h2>
        <p>
          This is the detailed information displayed when Button 1 is active.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul>
          <li>Detail 1A</li>
          <li>Detail 1B</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    label: "Info Section 2",
    content: (
      <div>
        <h2>Content for Section 2</h2>
        <p>
          Here's the content corresponding to the second button. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Example of including an image */}
        <img
          src="https://picsum.photos/150"
          alt="Placeholder"
          style={{ marginTop: "10px", borderRadius: "4px" }}
          // Fallback
        />
      </div>
    ),
  },
  {
    id: 3,
    label: "Settings",
    content: (
      <div>
        <h2>Settings Panel</h2>
        <p>
          Configure your preferences here. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* Example of a button within the content */}
        <button className="settings-button">Save Changes</button>
      </div>
    ),
  },
  {
    id: 4,
    label: "About Us",
    content: (
      <div>
        <h2>About This Application</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p>Version: 1.0.0</p>
      </div>
    ),
  },
  {
    id: 5,
    label: "Contact",
    content: (
      <div>
        <h2>Contact Information</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    ),
  },
];

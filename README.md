
# Medical Document Viewer

A sophisticated web application for viewing and managing medical documents with intuitive controls and elegant design.

![Screenshot (59)](https://github.com/user-attachments/assets/83db3b65-fe90-4641-a1bd-0ca7aa6c6142)
![Screenshot (61)](https://github.com/user-attachments/assets/772352c1-09cb-40fd-93a6-4fbd4f02dc80)


## Features

- **Home Page** - An elegant landing page with information about the application
- **Document Viewer** - A three-column layout for managing, viewing, and summarizing documents
  - **Completion Tracker** - List of documents with status indicators
  - **PDF Viewer** - Interactive PDF viewer with zoom, pagination, and rotation controls
  - **Text Editor** - Rich text editing capability for document summaries

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui for UI components
- React Router for navigation
- react-pdf for PDF viewing

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sahil352005/Note-Pdf.git
cd cheerful-columns
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Usage

1. Open the application
2. Navigate to the Document Viewer page using the button on the home page
3. Select a document from the Completion Tracker on the left
4. View the document in the PDF Viewer in the middle
5. Add or edit a summary in the Text Editor on the right
6. Use the formatting buttons to style your text
7. Click "Save" to save your summary

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CompletionTracker.tsx
│   ├── FileViewer.tsx
│   └── TextEditor.tsx
├── pages/                # Application pages
│   ├── Index.tsx         # Home page
│   ├── DocumentViewer.tsx # Main document viewer page
│   └── NotFound.tsx      # 404 page
├── types/                # TypeScript type definitions
│   └── index.ts
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## Design Decisions

- Used a clean, minimalist design inspired by Apple's design philosophy
- Implemented smooth animations for better user experience
- Created a responsive layout that works well on different screen sizes
- Used a consistent color scheme with purple as the primary color
- Added interactive elements with clear visual feedback


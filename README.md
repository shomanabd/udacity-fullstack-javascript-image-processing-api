# Image Processing API

A Node.js image processing API built with Express, TypeScript, and Sharp library for image resizing operations.

## 📋 Description

This project provides a simple and easy-to-use API for image resizing. Users can send HTTP requests specifying the image filename and desired dimensions, and the server will process the image and return the resized version.

## ✨ Features

- Resize images with custom dimensions
- Save processed images in a separate directory
- Simple and intuitive API
- Input validation
- Error handling
- Comprehensive test coverage

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework
- **TypeScript** - Programming language
- **Sharp** - Image processing library
- **Jasmine** - Testing framework
- **ESLint & Prettier** - Code quality tools

## 📁 Project Structure

```
image-processing-api/
├── src/
│   ├── routes/
│   │   └── imageRoutes.ts
│   ├── utilities/
│   │   └── imageProcessor.ts
│   ├── tests/
│   │   ├── routes/
│   │   │   └── imageRoutesSpec.ts
│   │   ├── utilities/
│   │   │   └── imageProcessorSpec.ts
│   │   └── helpers/
│   │       └── reporter.ts
│   └── index.ts
├── images/                    # Original images directory
├── thumb/                     # Processed images directory
├── dist/                      # Compiled JavaScript files
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shomanabd/udacity-fullstack-javascript-image-processing-api.git
cd image-processing-api
```

2. Install dependencies:
```bash
npm install
```

3. Create required directories:
```bash
mkdir images thumb
```

4. Place your images in the `images` directory

## 📸 Available Images

The project includes the following sample images in the `images` directory:

- `encenadaport.jpg`
- `fjord.jpg`
- `icelandwaterfall.jpg`
- `palmtunnel.jpg`
- `santamonica.jpg`

## 🔧 Usage

### Running the Server

1. **Development Mode** (with auto-reload):
```bash
npm start
```

2. **Production Mode**:
```bash
npm run build
node dist/index.js
```

The server will start on `http://localhost:3000`

### API Endpoint

**GET** `/images`

**Query Parameters:**
- `filename` (string, required) - Name of the image file (including extension)
- `width` (number, required) - Desired width in pixels
- `height` (number, required) - Desired height in pixels

### Examples

1. **Resize fjord.jpg to 300x200:**
```
GET http://localhost:3000/images?filename=fjord.jpg&width=300&height=200
```
<img width="300" height="200" alt="image" src="https://github.com/user-attachments/assets/658dd34b-af98-4a37-b8f0-c30079564558" />

```

2. **Resize santamonica.jpg to 500x500:**
```
GET http://localhost:3000/images?filename=santamonica.jpg&width=500&height=500
```
![Uploading image.png…]()

```


3. **Using curl:**
```bash
curl "http://localhost:3000/images?filename=icelandwaterfall.jpg&width=400&height=300"
```

### Response

- **Success (200):** Returns the resized image file
- **Error (400):** Invalid query parameters
- **Error (500):** Image processing error

## 🧪 Testing

Run the test suite:

```bash
npm test
```

This will:
1. Compile TypeScript files
2. Run Jasmine tests
3. Generate test reports

### Test Coverage

The project includes tests for:
- API endpoint functionality
- Image processing utility
- Error handling scenarios
- Query parameter validation

## 📝 Scripts

```bash
npm run build      # Compile TypeScript to JavaScript
npm start          # Start development server with nodemon
npm test           # Run tests
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues automatically
npm run format     # Format code with Prettier
```

## 🏗 Development

### Code Style

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

### Project Configuration

- **ESLint Config:** `.eslintrc.json`
- **Prettier Config:** `.prettierrc.json`
- **TypeScript Config:** `tsconfig.json`
- **Test Config:** `spec/support/jasmine.json`





## 📁 Output Directory

Processed images are saved in the `thumb` directory with the naming convention:
```
{width}x{height}-{original-filename}
```

Example: `300x200-fjord.jpg`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Abdalkarim Shoman**

- GitHub: [@shomanabd](https://github.com/shomanabd)
- Project: [Image Processing API](https://github.com/shomanabd/udacity-fullstack-javascript-image-processing-api)

## 🙏 Acknowledgments

- Built as part of Udacity Full Stack JavaScript Developer Nanodegree
- Uses Sharp library for high-performance image processing
- Express.js for robust web framework capabilities

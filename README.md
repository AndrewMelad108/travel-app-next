
# Travel App - Next.js

This project is built using **Next.js**, designed to provide an efficient and fast travel experience platform.

## Prerequisites

Before running the project, make sure you have the following installed on your system:

- **Node.js**: Version 18 or higher is recommended.  
  You can download it from [Node.js Official Website](https://nodejs.org/).

## Installation and Setup

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**

   Clone the project using the following command:

   ```bash
   git clone https://github.com/AndrewMelad108/travel-app-next.git     using  HTTPS
   git clone git@github.com:AndrewMelad108/travel-app-next.git         using  SSH 
   ```

   Navigate to the project directory:

   ```bash
   cd travel-app-next
   ```

2. **Install Dependencies**

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

   Or simply:

   ```bash
   npm i
   ```

3. **Run the Project in Development Mode**

   Start the development server with the following command:

   ```bash
   npm run dev
   ```

   Once the server starts, the application will be available at:

   [http://localhost:3000](http://localhost:3000)

## Additional Commands

### Build for Production

To build the project for production:

```bash
npm run build
```

### Start in Production Mode

After building the project, you can start it in production mode:

```bash
npm start
```

---

## Environment Variables

If your project uses any environment variables, create a `.env` file in the root directory and add the required keys:

```env
NEXT_PUBLIC_URL_NEXT_API=http://localhost:3000
```

Make sure **not** to commit `.env` to your repository to keep sensitive data secure.

---

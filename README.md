
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

## Project Structure

A brief overview of the folder structure:

- `/pages`: Contains the Next.js pages (e.g., Home, About, etc.).
- `/components`: Contains reusable React components.
- `/styles`: Contains global CSS or styled components.
- `/public`: Static files like images, fonts, etc.

---

## Environment Variables

If your project uses any environment variables, create a `.env.local` file in the root directory and add the required keys. Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_MAP_API_KEY=your_api_key
```

Make sure **not** to commit `.env.local` to your repository to keep sensitive data secure.

---

## Deployment

This app can be easily deployed using **Vercel** or similar platforms:

### Deploy on Vercel

1. Push your code to GitHub or another Git platform.
2. Login to [Vercel](https://vercel.com/).
3. Import your repository and deploy with default settings.

---

## Support

If you encounter any issues or have questions, feel free to reach out:

- Email: `your-email@example.com`
- GitHub Issues: [Travel App Issues](https://github.com/your-username/travel-app-next/issues)

---

### Notes:

Replace placeholders like `your-username` and `your-email@example.com` with your actual details. Let me know if you need further adjustments! 😊

 🚀 Live Features

* 🏠 Create, edit, and delete property listings (Full CRUD functionality)
* 🗺️ Interactive maps with real-time location rendering
* 🔐 Secure user authentication & authorization
* 🖼️ Image upload with cloud storage integration
* ⭐ Add and manage reviews
* ✅ Server-side data validation
* 💬 Flash messages with centralized error handling
* 📱 Fully responsive UI design

---

 🛠️ Tech Stack

💻 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js (Authentication)
* Joi (Validation)

🎨 Frontend

* EJS (Templating Engine)
* HTML5
* CSS3
* Bootstrap

☁️ Cloud & APIs

* Cloudinary (Image Storage)
* Mapbox API (Maps & Geocoding)

🧰 Tools & Architecture

* MVC Architecture
* RESTful Routing
* Middleware & Custom Error Handling
* Express Sessions
* Git & GitHub

---

🗂️ Project Architecture

The application follows **MVC (Model-View-Controller)** architecture:

```bash
Wanderlust/
│
├── models/        # Database schemas (Listing, Review, User)
├── routes/        # Express routes
├── controllers/   # Business logic
├── views/         # EJS templates
├── public/        # Static files (CSS, JS)
├── middleware/    # Custom middleware
└── app.js         # Entry point
```

---

🔐 Authentication & Authorization

* Implemented using **Passport.js**
* Session-based login system
* Role-based route protection
* Only listing owners can edit/delete their listings
* Only review authors can delete their reviews

---

🗺️ Map Integration

* Integrated **Mapbox API**
* Geocoding converts location names into coordinates
* Dynamically renders interactive property maps
* Enhances user experience with real-time location visualization

---

🖼️ Image Upload System

* Integrated **Cloudinary**
* Users can upload property images
* Images stored securely in the cloud
* Optimized media handling and storage management

---

✅ Data Validation & Security

* Implemented **Joi server-side validation**
* Applied Mongoose schema validation
* Prevents invalid or malicious inputs
* Centralized error-handling middleware
* Flash messaging for user feedback

---

⚙️ Installation & Setup

1️⃣ Clone the Repository

```bash
git clone https://github.com/Shan4823/Wanderlust-Airbnb-clone.git
cd Wanderlust-Airbnb-clone
```

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=your_mongodb_connection_string
SECRET=session_secret
```

4️⃣ Run the Application

```bash
node app.js
```

or (recommended)

```bash
nodemon app.js
```

---

📈 Learning Outcomes

* Built a scalable full-stack application
* Implemented secure authentication using Passport.js
* Integrated third-party APIs (Mapbox, Cloudinary)
* Applied MVC architecture in a production-level project
* Strengthened backend validation and structured error handling

---

🎯 Future Improvements

* Add booking functionality
* Integrate payment gateway
* Implement user profile management
* Improve search & filtering system
* Deploy on cloud platform (Render / AWS / Railway)

---

👨‍💻 Author

**Shantanu Raj**
Full-Stack Developer

📧 [rajshantanu2332005@gmail.com](mailto:rajshantanu2332005@gmail.com)
🔗 [https://linkedin.com/in/shantanuraj23](https://linkedin.com/in/shantanuraj23)

---



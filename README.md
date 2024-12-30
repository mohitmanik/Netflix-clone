# Netflix Clone
![image](https://github.com/user-attachments/assets/d8758e70-4092-43f0-9973-0533574f4403)

A feature-rich Netflix clone built with modern web technologies. This application replicates the look, feel, and core functionality of Netflix, including user authentication, a movie carousel, trailers, and dynamic content fetching from an external API.

----------

## Features

-   **User Authentication**: Secure login and registration using Firebase Authentication.
-   **Dynamic Content**: Fetches movie data from [The Movie Database (TMDb) API](https://www.themoviedb.org/).
-   **Responsive Design**: Optimized for all screen sizes.
-   **Movie Previews**: Watch trailers for selected movies.

----------

## Tech Stack

-   **Frontend**: React.js, CSS (or Tailwind CSS/Styled Components).
-   **State Management**: Context API or Redux.
-   **Backend**: Firebase (Authentication, Firestore for favorites storage).
-   **API**: TMDb API.

----------

## Installation

### Prerequisites

-   Node.js installed on your system.
-   A TMDb API key (sign up [here](https://www.themoviedb.org/)).
-   Firebase project setup (optional, if using Firebase).

### Steps

1.  **Clone the Repository**
    
    ```bash
    git clone https://github.com/your-username/netflix-clone.git
    cd netflix-clone
    
    ```
    
2.  **Install Dependencies**
    
    ```bash
    npm install
    
    ```
    
3.  **Set Up Environment Variables** Create a `.env` file in the root directory and add the following:
    
    ```plaintext
    VITE_API_KEY=your_tmdb_api_key_here
    VITE_AUTH_KEY=Bearer your_tmdb_bearer_token_here
    VITE_FIREBASE_API_KEY=your_firebase_api_key_here (optional)
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id_here (optional)
    
    ```
    
4.  **Run the Application**
    
    ```bash
    npm run dev
    
    ```
    
5.  **Access the Application** Open your browser and navigate to `http://localhost:5173`.
    
```

### Firebase (Optional)

-   Used for user authentication and storing user data like favorites.


<p align="center">
  <img src="am.png" alt="AbsoluteMinds Logo" width="120"/>
</p>

<h1 align="center">📚 AbsoluteMinds Library Management System</h1>

<p align="center">
  A full-featured desktop Library Management System built with <strong>Python</strong>, <strong>Tkinter</strong>, and <strong>MySQL</strong>.<br/>
  Manage books, users, and circulation — all from an intuitive GUI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/MySQL-8.0+-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
  <img src="https://img.shields.io/badge/Tkinter-GUI-FF6F00?style=for-the-badge&logo=python&logoColor=white" alt="Tkinter"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🔍 Overview

**AbsoluteMinds Library Management System** is a desktop application designed to streamline and simplify library operations. It provides an all-in-one solution for managing book inventory, user accounts, and book circulation (issue & return) through a clean, user-friendly graphical interface built with Python's Tkinter library.

The application connects to a MySQL database to persistently store all book records, user credentials, and circulation history. On first launch, it **automatically creates** the required database and tables — making it truly plug-and-play.

### Highlights

- 🔑 Secure user registration and login system
- 📖 Full CRUD operations on book records
- 📤 Bulk import/export via CSV files
- 📋 Issue and return books with automatic status tracking
- 📊 Sortable, scrollable book catalog viewer
- ⚡ Auto-detection and setup of MySQL database and tables

---

## ✨ Features

### 🔐 User Authentication
| Feature | Description |
|---------|-------------|
| **Registration** | Create a new account with username, full name, and password |
| **Login** | Secure credential verification against the MySQL database |
| **Personalized Dashboard** | Displays a welcome message with the logged-in user's name |

### 📗 Book Management
| Feature | Description |
|---------|-------------|
| **Add Books** | Register new books with Book ID, Title, Author, Genre, and Status |
| **Delete Books** | Remove individual books by Book ID |
| **View Books** | Browse all books in a sortable, scrollable Treeview table |
| **Column Sorting** | Click any column header (Book ID, Title, Author, Genre, Status, Issued To) to sort |

### 📤 Bulk Operations
| Feature | Description |
|---------|-------------|
| **Bulk Upload** | Import multiple books at once from a CSV file |
| **Bulk Delete** | Remove multiple books by importing a CSV of Book IDs |
| **CSV Template** | Download pre-formatted CSV templates for upload and deletion |
| **Delete All Data** | One-click purge of all records (with a confirmation prompt) |

### 📋 Book Circulation
| Feature | Description |
|---------|-------------|
| **Issue Book** | Issue a book to a student/member by Book ID and recipient ID |
| **Availability Check** | Automatically verifies the book is available before issuing |
| **Return Book** | Process book returns by Book ID with validation |
| **Status Tracking** | Book status automatically toggles between `Available` and `Issued` |

### ⚙️ Database Management
| Feature | Description |
|---------|-------------|
| **Auto-Setup** | Creates the `db` database and all tables on first run |
| **Default Connection** | Attempts connection with `localhost / root / root` |
| **Manual Connection** | Falls back to a credentials dialog if default connection fails |

---

## 🛠️ Tech Stack

| Component      | Technology                        |
|----------------|-----------------------------------|
| **Language**   | Python 3.8+                       |
| **GUI**        | Tkinter, ttk (themed widgets)     |
| **Database**   | MySQL 8.0+                        |
| **DB Drivers** | PyMySQL, mysql-connector-python   |
| **Imaging**    | Pillow (PIL Fork)                 |
| **Data I/O**   | CSV (Python standard library)     |

---

## 📋 Prerequisites

Make sure the following are installed on your system before getting started:

| Requirement | Version | Download |
|-------------|---------|----------|
| **Python**  | 3.8+    | [python.org](https://www.python.org/downloads/) |
| **MySQL Server** | 8.0+ | [dev.mysql.com](https://dev.mysql.com/downloads/mysql/) |
| **pip** | Latest | Included with Python 3.4+ |

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/akx-vishnu/AbsoluteMinds-Library-Management-System.git
cd AbsoluteMinds-Library-Management-System
```

### 2. Create a Virtual Environment *(Recommended)*

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

### 3. Install Dependencies

**Option A** — Using the setup script (installs deps + tests MySQL):
```bash
python setup.py
```

**Option B** — Manual install:
```bash
pip install -r requirements.txt
```

### 4. Configure MySQL

Ensure your MySQL server is running. The app will attempt to connect with default credentials (`localhost` / `root` / `root`). If your setup differs, the app will prompt you for your MySQL credentials on startup.

You can also set up a `.env` file for custom configuration:
```bash
copy .env.example .env    # Windows
cp .env.example .env      # macOS / Linux
```

### 5. Launch the Application

```bash
python "AbsoluteMinds Library Mgmt - Source Code.py"
```

> **Note:** On first launch, the app will automatically create the `db` database and all required tables.

---

## ⚙️ Configuration

Copy `.env.example` to `.env` and update the values to match your MySQL setup:

| Variable         | Description              | Default     |
|------------------|--------------------------|-------------|
| `MYSQL_HOST`     | MySQL server hostname    | `localhost` |
| `MYSQL_USER`     | MySQL username           | `root`      |
| `MYSQL_PASSWORD` | MySQL password           | `root`      |
| `MYSQL_DATABASE` | Database name            | `db`        |

> **Note:** If no `.env` file is found, the app uses built-in defaults and falls back to a manual connection dialog if those defaults fail.

---

## 💡 Usage

### Getting Started

1. **Launch the app** — The MySQL connection screen appears first
2. **Register** — Create a new user account from the main screen
3. **Login** — Sign in with your credentials to access the dashboard

### Dashboard Operations

| Button | Action |
|--------|--------|
| ➕ **Add Book Details** | Add books individually or via bulk CSV upload |
| ❌ **Delete Book** | Remove books individually or via bulk CSV delete |
| 📖 **View Book List** | Browse the entire library with sortable columns |
| 📤 **Issue Book** | Issue a book to a student or library member |
| 📥 **Return Book** | Process a book return and update availability |

### CSV Bulk Operations

**Uploading books:**
1. Click **Add Book Details** → **BULK UPLOAD**
2. Click **DOWNLOAD CSV FILE** to get the template
3. Fill in the CSV: `BOOK ID, TITLE, AUTHOR, GENRE, STATUS, ISSUED TO`
4. Click **IMPORT** and select your filled CSV file

**Deleting books in bulk:**
1. Click **Delete Book** → **BULK DELETE**
2. Click **DOWNLOAD CSV FILE** to get the template
3. Fill in the CSV with the Book IDs to delete
4. Click **IMPORT** and select your CSV file

---

## 🗄️ Database Schema

The system uses a MySQL database named `db` with three tables:

### `books`
| Column   | Type                          | Constraint  |
|----------|-------------------------------|-------------|
| `bid`    | `VARCHAR(20)`                 | PRIMARY KEY |
| `title`  | `VARCHAR(80)`                 | NOT NULL    |
| `author` | `VARCHAR(50)`                 | NOT NULL    |
| `genre`  | `VARCHAR(30)`                 | NOT NULL    |
| `status` | `ENUM('Available', 'Issued')` | NOT NULL    |

### `books_issued`
| Column     | Type          | Constraint  |
|------------|---------------|-------------|
| `bid`      | `VARCHAR(20)` | PRIMARY KEY |
| `issuedto` | `VARCHAR(30)` | NOT NULL    |

### `login_details`
| Column     | Type          | Constraint  |
|------------|---------------|-------------|
| `username` | `VARCHAR(30)` | PRIMARY KEY |
| `name`     | `VARCHAR(30)` | NOT NULL    |
| `password` | `CHAR(20)`    | NOT NULL    |

### Entity Relationship

```
books (bid) ──── 1:1 ──── books_issued (bid)
```

> A book can optionally be linked to a `books_issued` record when its status is `Issued`.

---

## 📁 Project Structure

```
AbsoluteMinds-Library-Management-System/
│
├── AbsoluteMinds Library Mgmt - Source Code.py   # Main application source code
├── setup.py                                      # One-command setup script
├── requirements.txt                              # Python dependencies (3 packages)
├── .env.example                                  # Environment variable template
├── .gitignore                                    # Git ignore rules
├── LICENSE                                       # MIT License
├── CONTRIBUTING.md                               # Contribution guidelines
├── README.md                                     # This file
│
├── am.png                                        # Application icon
├── lib.png                                       # Background image
├── abc1.png                                      # Screenshot
├── about.png                                     # About screen image
├── login_person.png                              # Login/Register avatar
├── login_final.png                               # Login button image
├── register.png                                  # Register button image
└── exit.png                                      # Exit button icon
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**Quick steps:**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**akx_vishnu**

- Developed as part of the AbsoluteMinds project
- © akx_vishnu. All rights reserved.

---

<p align="center">
  Made with ❤️ using Python & Tkinter
</p>

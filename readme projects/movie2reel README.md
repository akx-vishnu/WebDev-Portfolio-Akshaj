# Movie2Reel 🎬

Movie2Reel is a powerful and easy-to-use Python CLI tool designed to help content creators efficiently split long videos (like movies or lengthy gameplays) into multiple short 9:16 vertical parts (reels). These split parts are highly optimized for platforms like **TikTok**, **Instagram Reels**, and **YouTube Shorts**. 

Beyond simply cutting the video, Movie2Reel automatically overlays:
- The movie/video title (centered at the top)
- The sequential part number (at the bottom)
- Your custom copyright or channel handle text (at the very bottom)

It also includes a handy `organize` command to group your generated reels into manageable batch folders, making uploading a breeze!

---

## 🚀 Features

- **Automated Splitting**: Divides hours of footage into perfect 59-second (configurable) chunks.
- **Vertical Formatting (9:16)**: Automatically crops and pads standard widescreen videos for mobile viewing.
- **Dynamic Text Overlays**: Burns your titles and branding directly into the video.
- **Interactive Wizard**: A user-friendly, step-by-step CLI interface that requires no command-line knowledge.
- **Batch Organization**: Automatically groups output files into folders of 15 (or any number), so you can easily track what you've uploaded.

---

## 📋 Requirements & Setup

Before running Movie2Reel, please ensure you have the following installed:

1. **Python 3.8+**
   Ensure Python is installed and accessible via your command line.
   
2. **FFmpeg (Crucial Requirement)**
   Movie2Reel relies heavily on `ffmpeg` for video processing. It **must** be installed and added to your system's `PATH`.
   - **Windows**: [Download FFmpeg for Windows](https://ffmpeg.org/download.html) (We recommend downloading a pre-built executable and adding its `bin` folder to your Environment Variables).
   - **Mac**: `brew install ffmpeg`
   - **Linux**: `sudo apt install ffmpeg`

3. **Python Packages**
   Install the required Python dependencies (mostly `tqdm` for progress bars):
   ```bash
   pip install -r requirements.txt
   ```

---

## 🛠️ How to Use

Movie2Reel offers two ways to operate: an **Interactive Mode** (best for beginners) and a **CLI Mode** (best for advanced users or automation scripts).

### 1. Interactive Mode (Easiest)
If you run the script directly without any arguments, it will launch an interactive wizard that guides you through every step.

```bash
python main.py
```

**Walkthrough:**
1. The script will ask if you want to **Split** a video or **Organize** existing reels.
2. If splitting, it asks for the video path (e.g., `C:\Videos\MyMovie.mp4`).
3. It asks for the Movie Title (e.g., `The Matrix`).
4. It will then prompt you for optional settings (Output Directory, Reel duration in seconds, Resolution, Copyright Text). You can simply press `Enter` to accept the safe defaults for these.
5. Sit back and watch the progress bar as `ffmpeg` processes your video!

### 2. Command-Line Interface (CLI) Mode

For power users, Movie2Reel provides two commands: `split` and `organize`.

#### Splitting a Video
Use the `split` command to convert an input video into vertical parts.

**Basic Example:**
```bash
python main.py split --input video.mp4 --title "The Dark Knight"
```

**Advanced Example with Custom Settings:**
```bash
python main.py split -i "long_gameplay.mkv" -t "GTA V Funny Moments" -d 45 -c "@MyGamingChannel"
```

**Optional Arguments for `split`:**
- `-i, --input`: Path to the input video file (Required).
- `-t, --title`: Title of the video to display on the reels (Required).
- `-o, --output`: Output directory (Default: `output_reels`).
- `-f, --font`: Path to the `.ttf` font file (Default: `assets/Quattrocento-Bold.ttf`).
- `-c, --copyright`: Copyright/handle text (Default: `@z_moviehub`).
- `-d, --duration`: Duration of each reel in seconds (Default: `59`).
- `-r, --resolution`: Output resolution in WIDTHxHEIGHT format (Default: `1080x1920`).

#### Organizing Generated Reels
Uploading 200 parts manually can be hard to track. The `organize` command groups these files into sub-folders.

**Basic Example:**
```bash
python main.py organize
```
This looks inside the `output_reels` directory and moves files into subdirectories like `batch_1`, `batch_2`, etc., containing 15 files each.

**Advanced Example:**
```bash
python main.py organize --dir "my_custom_output" --batch-size 10
```

---

## Output Naming Conventions

Movie2Reel automatically names your generated files and organized folders based on the **Movie Title** you provide. Any spaces in the title are replaced with underscores (`_`).

### 1. Generated Video Files (Reels)
**Format:** `{Title_With_Underscores}_movie_part_{Number}.mp4`

**Example:** If your title is `"The Dark Knight"`, the output files will be:
- `The_Dark_Knight_movie_part_1.mp4`
- `The_Dark_Knight_movie_part_2.mp4`
- `The_Dark_Knight_movie_part_3.mp4`

### 2. Organized Folders (Batches)
**Format:** `{Title_With_Underscores}_batch_{Number}`

**Example:** Using the same title, the batch folders will be:
- `The_Dark_Knight_batch_1` *(contains parts 1 through 15)*
- `The_Dark_Knight_batch_2` *(contains parts 16 through 30)*

---

## 📁 Project Structure

```text
Movie2Reel/
│
├── assets/
│   └── Quattrocento-Bold.ttf   # Default font used for text overlays
├── src/
│   ├── utils.py                # Helper functions (e.g., checking ffmpeg)
│   ├── filesplitter.py         # Logic for organizing output files into batches
│   └── movie2reel.py         # Core ffmpeg processing logic
│
├── main.py                     # Entry point for the application
├── requirements.txt            # Python dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## 🤝 Contributing
Feel free to fork this project, submit pull requests, or open issues to suggest new features or report bugs!

## 📜 License
This project is open-source. Feel free to use and modify it as needed.

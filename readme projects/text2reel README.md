# Text2Reel (Basic)

**Text2Reel (Basic)** is a simple, lightweight web application built with Python (Flask) and JavaScript that takes custom text as input and generates a short, downloadable 18-second video. The text is automatically wrapped, scaled, and centered against a dark aesthetic background using Pillow and MoviePy.

## Features
- 📝 **Text-to-Video Generation**: Convert any custom text into a short video clip.
- 📐 **Smart Text Wrapping & Scaling**: Long text is intelligently wrapped and the font size shrinks to fit the video canvas perfectly.
- 🎬 **High-Quality Output**: Generates a portrait MP4 video (`1080x1920` resolution) running at 30 FPS.
- ⬇️ **Direct Download**: Instantly download the generated MP4 file without manual navigation.
- 🚀 **Cloud-Ready**: Includes a `render.yaml` configuration for quick deployment on Render.

## Tech Stack
- **Backend:** Python, Flask
- **Video Processing:** [MoviePy](https://zulko.github.io/moviepy/), [Pillow (PIL)](https://pillow.readthedocs.io/)
- **Frontend:** HTML5, CSS3, Vanilla JavaScript

## Prerequisites
- **Python 3.8+** installed on your system.
- **FFmpeg**: MoviePy relies on `ffmpeg` under the hood for video creation. It is usually automatically downloaded by MoviePy upon first use, but it's recommended to have it installed system-wide or available in your path.

## Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Text2Reel-Basic.git
   cd Text2Reel-Basic
   ```

2. **Set up a virtual environment (Optional but Recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```bash
   python server/app.py
   ```

5. **Access the Web App:**
   Open your browser and navigate to:
   [http://127.0.0.1:10000](http://127.0.0.1:10000)

## Deployment (Render)

The project includes a `render.yaml` file, making it incredibly easy to deploy as a Web Service on [Render](https://render.com).

Simply connect your GitHub repository to Render and use the Blueprint. It will automatically detect Python, install dependencies from `requirements.txt`, and start the Gunicorn/Flask server via the `python server/app.py` start command on Port 10000.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

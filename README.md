# Image Detection with ImageAI

A simple Python project that uses the [ImageAI](https://github.com/OlafenwaMoses/ImageAI) library and PyTorch to classify images using a pre-trained MobileNetV2 model.

## Prerequisites

- Python 3.8 or newer
- Git

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd image_detection
   ```

2. **Create and activate a virtual environment (Recommended)**
   - **Windows:**
     ```bash
     python -m venv .venv
     .\.venv\Scripts\activate
     ```
   - **macOS / Linux:**
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```

3. **Install the required dependencies**
   Install all necessary libraries (like `imageai`, `torch`, `opencv-python`, etc.) via the provided `requirements.txt` file:
   ```bash
   pip install -r requirements.txt
   ```

4. **Download the Pre-trained Model**
   To keep the repository size small, the heavy model files are not included in this repository. You will need to download the model file manually before running the script:
   - Download the MobileNetV2 PyTorch model (`mobilenet_v2-b0353104.pth`). You can typically find this on the official ImageAI releases or PyTorch model hubs.
   - Place the downloaded `mobilenet_v2-b0353104.pth` file directly into the root folder of this project.

## Usage

1. Place the image you want to classify (e.g., `peacock.jpg`) in the project directory.
2. Run the Python script:
   ```bash
   python brain.py
   ```

### Customizing the Target Image
By default, the script looks for `peacock.jpg`. If you want to test with your own image, open `brain.py` and modify the filename in the `classifyImage` method:

```python
# Change 'peacock.jpg' to the name of your image
predctions, probabilities = prediction.classifyImage(
    os.path.join(exec_path, 'your_custom_image.jpg'), result_count=5)
```

## Output Example
The console will print out the top 5 predicted classifications along with their probability scores:
```
peacock : 99.8942
macaw : 0.0451
...
```
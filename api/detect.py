from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import tempfile
import sys

# Add parent directory to path to import from brain.py location
parent_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, parent_path)

app = Flask(__name__)
CORS(app)

# Initialize the model
prediction = None

def init_model():
    """Initialize ImageAI model"""
    global prediction
    try:
        from imageai.Classification import ImageClassification
        prediction = ImageClassification()
        prediction.setModelTypeAsMobileNetV2()
        model_path = os.path.join(parent_path, 'mobilenet_v2-b0353104.pth')
        prediction.setModelPath(model_path)
        prediction.loadModel()
        print("✓ Model loaded successfully")
        return True
    except Exception as e:
        print(f"✗ Error loading model: {e}")
        print("Please install imageai: pip install imageai")
        return False

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Image Detection API is running",
        "model_loaded": prediction is not None
    })

@app.route('/api/detect', methods=['POST'])
def detect_image():
    global prediction
    
    # Try to initialize model if not already done
    if prediction is None:
        if not init_model():
            return jsonify({
                "success": False,
                "error": "Model not loaded. Please install dependencies: pip install imageai torch torchvision"
            }), 500
    
    try:
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400
        
        image_file = request.files['image']
        
        if image_file.filename == '':
            return jsonify({"error": "Empty filename"}), 400
        
        # Save the uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix='.jpg') as tmp_file:
            image_file.save(tmp_file.name)
            tmp_path = tmp_file.name
        
        try:
            # Perform classification
            predictions, probabilities = prediction.classifyImage(
                tmp_path, result_count=5
            )
            
            # Format results
            results = []
            for pred, prob in zip(predictions, probabilities):
                results.append({
                    "label": pred,
                    "probability": round(float(prob), 2)
                })
            
            return jsonify({
                "success": True,
                "predictions": results
            })
        
        finally:
            # Clean up temporary file
            if os.path.exists(tmp_path):
                os.unlink(tmp_path)
    
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

if __name__ == '__main__':
    print("Starting Image Detection API...")
    print("Attempting to load model...")
    init_model()
    print(f"Server starting on http://localhost:5000")
    app.run(debug=True, port=5000)

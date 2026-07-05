function About() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About VisionAI</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            VisionAI is an intelligent image recognition application that uses advanced 
            deep learning technology to identify objects in photographs.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe that artificial intelligence should be accessible to everyone. 
              Our goal is to make complex AI technology simple and easy to use, enabling 
              users to understand and interact with the world around them through the 
              power of computer vision.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
            <p className="text-gray-600 mb-4">
              VisionAI is powered by MobileNetV2, a state-of-the-art convolutional neural 
              network trained on millions of images. This allows us to recognize thousands 
              of different objects, animals, plants, and scenes with high accuracy.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Instant image recognition with top 5 predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Confidence scores for each prediction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Support for all common image formats (JPG, PNG, GIF, WebP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fast processing with no image storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Privacy-focused: images are deleted after processing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Upload Your Image</h3>
                  <p>Simply drag and drop or click to select an image from your device.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI Processing</h3>
                  <p>Our neural network analyzes the image and identifies objects within it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Get Results</h3>
                  <p>View the top 5 predictions with confidence percentages for each.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy & Security</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. All uploaded images are processed in real-time 
              and immediately deleted after analysis. We do not store, share, or use your 
              images for any purpose other than providing you with detection results.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• No image storage or retention</li>
                <li>• Secure HTTPS connection</li>
                <li>• No user tracking or analytics on uploaded images</li>
                <li>• Open-source codebase for transparency</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Nature Identification</h3>
                <p className="text-sm text-gray-600">
                  Identify plants, animals, and natural objects during your outdoor adventures.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📚 Educational Tool</h3>
                <p className="text-sm text-gray-600">
                  Learn about objects and explore the world through AI-powered recognition.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🔍 Quick Identification</h3>
                <p className="text-sm text-gray-600">
                  Quickly identify unfamiliar objects, products, or items you encounter.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🎨 Creative Projects</h3>
                <p className="text-sm text-gray-600">
                  Use AI recognition as part of your creative or development projects.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Get Started</h2>
            <p className="text-gray-600 mb-4">
              Ready to try it out? Head over to the home page and upload your first image!
            </p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Try VisionAI Now →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

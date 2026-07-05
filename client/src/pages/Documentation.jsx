function Documentation() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Documentation</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Learn how to use VisionAI effectively and understand its capabilities.
          </p>

          {/* Quick Start */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start Guide</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">1.</span>
                  <span>Click the upload area or drag and drop an image file</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">2.</span>
                  <span>Preview your image to ensure it uploaded correctly</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">3.</span>
                  <span>Click the "Detect Objects" button</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">4.</span>
                  <span>View the top 5 predictions with confidence scores</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">5.</span>
                  <span>Click "Reset" to try another image</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Supported Formats */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Image Formats</h2>
            <p className="text-gray-600 mb-4">
              VisionAI supports all common image formats:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-1">📷</div>
                <div className="font-semibold text-gray-900">JPEG</div>
                <div className="text-xs text-gray-600">.jpg, .jpeg</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-1">🖼️</div>
                <div className="font-semibold text-gray-900">PNG</div>
                <div className="text-xs text-gray-600">.png</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-1">🎬</div>
                <div className="font-semibold text-gray-900">GIF</div>
                <div className="text-xs text-gray-600">.gif</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-1">🌐</div>
                <div className="font-semibold text-gray-900">WebP</div>
                <div className="text-xs text-gray-600">.webp</div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Maximum file size is 10MB. For best results, use clear, 
                well-lit images with the main subject clearly visible.
              </p>
            </div>
          </section>

          {/* Understanding Results */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding the Results</h2>
            <p className="text-gray-600 mb-4">
              After processing your image, you'll receive up to 5 predictions ranked by confidence:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Result Components:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-gray-900">Label:</strong> The identified object or category
                </li>
                <li>
                  <strong className="text-gray-900">Confidence Score:</strong> A percentage indicating 
                  how certain the AI is about this prediction (0-100%)
                </li>
                <li>
                  <strong className="text-gray-900">Ranking:</strong> Results are ordered from highest 
                  to lowest confidence
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Interpreting Confidence Scores:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>90-100%:</strong> Very high confidence - likely correct</li>
                <li><strong>70-89%:</strong> High confidence - probably correct</li>
                <li><strong>50-69%:</strong> Moderate confidence - possibly correct</li>
                <li><strong>Below 50%:</strong> Low confidence - uncertain</li>
              </ul>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-600 mb-4">
              Follow these tips to get the best results:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-900 mb-2">✓ Do This:</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Use clear, well-focused images</li>
                  <li>• Ensure good lighting on the subject</li>
                  <li>• Make sure the main object is clearly visible</li>
                  <li>• Use images with simple backgrounds when possible</li>
                  <li>• Upload high-quality images for better accuracy</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-900 mb-2">✗ Avoid This:</h3>
                <ul className="space-y-1 text-sm text-red-800">
                  <li>• Very blurry or out-of-focus images</li>
                  <li>• Extremely dark or overexposed photos</li>
                  <li>• Images with multiple complex objects</li>
                  <li>• Screenshots with text overlays</li>
                  <li>• Images smaller than 100x100 pixels</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What Can It Recognize */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Can It Recognize?</h2>
            <p className="text-gray-600 mb-4">
              VisionAI is trained on the ImageNet dataset and can recognize over 1,000 categories including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🐾</span> Animals
                </h3>
                <p className="text-sm text-gray-600">
                  Dogs, cats, birds, wildlife, marine animals, insects, and more
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🚗</span> Vehicles
                </h3>
                <p className="text-sm text-gray-600">
                  Cars, trucks, motorcycles, bicycles, boats, aircraft
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🍎</span> Food & Produce
                </h3>
                <p className="text-sm text-gray-600">
                  Fruits, vegetables, dishes, beverages, baked goods
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🏠</span> Objects & Items
                </h3>
                <p className="text-sm text-gray-600">
                  Furniture, electronics, tools, sports equipment, clothing
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🌿</span> Nature
                </h3>
                <p className="text-sm text-gray-600">
                  Plants, flowers, trees, landscapes, natural formations
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🎸</span> Instruments & Art
                </h3>
                <p className="text-sm text-gray-600">
                  Musical instruments, artwork, sculptures, decorative items
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
            <p className="text-gray-600 mb-4">
              While VisionAI is powerful, it's important to understand its limitations:
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <ul className="space-y-3 text-sm text-orange-900">
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>The AI may not recognize very specific or rare objects</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>Results depend on image quality and clarity</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>May confuse similar-looking objects or animals</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>Cannot identify specific individuals or faces</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>Works best with images containing a single main subject</span>
                </li>
                <li className="flex gap-2">
                  <span>⚠️</span>
                  <span>Does not provide context or understand scenes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  How long does image processing take?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Most images are processed in 2-5 seconds, depending on file size and server load.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Is my data safe?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Yes! Your images are processed immediately and deleted right after. We don't store 
                  or share your images.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Why is the confidence score low?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Low confidence can result from unclear images, unusual objects, or ambiguous content. 
                  Try uploading a clearer image with better lighting.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Can I use this for commercial purposes?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Please check the license terms of the project. The underlying model (MobileNetV2) 
                  is open-source, but usage terms may vary.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  What if the detection is wrong?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  AI isn't perfect! If results seem incorrect, try a different image angle, better 
                  lighting, or closer view of the subject.
                </p>
              </details>
            </div>
          </section>

          {/* Technical Details */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Details</h2>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Technology Stack:</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>• Model: MobileNetV2</li>
                <li>• Framework: PyTorch + ImageAI</li>
                <li>• Training Data: ImageNet (1000+ categories)</li>
                <li>• Frontend: React + Tailwind CSS</li>
                <li>• Backend: Express.js + Flask</li>
              </ul>
            </div>
          </section>

          {/* Support */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you're experiencing issues or have questions not covered here:
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                GitHub Issues
              </a>
              <a 
                href="/" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Try It Now
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Documentation;

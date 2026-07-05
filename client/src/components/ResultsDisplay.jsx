function ResultsDisplay({ predictions, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">Analyzing image...</p>
      </div>
    );
  }

  if (!predictions) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-400">
        <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <p className="text-lg font-medium">No results yet</p>
        <p className="text-sm mt-1">Upload an image to see predictions</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-700">Top Predictions</h3>
        <span className="text-sm text-gray-500">Confidence</span>
      </div>

      {predictions.map((prediction, index) => (
        <div
          key={index}
          className="group hover:bg-gray-50 p-4 rounded-lg transition-all border border-gray-100"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm
                ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}
              `}>
                {index + 1}
              </div>
              <span className="font-medium text-gray-900 capitalize">
                {prediction.label.replace(/_/g, ' ')}
              </span>
            </div>
            <span className="font-semibold text-gray-900">
              {prediction.probability}%
            </span>
          </div>

          <div className="ml-11">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  index === 0 ? 'bg-blue-600' : 'bg-gray-400'
                }`}
                style={{ width: `${prediction.probability}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Top prediction:</span>{' '}
          <span className="capitalize">
            {predictions[0].label.replace(/_/g, ' ')}
          </span>{' '}
          with {predictions[0].probability}% confidence
        </p>
      </div>
    </div>
  );
}

export default ResultsDisplay;

const SocialProof = () => {
  return (
    <div className="mt-16 border-t border-gray-100 pt-8 text-center">
      <p className="text-sm text-gray-500 mb-4">Trusted by organizations worldwide</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
        <div>
          <div className="text-3xl font-bold text-gray-900">200+</div>
          <div className="text-sm text-gray-600">Companies Transformed</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900">50k+</div>
          <div className="text-sm text-gray-600">Employee Owners</div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="text-3xl font-bold text-gray-900">97%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;

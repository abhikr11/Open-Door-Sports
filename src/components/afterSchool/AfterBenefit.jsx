
const AfterBenefit = () => {

  const benefits = [
    "Develops essential motor skills and physical strength through fun, engaging activities.",
    "Improves social interaction and teamwork by encouraging children to play and learn together.",
    "Provides a safe, familiar, and convenient setting within schools or residential communities.",
    "Fosters community spirit by bringing children and families closer through shared activities.",
    "Ensures focused learning and engagement with small group sizes of 8–10 children.",
  ];


  return (
 

      <section className="py-24 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Program Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How our after school program builds athletic skills and competitive confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Children%20aged%207%20to%2012%20years%20developing%20advanced%20sports%20skills%20through%20structured%20training%2C%20kids%20showing%20improved%20coordination%20and%20confidence%20in%20competitive%20settings%2C%20focus%20on%20skill%20refinement%20and%20athletic%20development&width=600&height=400&seq=prep-level-benefits&orientation=landscape"
                alt="Program Benefits"
                className="w-full h-80 object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="min-w-8 min-h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      

  )
}
export default AfterBenefit; 
import '../landing/css/style.css'
import Header from "../landing/components/Header"
import Footer from "../landing/components/Footer"

function Page() {

    
  return (
      <div>
          <Header />
          <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-100">
  <div className="w-full max-w-6xl bg-white border border-gray-300 rounded-lg shadow-md p-8 lg:p-16">
    <h2 className="font-staatliches text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">
      Contacto
    </h2>
    <p className="font-staatliches text-gray-700 text-xl sm:text-2xl lg:text-3xl mb-6 text-center">
      Santa Fé y Copiapo, Ciudad de La Rioja
    </p>
    <p className="font-staatliches text-gray-700 text-xl sm:text-2xl lg:text-3xl mb-6 text-center">
      +54 9 3804 58-8812
    </p>
    <p className="font-staatliches text-gray-700 text-xl sm:text-2xl lg:text-3xl mb-6 text-center">
      info@polotec.ar
    </p>
  </div>
</div>


          <Footer/>
    </div>
  )
}

export default Page